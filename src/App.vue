<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
    console.log('App Launch')
})
onShow(() => {
    console.log('App Show')
})
onHide(() => {
    console.log('App Hide')
})
// const green = '--theme-color: #42CA4D;--price-color:#FF7600;--btn-color:#FE960F;--subtheme-color:#70E038;'
const red = '--theme-color: #e93323;--price-color:#e93323;--btn-color:#FE960F;--subtheme-color:#FF6151;'
const blue = '--theme-color:#1db0fc;--price-color:#FD502F;--btn-color:#22CAFD;--subtheme-color:#40D1F4;'
const pink = '--theme-color:#ff448f;--price-color:#FF448F;--btn-color:#282828;--subtheme-color:#FF67AD;'
const orange = '--theme-color:#FE5C2D;--price-color:#FE5C2D;--btn-color:#FDB000;--subtheme-color:#FF9445;'
</script>
<style lang="scss">
@import './static/css/common.scss';

page {
    background-color: #f0f0f0;
    color: #333333 !important;
    font-size: 14px;
}
</style>
