import { useContext } from "react";
import { PaintContext } from "../../context/paintContext";
import { CanvasWrapper } from "./styles";

export const Canvas = () => {
  const { canvasRef } = useContext(PaintContext);

  return (
    <CanvasWrapper>
      <canvas ref={canvasRef}></canvas>
    </CanvasWrapper>
  );
};
