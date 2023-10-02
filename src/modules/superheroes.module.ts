import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { SequelizeModule } from '@nestjs/sequelize';
import { multerOptions } from 'src/config/multer.config';
import { SuperheroesController } from 'src/controllers/superheroes.controller';
import { Superhero } from 'src/models/superhero';
import { SuperheroesService } from 'src/services/superheroes.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Superhero]),
    MulterModule.register(multerOptions),
  ],
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class SuperheroesModule {}
