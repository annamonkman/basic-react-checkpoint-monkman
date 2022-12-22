import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import GlobalSyles from "./styles/index";

import Header from "./components/Header";
import ProductListingPage from "./pages/ProductListingPage";

import { ModalContextProvider } from "./context/modal-context";

function App() {
  return (
    <ModalContextProvider>
      <BrowserRouter>
        <GlobalSyles />
        <Header />
        <Routes>
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
