<template>
    <div class="index">
        <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="pending-payment" />
                <router-link :to="{name: 'login'}">待付款</router-link>
            </van-col>
            <van-col span="6">
                <van-icon name="records" />
                待接单
            </van-col>
            <van-col span="6">
                <van-icon name="tosend" />
                待发货
            </van-col>
            <van-col span="6">
                <van-icon name="logistics" />
                已发货
            </van-col>
        </van-row>
        <van-tabs v-model="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>

        <van-cell-group class="user-group">
            <van-cell icon="records" title="全部订单" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell icon="points" title="我的积分" is-link />
            <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
            <van-cell icon="gift-o" title="我收到的礼物" is-link />
        </van-cell-group>
        <div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae veritatis suscipit ad quaerat aperiam, ipsam esse, rerum ullam officiis? Necessitatibus modi autem accusamus itaque saepe. Ad, voluptate eaque?
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Provide, Inject } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import { IndexData } from '@/interface/dataIF'

import MyVantUI from '@/MyVantUI'
import { Route } from 'vue-router';

@Component({
    name: 'index',
})
export default class Index extends MyVantUI {
    private indexData: IndexData // 定义Index data的类型
    private active: number = 0
    constructor() {
        super()
        this.indexData = {
            name: '王一扬',
            age: 27,
            sex: 1
        }
    }

    changeName(): string {
        this.indexData.name = ''
        return this.indexData.name
    }

    public created() {

    }

    beforeRouteLeave(to: Route, from: Route, next: Function) {
        from.meta.keepAlive = false //（如果不需要再缓存当前组件，设置为false即可）
        next()
    }
    
    
}
</script>

<style scoped lang="less">
.index {
    .user {
        &-poster {
            width: 100%;
            display: block;
        }
        &-group {
            margin-bottom: 15px;
        }
        &-links {
            padding: 15px 0;
            font-size: 12px;
            text-align: center;
            background-color: #fff;
            .van-icon {
            display: block;
            font-size: 24px;
            }
        }
    }
}
</style>