import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint()
export class PasswordValidate implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const pro = args.property;

    return text == args.object[pro + '_' + 'isConfirmed'];
  }

  defaultMessage() {
    // here you can provide default error message if validation failed
    return '两次密码不一致';
  }
}
