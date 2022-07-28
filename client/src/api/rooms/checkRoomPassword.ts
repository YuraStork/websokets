import axios from "axios"

export const checkRoomPassword = (id: string, password: string) => {
  return axios.post(`http://localhost:5000/api/room/checkRoomPassword/${id}`, { password }, { withCredentials: true });
}