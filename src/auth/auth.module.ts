import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';


@Module({
  controllers: [AuthController],
  providers: [  
    ConfigService,  
    AuthService,
    UserService, 
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy
  ],
  imports:[    
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({      
      useFactory: async(configService:ConfigService)=>({
        secret:configService.getOrThrow('SECRET_KEY'),
        signOptions:{expiresIn:'120s'}
      }),
      inject:[ConfigService]
    }),
    UserModule,   
  ],
  exports:[JwtStrategy,JwtModule]
  
})
export class AuthModule {}
