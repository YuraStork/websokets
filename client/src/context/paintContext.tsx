import { createContext, Ref } from "react";

type PaintContextTypes = {
  canvas: null | Ref<HTMLCanvasElement>,
  setCanvasHandler: (ref: Ref<HTMLCanvasElement>) => void
}

export const PaintContext = createContext<PaintContextTypes>({ canvas: null, setCanvasHandler: () => { } });
