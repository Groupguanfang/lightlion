import axios from "../utils/axios";
const cookie = localStorage.getItem("token");
const base = import.meta.env.VITE_APP_API_URL;
import http from "axios";

export async function changeAnnouncement(data) {
  return await http.post(base + "/announcement", {
    data: data,
    cookie,
  });
}

export async function getOptions(meta, cook) {
  return await axios.get("/admin", {
    params: {
      meta,
      cookie: cook,
    },
  });
}

export async function changeVal(meta, value) {
  return await http.post(base + "/admin", {
    meta,
    value,
    cookie,
  });
}

export async function getChecker() {
  return await axios.get('/admin/postcheck',{
    params: {
      cookie
    }
  })
}
