import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  // id:string // mongo me lo da

  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  no: number;
}
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
