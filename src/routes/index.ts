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
      title: '首页',
      keepAlive: true //如果需要缓存当前组件，设置成true
    }
  },
  {
    path: '/home',
    name: 'home',
    beforeEnter(to, from, next) {
      setTimeout(() => {
        next()
      }, 10000)
    },
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
  mode: 'hash',
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    //设置所有跳转后的路由都滚动到顶部

    // 由于当前配置了keepAlive缓存，所以现在对跳转路由防护顶部进行注释，需要根据逻辑进行适配
    // 注意: 这个功能只在支持 history.pushState 的浏览器中可用。

    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
  }
})
