import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';



const users = [
  {
    email: 'test@test.com',
    password: '123456',
  },

];
@Injectable()
export class UserService {
  
  createLogin(createUserDto: CreateUserDto) {
    const user = users.find(
      (user) => user.email === createUserDto.email && user.password === createUserDto.password
    );

    if (user) {
      return 'Login successful';
    } else {
      return 'Invalid email or password';
    }
  }

 
}
