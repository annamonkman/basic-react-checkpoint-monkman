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
  .headings {
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 40px;
    h3 {
      padding: 0;
      font-weight: 400;
      font-size: 14px;
      margin: 0;
      margin-right: 85px;
    }
    button {
      background-color: transparent;
      padding: 0;
      margin: 0;
      margin-right: 10px;
      font-size: 14px;
    }
    button:hover {
      text-decoration: underline;
      cursor: pointer;
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
