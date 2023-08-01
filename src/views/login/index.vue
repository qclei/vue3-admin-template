<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="请输入"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              :loading="loading"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
// 收集账号和表单数据
let loginForm = reactive({ username: 'admin', password: '111111' })
// 获取路由器
let $router = useRouter()
// 定义变量控制按钮加载
let loading = ref(false)
// 登录数据回调
const login = async () => {
  // 加载效果
  loading.value = true
  // 点击登录按钮之后的操作
  // 通知仓库（pinia）发送登录请求;1.请求成功-》首页展示数据 2.登录失败->弹出登录失败信息
  try {
    // 保证登录成功
    await userStore.userLogin(loginForm)
    // 编程时导航跳转到展示数据的首页
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  } finally {
    // 加载效果消失
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
