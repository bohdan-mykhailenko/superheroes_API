import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SuperheroesController } from 'src/controllers/superheroes.controller';
import { Superhero } from 'src/models/superhero';
import { SuperheroesService } from 'src/services/superheroes.service';

@Module({
  imports: [SequelizeModule.forFeature([Superhero])],
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class SuperheroesModule {}
