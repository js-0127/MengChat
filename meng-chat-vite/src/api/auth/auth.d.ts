
export type captchaData = {
  id: string;
  data: string;
  time: Date;
};

export type responseRegister = {
  code: number;
  statusCode?: number;
  message: String;
}

export type responseLogin = {
  code: number;
  message: String;
  data: {
    token: String
  }
}
