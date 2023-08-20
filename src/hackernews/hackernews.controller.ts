import { Controller, Get } from '@nestjs/common';
import { HackerNewsService } from './hackernews.service';
import { TopWordsResponseDto } from './dto/top-words-response.dto';

@Controller('top-words')
export class HackerNewsController {
  constructor(private readonly hackerNewsService: HackerNewsService) {}

  @Get('last-25-stories')
  async last25Stories(): Promise<TopWordsResponseDto> {
    const topWords = await this.hackerNewsService.getTopWordsInLast25Stories();
    return {
      topWords,
    };
  }

  @Get('last-week')
  async lastWeek(): Promise<TopWordsResponseDto> {
    const topWords = await this.hackerNewsService.getTopWordsInLastWeek();
    return {
      topWords,
    };
  }

  @Get('last-600-stories')
  async leastKarmaTitle(): Promise<TopWordsResponseDto> {
    const topWords = await this.hackerNewsService.getTopWordsInLast600Stories();
    return {
      topWords,
    };
  }
}
