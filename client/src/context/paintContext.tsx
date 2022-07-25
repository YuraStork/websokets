import { createContext } from "react";
import { ToolsTypes } from "../hooks/canvas.hook";

type PaintContextTypes = {
  canvas: null | React.RefObject<HTMLCanvasElement>;
  setCanvasHandler: (ref: React.RefObject<HTMLCanvasElement>) => void;
  setToolhandler: (tool: ToolsTypes) => void;
};

export const PaintContext = createContext<PaintContextTypes>({
  canvas: null,
  setCanvasHandler: () => {},
  setToolhandler: () => {},
});
