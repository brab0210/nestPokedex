import { IsString, IsPositive, IsNumber } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  name: string;

  @IsPositive()
  @IsNumber()
  no: number;
}
