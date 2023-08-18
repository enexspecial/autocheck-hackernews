import { Module } from '@nestjs/common';
import { HackernewsService } from './hackernews.service';
import { HackernewsController } from './hackernews.controller';
import { HttpModule } from '@nestjs/axios';
import { DataproviderService } from '../dataprovider/dataprovider.service';

@Module({
  imports: [HttpModule],
  controllers: [HackernewsController],
  providers: [HackernewsService, DataproviderService],
})
export class HackernewsModule {}
