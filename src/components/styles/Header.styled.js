import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  height: 60px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Mulish", sans-serif;
    font-weight: 500;
    color: #e43225;
    letter-spacing: -1px;
    font-size: 24px;
    margin: 0px;
    padding: 0px;
    display: inline-block;
  }
  .buttons {
    display: inline-block;
    margin-right: 100px;
    display: flex;
    flex-direction: row;
    button {
      background-color: white;
      font-size: 14px;
      margin-left: 5px;
      display: flex;
      align-items: center;

      .icon {
        font-size: 20px;
        margin: 0;
        color: dimgray;
      }
      .text {
        margin-left: 3px;
        margin-right: 6px;
      }
      .num {
        color: dimgray;
      }
    }
    button:hover {
      color: #eb1609;
      .icon {
        color: #eb1609;
      }
    }
  }
`;
