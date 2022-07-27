import { useEffect } from "react";
import { Router } from "./router";

function App() {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000/");
    socket.onopen = () => socket.send("new user");
    socket.onmessage = (e) => {
      console.log(e.data)
    }
  }, [])

  return (
    <Router />
  );
}

export default App;
