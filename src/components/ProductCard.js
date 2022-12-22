import React from "react";

import { StyledCard } from "./styles/Card.styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ProductCard = ({ image, title, price }) => {
  return (
    <StyledCard className="card">
      <img src={`${image}`} alt={title} />

      <div className="info">
        <h4>{title}</h4>
        <p>{`£${price}`}</p>

        <div className="buttons">
          <button>
            <HiOutlineHeart className="svg heart" />
          </button>
          <button>
            <HiOutlineShoppingCart className="svg cart" />
          </button>
        </div>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
