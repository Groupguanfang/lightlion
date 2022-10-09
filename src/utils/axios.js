import axios from "axios";
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 10000,
  params: {
    cookie: localStorage.getItem("token"),
  }
});
export default http;
