import { useContext } from "react";
import { PaintContext } from "../../context/paintContext";
import { ToolsTypes } from "../../hooks/canvas.hook";
import { StyledToolbar, ToolButton } from "./styles";

export const Toolbar = () => {
  const { setToolhandler } = useContext(PaintContext);

  const handleChangeTool = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") {
      setToolhandler((e.target as HTMLButtonElement).dataset.tool as ToolsTypes)
    }
  }

  return (
    <StyledToolbar>
      <div onClickCapture={handleChangeTool}>
        <ToolButton img="../assets/pen.png" data-tool="pen" />
        <ToolButton img="../assets/square.png" data-tool="square" />
        <ToolButton img="../assets/circle.png" data-tool="circle" />
        <ToolButton img="../assets/eraser.png" data-tool="eraser" />
        <ToolButton img="../assets/line.png" data-tool="line" />
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
