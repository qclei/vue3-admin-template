<template>
  <div>
    <h1>测试测试axios二次封装</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { requestLogin } from '@/api/user/index'
// 当组件挂载完毕发送一个请求
onMounted(() => {
  requestLogin({ username: 'admin', password: '111111' })
})
</script>

<style scoped lang="scss"></style>
