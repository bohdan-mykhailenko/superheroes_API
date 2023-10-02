import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Superhero } from 'src/models/superhero';

@Module({
  imports: [SequelizeModule.forFeature([Superhero])],
  // controllers: [MessagesController],
  // providers: [MessagesService, SocketGateway],
})
export class SuperheroesModule {}
