import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)


//固定展示的路由， 如果非开启权限分配功能，将全部路由添加到此处 ↓
export const constantRouterMap: RouteConfig[] = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Index/index.vue'),
    meta: {
      title: '首页',
      roles: ['user']
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Home/index.vue'),
    meta: {
      title: 'Home',
      roles: ['user']
    }
  }
];

//根据权限分配的路由
export const asyncRouterMap: RouteConfig[] = [
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Admin/index.vue'),
    meta: {
      title: '管理员',
      roles: ['admin'] //后台返给的权限
    }
  }
];




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
