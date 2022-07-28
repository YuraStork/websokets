import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkRoom } from "../../api/rooms/checkRoom";

export const EnterRoomWrapper: FC<any> = ({ children }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    checkRoom(id || "").catch(e => navigate("/"))
  }, [])
  return <div>
    {id}
    {children}
  </div>
}