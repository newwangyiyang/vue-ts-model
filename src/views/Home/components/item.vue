<template>
    <div class="item">
        <h1 @click="testStr">{{str}}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import MyVantUI from '@/MyVantUI'
@Component
export default class Item extends MyVantUI {
    @Prop({type: String, default: '321', required: true}) readonly str!: string

    @Emit('getStr')
    testStr() {
        return this.str
    }
}
</script>

<style scoped lang="less">

</style>