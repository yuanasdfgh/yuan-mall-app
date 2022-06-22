<template>
    <view class="container">
        <view @click="goSearch">
            <uni-icons type="search" size="18" color="#c0c4cc" />
            <text style="color: gray; margin-left: 10px">搜索</text>
        </view>
        <text @click="goSearch" class="mr-10">搜索</text>
    </view>
</template>

<script setup lang="ts">
function goSearch() {
    uni.navigateTo({ url: '/pages/search/index' })
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    view {
        padding: 6.34px 10px;
        flex: 1;
        margin: 10px;
        background: rgba(#656565, 0.1);
        border-radius: 6px;
    }
}
</style>
