export class Square {
  public canvas;
  public ctx;
  public mouseDown = false;
  public x1 = 0;
  public y1 = 0;
  public saved: any;

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
    this.saved = this.canvas.current.toDataURL();
  };

  onMouseMove(e: any) {
    if (this.mouseDown && this.ctx) {
      let img = new Image();
      img.src = this.saved;
      img.onload = () => {
        this.ctx?.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
        this.ctx?.drawImage(img, 0, 0, this.canvas.current.width, this.canvas.current.height);
        this.ctx?.beginPath();
        this.ctx?.rect(this.x1, this.y1, e.offsetX - this.x1, e.offsetY - this.y1);
        this.ctx!.fillStyle = "black";
        this.ctx?.fill();
        this.ctx?.stroke();
        this.ctx?.closePath();
      }
    }
  };

  onMouseUp(e: any) {
    this.mouseDown = false;
    this.x1 = 0;
    this.y1 = 0;
  };

};
