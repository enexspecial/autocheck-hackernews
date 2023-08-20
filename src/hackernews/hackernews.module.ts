import { Module } from '@nestjs/common';
import { HackerNewsService } from './hackernews.service';
import { HackerNewsController } from './hackernews.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [HackerNewsController],
  providers: [HackerNewsService],
})
export class HackerNewsModule {}
