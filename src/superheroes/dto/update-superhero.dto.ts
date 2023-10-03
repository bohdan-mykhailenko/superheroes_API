import { IsString, IsArray, IsOptional } from 'class-validator';

export class UpdateSuperheroDto {
  @IsString()
  @IsOptional()
  readonly nickname: string;

  @IsString()
  @IsOptional()
  readonly real_name: string;

  @IsString()
  @IsOptional()
  readonly origin_description: string;

  @IsString()
  @IsOptional()
  readonly superpowers: string;

  @IsString()
  @IsOptional()
  readonly catch_phrase: string;

  @IsArray()
  @IsOptional()
  readonly images: string[];
}
