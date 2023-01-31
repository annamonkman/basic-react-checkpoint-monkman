import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { wishlistActions } from "../../store/wishlist-slice";

import { StyledHeader } from "./Header.styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cartQuantity, showCartHandler } = useCart();
  const dispatch = useDispatch();
  const wishlistQuantity = useSelector((state) => state.wishlist.totalQuantity);

  const toggleWishlistHandler = () => {
    dispatch(wishlistActions.toggleWishlist());
  };

  return (
    <>
      <StyledHeader>
        <h1>Ann@Express</h1>
        <div className="buttons">
          <button onClick={toggleWishlistHandler}>
            <span className="icon red">
              <HiOutlineHeart />
            </span>
            <span className="text">Wishlist</span>
            <span className="num">{`(${wishlistQuantity})`}</span>
          </button>
          <button onClick={showCartHandler}>
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
