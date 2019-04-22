<template>
    <div class="error_wrap">
        <slot />
    </div>
</template>

<script lang="ts">
import MyVantUI from '@/MyVantUI';
import { Component } from 'vue-property-decorator';
@Component
export default class VER extends MyVantUI{}
</script>

<style lang="less" scoped>
.error_wrap {
    font-size: 13px;
    color: #e74c3c;
    line-height: 20px;
    padding: 0 10px;
}
</style>