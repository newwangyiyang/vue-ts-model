import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)


//固定展示的路由， 如果非开启权限分配功能，将全部路由添加到此处 ↓
export const constantRouterMap: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Index/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Home/index.vue'),
    meta: {
      title: 'home',
    }
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/404.vue'),
    meta: {
      title: '未找到页面',
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
];

//根据权限分配的路由
export const asyncRouterMap: RouteConfig[] = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "Index" */ '@/views/Home/index.vue'),
  //   meta: {
  //     title: 'home',
  //     roles: ['user']
  //   }
  // },
  {
    path: '/admin',
    name: 'admin',
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
