import { Controller, Get, Param } from '@nestjs/common';
import { HackernewsService } from './hackernews.service';

@Controller('hackernews')
export class HackernewsController {
  constructor(private readonly hackernewsService: HackernewsService) {}

  @Get('get-top10-last25stories')
  async getLast25Stories() {
    // const response = await this.hackernewsService.getTop10Last25Stories();
    // response.subscribe(async (data) => console.log(await data));
    return await this.hackernewsService.getTop10Last25Stories();
  }

  @Get('get-title/:id')
  getTitleByID(@Param('id') id: string) {
    return this.hackernewsService.getTitleByID(+id);
  }
}
