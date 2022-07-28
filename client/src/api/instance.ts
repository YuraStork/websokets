import axios, { AxiosError } from "axios";
import { toastError } from "../toast";

export const Instance = axios.create({ baseURL: "http://localhost:5000/api/" });

Instance.interceptors.response.use(function (config) {
  return config;
}, function (error: AxiosError) {
  console.log("errror", (error.response?.data as any).message);
  toastError((error.response?.data as any)?.message || "Error")
  return Promise.reject(error);
});