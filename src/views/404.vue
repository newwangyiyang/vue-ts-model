<template>
    <div class="wrap_404">
        <div class="img_wrap">
            <img class="img_404" :src="url404" alt="">
            <p class="msg_404">抱歉，你访问的页面不存在</p>
            <van-button :to="{name: 'login'}" class="msg_btn" size="small" type="info">返回首页</van-button>
        </div>
    </div>
</template>

<script lang="ts">
import MyVantUI from '@/MyVantUI';


export default class Page404 extends MyVantUI {
    private readonly url404 = 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg'
}


</script>

<style scoped lang="less">
.wrap_404 {
    min-height: 100vh;
    padding-top: 100px;
    .img_wrap {
        .flex-v-c();
        .img_404 {
            width: 70vw;
            display: block;
        }
        .msg_404 {
            font-size: 14px;
            color: #666;
            margin-top: 20px;
        }
        .msg_btn {
            margin-top: 20px;
        }
    }
}
</style>