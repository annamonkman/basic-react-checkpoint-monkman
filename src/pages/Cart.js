import React from "react";
import Modal from "../components/Modal";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = ({ open, onClose, data }) => {
  const { cartItems, setCartItems } = useCart();

  return (
    <Modal
      open={open}
      title={"Cart"}
      actions={
        <>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <button className="checkout-button">Checkout</button>
        </>
      }
      size="small"
      dimmer
      onClose={onClose}
    >
      {cartItems.length === 0 ? (
        <p>No Items</p>
      ) : (
        <>
          <div className="headings">
            <h3>quantity</h3>
            <button onClick={() => setCartItems([])}>Clear All Items</button>
          </div>
          <div className="item-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} data={data} {...item} />
            ))}
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
