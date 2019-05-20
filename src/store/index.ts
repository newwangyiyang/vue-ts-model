import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getters'

import home from './modules/home'
import user from './modules/user'
import permission from './modules/permission'
import keepAlive from './modules/keepAlive'
const store = new Vuex.Store({
  modules: {
    home,
    user,
    permission,
    keepAlive
  },
  getters
})

//main.tss中需要额外引入
export default store;