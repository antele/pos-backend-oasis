import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from 'src/user/user.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { Role } from 'src/common/enum/enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService,
    private readonly userService:UserService
  ){}

  async validateUser(username:string, password:string){
    const user= await this.userService.findByUserName(username)
  
    const passwordMatch=await bcrypt.compare(password, user.password)

    if(user && passwordMatch){

      const {password, ...rest}=user
      return rest
    }
    return null      
  }

  async login(user:User){
    const payload={      
        id:user.id     
    }
    const {password,createdAt,updateAt,isActive,...rest}=user
    return {
      
      user:rest,
      accessToken:this.jwtService.sign(payload),
      refreshToken:this.jwtService.sign(payload,{expiresIn:'7d'})
    }    
  }

  async refreshToken(user:User){
    const payload={
      id:user.id
    }
    return{
      accessToken:this.jwtService.sign(payload),
    }
  }
 
}
