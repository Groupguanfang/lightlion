import axios from "../utils/axios";
const cookie = localStorage.getItem('token')
const base = import.meta.env.VITE_APP_API_URL
import http from "axios"

export async function changeAnnouncement(data) {
    return await http.post(base + '/announcement', {
    data: data,
    cookie
  })
}

export async function changeLink(newLink) {
  return await axios.post('/link',{
    data: newLink,
    cookie
  })
}