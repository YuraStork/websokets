import { StyledToolbar, ToolButton } from "./styles";

export const Toolbar = () => {
  return (
    <StyledToolbar>
      <div>
        <ToolButton img="../assets/pen.png" />
        <ToolButton img="../assets/square.png" />
        <ToolButton img="../assets/circle.png" />
        <ToolButton img="../assets/eraser.png" />
        <ToolButton img="../assets/line.png" />
        <input type="color" name="color" />
      </div>

      <div>
        <ToolButton img="../assets/left-arrow.png" />
        <ToolButton img="../assets/right-arrow.png" />
        <ToolButton img="../assets/diskette.png" />
      </div>
    </StyledToolbar>
  );
};
