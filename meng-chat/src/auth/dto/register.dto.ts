import { ApiProperty } from '@nestjs/swagger';
import { PasswordValidate } from './rules/is_confirmed'
import { IsNotEmpty, Length, Validate } from 'class-validator';
export class CaptchaType {
  @ApiProperty()
  id: string;
  @ApiProperty()
  text: string;
  @ApiProperty()
  data: string;
  @ApiProperty()
  time: Date;
}

export class registerUser {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(6, 16, {message: '用户名长度在6-16位之间'})
  username: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 16, {message: '密码长度在6-16位之间'})
  @Validate(PasswordValidate)
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: '确认密码不能为空' })
  password_isConfirmed: number;
  @IsNotEmpty({ message: '验证码不能为空' })
  text: string;
}
