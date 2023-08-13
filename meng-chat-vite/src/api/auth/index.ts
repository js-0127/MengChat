import { request } from "@/utils/request";
import { captchaData, responseRegister, responseLogin } from "./auth";
import { registerType, loginType } from "@/types/auth";
export const getCaptcha = () => request<captchaData>("/auth/captcha", "GET");

export const authRegister = (data: registerType) =>
  request<responseRegister>("/auth/register", "POST", data);

export const authLogin = (data: loginType) => request<responseLogin>("/auth/login", "POST", data)
