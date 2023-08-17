import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { MengPipe } from './common/pipe/meng.pipe';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new MengPipe());
  app.useGlobalInterceptors(new TransformInterceptor());

  app.setGlobalPrefix('/api/v1');
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('online 聊天室')
    .setDescription('powerd by Nest & Vue')
    .setVersion('1.0')

    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}
bootstrap();
