import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ require: false })
  avatarUrl?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
