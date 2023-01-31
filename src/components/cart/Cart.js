import React from "react";
import Modal from "../ui/Modal";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import useAxios from "../../hooks/useAxios";

const Cart = () => {
  const { cartItems, setCartItems, isCartShown, hideCartHandler } = useCart();
  const { data } = useAxios();

  return (
    <Modal
      open={isCartShown}
      title="Cart"
      actions={
        <>
          <button className="close-button" onClick={hideCartHandler}>
            Close
          </button>
          <button className="checkout-button">Checkout</button>
        </>
      }
      size="small"
      dimmer
      onClose={hideCartHandler}
    >
      {cartItems.length === 0 ? (
        <p>No Items</p>
      ) : (
        <>
          <div className="headings">
            <h3>quantity</h3>
            <button onClick={() => setCartItems([])}>Clear All Items</button>
          </div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} data={data} />
            ))}
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
