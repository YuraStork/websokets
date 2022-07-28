import axios from "axios"

export const checkRoom = (id: string) => {
  return axios.get(`http://localhost:5000/api/room/check/${id}`, { withCredentials: true });
}