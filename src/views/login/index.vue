<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
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
// 引入当前时间状态的函数
import { getTimeState } from '@/utils/time'
let userStore = useUserStore()
// 收集账号和表单数据
let loginForm = reactive({ username: 'admin', password: '111111' })
let loginFormRef = ref()
// 获取路由器
let $router = useRouter()
// 定义变量控制按钮加载
let loading = ref(false)
// 登录数据回调
const login = async () => {
  // 表单效验成功时才发请求
  await loginFormRef.value.validate()
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
      title: `HI,${getTimeState()}好`,
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

// 自定义效验规则函数,rule:效验规则对象,value:表单元素文本内容,callback：符合条件callbak返回对象放行，不符合条件返回错误信息
const vaildatorUserName = (_rule: any, value: any, callback: any) => {
  if (/^\d{5,10}$/.test(value)) {
    callback()
  } else {
    callback(new Error('账号长度为五位到十位'))
  }
}
const vaildatorPassword = (_rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

// 定义表单效验需要配置的对象
const rules = {
  // 对象规则属性
  // required: true 表示字段必须效验，min表示最小长度，max表示最大长度，message表示提示信息，trigger表示触发时机（blur:失去焦点，change改变）
  username: [{ validator: vaildatorUserName, trigger: 'change' }],
  password: [{ validator: vaildatorPassword, trigger: 'change' }],
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
