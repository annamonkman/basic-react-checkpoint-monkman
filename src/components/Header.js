import React from "react";

import { StyledHeader } from "./styles/Header.styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../context/CartContext";

const Header = ({ onShowWishlist, onShowCart, countWishlistItems }) => {
  const { cartQuantity } = useCart();

  return (
    <>
      <StyledHeader>
        <h1>Ann@Express</h1>
        <div className="buttons">
          <button onClick={onShowWishlist}>
            <span className="icon red">
              <HiOutlineHeart />
            </span>
            <span className="text">Wishlist</span>
            <span className="num">{`(${countWishlistItems})`}</span>
          </button>
          <button onClick={onShowCart}>
            <span className="icon">
              <HiOutlineShoppingCart />
            </span>
            <span className="text">Cart</span>
            <span className="num">{`(${cartQuantity})`}</span>
          </button>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
