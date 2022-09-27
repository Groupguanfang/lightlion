import axios from "../utils/axios";

/**
 * 获取文章接口
 *
 * @returns [object array] post list
 * @author Zero
 * @since 2022
 */
export async function getPost() {
  let data = await axios.get("/post");
  return data;
}