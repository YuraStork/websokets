export class Pen {
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
    this.mouseDown = false;
    console.log("up");
    if (this.ctx) {
      this.ctx.closePath();
    }
  };

  onMouseDown(e: any) {
    this.mouseDown = true;
    console.log("down", e);
    console.log(this)

    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(
        e.pageX - e.target.offsetLeft,
        e.pageY - e.target.offsetTop,
      );

      console.log(e.pageX - e.target.offsetLeft,
        e.pageY - e.target.offsetTop)
    }
  };



  onMouseMove(e: any) {
    // console.log(e.offsetX, e.offsetY);
    // console.log("e", e);
    if (this.mouseDown && this.ctx) {
      this.ctx.lineTo(e.pageX - e.target.offsetLeft,
        e.pageY - e.target.offsetTop)
      this.ctx.stroke();
    }
  };
};
