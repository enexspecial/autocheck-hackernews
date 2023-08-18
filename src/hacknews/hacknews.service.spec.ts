import { Test, TestingModule } from '@nestjs/testing';
import { HacknewsService } from './hacknews.service';

describe('HacknewsService', () => {
  let service: HacknewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HacknewsService],
    }).compile();

    service = module.get<HacknewsService>(HacknewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
