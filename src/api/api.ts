import request from './index'
import * as types from '@/types'

export function login(params? :any) {
    return request.post<types.LoginInfo>({
        url: '/login',
        data: params,
    })
}
