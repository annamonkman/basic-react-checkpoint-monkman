import React from "react";
import { useCart } from "../../context/CartContext";
import { StyledCartItem } from "./CartItem.styled";

const CartItem = ({ id, data }) => {
  const { removeFromCart, getItemQuantity } = useCart();

  const item = data.find((i) => i.id === id);
  if (item == null) return null;

  const quantity = getItemQuantity(item.id);

  return (
    <StyledCartItem>
      <img src={`${item.image}`} alt={item.title} />
      <div className="title-price">
        <p>{item.title}</p>
        <p>{`£${item.price}`}</p>
      </div>
      <p className="quantity">{quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </StyledCartItem>
  );
};

export default CartItem;
