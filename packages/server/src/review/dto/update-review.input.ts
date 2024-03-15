import { CreateReviewInput } from './create-review.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReviewInput extends PartialType(CreateReviewInput) {
  @Field(() => ID)
  _id: string;
}
