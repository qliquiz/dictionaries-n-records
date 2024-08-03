import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { graphqlUploadExpress } from 'graphql-upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
  app.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));
}
bootstrap();
