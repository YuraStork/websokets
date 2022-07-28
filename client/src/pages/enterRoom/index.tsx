
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkRoom } from "../../api/rooms/checkRoom";

export const EnterRoomWrapper: FC<any> = ({ children }) => {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsloading(true);
    checkRoom(id || "")
      .then((res) => {})
      .catch((e) => {
        navigate("/")
      })
      .finally(() => setIsloading(false));
  }, []);

  if (isLoading) return <div>loading...</div>;
  return <div>{children}</div>;
};
