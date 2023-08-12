import { request } from '@/utils/request'
import { captchaData } from './auth'
import { registerType } from '@/types/auth'
export const getCaptcha = () => request<captchaData>('/auth/captcha', 'GET')

export const authRegister = (data: registerType) => request('/auth/register', 'POST', data)