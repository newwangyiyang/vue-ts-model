import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getters'

import home from './modules/home'
import user from './modules/user'
import permission from './modules/permission'
const store = new Vuex.Store({
  modules: {
    home,
    user,
    permission
  },
  getters
})

//main.tss中需要额外引入
export default store;