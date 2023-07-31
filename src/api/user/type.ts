// 登录接口需要携带的参数的ts类型
export interface loginForm {
  username: string
  password: string
}
interface dataType {
  token: string
}
// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

// 定义服务器返回用户信息相关的数据类型
interface userInfo {
  userId: number
  avatar: string

  username: string
  password: string
  desc: string
  roles: string[] //Array<string>
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
export interface userResponseData {
  code: number
  data: user
}