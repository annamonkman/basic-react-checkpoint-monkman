import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../ui/Modal";
import ProductCard from "../products/ProductCard";
import { wishlistActions } from "../../store/wishlist-slice";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const showWishlist = useSelector((state) => state.wishlist.wishlistIsVisible);
  const dispatch = useDispatch();

  const toggleWishlistHandler = () => {
    dispatch(wishlistActions.toggleWishlist());
  };

  return (
    <Modal
      open={showWishlist}
      title="Wishlist"
      actions={
        <button className="close-button" onClick={toggleWishlistHandler}>
          Close
        </button>
      }
      size="small"
      dimmer
      onClose={toggleWishlistHandler}
    >
      {wishlistItems.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <ProductCard
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
              }}
            />
          ))}
        </div>
      )}
    </Modal>
  );
};

export default Wishlist;
