import Vue from 'vue'
// 1、 引入初始化样式
import '@/assets/css/reset.css'
// 2、 引入权限管理
import '@/permission'


import App from './App.vue'
import router from './routes'
import store from './store'

Vue.config.productionTip = false
// 4、全局变量权限是否开启，需额外在 typings/tools.d.ts文件里面进行类型注册
Vue.prototype.$openPremission = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
