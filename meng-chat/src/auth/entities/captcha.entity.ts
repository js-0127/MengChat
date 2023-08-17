import { Exclude } from 'class-transformer';
import { CaptchaType } from '../dto/register.dto';
export class CaptchaEntity {
  @Exclude()
  text: string;

  constructor(partial: Partial<CaptchaType>) {
    Object.assign(this, partial);
  }
}
