import axios from "axios"

export const setUser = () => {
  return axios.get("http://localhost:5000/api/user/set", { withCredentials: true });
} 