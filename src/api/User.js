import axios from "../utils/axios";

/**
 * 登录
 *
 * @returns [object] token
 * @authr Zero
 * @since 2022
 */
export async function loginAction(username,password) {
  const data = await axios.get('/user/login',{
    params:{
      username,password
    }
  })
  return data
}