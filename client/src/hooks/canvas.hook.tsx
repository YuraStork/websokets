import { Ref, useState } from "react"

export const useCanvas = () => {
  const [canvas, setCanvas] = useState<null | Ref<HTMLCanvasElement>>(null);

  const setCanvasHandler = (ref: Ref<HTMLCanvasElement>) => {
    setCanvas(ref);
  }

  return { canvas, setCanvasHandler }
}
