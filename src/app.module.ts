import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { SuperheroesModule } from './modules/superheroes.module';

@Module({
  imports: [SequelizeModule.forRoot(databaseConfig), SuperheroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
