import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { login } from '../service/user'

const MainLayout = () => import('@/layout/MainLayout.vue')

// 路由配置 和以前一样
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/text',
    children: [
      {
        path: '/text',
        component: () => import('@/views/text/Index.vue')
      }, {
        path: '/picture',
        component: () => import('@/views/picture/Index.vue')
      }, {
        path: '/page',
        component: () => import('@/views/page/Index.vue')
      }, {
        path: '/design',
        component: () => import('@/views/design/Index.vue')
      }
    ]
  }
]

// 此处由【new VueRouter】的方式修改为【createRouter】的方式 其余无变化
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, _from, next) => {
  if (to.query?.ticket) {
    login(String(to.query.ticket), () => {
      next({
        path: to.path,
        query: {
          ...to.query,
          ticket: undefined
        }
      })
    })
  } else {
    next()
  }
})

export default router
