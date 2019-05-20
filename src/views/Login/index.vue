<template>
    <div class="login">
        <!-- Vue中使用ts的弊端1、在Template模板标签中对对象的属性没有智能提示 -->
        <img class="login_bg" src="@/assets/img/loginBg.png" alt="">
        <div class="login_form_wrap">
            <van-tabs v-model="tabActive" type="card" color="#3498db">
                <van-tab title="手机号登录">
                    <form class="login_byphone_wrap" data-vv-scope="phone">
                        <van-cell-group>
                            <van-field
                                v-model="formDataByPhone.userphone"
                                required
                                clearable
                                label="手机号"
                                placeholder="请输入您的手机号"
                                v-validate="'required|phone'"
                                data-vv-as="手机号"
                                name="userphone"
                            />
                            <VER>{{errors.first('phone.userphone')}}</VER>
                            <van-field
                                v-model="formDataByPhone.usercode"
                                label="验证码"
                                clearable
                                placeholder="请输入4位验证码"
                                required
                                v-validate="'required|code'"
                                data-vv-as="验证码"
                                name="usercode"
                            >
                                <van-button native-type="button" @click="getCode" slot="button" size="small" type="info" :disabled="codeObj.codeBtnDisabled">{{codeObj.codeBtnText}}</van-button>
                            </van-field>
                            <VER>{{errors.first('phone.usercode')}}</VER>
                        </van-cell-group>
                    </form>
                </van-tab>
                <van-tab title="密码登录">
                    <form class="login_byphone_wrap" data-vv-scope="account"> 
                        <van-cell-group>
                            <van-field
                                v-model="formDataByAccount.useraccount"
                                required
                                clearable
                                label="账号"
                                placeholder="请输入您的账号"
                                v-validate="'required'"
                                data-vv-as="账号"
                                name="useraccount"
                            />
                            <VER>{{errors.first('account.useraccount')}}</VER>
                            <van-field
                                v-model="formDataByAccount.userpassword"
                                required
                                clearable
                                label="密码"
                                autocomplete
                                type="password"
                                placeholder="请输入您的密码"
                                v-validate="'required'"
                                data-vv-as="密码"
                                name="userpassword"
                            />
                            <VER>{{errors.first('account.userpassword')}}</VER>
                        </van-cell-group>
                    </form>
                </van-tab>
            </van-tabs>
        </div>
        <div class="btn_wrap">
            <van-button @click="login" size="large" type="info">登录</van-button>
        </div>
    </div>
</template>

<script lang="ts">
import MyVantUI from '@/MyVantUI'
import { Component } from 'vue-property-decorator'
import { LoginDataIF } from '@/interface/dataIF';
import VER from '@/components/VER/index.vue'
import s from 'store2'
import { Route } from 'vue-router';

@Component({
    components: {
        VER
    }
})
export default class MyLogin extends MyVantUI {
    private formDataByPhone = { // 手机号验证码登录
        userphone: '',
        usercode: ''
    }
    private codeObj = { // 验证码按钮控制
        codeBtnDisabled: false,
        codeBtnText: '获取验证码',
        codeTime: 60,
    }

    private formDataByAccount = {
        useraccount: '',
        userpassword: ''
    }

    private tabActive = 0 // 当前展示的tab索引


    private getCode() { // 1、请求验证码
        this.$validator.validate('phone.userphone').then(res => {
            if(res) {
                this.codeObj = {...this.codeObj, codeBtnDisabled: true, codeBtnText: `${this.codeObj.codeTime} s`}
                this.$toast('验证码已发送')

                let time = this.codeObj.codeTime

                const timer = setInterval(() => {
                    if(time <= 1) {
                        this.codeObj = {...this.codeObj, codeBtnText: `重新获取`, codeBtnDisabled: false}
                        clearInterval(timer)
                        return false
                    }
                    this.codeObj = {...this.codeObj, codeBtnText: `${--time} s`}
                }, 1000)
            }
        })
    }

    private login() { // 2、 系统登录
        if(this.tabActive===0) {
            this.$router.push({name: 'index'})
            this.$validator.validateAll('phone').then(res => {
                if(res) {
                    this.$toast('登陆成功')
                } else {
                    this.$toast('登陆失败')
                }
            })
        } else if(this.tabActive === 1) {
            this.$validator.validateAll('account').then(res => {
                if(res) {
                    this.$toast('登陆成功')
                } else {
                    this.$toast('登陆失败')
                }
            })
        }
    }

    
}

</script>

<style scoped lang="less">
.login {
    min-height: 100vh;
    .login_bg {
        display: block;
        width: 100%;
    }
    .login_form_wrap {
        margin-top: 50px;
    }
    .btn_wrap {
        margin: 20px;
    }
}

.login_byphone_wrap {
    width: 80vw;
    margin: 10px auto;
}
</style>