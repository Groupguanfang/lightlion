import axios from "../utils/axios";

/**
 * 登录
 *
 * @params [string] username 用户名
 * @params [string] password 密码
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
 * @params [string] 用户名
 * @returns [object] boolean
 * @author Zero
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
 * @params [string] 用户名
 * @params [string] 密码
 * @params [string] 邮箱
 * @returns [object] token & data
 * @author Zero
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