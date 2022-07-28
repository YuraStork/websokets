import axios from "axios"

export const getAllRooms = async () => {
  return axios.get("http://localhost:5000/api/room/all");
}