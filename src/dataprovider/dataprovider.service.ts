import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

export interface IData {
  id: number;
  kids: Array<number>;
  by: string;
  title: string;
  url: string;
  type: string;
  time: number;
  score: number;
  karma?: IKarma;
}

export interface Iitems {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface IKarma {
  about: string;
  id: string;
  created: number;
  delay: number;
  user_karma: number;
  submitted: Array<number>;
}
const chunkArrayInGroups = (arr: number[], size: number) => {
  const myArray = [];
  for (let i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
};

const convertToUnixTimeStamp = () => {
  const now = new Date();
  return Math.floor(
    new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).getTime() /
      1000,
  );
};

export interface IParams {
  size?: number;
  time?: number;
  karma?: number;
}
@Injectable()
export class DataproviderService {
  cacheData: any[];
  httpService: AxiosInstance;
  constructor() {
    this.httpService = axios.create({
      baseURL: 'https://hacker-news.firebaseio.com/v0/',
    });
  }

  async getAllData({ size, time, karma }: IParams) {
    let allData$: any[] = [];
    const { data } = await this.httpService.get(`/newstories.json`);

    if (size) {
      const index = data.length - size;
      const sliceData = data.slice(index);
      const chunkRes = await this.getData(sliceData);
      allData$ = [...allData$, ...chunkRes];
    }

    if (time) {
      //   console.log('time', time);
    }

    if (karma) {
      const chunkedData = chunkArrayInGroups(data, 20);
      for (const chunk of chunkedData) {
        const chunkRes = await this.getData(chunk);
        allData$ = [...allData$, ...chunkRes];
      }
    }

    return allData$;
  }

  async getData(data: number[]) {
    const IDpromise = data.map(
      async (id: number) => await this.getSingleTitle(id),
    );
    const titles = await Promise.all(IDpromise);
    return titles;
  }

  async getSingleTitle(id: number): Promise<Iitems> {
    const { data } = await this.httpService.get(`/item/${id}.json`);
    const karma = await this.getSingleKarmaData(data.by);
    return {
      ...data,
      ...karma,
    };
  }

  async getSingleKarmaData(by: string) {
    const { data } = await this.httpService.get(`/user/${by}.json`);
    return { user_karma: data };
  }

  async top10Last25Stories() {
    const top25Data = await this.getAllData({ size: 25 });
    const response = top25Data.slice(0, 10);
    return response;
  }

  top10LastWeekPost() {
    return this.getAllData({ time: convertToUnixTimeStamp() });
  }

  top10WithLeastKarma() {
    return this.getAllData({ karma: 10000 });
  }
}
