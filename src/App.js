import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import GlobalSyles from "./styles/index";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductListingPage from "./pages/ProductListingPage";
import { CartProvider } from "./context/CartContext";

function App() {
  const [wishlistIsShown, setWishlistIsShown] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, []);

  const showWishlistHandler = () => {
    setWishlistIsShown(true);
  };
  const hideWishlistHandler = () => {
    setWishlistIsShown(false);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const onAddToWishlist = (product) => {
    const exist = wishlistItems.find((x) => x.id === product.id);
    if (exist) {
      return;
    } else {
      setWishlistItems([...wishlistItems, { ...product }]);
      setIsInWishlist(true);
    }
  };

  const onRemoveFromWishlist = (product) => {
    setWishlistItems(wishlistItems.filter((x) => x.id !== product.id));
    setIsInWishlist(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalSyles />
        <Wishlist
          onClose={hideWishlistHandler}
          open={wishlistIsShown}
          wishlistItems={wishlistItems}
          onAddToWishlist={onAddToWishlist}
          onRemoveFromWishlist={onRemoveFromWishlist}
          isInWishlist={isInWishlist}
        />
        <Cart onClose={hideCartHandler} open={cartIsShown} data={data} />
        <Header
          onShowWishlist={showWishlistHandler}
          onShowCart={showCartHandler}
          countWishlistItems={wishlistItems.length}
        />
        <Routes>
          <Route
            path="/products"
            element={
              <ProductListingPage
                onAddToWishlist={onAddToWishlist}
                onRemoveFromWishlist={onRemoveFromWishlist}
                isInWishlist={isInWishlist}
                data={data}
                error={error}
                loading={loading}
              />
            }
          />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
