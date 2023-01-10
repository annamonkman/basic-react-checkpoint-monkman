// import { useState, useEffect } from "react";

import { StyledCard } from "./styles/Card.styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../context/CartContext";

const ProductCard = ({
  onAddToWishlist,
  onRemoveFromWishlist,
  product,
  isInWishlist,
  title,
  image,
  price,
  id,
}) => {
  const { increaseCartQuantity } = useCart();

  // const [cssClass, setCssClass] = useState("heart");

  // useEffect(() => {
  //   if (toggleHeart) {
  //     setCssClass("svg heart in-wishlist");
  //   } else {
  //     setCssClass("svg heart");
  //   }
  // }, [toggleHeart]);

  // const handleClick = (event) => {
  //   if (isInWishlist === false) {
  //     onAddToWishlist(product);
  //   } else if (isInWishlist === true) {
  //     onRemoveFromWishlist(product);
  //   }
  // };

  return (
    <StyledCard className="card">
      <img src={`${image}`} alt={title} />

      <div className="info">
        <h4>{title}</h4>
        <p>{`£${price}`}</p>

        <div className="buttons">
          <button onClick={() => onAddToWishlist(product)}>
            <HiOutlineHeart className="svg heart in-wishlist" />
          </button>
          <button onClick={() => onRemoveFromWishlist(product)}>
            <HiOutlineHeart className="svg heart " />
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
