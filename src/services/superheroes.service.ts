import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Superhero } from 'src/models/superhero';

@Injectable()
export class SuperheroesService {
  constructor(
    @InjectModel(Superhero)
    private readonly superheroModel: typeof Superhero,
  ) {}

  async findAll(): Promise<Superhero[]> {
    return this.superheroModel.findAll();
  }

  async findOne(id: number): Promise<Superhero> {
    return this.superheroModel.findByPk(id);
  }

  async create(superheroData: Superhero, images: Express.Multer.File[]) {
    try {
      console.log(images);
      const parsedSuperheroData: Partial<Superhero> = {
        ...superheroData,
        images: images.map((file) => file.originalname),
      };

      const superhero = await this.superheroModel.create(parsedSuperheroData);
      return superhero;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Error adding a new superhero with images');
    }
  }
}
