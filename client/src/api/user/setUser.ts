import axios from "axios"
import { Instance } from "../instance";

export const setUser = () => {
  return Instance.get("http://localhost:5000/api/user/set", { withCredentials: true });
} 