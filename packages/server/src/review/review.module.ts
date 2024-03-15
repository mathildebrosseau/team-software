import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewSchema } from './entities/review.entity';
import { ReviewResolver } from './review.resolver';
import { ReviewService } from './review.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Review',
        schema: ReviewSchema,
      },
    ]),
  ],
  providers: [ReviewResolver, ReviewService],
})
export class ReviewModule {}
