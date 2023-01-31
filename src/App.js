import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import GlobalSyles from "./styles/index";

import Header from "./components/ui/Header";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/wishlist/Wishlist";
import ProductListingPage from "./components/products/ProductListingPage";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalSyles />

        <Wishlist />

        <Cart />
        <Header />
        <Routes>
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
