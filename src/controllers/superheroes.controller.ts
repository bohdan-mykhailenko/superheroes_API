import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Superhero } from 'src/models/superhero';
import { SuperheroesService } from 'src/services/superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get()
  findAll() {
    return this.superheroesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.superheroesService.findOne(+id);
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }]))
  async createSuperhero(
    @UploadedFiles() files: { images: Express.Multer.File[] },
    @Body() superheroData: Superhero,
  ) {
    if (!files || !files.images || files.images.length === 0) {
      throw new BadRequestException('No files provided');
    }

    const superhero = await this.superheroesService.create(
      superheroData,
      files.images,
    );
    return superhero;
  }
}
