export class Tool {
  protected canvas;
  protected ctx;
  protected width;
  protected height;

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>) {
    this.canvas = canvas;
    this.ctx = canvas.current.getContext("2d");
    this.width = canvas.current.width;
    this.height = canvas.current.height;
  }

  changeBackgroundColor(color: string) {
    if (this.ctx) {
      this.ctx.fillStyle = color;
    }
  }
  changeBorderColor(color: string) {
    if (this.ctx) {
      this.ctx.strokeStyle = color;
    }
  }
  changeBorderSize(size: number) {
    if (this.ctx) {
      this.ctx.lineWidth = size;
    }
  }
  setSnapshot(snapshot: string | null) {
    if (snapshot) {
      const img = new Image();
      img.src = snapshot;
      img.onload = () => {
        if (this.ctx) {
          this.ctx.clearRect(0, 0, this.width, this.height)
          this.ctx.drawImage(img, 0, 0, this.width, this.height);
        }
      };
    }
  }
}
