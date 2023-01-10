import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  img {
    width: 100px;
  }
  .title-price {
    width: 100px;
    p {
      margin: 0;
      padding-bottom: 5px;
    }
    p:nth-child(2) {
      color: darkgray;
    }
  }
  button {
    display: inline-block;
    padding: 0;
    margin: 0;
    background-color: transparent;
    font-weight: 300;
    text-decoration: underline;
  }
  button:hover {
    cursor: pointer;
  }
`;
