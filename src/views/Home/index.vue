<template>
    <div class="home">
        <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos adipisci mollitia laborum vero ducimus facere, accusantium quisquam laboriosam corrupti iure quo? Quas ducimus laudantium in obcaecati cupiditate ab aliquid quisquam!
        </h1>
        <div class="top" v-sticky="{ zIndex: 1000, stickyTop: 0, disabled: false}">
            <van-button @click="submitValue" v-clipboard:copy="'这世界你是个错误'" type="info">{{num | telFormat}}</van-button>
        </div>
        <van-tabs v-model="active">
            <van-tab title="value">
                <form @submit.prevent="oneSub" data-vv-scope="one">
                    <van-cell-group>
                        <van-field v-model="value" placeholder="请输入用户名" v-validate="'required|phone'" data-vv-as="用户名" name="value" />
                        <span class="error_msg">{{ errors.first('one.value') }}</span>
                        <van-field v-model="value1" placeholder="请输入用户名2" v-validate="'required'" data-vv-as="用户名2" name="value1" />
                        <span class="error_msg">{{ errors.first('one.value1') }}</span>
                    </van-cell-group>
                    <van-button native-type="submit" type="default">{{num | telFormat}}</van-button>
                    
                </form>
            </van-tab>
            <van-tab title="value1">
                <form @submit.prevent="twoSub" data-vv-scope="two">
                    <van-cell-group>
                        <van-field v-model="value2" placeholder="请输入用户名2" v-validate="'required'" data-vv-as="用户名2" name="value2" />
                        <span class="error_msg">{{ errors.first('two.value2') }}</span>
                        <van-field v-model="value3" placeholder="请输入用户名3" v-validate="'required'" data-vv-as="用户名3" name="value3" />
                        <span class="error_msg">{{ errors.first('two.value3') }}</span>
                    </van-cell-group>
                    <van-button native-type="submit" type="danger">{{num | telFormat}}</van-button>
                </form>
            </van-tab>
        </van-tabs>
        <van-uploader :after-read="onRead">
            <van-icon name="photograph" />
        </van-uploader>
        <img :src="imgSrc" alt="">
    </div>
</template>

<script lang="ts">
import vantUI from '@/vantUI'
import { Component, Vue, Watch } from 'vue-property-decorator'
import getParams from '@/utils/getParams'
import store from 'store2' // store(ket, value) set  // store(key) get // store(false) clearAll

import { WebFile } from '@/interface/index'

import Compressor from 'compressorjs'; // 图片压缩
import * as _ from 'lodash'
@Component
export default class Home extends vantUI {
    private num: number
    private value: string
    private value1: string
    private value2: string
    private value3: string
    private active: number
    private imgSrc: string | null | ArrayBuffer
    constructor() {
        super()
        this.num = 321321321321
        this.value = ''
        this.value1 = ''
        this.value2 = ''
        this.value3 = ''
        this.active = 0
        this.imgSrc = ''
    }
    created() {
        console.log(getParams('id')) 
        console.log(store())
        console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
    }
    @Watch('value', {deep: true, immediate: true}) // 深度和立即监听
    change(newValue: string, oldValue: string) {
        console.log(newValue)
    }
    submitValue() {
        this.$toast('你好信息')
        this.$validator.validate().then((res: boolean): void => {
            console.log(res)
        })
    }
    oneSub(): void {
        this.$validator.validateAll('one').then((res: boolean): void => {
            console.log(res)
        })
    }
    twoSub(): void {
        this.$validator.validateAll('two').then((res: boolean): void => {
            console.log(res)
        })
    }
    onRead(files: WebFile) {
        const that = this
        new Compressor(files.file, {
            quality: 0.6,
            success(result) {
                console.log(result.size)
                const fr: FileReader = new FileReader()
                fr.readAsDataURL(result)
                fr.onloadend = () => {
                    that.imgSrc = fr.result
                }
            },
            error(err) {
                console.log(err.message);
            },
        });
    }

}
</script>

<style scoped lang="less">
.home {
    height: 200vh;
    .top {
        
    }
}
</style>