import axios from "../utils/axios";

export async function changeAnnouncement(data) {
    return await axios.post('/announcement', {
        data: data,
        cookie: localStorage.getItem('token')
    })
}