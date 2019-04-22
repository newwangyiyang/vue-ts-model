// 给vue对象添加全局属性
// declare module 'vue/types/vue' { // 注释该模块，导致vue中的原生变量$router、$refs报错
//     interface Vue {
//       $openPremission: any,
//     }
// }
declare module 'qs' // form表单POST提交，对参数序列化
declare module 'vue-clipboard2' // 复制
declare module 'vue-sticky' // 吸顶
// declare module 'store' // 本地存储
declare module 'nprogress' // 顶部浏览器进度条

