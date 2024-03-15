import { Resolver, Query, Mutation, Args, ID, Parent, ResolveField } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Review } from 'src/review/entities/review.entity';
import { ReviewService } from 'src/review/review.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book])
  books() {
    return this.bookService.findAll();
  }

  @Query(() => Book)
  book(@Args('bookId', { type: () => ID }) bookId: string) {
    return this.bookService.findOne(bookId);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput._id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('bookId', { type: () => String }) bookId: string) {
    return this.bookService.remove(bookId);
  }

  @ResolveField('reviews', () => [Review], { nullable: true })
  async reviews(@Parent() book: Book) { 
    return await book.reviews;
  }
}
