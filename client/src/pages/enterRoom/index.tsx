import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkRoom } from "../../api/rooms/checkRoom";
import { Loader } from "../../components/loader";

export const EnterRoomWrapper: FC<any> = ({ children }) => {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsloading(true);
    checkRoom(id || "")
      .then((res) => { })
      .catch((e) => {
        navigate(`/checkRoompassword/${id}`, { state: true })
      })
      .finally(() => setIsloading(false));
  }, []);

  if (isLoading) return <Loader position="absolute" />;
  return <div>{children}</div>;
};
