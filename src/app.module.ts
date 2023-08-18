import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HacknewsModule } from './hacknews/hacknews.module';

@Module({
  imports: [HacknewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
