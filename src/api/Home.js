import axios from "../utils/axios";
import http from "axios";
const baseURL = import.meta.env.VITE_APP_API_URL

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
 * 获取单篇文章接口
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
 * @returns [object]
 * @author Zero
 * @since 2022
 */
export async function getAnnouncement() {
  return await axios.get("/announcement");
}

/**
 * 发布草稿
 *
 * @params [title, data, comment, cookie, poster]
 * @returns
 * @author Zero
 * @since 2022
 */
export async function newDraft(title, data, comment, cookie, poster, id ,category) {
  return await http({
    method: "post",
    baseURL,
    url: "/postcreate",
    data: { title, data, comment, cookie, poster, id, category },
  });
}

export async function dropPost(id, cookie) {
  return await axios({
    method: "get",
    url: "/postdelete",
    params: {
      cookie,
      id,
    },
  });
}

export async function forgotPwd() {
  return axios.get("/user/forgot");
}
