// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { requestLogin } from '@/api/user'
// 引入数据类型
import { loginForm } from '@/api/user/type'

const useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'), // 用户的唯一标识
    }
  },
  // 异步逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      // 登录请求
      const result: any = await requestLogin(data)
      // 登录请求: 成功200->Token
      // 登录请求: 失败201-> 登录失败错误信息
      if (result.code === 200) {
        // 登录成功通过pinia仓库存储一下Token
        // 由于pinia| vuex存储数据其实利用js对象
        this.token = result.data.token
        // 本地持久化存储一份数据
        localStorage.setItem('TOKEN', result.data.token)
        // 保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
})

// 对外暴露
export default useUserStore
