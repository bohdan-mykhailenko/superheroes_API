import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class Superhero extends Model<Superhero> {
  @Column
  nickname: string;

  @Column
  real_name: string;

  @Column
  origin_description: string;

  @Column
  superpowers: string;

  @Column
  catch_phrase: string;

  @Column({
    type: 'ARRAY(DataTypes.STRING)',
  })
  images: string[];
}
