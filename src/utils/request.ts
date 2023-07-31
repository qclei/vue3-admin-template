// 进行axios二次封装:使用请求与相应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 第一步：利用axios对象的create方法, 去创建axios实例(其他的配置：基础路径，超时的时间等等)
const request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径会携带/api
  timeout: 5000, // 超时时间的设置
})
// 第二步：request实例添加请求和相应拦截器
request.interceptors.request.use((config) => {
  // config配置对象,headers属性请求头，经常给服务器携带公共的参数
  // 返回配置对象
  return config
})

// 第三步:配置相应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调
    // 简化数据
    return response.data
  },
  (error) => {
    // 失败回调：处理http网咯错误的
    let msg = ''
    // htt状态码
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
        break
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)

// 对外暴露
export default request
