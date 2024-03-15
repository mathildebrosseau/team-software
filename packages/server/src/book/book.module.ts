import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { BookSchema } from './entities/book.entity';
import { ReviewService } from 'src/review/review.service';
import { ReviewModule } from 'src/review/review.module';
import { ReviewResolver } from 'src/review/review.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Book',
        schema: BookSchema,
      }
    ]),
  ],
  providers: [BookResolver, BookService]
})
export class BookModule {}
