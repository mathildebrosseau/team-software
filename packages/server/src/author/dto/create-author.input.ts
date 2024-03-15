import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => String, { description: 'Author name' })
  title: string;

  @Field(() => Boolean, { description: 'Indicates if the author is verified or not' })
  verified: boolean;
}
