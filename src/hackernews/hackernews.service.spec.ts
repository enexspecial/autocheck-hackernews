import { Test, TestingModule } from '@nestjs/testing';
import { HackerNewsService } from './hackernews.service';

describe('HackernewsService', () => {
  let service: HackerNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HackerNewsService],
    }).compile();

    service = module.get<HackerNewsService>(HackerNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(service.getTopWordsInLast25Stories).toBeDefined();
  });

  it('should be defined', () => {
    expect(service.getTopWordsInLastWeek).toBeDefined();
  });

  it('should be defined', () => {
    expect(service.getTopWordsInLast600Stories).toBeDefined();
  });
});
