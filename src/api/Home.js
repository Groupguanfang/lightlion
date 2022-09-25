import axios from "../utils/axios";

export async function getPost() {
  let data = await axios.get("/post");
  console.log(data);
}
