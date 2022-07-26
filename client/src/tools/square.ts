export class Square {
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
  };

  onMouseUp(e: any) {
    this.mouseDown = false;

    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.rect(this.x1, this.y1, e.offsetX - this.x1, e.offsetY - this.y1);
      this.ctx.stroke();
      this.ctx.closePath();
    }

    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  };

};
