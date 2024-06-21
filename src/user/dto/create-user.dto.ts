import { Transform } from 'class-transformer';
import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
@Transform(({ value }) => value.trim())
 @IsString()
 @IsNotEmpty()
 @IsEmail()
email: string;

@MinLength(6)
@IsString()
@IsNotEmpty()
password: string;
}