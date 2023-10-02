import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  NotFoundException,
  Delete,
  Patch,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { SuperheroesService } from 'src/superheroes/superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get()
  async findAll() {
    try {
      const superheroes = await this.superheroesService.findAll();

      return superheroes;
    } catch (error) {
      throw new BadRequestException('Failed to retrieve superheroes');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const superhero = await this.superheroesService.findOne(+id);

      if (!superhero) {
        throw new NotFoundException(`Superhero with ID ${id} not found`);
      }

      return superhero;
    } catch (error) {
      throw new BadRequestException('Failed to retrieve superhero');
    }
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }]))
  async createSuperhero(
    @UploadedFiles() files: { images: Express.Multer.File[] },
    @Body() superheroData: CreateSuperheroDto,
  ) {
    if (!files || !files.images || files.images.length === 0) {
      throw new BadRequestException('No files provided');
    }

    try {
      const superhero = await this.superheroesService.create(
        superheroData,
        files.images,
      );

      return superhero;
    } catch (error) {
      throw new BadRequestException('Failed to create superhero');
    }
  }

  @Patch(':id')
  async updateSuperhero(
    @Param('id') id: string,
    @Body() superheroData: UpdateSuperheroDto,
  ) {
    try {
      const updatedSuperhero = await this.superheroesService.update(
        Number(id),
        superheroData,
      );

      if (!updatedSuperhero) {
        throw new NotFoundException(`Superhero with ID ${id} not found`);
      }

      return updatedSuperhero;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Failed to update superhero');
    }
  }

  @Delete(':id')
  async deleteSuperhero(@Param('id') id: string) {
    try {
      const deletedSuperhero = await this.superheroesService.delete(+id);

      if (!deletedSuperhero) {
        throw new NotFoundException(`Superhero with ID ${id} not found`);
      }

      return deletedSuperhero;
    } catch (error) {
      throw new BadRequestException('Failed to delete superhero');
    }
  }
}
