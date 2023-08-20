import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HackerNewsModule } from './hackernews/hackernews.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HackerNewsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
