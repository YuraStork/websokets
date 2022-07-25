import styled, { css } from "styled-components";
import { Canvas } from "./components/canvas";
import { SettingsBar } from "./components/settings";
import { Toolbar } from "./components/toolbar";


const Layout = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template: 50px 50px 1fr / 1fr;
`;

function App() {
  return (
    <Layout>
      <Toolbar />
      <SettingsBar />
      <Canvas />
    </Layout>
  );
}

export default App;
