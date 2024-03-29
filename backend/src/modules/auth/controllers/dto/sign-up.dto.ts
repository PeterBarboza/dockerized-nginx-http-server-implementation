import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class SignUpDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @IsString()
  password!: string

  @IsNotEmpty()
  @IsString()
  username!: string
}