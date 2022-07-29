import { Tool } from "./tool.class";

export class Line extends Tool {
  private mouseDown = false;
  private saved: string = "";
  private x1 = 0;
  private y1 = 0;

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
  }

  onMouseDown(e: MouseEvent) {
    this.mouseDown = true;
    this.saved = this.canvas.current.toDataURL();
    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  }
  onMouseMove(e: MouseEvent) {
    let img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.draw(e, img);
    };
  }

  private draw(e: MouseEvent, img: HTMLImageElement) {
    if (this.ctx && this.mouseDown) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(img, 0, 0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.x1, this.y1);
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
}
