import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  readonly nickname: string;

  @IsString()
  readonly real_name: string;

  @IsString()
  @IsOptional()
  readonly origin_description: string;

  @IsString()
  readonly superpowers: string;

  @IsString()
  readonly catch_phrase: string;

  @IsArray()
  readonly images: string[];
}
