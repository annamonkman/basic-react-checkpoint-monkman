import styled from "styled-components";

export const StyledCart = styled.div`
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
      margin-right: 50px;
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
