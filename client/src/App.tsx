import { useEffect, useState } from "react";
import { setUser } from "./api/user/setUser";
import { Loader } from "./components/loader";
import { Router } from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setUser().then(res => setIsLoading(false)).catch(e => setIsLoading(false));
    // const socket = new WebSocket("ws://localhost:5000/");
    // socket.onopen = () => socket.send("new user");
    // socket.onmessage = (e) => {
    //   console.log(e.data)
    // }
  }, [])

  if (isLoading) return <Loader position="absolute" />
  return (
    <Router />
  );
}

export default App;
