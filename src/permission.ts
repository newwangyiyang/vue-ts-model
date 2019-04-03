import router from './routes/router'
import store from './store'
import Vue from 'vue';
//设置不需要权限验证页面的白名单
const whiteList = ['/Login']// no redirect whitelist

router.beforeEach((to, from, next) => {
  // 动态设置title***start***
  if(to.meta.title) {
    document.title = to.meta.title
  }
  // 动态设置title***end***

  
  if (Vue.prototype.$openPremission) { // 开启权限
    /* has token */
    if (to.path === '/Login') {
      next({ path: '/Login' })
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('getUserInfo').then(res => { // 拉取user_info
          const roles = res.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('generateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch((err) => {
          console.log(err);
        })
      } else {
        next();
      }
    }
  } else {
    //用户没有开启权限，放开所有，开启后则将next()进行注释
    next();

    //开启权限必须加上下面的逻辑判断 ↓
    // if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    //   next()
    // } else {
    //   console.log(to.path);
    //     //重定向到Index页面
    //   next(`/Index?redirect=${to.path}`) // 否则全部重定向到登录页
    // }
    //开启权限必须加上下面的逻辑判断 ↑
  }
})

router.afterEach(() => {
  // console.log(router);
});