import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { IsString, IsPositive, IsNumber } from 'class-validator';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
