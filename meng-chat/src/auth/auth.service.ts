import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CaptchaType, registerUser } from './dto/register.dto';
import * as svgCaptcha from 'svg-captcha';
import { Document, Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../db/schemas/schema';
import { hash, verify } from 'argon2';
import { LoginUser } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  //保存验证码
  private captchas: Map<string, CaptchaType> = new Map();
  public validaeCaptcha: CaptchaType;
  constructor(@InjectModel('USER_MODEL') private readonly userModel: Model<User>, private readonly jwt: JwtService) {

  }
  /**
   * @description 返回验证码
   * @date 08/08/2023
   * @returns {*} captcha
   * @memberof AuthService
   */
  public genCaptcha(): CaptchaType {
    //是否生成了相同的验证码
    let getDiffCapctha = false;
    let c: svgCaptcha.CaptchaObj;
    //直到生成captchas中没有的验证码
    while (!getDiffCapctha) {
      //持续创建
      c = svgCaptcha.create();
      if (!this.captchas.has(c.text)) {
        const captcha = Object.assign(c, {
          id: String(Math.random()),
          time: new Date(),
        });
        getDiffCapctha = true;
        this.captchas.set(c.text, captcha);
      }
    }
    this.validaeCaptcha = this.captchas.get(c.text);

    return this.captchas.get(c.text)
  }

  /**
  * @description 验证注册用户
  * @date 08/08/2023
  * @returns {*} promise
  * @memberof AuthService
  */
  public async registerUser(registerUser: registerUser): Promise<any> {
    const { username, password, text } = registerUser;
    //验证验证码是否过期
    await isOverDue(this.validaeCaptcha.time)
    //验证验证码是否正确
    await validateCaptchaMethod(text, this.validaeCaptcha.text)


    /**
   * @description 注册验证用户是否存在
   * @date 08/08/2023
   * @memberof AuthService
   */
    async function isExist(username: string, model: Model<User, {}, {}, {}, Document<unknown, {}, User> & User & { _id: Types.ObjectId; }, any>): Promise<any> {
      const isExist = await model.findOne({ username: username })
      if (isExist) {
        throw new HttpException('用户名已经存在', HttpStatus.BAD_REQUEST)
      }
    }
    await isExist(username, this.userModel)
    //最后添加用户
    await this.userModel.create({ username: username, password: await hash(password) })
    return {
      code: 200,
      message: 'success'
    }

  }

  /**
   * @description 登录验证
   * @date 08/12/2023
   * @memberof AuthService
   */
  public async loginUser(loginUser: LoginUser) {

    const { username, password } = loginUser
    //验证是否有这个用户
    const user = await isExistUser(this.userModel, username)
    // 验证密码是否正确
    if (!await verify(user.password, password)) {
      throw new BadRequestException('密码错误')
    }
    //都正确的话要生成TOKEN,返回给前端
    const token = await createTOKEN(this.jwt, { username: username, password: username })
    return {
      code: 200,
      message: 'success',
      data: {
       token: token,
       username: username
      }
    }
  }
}
/**
  * @description 登录用户名验证
  * @date 08/12/2023
  * @memberof AuthService
  */
async function isExistUser(model: any, username: string) {
  const user = await model.findOne({
    username: username
  })
  if (!user) {
    throw new HttpException('用户未注册', HttpStatus.BAD_REQUEST)
  }
  return user
}

async function createTOKEN(jwt, { username, password }) {
  return  await jwt.signAsync({ username, password })
}

/**
  * @description 验证验证码是否过期
  * @date 08/08/2023
  * @returns {*} {promise}
  * @memberof AuthService
  */
async function isOverDue(captchaTime: Date): Promise<any> {
  const time = captchaTime.getTime();
  if (new Date().getTime() - time > 1 * 60 * 1000) {
    throw new HttpException('验证码过期', HttpStatus.BAD_REQUEST)
  }
}

/**
   * @description 验证验证码是否正确
   * @date 08/08/2023
   * @returns {*} {promise}
   * @memberof AuthService
   */
async function validateCaptchaMethod(text: string, validaText: string): Promise<any> {
  if (
    text.toLocaleLowerCase() !== validaText.toLocaleLowerCase()
  ) {

    throw new HttpException('验证码错误', HttpStatus.BAD_REQUEST)
  }

}


