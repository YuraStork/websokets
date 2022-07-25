import { useState } from "react"

export type ToolsTypes = "pen" | "line" | "eraser"
export const useCanvas = () => {
  const [canvas, setCanvas] = useState<null | React.RefObject<HTMLCanvasElement>>(null);
  const [tool, setTool] = useState<ToolsTypes>("pen");

  const setCanvasHandler = (ref: React.RefObject<HTMLCanvasElement>) => {
    setCanvas(ref);
  }

  const setToolhandler = (tool: ToolsTypes) => {
    setTool(tool);
  }
  return { canvas, setCanvasHandler, setToolhandler }
}
