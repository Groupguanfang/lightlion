import axios from "axios";
const http = axios.create({
  baseURL: process.env.apiURL,
  timeout: 10000,
});
export default http;
