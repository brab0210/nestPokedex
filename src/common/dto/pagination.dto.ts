import { Transform } from 'class-transformer';
import { IsPositive, IsOptional, Min, IsNumber } from 'class-validator';

export class PaginationDto {
  //@Transform((params) => parseInt(params))
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  offset?: number;
}
