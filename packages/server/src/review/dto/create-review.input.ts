import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(() => Number, { description: 'Rating of the review' })
  rating: Number;

  @Field(() => String, { description: 'Content of the review' })
  content: String;
}
