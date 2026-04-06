import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita CORS para o Next.js (Front-end) conseguir falar com o Nest (Back-end)
  app.enableCors();
  
  await app.listen(3000);
  console.log('🚀 Backend rodando em: http://localhost:3000');
}
bootstrap();