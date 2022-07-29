import { Tool } from "./tool.class";

export class Circle extends Tool {
  private mouseDown = false;
  private saved: string = "";
  private x1 = 0;
  private y1 = 0;

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>, socket: WebSocket, id: string) {
    super(canvas, socket, id);
    this.listen();
  }

  private listen() {
    this.canvas.current.onmousedown = this.onMouseDown.bind(this);
    this.canvas.current.onmousemove = this.onMouseMove.bind(this);
    this.canvas.current.onmouseup = this.onMouseUp.bind(this);
  }

  onMouseDown(e: MouseEvent) {
    this.mouseDown = true;
    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
    this.saved = this.canvas.current.toDataURL();
  }

  onMouseMove(e: MouseEvent) {
    if (this.mouseDown && this.ctx) {
      let img = new Image();
      img.src = this.saved;
      img.onload = () => {
        this.draw(e, img);
      };
    }
  }

  onMouseUp(e: MouseEvent) {
    this.mouseDown = false;
    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  }

  private draw(e: MouseEvent, img: HTMLImageElement) {
    let a = e.offsetX - this.x1;
    let b = e.offsetY - this.y1;
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(img, 0, 0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.arc(this.x1, this.y1, c / 2, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
}
