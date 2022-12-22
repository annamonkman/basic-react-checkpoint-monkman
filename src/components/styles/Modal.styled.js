import styled from "styled-components";
import { Modal } from "semantic-ui-react";

export const StyledModal = styled(Modal)`
  border: 1px solid pink;
  border-radius: 6px !important;

  @media only screen and (min-width: 768px) {
    min-width: 550px;
  }

  /* &.ui.scrolling.modal.no-pad-actions > .actions,
  &.ui.modal.no-pad-actions > .actions {
    padding: 0 !important;
  } */
`;

export const StyledHeader = styled(Modal.Header)`
  background-color: gray;
  display: flex !important;
  align-items: center;
  gap: 20px;
  padding: 20px;

  * {
    color: white;
  }
`;

export const StyledContent = styled(Modal.Content)`
  max-height: 670px !important;
  overflow: auto;

  h3 {
    font-weight: 300;
    white-space: break-spaces;
  }
`;

export const StyledActions = styled(Modal.Actions)`
  padding: 20px;
  border-top: 1px gray solid;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
