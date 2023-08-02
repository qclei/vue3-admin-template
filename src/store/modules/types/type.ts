// 定义小仓库数据State类型
// vue-router提供的对象
import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}
