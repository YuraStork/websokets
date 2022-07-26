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
}