import { useContext, useEffect, useRef } from "react";
import { PaintContext } from "../../context/paintContext";
import { CanvasWrapper } from "./styles";

export const Canvas = () => {
  const { setCanvasHandler, draw, canvas } = useContext(PaintContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setCanvasHandler(canvasRef);
  }, []);

  return (
    <CanvasWrapper>
      <canvas
        ref={canvasRef}
        onMouseMove={(e) => draw(e).onMouseMove(e)}
        onMouseDown={(e) => draw(e).onMouseDown(e)}
        onMouseUp={(e) => draw(e).onMouseUp(e)}
      ></canvas>
    </CanvasWrapper>
  );
};
