import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Superhero } from 'src/superheroes/models/superhero.model';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SuperheroesService {
  constructor(
    @InjectModel(Superhero)
    private readonly superheroModel: typeof Superhero,
  ) {}

  async findAll(
    page: number,
  ): Promise<{ superheroes: Superhero[]; totalSuperheroes: number }> {
    try {
      const itemsPerPage = 5;
      const offset = (page - 1) * itemsPerPage;

      const { rows: superheroes, count: totalSuperheroes } =
        await this.superheroModel.findAndCountAll({
          offset,
          limit: itemsPerPage,
          order: [['id', 'ASC']],
        });

      return { superheroes, totalSuperheroes };
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
    images: Express.Multer.File[] | null,
  ): Promise<Superhero | null> {
    try {
      const superhero = await this.superheroModel.findByPk(id);

      if (!superhero) {
        return null;
      }

      const transformedSuperheroData: Partial<Superhero> = {
        ...superheroData,
      };

      if (images) {
        this.deleteImages(superhero.images);
        transformedSuperheroData.images = images.map((file) => file.filename);
      }

      this.deleteImages(superhero.images);

      Object.assign(superhero, transformedSuperheroData);

      await superhero.save();

      return superhero;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Failed to update superhero');
    }
  }

  async delete(id: number): Promise<Superhero | null> {
    try {
      const superhero = await this.findOne(id);

      if (!superhero) {
        return null;
      }

      this.deleteImages(superhero.images);

      await superhero.destroy();

      return superhero;
    } catch (error) {
      throw new NotFoundException('Failed to delete superhero');
    }
  }

  private deleteImages(images: string[]) {
    for (const imagePath of images) {
      const fullPath = path.join(
        __dirname,
        '..',
        '..',
        'public',
        'images',
        'superheroes',
        imagePath,
      );

      try {
        fs.unlinkSync(fullPath);
      } catch (error) {
        console.error(`Failed to delete image: ${fullPath}`, error);
      }
    }
  }
}
