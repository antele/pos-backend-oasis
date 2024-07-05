import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy,'jwt-refresh'){
  constructor(
     configService:ConfigService
  ){
    super({
      jwtFromRequest:ExtractJwt.fromBodyField('refresh'),
      ignoreExpiration:false,
      secretOrKey:configService.get('SECRET_KEY')
    })
  }
  async validate(payload: any){
    return { user: payload.sub, username: payload.username };
  }
}