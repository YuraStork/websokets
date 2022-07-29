import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "./api/user/setUser";
import { Loader } from "./components/loader";
import { Router } from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setIsUser] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setUser()
      .then(() => setIsUser(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) return <div>error</div>
  if (isLoading || !user) return <Loader position="absolute" />;
  return <Router />;
}

export default App;
