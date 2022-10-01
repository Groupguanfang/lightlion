import axios from "../utils/axios";

/**
 * 获取文章接口
 *
 * @returns [object array] post list
 * @author Zero
 * @since 2022
 */
export async function getPost() {
  return await axios.get("/post");
}

/**
 * 获取文章接口
 *
 * @returns [object] post list
 * @author Zero
 * @since 2022
 */
export async function getPostItem(id) {
  return await axios.get("/singlepost", { params: { id } });
}

/**
 * 获取公告
 * 
 * @params
 * @returns
 * @author Zero
 * @since 2022
 */

export async function getAnnouncement() {
  return await axios.get('/announcement')
}