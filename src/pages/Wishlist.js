import React from "react";
import Modal from "../components/Modal";

const Wishlist = (setShowWishlist, showWislist) => {
  const onCancel = () => {
    setShowWishlist((prev) => !prev);
  };
  return (
    <Modal
      open={showWislist}
      title={"wishlist"}
      actions={
        <>
          <button onClick={onCancel}>action</button>
          <button>action</button>
        </>
      }
      size="small"
      dimmer
      onClose={() => setShowWishlist(false)}
    >
      <div>sdjgsjgkwjeg contenkwgnekjgnke</div>
    </Modal>
  );
};

export default Wishlist;
