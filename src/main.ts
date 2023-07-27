import { createApp } from 'vue'
// 引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化中文配置
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from '@/App.vue'

// 获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn, // 国际化中文配置
})
// 安装element-plus插件
app.use(ElementPlus)
// 将应用挂载到挂载点上
app.mount('#app')
