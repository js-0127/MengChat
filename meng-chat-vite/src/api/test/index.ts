import { request } from "@/utils/request";

export const getHello = () => request("/hello", "GET");
