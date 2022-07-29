import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkRoom } from "../../api/rooms/checkRoom";
import { Loader } from "../../components/loader";

export const EnterRoomWrapper: FC<any> = ({ children }) => {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/");
    else {
      setIsloading(true);
      checkRoom(id)
        .then((res) => {
          const socket = new WebSocket("ws://localhost:5000/ws");
          socket.onopen = () => {
            socket.send(JSON.stringify({
              name: "yura",
              method: "connection"
            }))

            socket.onmessage = (e) => {
              console.log("NEW MESSAGE", e.data)
            }
          }
        })
        .catch((e) => {
          navigate(`/checkRoompassword/${id}`, { state: true })
        })
        .finally(() => setIsloading(false));
    }
  }, []);

  if (isLoading) return <Loader position="absolute" />;
  return <>{children}</>;
};
