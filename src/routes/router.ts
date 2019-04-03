import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//固定展示的路由， 如果非开启权限分配功能，将全部路由添加到此处 ↓
export const constantRouterMap = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Index/index.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Home/index.vue')
  },
];

//根据权限分配的路由
// export const asyncRouterMap = [
//   {
//     path: '/Admin',
//     name: 'Admin',
//     component: () => import('@/views/Admin/index'),
//     meta: {
//       roles: ['admin'] //后台返给的权限
//     }
//   },
//   {
//     path: '/Editor',
//     name: 'Editor',
//     component: () => import('@/views/Editor/index'),
//     meta: {
//       roles: ['editor'] //后台返给的权限
//     }
//   },
// ];




export default new Router({
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    //设置所有跳转后的路由都滚动到顶部
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
