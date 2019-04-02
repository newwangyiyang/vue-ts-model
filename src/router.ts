import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import(/* webpackChunkName: "Index" */ './views/Index/index.vue')
    },
  ]
})
