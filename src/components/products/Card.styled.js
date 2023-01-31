import styled from "styled-components";

export const StyledCard = styled.div`
  cursor: pointer;
  padding: 5px;
  width: 200px;
  margin: 0 5px 20px 5px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 100%;
    max-height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .info {
    margin-top: 8px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-size: 12px;
      font-weight: normal;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      width: 180px;
    }
    p {
      font-size: 18px;
      font-weight: normal;
      margin: 0;
      span {
        font-size: 12px;
      }
    }
    .buttons {
      margin: 7px 0;
      button {
        background-color: white;
        padding: 0;
        margin: 0;
        margin-right: 10px;
      }
      .svg {
        font-size: 22px;
      }
      .heart {
        color: #f5142e;
      }
      .heart:hover {
        fill: #f5142e;
      }
      .in-wishlist {
        fill: #f5142e;
      }
      .cart {
        color: dimgray;
      }
      .cart:hover {
        color: black;
      }
    }
  }
`;
