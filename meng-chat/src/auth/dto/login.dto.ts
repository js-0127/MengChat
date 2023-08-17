import { IsNotEmpty, Length } from 'class-validator';


export class LoginUser {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(6, 16, {message: '用户名长度在6-16位之间'})
  username: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 16, {message: '密码长度在6-16位之间'})
  password: string;

}
