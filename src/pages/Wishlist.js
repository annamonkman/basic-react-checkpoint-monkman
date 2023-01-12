import React from "react";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";

const Wishlist = ({
  open,
  onClose,
  wishlistItems,
  addToWishlist,
  isActive,
  activeTab = "",
}) => {
  return (
    <Modal
      open={open}
      title={"Wishlist"}
      actions={
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      }
      size="small"
      dimmer
      onClose={onClose}
    >
      {wishlistItems.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              product={product}
              addToWishlist={addToWishlist}
              activeTab={activeTab}
              isActive={isActive}
              name={product.id}
            />
          ))}
        </div>
      )}
    </Modal>
  );
};

export default Wishlist;
