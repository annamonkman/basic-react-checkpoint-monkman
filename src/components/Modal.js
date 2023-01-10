import React from "react";

import {
  StyledActions,
  StyledContent,
  StyledHeader,
  StyledModal,
} from "./styles/Modal.styled";

const Modal = ({ title, children, actions, ...props }) => {
  return (
    <StyledModal role="dialog" {...props}>
      <StyledHeader>
        <h2>{title}</h2>
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
      <StyledActions>{actions}</StyledActions>
    </StyledModal>
  );
};

export default Modal;
