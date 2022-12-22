import React from "react";
import { StyledHeader } from "./styles/Header.styled";

import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  // const [showWishlist, setShowWishlist] = useState(false);
  // const [showCart, setShowCart] = useState(false);

  return (
    <>
      <StyledHeader>
        <h1>Ann@Express</h1>
        <div className="buttons">
          <button>
            <span className="icon red">
              <HiOutlineHeart />
            </span>
            <span className="text">Wishlist</span>
            <span className="num">(3)</span>
          </button>
          <button>
            <span className="icon">
              <HiOutlineShoppingCart />
            </span>
            <span className="text">Cart</span>
            <span className="num">(1)</span>
          </button>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
