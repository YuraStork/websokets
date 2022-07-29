import { CreateRoom } from "../../pages/homePage/types";
import { Instance } from "../instance";

export const createRoom = async (data: CreateRoom) => {
  return Instance.post("room/create", data, { withCredentials: true });
}