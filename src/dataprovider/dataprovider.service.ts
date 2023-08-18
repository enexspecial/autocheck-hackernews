import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, forkJoin, switchMap, tap, of } from 'rxjs';

@Injectable()
export class DataproviderService {
  cacheData: any;
  baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  constructor(private readonly httpService: HttpService) {}
  getAllTitles() {
    if (this.cacheData) return of(this.cacheData);
    return this.httpService.get(`${this.baseUrl}topstories.json`).pipe(
      switchMap((response) =>
        forkJoin(response.data.map((data: any) => this.getSingleTitle(data))),
      ),
      tap((val) => (this.cacheData = val)),
    );
  }

  getSingleTitle(id: number) {
    return this.httpService
      .get(`${this.baseUrl}item/${id}.json`)
      .pipe(map((response) => response.data));
  }

  top10Last25Stories() {
    const titleCount: { word: string; count: number }[] = [];
    return this.getAllTitles().pipe(
      map((titles: any) =>
        titles
          .sort((a: any, b: any) => b.time - a.time)
          .slice(0, 25)
          .reduce((prev: any, next: any) => {
            const splitTitle = next.title.split(' ');
            splitTitle.forEach((word: any) => {
              const foundWord = titleCount.find((item) => item.word === word);
              foundWord
                ? foundWord.count++
                : titleCount.push({ word, count: 1 });
            });
            return titleCount;
          }, [])
          .sort((a: any, b: any) => b.count - a.count)
          .slice(0, 10),
      ),
    );
  }
}
