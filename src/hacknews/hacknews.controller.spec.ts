import { Test, TestingModule } from '@nestjs/testing';
import { HacknewsController } from './hacknews.controller';
import { HacknewsService } from './hacknews.service';

describe('HacknewsController', () => {
  let controller: HacknewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HacknewsController],
      providers: [HacknewsService],
    }).compile();

    controller = module.get<HacknewsController>(HacknewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
