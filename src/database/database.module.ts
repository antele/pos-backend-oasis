import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('HOST'),
        database: configService.getOrThrow('DB_NAME'),
        username: configService.getOrThrow('DB_USER'),
        password: configService.getOrThrow('DB_PASSWORD'),       
        autoLoadEntities: true,
        ssl: configService.getOrThrow('SSL'),
        synchronize: configService.get('SYNCRONIZE'),
        entityPrefix: 'pos_'
      })
    })
  ]
})
export class DatabaseModule { }
