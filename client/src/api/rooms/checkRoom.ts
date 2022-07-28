import axios from "axios"

export const checkRoom = async (id:string) => {
  const res = await axios.get(`http://localhost:5000/api/room/check/${id}`);
  return res;
}