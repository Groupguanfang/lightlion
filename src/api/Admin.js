import axios from "../utils/axios";
const cookie = localStorage.getItem('token')

export async function changeAnnouncement(data) {
    return await axios.post('/announcement', {
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