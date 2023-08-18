import { Module } from '@nestjs/common';
import { HacknewsService } from './hacknews.service';
import { HacknewsController } from './hacknews.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], // add HttpModule
  controllers: [HacknewsController],
  providers: [HacknewsService],
})
export class HacknewsModule {}
