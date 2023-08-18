import { Module } from '@nestjs/common';
import { HackernewsService } from './hackernews.service';
import { HackernewsController } from './hackernews.controller';

@Module({
  controllers: [HackernewsController],
  providers: [HackernewsService],
})
export class HackernewsModule {}
