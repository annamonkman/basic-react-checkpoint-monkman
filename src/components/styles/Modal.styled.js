import styled from "styled-components";
import { Modal } from "semantic-ui-react";

export const StyledModal = styled(Modal)`
  @media only screen and (min-width: 768px) {
    min-width: 550px;
  }
`;

export const StyledHeader = styled(Modal.Header)``;

export const StyledContent = styled(Modal.Content)`
  max-height: 670px !important;
  overflow: auto;
  .wishlist-items {
    display: flex;
    overflow-x: scroll;
    div {
      margin: 10px 20px;
    }
  }
`;

export const StyledActions = styled(Modal.Actions)`
  button {
    border-radius: 20px;
    padding: 10px 20px;
    margin-left: 15px;
  }
  .close-button {
    background-color: lightgray;
  }
  .checkout-button {
    background-color: #f5471b;
    color: white;
  }
`;
