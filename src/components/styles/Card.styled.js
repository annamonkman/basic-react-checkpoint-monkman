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
    /* border: 1px solid red; */
    max-width: 100%;
    max-height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* margin: 0 auto; */
  }
  .info {
    /* border: 1px solid blue; */
    margin-top: 8px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      /* border: 1px solid pink; */
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
      /* border: 1px solid teal; */
      font-size: 18px;
      font-weight: normal;
      margin: 0;
    }
    .buttons {
      /* border: 1px solid teal; */
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
        color: #eb1609;
      }
      .heart:hover {
        fill: #eb1609;
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
