import { Test, TestingModule } from '@nestjs/testing';
import { HackernewsController } from './hackernews.controller';
import { HackernewsService } from './hackernews.service';

describe('HackernewsController', () => {
  let controller: HackernewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackernewsController],
      providers: [HackernewsService],
    }).compile();

    controller = module.get<HackernewsController>(HackernewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
