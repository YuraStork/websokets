import { Tool } from "./tool.class";

export class Pen extends Tool {
  private mouseDown = false;

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>, socket: WebSocket) {
    super(canvas, socket);
    this.listen();
  }

  private listen() {
    this.canvas.current.onmousedown = this.onMouseDown.bind(this);
    this.canvas.current.onmousemove = this.onMouseMove.bind(this);
    this.canvas.current.onmouseup = this.onMouseUp.bind(this);
  }

  onMouseUp(e: any) {
    this.mouseDown = false;
    if (this.ctx) {
      this.ctx.closePath();
    }
  }

  onMouseDown(e: any) {
    this.mouseDown = true;

    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(e.offsetX, e.offsetY);
    }
  }

  onMouseMove(e: any) {
    if (this.mouseDown && this.ctx) {
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
      this.socket.send(JSON.stringify({
        method: "draw"
      }))
    }
  }
}
