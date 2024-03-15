import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Review } from 'src/review/entities/review.entity';

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field()
  length: number;

  @Prop()
  @Field(() => [Review], { nullable: true })
  reviews: [Review];
}

export type BookDocument = Book & mongoose.Document;

export const BookSchema = SchemaFactory.createForClass(Book);
