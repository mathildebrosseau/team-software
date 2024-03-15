import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Author } from 'src/author/entities/author.entity';
import { Book } from 'src/book/entities/book.entity';

@Schema()
@ObjectType()
export class Review {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  rating: number;

  @Prop()
  @Field()
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
  @Field(() => Book)
  book: Book;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
  @Field(() => Author)
  author: Author;
}

export type ReviewDocument = Review & mongoose.Document;

export const ReviewSchema = SchemaFactory.createForClass(Review);
