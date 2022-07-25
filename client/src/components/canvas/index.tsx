import { useContext, useEffect, useRef } from "react"
import { PaintContext } from "../../context/paintContext"
import { CanvasWrapper } from "./styles"

export const Canvas = () => {
  const { canvas, setCanvasHandler } = useContext(PaintContext);
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setCanvasHandler(canvasRef);
  }, [])

  console.log("CANVAS", canvas)
  return <CanvasWrapper >
    <canvas ref={canvasRef}></canvas>
  </CanvasWrapper >
}