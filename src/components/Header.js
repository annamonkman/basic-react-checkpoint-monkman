import React from "react";
import { StyledHeader } from "./styles/Header.styled";
// import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Ann@Express</h1>
      </div>
      <div>
        {/* <HeaderButton icon={"wishlist"} name={"wishlist"} number={"5"} />
        <HeaderButton icon={"wishlist"} name={"cart"} number={"0"} /> */}
      </div>
    </StyledHeader>
  );
};

export default Header;
