import axios from "../utils/axios";

/**
 * 登录
 *
 * @params [string] username 用户名
 * @params [string] password 密码
 * @returns [object] token
 * @auothr Zero
 * @since 2022
 */
export async function loginAction(username, password) {
  return await axios.get("/user/login", { params: { username, password } });
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
  return await axios.get("/user/checkname", { params: { username } });
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
export async function regAction(username, password, email, code) {
  return await axios.get("/user/register", {
    params: { username, password, email, code },
  });
}

/**
 * 登录用户信息
 *
 * @params [string] cookie
 * @returns [object] 用户信息
 * @author Zero
 * @since 2022
 */
export async function getInfo(cookie) {
  return await axios.get("/user", { params: { cookie: cookie } });
}

/**
 * 登出
 *
 * @params [string] cookie
 * @returns [object]
 * @author Zero
 * @since 2022
 */

export async function logOut(cookie) {
  return await axios.get("/user/logout", { params: { cookie } });
}

/**
 * 发送电子邮件验证码
 *
 * @params [string]
 * @returns [object]
 * @author Zero
 * @since 2022
 */

export async function sendEmail(email) {
  return await axios.get("/user/email", { params: { email } });
}

/**
  * 修改密码
  */
export async function changePwd(newpass,cookie) {
  return axios.post('/user/updatepassword',{
    newpass,cookie
  })
}

/**
  * 修改邮箱
  */
export async function changeMail(cookie,email,code) {
  return await axios.get('/user/updateemail',{
    params: {
      cookie,email,code
    }
  })
}
