import React, { createContext } from "react";
import { ToolsTypes } from "../hooks/canvas.hook";

type PaintContextTypes = {
  canvasRef: React.Ref<HTMLCanvasElement>;
  setToolhandler: (tool: ToolsTypes) => void;
  tool: ToolsTypes;
};

export const PaintContext = createContext<PaintContextTypes>({
  canvasRef: null,
  setToolhandler: () => { },
  tool: "pen",
});
