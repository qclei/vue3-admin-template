// 对外暴露配置路由(常量路由)
export const constantRouter = [
  {
    // 登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 命名路由
    meta: {
      // 路由元信息
      title: '登录',
      hidden: true, // 是否隐藏，true隐藏，false不隐藏
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: '/ceshi',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试',
          hidden: false,
        },
      },
    ],
  },
  {
    // 登录成功以后展示数据的路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    // 任意路由，没匹配上
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
