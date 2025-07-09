import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import { whiteNameList } from './constant'

import { createRouterGuards } from './router-guards'
import { basicRoutes } from './routes'
import 'nprogress/css/nprogress.css' // 进度条样式

export const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes: basicRoutes,
})

/**
 * reset router
 */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !whiteNameList.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export async function setupRouter(app: App) {
  // 创建路由守卫
  createRouterGuards(router, whiteNameList)

  app.use(router)

  // 路由准备就绪后挂载APP实例
  await router.isReady()
}
export default router
