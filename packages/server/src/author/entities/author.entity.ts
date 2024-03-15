import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Review } from 'src/review/entities/review.entity';

@Schema()
@ObjectType()
export class Author {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  verified: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Review' })
  @Field(() => [Review])
  reviews: [Review];
}

export type AuthorDocument = Author & mongoose.Document;

export const AuthorSchema = SchemaFactory.createForClass(Author);
