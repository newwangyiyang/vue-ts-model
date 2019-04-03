import Vue from 'vue';
import './myFormValidate';
import VeeValidate from 'vee-validate';


Vue.use(VeeValidate, {
    events: 'blur|input'
});