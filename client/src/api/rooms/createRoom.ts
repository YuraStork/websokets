import axios from "axios"
import { CreateRoom } from "../../pages/home/types";

export const createRoom = async (data: CreateRoom) => {
  return axios.post("http://localhost:5000/api/room/create", data);
}