<template>
    <div>
        <h1>Login</h1>
        <div class="van-ellipsis">这是一段宽度限制 250px 的文字，后面的内容会省略</div>
        <div class="van-hairline--top"></div>
        <transition name="van-slide-up">
            <div v-show="visible">Slide Up</div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import VantUI from '@/vantUI'
import _ from 'lodash'
@Component
export default class Login extends VantUI {
    private visible: boolean = false
    created() {
        const n: number = 9.999999
        const nn = _.round(n, 2)
        if(_.isInteger(nn)) {
            console.log(nn + '.00')
        }
        for(let i = 0; i < 5; i++) {
            console.log(_.uniqueId('wangyiyang'))
        }
    }
    mounted() {
        setTimeout(() => {
            this.visible = true
        }, 2000)
        console.log(this.$openPremission)
    }
}
</script>

<style scoped>

</style>