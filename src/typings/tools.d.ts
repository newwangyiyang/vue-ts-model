// 给vue对象添加全局属性
declare module 'vue/types/vue' {
    interface Vue {
      $openPremission: any,
    }
}
declare module 'qs' // form表单POST提交，对参数序列化
declare module 'vue-clipboard2' // 复制
declare module 'vue-sticky' // 吸顶
