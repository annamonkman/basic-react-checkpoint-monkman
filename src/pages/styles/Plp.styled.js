import styled from "styled-components";

export const StyledPlp = styled.main`
  /* border: 1px solid red; */
  width: 90%;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 90px;
  .grid {
    /* border: 1px solid green; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
  }
`;
