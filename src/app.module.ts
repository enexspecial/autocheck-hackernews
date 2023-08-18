import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HackernewsModule } from './hackernews/hackernews.module';
import { DataproviderService } from './dataprovider/dataprovider.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HackernewsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, DataproviderService],
})
export class AppModule {}
