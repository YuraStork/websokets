import { useEffect, useRef, useState } from "react";
import { Circle } from "../tools/circle";
import { Pen } from "../tools/pen";
import { Square } from "../tools/square";

export type ToolsTypes = "pen" | "line" | "eraser" | "circle" | "square";

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const [tool, setTool] = useState<ToolsTypes>("pen");

  const setToolhandler = (tool: ToolsTypes) => {
    setTool(tool);
  };

  useEffect(() => {
    canvasRef.current.width = 1200;
    canvasRef.current.height = 550;
  }, []);

  useEffect(() => {
    draw();
  }, [tool]);

  const draw = () => {
    switch (tool) {
      case "pen": new Pen(canvasRef); break;
      case "square": new Square(canvasRef); break;
      case "circle": new Circle(canvasRef); break;
      default: new Pen(canvasRef)
    }
  };
  return { canvasRef, setToolhandler, draw, tool };
};
