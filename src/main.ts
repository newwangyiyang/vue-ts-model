import Vue from 'vue'
// 1、 引入初始化样式
import '@/assets/css/reset.css'



import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
