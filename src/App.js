import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import GlobalSyles from "./styles/index";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import ProductListingPage from "./components/ProductListingPage";
import { CartProvider } from "./context/CartContext";
// import { fetchData } from "./utils/fetchData";

const App = () => {
  const [isWishlistShown, setIsWishlistShown] = useState(false);
  const [isCartShown, setIsCartShown] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState({});

  // ! API CALL ----------- HOOK?
  // useEffect(() => {
  //   setIsError(false);
  //   setIsLoading(true);
  //   try {
  //     const response = fetchData();
  //     setData(response.data);
  //   } catch (err) {
  //     setIsError(true);
  //     console.log(err);
  //   }
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    const getData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
      setIsLoading(false);
    };
    getData();
  }, []);
  // ! ---------------- -----

  // ! WISHLIST STUFF ----redux?

  const showWishlistHandler = () => {
    setIsWishlistShown(true);
  };
  const hideWishlistHandler = () => {
    setIsWishlistShown(false);
  };
  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  const toggleActive = (product) => {
    setActive((state) => ({
      ...state,
      [product.id]: !state[product.id],
    }));
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.includes(product)) {
      setWishlistItems([...wishlistItems, product]);
      toggleActive(product);
    } else {
      setWishlistItems([...wishlistItems.filter((item) => item !== product)]);
      toggleActive(product);
    }
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalSyles />
        <Wishlist
          onClose={hideWishlistHandler}
          open={isWishlistShown}
          wishlistItems={wishlistItems}
          addToWishlist={addToWishlist}
          active={active}
        />
        <Cart onClose={hideCartHandler} open={isCartShown} data={data} />
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
                addToWishlist={addToWishlist}
                data={data}
                error={isError}
                isLoading={isLoading}
                active={active}
              />
            }
          />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
