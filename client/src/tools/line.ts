export class Line {
  public canvas;
  public ctx;
  public mouseDown = false;

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>) {
    this.canvas = canvas;
    this.ctx = canvas?.current?.getContext("2d");
    this.listen();
  }

  listen() {
    (this.canvas.current.onmousedown as any) = this.onMouseDown.bind(this);
    (this.canvas.current.onmousemove as any) = this.onMouseMove.bind(this);
    (this.canvas.current.onmouseup as any) = this.onMouseUp.bind(this);
  }

  onMouseUp(e: any) {
    if (this.mouseDown && this.ctx) {
      this.ctx.lineTo(e.offsetX, e.offsetY)
      this.ctx.stroke();
      this.ctx.closePath();
    }
    this.mouseDown = false;
  }

  onMouseDown(e: any) {
    this.mouseDown = true;

    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(e.offsetX, e.offsetY);
    }
  }

  onMouseMove(e: any) { }
}
