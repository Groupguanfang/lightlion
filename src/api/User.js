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

/**
 * 检查用户名是否已存在
 *
 * @returns [object] boolean
 * @authr Zero
 * @since 2022
 */
export async function checkName(username) {
  const data = await axios.get('/user/checkname',{
    params:{
      username
    }
  })
  return data
}

/**
 * 注册
 *
 * @returns [object] token & data
 * @authr Zero
 * @since 2022
 */
export async function regAction(username,password,email) {
  const data = await axios.get('/user/register',{
    params:{
      username,password,email
    }
  })
  return data
}