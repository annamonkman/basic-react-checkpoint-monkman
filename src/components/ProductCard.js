// import { useState, useEffect } from "react";

import { StyledCard } from "./styles/Card.styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../context/CartContext";

const ProductCard = ({
  addToWishlist,
  product,
  isInWishlist,
  cssClass,
  title,
  image,
  price,
  id,
}) => {
  const { increaseCartQuantity } = useCart();

  return (
    <StyledCard className="card">
      <img src={`${image}`} alt={title} />

      <div className="info">
        <h4>{title}</h4>
        <p>{`£${price}`}</p>

        <div className="buttons">
          <button onClick={() => addToWishlist(product)}>
            <HiOutlineHeart className={cssClass} />
          </button>

          <button onClick={() => increaseCartQuantity(id)}>
            <HiOutlineShoppingCart className="svg cart" />
          </button>
        </div>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
