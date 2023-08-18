import { Injectable } from '@nestjs/common';
import { DataproviderService } from '../dataprovider/dataprovider.service';

@Injectable()
export class HackernewsService {
  constructor(private readonly dataModel: DataproviderService) {}

  getTop10Last25Stories() {
    return this.dataModel.top10Last25Stories();
  }

  getTitleByID(param: number) {
    return this.dataModel.getSingleTitle(param);
  }
}
