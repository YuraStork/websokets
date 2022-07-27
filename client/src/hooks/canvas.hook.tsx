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
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [borderColor, setBorderColor] = useState("#000");
  const [borderSize, setBorderSize] = useState(1);
  const [snapshotList, setSnapshotList] = useState<string[]>([]);
  const [snapshotIndex, setSnapshotIndex] = useState(-1);

  const setToolhandler = (tool: ToolsTypes) => setTool(tool);
  console.log("length: ", snapshotList.length, snapshotIndex + 1);

  const pushUndo = () => {
    if (snapshotIndex > 0 && snapshotIndex < 10) {
      setSnapshotIndex((prev) => (prev -= 1));
    }
  };

  const pushRedo = () => {
    if (snapshotIndex < snapshotList.length - 1) {
      setSnapshotIndex((prev) => (prev += 1));
    }
  };

  const handleSnapshot = () => {
    if (snapshotList.length < 10) {
      setSnapshotList((prev) => [...prev, canvasRef.current.toDataURL()]);
      setSnapshotIndex((prev) => (prev += 1));
    } else {
      setSnapshotList((prev) => [
        ...prev.slice(1, 10),
        canvasRef.current.toDataURL(),
      ]);
    }
  };

  useEffect(() => {
    canvasRef.current.width = 1200;
    canvasRef.current.height = 550;
    handleSnapshot();
  }, []);

  useEffect(() => {
    draw();
  }, [tool, backgroundColor, borderColor, borderSize, snapshotIndex]);

  const draw = () => {
    const myCanvas = new Tool(canvasRef);
    myCanvas.changeBackgroundColor(backgroundColor);
    myCanvas.changeBorderColor(borderColor);
    myCanvas.changeBorderSize(borderSize);
    myCanvas.setSnapshot(snapshotList[snapshotIndex]);

    switch (tool) {
      case "pen":
        new Pen(canvasRef);
        break;
      case "square":
        new Square(canvasRef);
        break;
      case "circle":
        new Circle(canvasRef);
        break;
      case "eraser":
        new Eraser(canvasRef);
        break;
      case "line":
        new Line(canvasRef);
        break;
      default:
        new Pen(canvasRef);
    }
  };
  return {
    canvasRef,
    setToolhandler,
    draw,
    tool,
    changeBackgroundColor: setBackgroundColor,
    changeBorderColor: setBorderColor,
    changeBorderSize: setBorderSize,
    handleSnapshot,
    handleReset: pushUndo,
    handleRedo: pushRedo,
    snapshot: snapshotList[snapshotList.length - 1] || null
  };
};
