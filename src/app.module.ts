import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroesModule } from './superheroes/superheroes.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SequelizeModule } from '@nestjs/sequelize';
import { CorsModule } from '@nestjs/platform-express';
import { databaseConfig } from './config/database.config';
import * as path from 'path';

@Module({
  imports: [
    CorsModule,
    SequelizeModule.forRoot(databaseConfig),
    SuperheroesModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public', 'images', 'superheroes'),
      serveRoot: '/images/superheroes',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
