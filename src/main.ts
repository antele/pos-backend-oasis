import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: 'https://cliente-frontend-oasis.onrender.com' , 
    credentials:true
  })
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true
    })
  );
  const PORT=process.env.PORT || 3000
  await app.listen(PORT);
}
bootstrap();
