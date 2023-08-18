import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

/**
 * @description: the DataproviderService will be handling the logic on fetching the data from Hackernews
 * @author: Henry
 */

@Injectable()
export class DataproviderService {
  constructor(private readonly httpService: HttpService) {}

  async getTop10TitleLast25StoriesData(): Promise<any> {
    return this.httpService
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .toPromise();
  }
}
