import router from './routes'
import store from './store'
import Vue from 'vue';
//设置不需要权限验证页面的白名单
const whiteList = ['/Login']// no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // 动态设置title***start***
  if(to.meta.title) {
    document.title = to.meta.title
  }
  // 动态设置title***end***  
  if (Vue.prototype.$openPremission) { // 开启权限
    if (to.path === '/Login') {
      next()
    } else {
      if(store.getters.token) { // 如果存在token， 则进行token验证 ，，，通过Login登录页面来获取token
        if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
          try {
            await store.dispatch('getUserInfo')
            const roles = store.getters.roles
            store.dispatch('generateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          }catch(err) { // 请求接口异常则直接跳转到登录页面
            console.log(err)
            next({path: '/Login'})
          }
        } else { // 如果已经存在roles信息，则全部放行
          next();
        }
      } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
          next()
        } else {
          next({path: '/Login'}) // 否则全部重定向到登录页
        }
      }
    }
  } else {
    //用户没有开启权限，放开所有
    next();
  }
})

router.afterEach(() => {
  // console.log(router);
});