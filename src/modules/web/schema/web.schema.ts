import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Web extends Document {
  @Prop()
  row: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;
}

export const WebScheme = SchemaFactory.createForClass(Web);
