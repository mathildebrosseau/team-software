import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String, { description: 'Title of the book' })
  title: string;

  @Field(() => Number, { description: 'Number of pages in the book' })
  length: number;
}
