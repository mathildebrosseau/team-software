import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Book } from 'src/book/entities/book.entity';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService, private readonly bookService: ReviewService) {}

  @Mutation(() => Review)
  createReview(@Args('createReviewInput') createReviewInput: CreateReviewInput) {
    return this.reviewService.create(createReviewInput);
  }

  @Query(() => [Review])
  reviews() {
    return this.reviewService.findAll();
  }

  @Query(() => Review)
  review(@Args('reviewId', { type: () => String }) reviewId: string) {
    return this.reviewService.findOne(reviewId);
  }

  @Mutation(() => Review)
  updateReview(@Args('updateReviewInput') updateReviewInput: UpdateReviewInput) {
    return this.reviewService.update(updateReviewInput._id, updateReviewInput);
  }

  @Mutation(() => Review)
  removeReview(@Args('reviewId', { type: () => String }) reviewId: string) {
    return this.reviewService.remove(reviewId);
  }

  @ResolveField(() => Book, { name: 'book' }) // Resolve the 'book' field
  async book(@Parent() review: Review) { // Use the Parent decorator to get the parent review object
    const { _id } = await this.reviewService.findOne(review._id); // Assuming 'bookId' is a field in the review object
    return this.bookService.findOne(_id); // Fetch the book using the BookService
  }
}
