import styled from "styled-components";

const CanvasWrapper = styled.div`
  padding: 10px 5px;
  box-shadow: 0px 2px 5px 1px #b7bebe;
  & > canvas {
    width: 100%;
    height: 100%;
    background: #ececec;
  }
`;

export { CanvasWrapper };
