import { Tool } from "./tool.class";

export class Pen extends Tool {
  private mouseDown = false;
  private startX = 0;
  private startY = 0;

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>, ctx: CanvasRenderingContext2D, socket: WebSocket, id: string) {
    super(canvas, ctx, socket, id);
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
      this.startX = e.offsetX;
      this.startY = e.offsetY;
      this.ctx.beginPath();
      this.ctx.moveTo(e.offsetX, e.offsetY);
    }
  }

  onMouseMove(e: any) {
    if (this.mouseDown && this.ctx) {
      // this.ctx.lineTo(e.offsetX, e.offsetY);
      // this.ctx.stroke();
      this.socket.send(JSON.stringify({
        method: "draw",
        tool: "pen",
        id: this.id,
        startX: this.startX,
        startY: this.startY,
        x: e.offsetX,
        y: e.offsetY
      }))
    }
  }
}
