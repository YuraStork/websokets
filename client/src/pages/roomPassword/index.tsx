import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkRoomPassword } from "../../api/rooms/checkRoomPassword";

export const PrivateRoom = () => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()

  const handleEnter = async () => {
    try {
      setIsLoading(true);
      const res = await checkRoomPassword(id || "", password);
      navigate(`/draw_online/${id}`);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue=""
          />
          <button onClick={handleEnter}>enter</button>
        </>
      )}
    </div>
  );
};
