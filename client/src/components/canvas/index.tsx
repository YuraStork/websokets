import { useContext, useEffect, useRef } from "react"
import { PaintContext } from "../../context/paintContext"
import { CanvasWrapper } from "./styles"

export const Canvas = () => {
  const { setCanvasHandler, draw } = useContext(PaintContext);
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setCanvasHandler(canvasRef);
  }, [])

  return <CanvasWrapper >
    <canvas ref={canvasRef} onMouseDown={(e) => draw(e).onMouseDown(e)}></canvas>
  </CanvasWrapper >
}