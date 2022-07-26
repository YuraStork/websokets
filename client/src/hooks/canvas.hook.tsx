import { useEffect, useRef, useState } from "react";
import { Circle } from "../canvas_classes/circle.class";
import { Eraser } from "../canvas_classes/eraser.class";
import { Line } from "../canvas_classes/line.class";
import { Pen } from "../canvas_classes/pen.class";
import { Square } from "../canvas_classes/square.class";
import { Tool } from "../canvas_classes/tool.class";

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
    new Tool(canvasRef);

    switch (tool) {
      case "pen": new Pen(canvasRef); break;
      case "square": new Square(canvasRef); break;
      case "circle": new Circle(canvasRef); break;
      case "eraser": new Eraser(canvasRef); break;
      case "line": new Line(canvasRef); break;
      default: new Pen(canvasRef)
    }
  };
  return { canvasRef, setToolhandler, draw, tool };
};
