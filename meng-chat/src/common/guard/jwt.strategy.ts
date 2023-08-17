import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../db/schemas/schema';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
        constructor(configService: ConfigService, @InjectModel('USER_MODEL') private readonly UserModel: Model<User>) {
                super({
                        //解析用户提交的header中的Bearer Token数据
                        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                        //加密码的 secret
                        secretOrKey: configService.get('TOKEN_SECRET'),
                });
        }
        //验证通过后获取用户资料
        async validate({ username }) {
                return await this.UserModel.findById({
                        username: username
                });
        }
}