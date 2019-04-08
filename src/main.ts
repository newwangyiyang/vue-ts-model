import Vue from 'vue'
// 1、 引入初始化样式
import '@/assets/css/reset.css'
// 2、 引入权限管理
import '@/permission'
// 3、 复制文本指令  v-clipboard:copy="'这世界你是个错误'" 进行使用
// v-clipboard:success="onCopy" 监听成功
// v-clipboard:error="onError" 监听失败
import VueClipboard from 'vue-clipboard2'
// 5、引入v-validate参数校验工具
import VeeValidate from 'vee-validate';
import '@/form/myFormValidate'

import App from './App.vue'
import router from './routes'
import store from './store'

Vue.config.productionTip = false
// 4、全局变量权限是否开启，需额外在 typings/tools.d.ts文件里面进行类型注册
Vue.prototype.$openPremission = true

Vue.use(VueClipboard).use(VeeValidate, {events: 'blur|input'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
