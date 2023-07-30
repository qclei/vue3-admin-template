import { createApp } from 'vue'
// 引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化中文配置
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'virtual:svg-icons-register'
// 引入之定义插件对象：注册整个项目的全局组件
import gloablComponent from '@/components/index'

import App from '@/App.vue'

import '@/styles/index.scss'
// 获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn, // 国际化中文配置
})
// 安装element-plus插件
app.use(ElementPlus)
//安装自定义插件对象
app.use(gloablComponent)
// 将应用挂载到挂载点上
app.mount('#app')
