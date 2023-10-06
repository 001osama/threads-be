/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  text: string;
  userId: string;
  parentId: string;
  likes: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
