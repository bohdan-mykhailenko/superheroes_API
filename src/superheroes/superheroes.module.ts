import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { SequelizeModule } from '@nestjs/sequelize';
import { multerOptions } from 'src/config/multer.config';
import { SuperheroesController } from 'src/superheroes/superheroes.controller';
import { Superhero } from 'src/superheroes/models/superhero.model';
import { SuperheroesService } from 'src/superheroes/superheroes.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Superhero]),
    MulterModule.register(multerOptions),
  ],
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class SuperheroesModule {}
