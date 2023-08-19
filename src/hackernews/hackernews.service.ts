import { Injectable } from '@nestjs/common';
import { DataproviderService } from '../dataprovider/dataprovider.service';

@Injectable()
export class HackernewsService {
  constructor(private readonly dataModel: DataproviderService) {}

  fetchLast25StoriesData() {
    return this.dataModel.top10Last25Stories();
  }

  fetchLastWeekData() {
    return this.dataModel.top10LastWeekPost();
  }

  fetchtKarmaData() {
    return this.dataModel.top10WithLeastKarma();
  }
}
