import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { AuthorSchema } from './entities/author.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Author',
        schema: AuthorSchema,
      },
    ]),
  ],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
