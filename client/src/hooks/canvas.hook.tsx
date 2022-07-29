import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  const [socket, setSocket] = useState<any>(null);
  const [sessionId, setSessionId] = useState<any>(null);
  const params = useParams();
  const location = useLocation();

  const setToolhandler = (tool: ToolsTypes) => setTool(tool);

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
    if (!socket) {
      const socket = new WebSocket("ws://localhost:5000/ws");
      setSocket(socket);
      setSessionId(params.id || "1");
      socket.onopen = () => {
        socket.send(
          JSON.stringify({
            name: (location.state as any)?.userName || "user",
            method: "connection",
          })
        );

        socket.onmessage = (e) => {
          console.log("NEW MESSAGE", e.data);
        };
      };
    }
  }, []);

  useEffect(() => {
    draw();
  }, [tool, backgroundColor, borderColor, borderSize, snapshotIndex]);

  const draw = () => {
    const myCanvas = new Tool(canvasRef, socket);
    myCanvas.changeBackgroundColor(backgroundColor);
    myCanvas.changeBorderColor(borderColor);
    myCanvas.changeBorderSize(borderSize);
    myCanvas.setSnapshot(snapshotList[snapshotIndex]);

    switch (tool) {
      case "pen":
        new Pen(canvasRef, socket);
        break;
      case "square":
        new Square(canvasRef, socket);
        break;
      case "circle":
        new Circle(canvasRef, socket);
        break;
      case "eraser":
        new Eraser(canvasRef, socket);
        break;
      case "line":
        new Line(canvasRef, socket);
        break;
      default:
        new Pen(canvasRef, socket);
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
    snapshot: snapshotList[snapshotList.length - 1] || null,
  };
};
