export class Eraser {
  public canvas;
  public ctx;
  public mouseDown = false;
  public x1 = 0;
  public y1 = 0;

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

  onMouseDown(e: any) {
    this.mouseDown = true;
    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  };

  onMouseMove(e: any) {
    if (this.ctx && this.mouseDown) {
      this.ctx.beginPath();
      this.ctx.rect(this.x1, this.y1, 40, 40);
      this.ctx.fillStyle = "#ececec";
      this.ctx.fill();
      this.ctx.closePath();
    }

    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  };

  onMouseUp(e: any) {
    this.mouseDown = false;
  }
};
