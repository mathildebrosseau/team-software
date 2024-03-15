import { Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewDocument } from './entities/review.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel('Review') private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(createReviewInput: CreateReviewInput) {
    return this.reviewModel.create(createReviewInput);
  }

  async findAll() {
    return this.reviewModel.find();
  }

  async findOne(id: string) {
    return this.reviewModel.findById(id);
  }

  async findByBookId(bookId: string) {
    return this.reviewModel.find({ book_id: bookId });
  }

  async update(id: string, updateReviewInput: UpdateReviewInput) {
    return this.reviewModel.findByIdAndUpdate(id, updateReviewInput, { new: true });
  }

  remove(id: string) {
    return this.reviewModel.findByIdAndDelete(id);
  }
}
