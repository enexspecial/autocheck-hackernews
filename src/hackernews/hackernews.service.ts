import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

export interface IStory {
  title: string;
  time: number;
  by: string;
}

export interface IUser {
  karma: number;
}

@Injectable()
export class HackerNewsService {
  httpService: AxiosInstance;
  constructor() {
    this.httpService = axios.create({
      baseURL: 'https://hacker-news.firebaseio.com/v0/',
    });
  }

  private async fetchTopStoriesIds(): Promise<number[]> {
    const { data } = await this.httpService.get(`/topstories.json`);
    return data;
  }

  private async fetchStoryById(storyId: number): Promise<IStory> {
    const { data } = await this.httpService.get<IStory>(
      `/item/${storyId}.json`,
    );
    return data;
  }

  private async fetchUserByUsername(username: string): Promise<IUser> {
    const { data } = await this.httpService.get<IUser>(
      `/user/${username}.json`,
    );
    return data;
  }

  private async extractTopWordsFromTitles(
    title: string[],
    count: number,
  ): Promise<string[]> {
    // first split the title into individual words
    const words = title.join(' ').split(/\s+/);
    // count the occurence of each word
    const wordCounts = words.reduce((acc: Record<string, number>, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    // sort by occurence and return the top count words;
    return Object.entries(wordCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, count)
      .map((entry) => entry[0]);
  }

  public async getTopWordsInLast25Stories(): Promise<string[]> {
    const topStoriesIds = await this.fetchTopStoriesIds();
    const last25StoryIds = topStoriesIds.slice(0, 25);
    const storiesPromise = last25StoryIds.map(
      async (storyId: number) => await this.fetchStoryById(storyId),
    );
    const last25Stories = await Promise.all(storiesPromise);
    const titles = last25Stories.map((story) => story.title);
    return this.extractTopWordsFromTitles(titles, 10);
  }

  public async getTopWordsInLastWeek(): Promise<string[]> {
    const topStoriesIds = await this.fetchTopStoriesIds();
    // fetch details for top stories
    const storiesPromises = topStoriesIds.map((storyId) =>
      this.fetchStoryById(storyId),
    );
    const allTopStories = await Promise.all(storiesPromises);
    // filter stories from exactly last week
    const oneWeekAgoTimeStamp = Date.now() / 1000 - 60 * 60 * 24 * 7;
    const lastWeekStories = allTopStories.filter(
      (story) => story.time >= oneWeekAgoTimeStamp,
    );
    // extract titles and find the most top 10 occuring words
    const titles = lastWeekStories.map((story) => story.title);
    return this.extractTopWordsFromTitles(titles, 10);
  }

  public async getTopWordsInLast600Stories() {
    const topStoriesIds = await this.fetchTopStoriesIds();
    let titles: string[] = [];
    const batchSize = 20;
    for (let i = 0; i < 600; i += batchSize) {
      const batchIds = topStoriesIds.slice(i, i + batchSize);
      const stories = await Promise.all(
        batchIds.map((id) => this.fetchStoryById(id)),
      );
      // parallelize the user requests
      const userWithKarma = await Promise.all(
        stories.map(async (story) => {
          const user = await this.fetchUserByUsername(story.by);
          return user.karma >= 10000 ? story.title : null;
        }),
      );
      titles = titles.concat(
        userWithKarma.filter((title): title is string => !!title),
      );
    }

    return this.extractTopWordsFromTitles(titles, 10);
  }
}
