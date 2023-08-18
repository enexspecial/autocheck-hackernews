import { Test, TestingModule } from '@nestjs/testing';
import { DataproviderService } from './dataprovider.service';

describe('DataproviderService', () => {
  let service: DataproviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataproviderService],
    }).compile();

    service = module.get<DataproviderService>(DataproviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
