import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
// import px2vw from 'postcss-px-to-viewport'
import px2vw from 'postcss-px-to-viewport-8-plugin'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default ({ mode }) => {
    return defineConfig({
        // 开发服务器配置
        server: {
            port: 30010,
            // 请求代理
            proxy: {
                '/dev': {
                    target: 'https://xxx.com/api',
                    changeOrigin: true,
                    // 路径重写，去掉/dev
                    rewrite: (path) => path.replace(/^\/dev/, ''),
                },
            },
        },
        plugins: [
            uni(),
            // mock
            viteMockServe({
                mockPath: 'mock', //mock文件地址
                localEnabled: !!loadEnv(mode, process.cwd()).VITE_MOCK, // 开发打包开关
                prodEnabled: !!loadEnv(mode, process.cwd()).VITE_MOCK, // 生产打包开关
                logger: false, //是否在控制台显示请求日志
                supportTs: true,
            }),
        ],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, 'src'),
                },
            ],
        },
        css: {
            postcss: {
                plugins: [
                    // 前缀追加
                    autoprefixer({
                        overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%'],
                        grid: true,
                    }),
                    //vw
                    px2vw({
                        // unitToConvert: 'px', // (String) 需要转换的单位,默认为px
                        viewportWidth: 375, // (Number)视窗的宽度，对应的是我们设计稿的宽度，一般是750
                        unitPrecision: 5, // (Number) 单位转换后保留的小数位
                        // propList: ['*'], // (Array) 指定可以转换的css属性，默认是['*']，代表全部属性进行转换
                        // viewportUnit: 'vw', //  (String)指定需要转换成的视窗单位，默认vw
                        // fontViewportUnit: 'vw', // (String)指定字体需要转换成的视窗单位，默认vw
                        // selectorBlackList: [], // (Array) 指定不转换为视窗单位的类，保留px，值为string或正则regexp
                        // minPixelValue: 1, // (Number) 默认值1，小于或等于`1px`不转换为视窗单位
                        // mediaQuery: false, // (Boolean) 是否在媒体查询时也转换px，默认false
                        // replace: true, // (Boolean)替换包含vw的规则
                        exclude: [/^node_modules$/], // (Array or Regexp) 设置忽略文件，如node_modules - [/^node_modules$/]
                        // landscape: false, // (Boolean) @media (orientation: landscape)与通过转换的值相加landscapeWidth
                        // landscapeUnit: 'vw', // (String) 横屏时使用的单位
                        // landscapeWidth: 568 // (Number) 横屏时使用的视口宽度
                    }),
                ],
            },
            // css预处理器
            preprocessorOptions: {
                scss: {
                    // 因为uni.scss可以全局使用，这里根据自己的需求调整
                    additionalData: '@import "./src/theme/theme.scss";',
                },
            },
        },
    })
}
