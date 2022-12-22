import React from "react";

// import { icons } from "../../assets/icons";
// import { ModalProps } from "semantic-ui-react";
import {
  StyledActions,
  StyledContent,
  StyledHeader,
  StyledModal,
} from "./styles/Modal.styled";

const Modal = ({ title, children, icon, actions, noPadActions, ...props }) => {
  return (
    <StyledModal
      role="dialog"
      // className={noPadActions && "no-pad-actions"}
      {...props}
    >
      {" "}
      <StyledHeader>
        {icon}
        <h2>{title}</h2>
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
      <StyledActions>{actions}</StyledActions>
    </StyledModal>
  );
};

export default Modal;
