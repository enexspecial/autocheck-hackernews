import { Controller, Get } from '@nestjs/common';
import { HackernewsService } from './hackernews.service';

@Controller('hackernews')
export class HackernewsController {
  constructor(private readonly hackernewsService: HackernewsService) {}

  @Get('last-25-stories')
  async last25Stories() {
    return await this.hackernewsService.fetchLast25StoriesData();
  }

  @Get('last-week')
  async lastWeek() {
    return await this.hackernewsService.fetchLastWeekData();
  }

  @Get('last-600-stories-with-least-karma')
  async leastKarmaTitle() {
    return await this.hackernewsService.fetchtKarmaData();
  }
}
