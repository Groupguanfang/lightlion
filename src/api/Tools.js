import axios from "../utils/axios";

export async function getLink() {
  return await axios.get('/download')
}
