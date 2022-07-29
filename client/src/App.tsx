import { useEffect, useState } from "react";
import { setUser } from "./api/user/setUser";
import { Loader } from "./components/loader";
import { Router } from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setUser()
      .then(() => setIsUser(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !isUser) return <Loader position="absolute" />;
  return <Router />;
}

export default App;
