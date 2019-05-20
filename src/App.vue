<template>
  <div id="app">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <keep-alive :include="keepAliveComponent">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import MyVantUI from '@/MyVantUI'
@Component
export default class App extends MyVantUI {
  private reloadViewAlive = true


  @Provide() reloadTrue = this.reloadViewAlive

  @Provide() // 对外抛出reload重载方法，提供刷新页面功能
  reload() {
    this.reloadViewAlive = false
    this.$nextTick(() => {
      this.reloadViewAlive = true
    })
  }
  private get keepAliveComponent() {
    return this.$store.getters.keepAliveComponent
  }
}
</script>
<style lang="less">
img {
  content: normal !important;
}
//定义全局输入错误提示信息
.error_msg {
    display: block;
    padding-left: 10px;
    color: #e74c3c;
    font-size: 12px;
    line-height: 16px;
}
.success_msg {
    display: block;
    padding-left: 10px;
    color: #2ecc71;
    font-size: 12px;
    line-height: 16px;
}
</style>
