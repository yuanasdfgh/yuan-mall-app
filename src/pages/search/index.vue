<template>
    <view class="wrap" data-theme="green">
        <uni-icons class="icon" type="back" size="20" @click="back" />
        <uni-search-bar
            class="search-bar"
            style="flex: 1"
            @confirm="search"
            :focus="true"
            v-model="searchValue"
            placeholder="搜索"
            cancelButton="none"
            clearButton="always"
            placeholder-class="titles"
        >
            <template v-slot:clearIcon style="line-height: auto">
                <text style="color: green">|</text>
                <text @click.stop="search">搜索</text>
            </template>
        </uni-search-bar>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store'
const state = useStore()

const searchValue = ref(null)
const search = () => {
    state.userInfo=[1444441,1545]
    console.log(state.userInfo, '搜索')
}
function back() {
    uni.navigateBack({ delta: 1 })
}
</script>
<style lang="scss" scoped>
.wrap {
    // background-color: var(--theme-color);
    display: flex;
    align-items: center;
    // @include color_primary($color-primary-blue);
    @include background_color('background_color1');
    .icon {
        margin-right: -5px;
        margin-left: 10px;
    }
    text {
        margin-right: 10px;
    }
    .search-bar {
        font-size: 12px;
    }
    ::v-deep .uni-searchbar__box {
        height: auto;
        font-size: 14px;
        padding: 4px 0;
        background: rgba(#656565, 0.1) !important;
    }
}
</style>
