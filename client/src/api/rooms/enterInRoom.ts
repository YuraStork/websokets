import axios from "axios"

export const enterInRoom = async (data:any) => {
  return axios.post("http://localhost:5000/api/room/enter", data);
}