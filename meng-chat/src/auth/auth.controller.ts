import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { registerUser } from './dto/register.dto';
import { CaptchaEntity } from './entities/captcha.entity';
import { LoginUser } from './dto/login.dto';

@Controller('auth')
@ApiTags('用户权限模块')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('captcha')
  @ApiOperation({
    summary: '发送验证码',
  })
  async sendCaptcha(): Promise<CaptchaEntity> {
    const captcha = this.authService.genCaptcha();
    return new CaptchaEntity(captcha);
  }

  @Post('register')
  register(@Body() registerForm: registerUser) {
    return this.authService.registerUser(registerForm);
  }
  @Post('login')
  login(@Body() loginForm:LoginUser) {  
   return this.authService.loginUser(loginForm)
  }
}
