import styled, { css } from "styled-components";

const StyledToolbar = styled.div`
  padding: 5px;
  box-shadow: 0px 2px 5px 1px #b7bebe;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 10px;
  }
`;

type ToolButtonProps = {
  img: string;
};

const ToolButton = styled.button<ToolButtonProps>`
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: none;
  border: none;

  ${(p) =>
    p.img &&
    css`
      background-image: url(${p.img});
      background-size: 35px 35px;
    `}
`;

export { ToolButton, StyledToolbar };
