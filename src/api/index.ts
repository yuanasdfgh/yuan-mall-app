import { baseURL, TIME_OUT } from '../config'
import Request from '../utils/http'
import { useStore } from '@/store'

// import settle from 'axios/lib/core/settle'
// import buildURL from 'axios/lib/helpers/buildURL'

const request = new Request({
    baseURL: baseURL,
    timeout: TIME_OUT,
    interceptorHooks: {
        requestInterceptor: (config) => {
            const token = useStore().token
            if (config !== undefined && token) {
                config!.headers!.Authorization = `Bearer ${token}`
            }
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseInterceptor: (res) => {
            console.log(res, 'res')
            return res.data
        },
        responseInterceptorCatch: (err) => {
            return err
        },
    },
    // 
    // adapter: (conf) => {
    //     console.log(conf, 'conf--')

    //     return new Promise((resolve, reject) => {
    //         uni.request({
    //             // 这里需要手动拼接 url
    //             url: buildURL(conf.baseURL || '' + conf.url || '', conf.params, conf.paramsSerializer).replace(
    //                 /^\?/,
    //                 ''
    //             ),
    //             method: String(conf.method).toLowerCase() as any,
    //             responseType: conf.responseType as any,
    //             data: conf.data,
    //             success(response) {
    //                 const defResponse = {
    //                     data: response.data,
    //                     status: response.statusCode,
    //                     statusText: 'sucess',
    //                     headers: response.header,
    //                     config: conf,
    //                 }
    //                 // 这里需要手动调用 settle 保证 validateStatus 可以生效
    //                 settle(resolve, reject, defResponse)
    //             },
    //         })
    //     })
    // },
    // 
})

export default request
