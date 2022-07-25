import { createContext, MouseEvent } from "react";
import { ToolsTypes } from "../hooks/canvas.hook";

export type DrawType = {
  onMouseDown: (e: React.MouseEvent<HTMLCanvasElement>) => void,
  onMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => void,
  onMouseUp: (e: React.MouseEvent<HTMLCanvasElement>) => void,
}

type PaintContextTypes = {
  canvas: null | React.RefObject<HTMLCanvasElement>;
  setCanvasHandler: (ref: React.RefObject<HTMLCanvasElement>) => void;
  setToolhandler: (tool: ToolsTypes) => void;
  tool: ToolsTypes;
  draw: (e: React.MouseEvent<HTMLCanvasElement>) => DrawType
};

export const PaintContext = createContext<PaintContextTypes>({
  canvas: null,
  setCanvasHandler: () => { },
  setToolhandler: () => { },
  tool: "pen",
  draw: () => ({ onMouseDown: () => { }, onMouseMove: () => { }, onMouseUp: () => { } })
});
