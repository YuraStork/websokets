import { MouseEvent, useState } from "react"
import { DrawType } from "../context/paintContext";
import { Branch } from "../tools/line";

export type ToolsTypes = "pen" | "line" | "eraser" | "circle" | "square"

export const useCanvas = () => {
  const [canvas, setCanvas] = useState<null | React.RefObject<HTMLCanvasElement>>(null);
  const [tool, setTool] = useState<ToolsTypes>("pen");

  const setCanvasHandler = (ref: React.RefObject<HTMLCanvasElement>) => {
    setCanvas(ref);
  }

  const setToolhandler = (tool: ToolsTypes) => {
    setTool(tool);
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>): DrawType => {
    switch (tool) {
      case "pen": return {
        onMouseDown: (e) => Branch(canvas).onMouseDown(e),
        onMouseMove: (e) => Branch(canvas).onMouseMove(e),
        onMouseUp: (e) => Branch(canvas).onMouseUp(e)
      }
      default: return {
        onMouseDown: (e) => console.log(e.clientX, e.clientY),
        onMouseMove: (e) => console.log(e.clientX, e.clientY),
        onMouseUp: (e) => console.log(e.clientX, e.clientY)
      }
    }
  }
  return { canvas, setCanvasHandler, setToolhandler, draw, tool }
}
