import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Superhero } from 'src/superheroes/models/superhero.model';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';

@Injectable()
export class SuperheroesService {
  constructor(
    @InjectModel(Superhero)
    private readonly superheroModel: typeof Superhero,
  ) {}

  async findAll(): Promise<Superhero[]> {
    try {
      return this.superheroModel.findAll();
    } catch (error) {
      throw new NotFoundException('Failed to retrieve superheroes');
    }
  }

  async findOne(id: number): Promise<Superhero | null> {
    try {
      return this.superheroModel.findByPk(id);
    } catch (error) {
      throw new NotFoundException('Failed to retrieve superhero');
    }
  }

  async create(
    superheroData: CreateSuperheroDto,
    images: Express.Multer.File[],
  ) {
    try {
      const transormedSuperheroData: Partial<Superhero> = {
        ...superheroData,
        images: images.map((file) => file.filename),
      };

      const superhero = await this.superheroModel.create(
        transormedSuperheroData,
      );

      return superhero;
    } catch (error) {
      throw new NotFoundException('Failed to create superhero');
    }
  }

  async update(
    id: number,
    superheroData: UpdateSuperheroDto,
  ): Promise<Superhero | null> {
    try {
      const superhero = await this.superheroModel.findByPk(id);

      if (!superhero) {
        return null;
      }
      console.log('Before Update:', superhero);

      Object.assign(superhero, superheroData);

      await superhero.save();

      console.log('After Update:', superhero);
      return superhero;
    } catch (error) {
      throw new NotFoundException('Failed to update superhero');
    }
  }

  async delete(id: number): Promise<Superhero | null> {
    try {
      const superhero = await this.findOne(id);

      if (!superhero) {
        return null;
      }

      await superhero.destroy();

      return superhero;
    } catch (error) {
      throw new NotFoundException('Failed to delete superhero');
    }
  }
}
