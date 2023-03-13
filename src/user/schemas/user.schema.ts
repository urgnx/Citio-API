import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  title: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
