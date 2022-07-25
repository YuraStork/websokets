import styled from "styled-components";
import { Canvas } from "./components/canvas";
import { SettingsBar } from "./components/settings";
import { Toolbar } from "./components/toolbar";
import { PaintContext } from "./context/paintContext";
import { useCanvas } from "./hooks/canvas.hook";


const Layout = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template: 50px 50px 1fr / 1fr;
`;

function App() {
  const { canvas, setCanvasHandler, setToolhandler } = useCanvas();
  return (
    <PaintContext.Provider value={{ canvas, setCanvasHandler, setToolhandler }}>
      <Layout>
        <Toolbar />
        <SettingsBar />
        <Canvas />
      </Layout>
    </PaintContext.Provider>
  );
}

export default App;
