import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = (props) => {
  const [isWishlistActive, setIsWishlistActive] = useState(false);

  return (
    <ModalContext.Provider value={{ isWishlistActive, setIsWishlistActive }}>
      {props.children}
    </ModalContext.Provider>
  );
};
