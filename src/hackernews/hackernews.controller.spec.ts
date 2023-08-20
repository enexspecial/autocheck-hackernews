import { Test, TestingModule } from '@nestjs/testing';
import { HackerNewsController } from './hackernews.controller';
import { HackerNewsService } from './hackernews.service';

describe('HackernewsController', () => {
  let controller: HackerNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackerNewsController],
      providers: [HackerNewsService],
    }).compile();

    controller = module.get<HackerNewsController>(HackerNewsController);
  });

  it('should be defined', () => {
    expect(controller.last25Stories).toBeDefined();
  });

  // it('should return an array of Entity class', async () => {
  //   const all: Entity[] = await controller.last25Stories();
  //   expect(all.every((e) => e instanceof Entity)).toBeTruthy();
  // });

  it('should be defined', () => {
    expect(controller.lastWeek).toBeDefined();
  });

  // it('should return an array of Entity class', async () => {
  //   const all: Entity[] = await controller.lastWeek();
  //   expect(all.every((e) => e instanceof Entity)).toBeTruthy();
  // });

  it('should be defined', () => {
    expect(controller.leastKarmaTitle).toBeDefined();
  });

  // it('should return an array of Entity class', async () => {
  //   const all: Entity[] = await controller.leastKarmaTitle();
  //   expect(all.every((e) => e instanceof Entity)).toBeTruthy();
  // });
});
