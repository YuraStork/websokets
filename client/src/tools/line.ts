export const Branch = (canvas: React.RefObject<HTMLCanvasElement> | null) => {
  const ctx = canvas?.current?.getContext("2d");
  let mouseDown = false;

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement> | null) => {
    mouseDown = true;
    console.log("down");

    if (e && ctx) {
      ctx.beginPath();
      ctx.moveTo(
        e.pageX - (e.target as HTMLCanvasElement).offsetLeft,
        e.pageY - (e.target as HTMLCanvasElement).offsetTop
      );
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLCanvasElement> | null) => {
    mouseDown = false;
  };
  
  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement> | null) => {
    console.log("move", mouseDown);
    if (mouseDown && ctx && e) {
      ctx.lineTo(
        e.pageX - (e.target as HTMLCanvasElement).offsetLeft,
        e.pageY - (e.target as HTMLCanvasElement).offsetTop 
      );
      ctx.stroke();
    }
  };

  return { onMouseDown, onMouseUp, onMouseMove };
};
