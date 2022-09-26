import axios from "../utils/axios";

/**
 * 获取文章接口
 * @returns [json]
 */
export async function getPost() {
  let data = await axios.get("/post");
  return data;
}
