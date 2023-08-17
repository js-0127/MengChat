import {request} from '@/utils/request'

export const userInfo = () => request('/user/info', "GET")