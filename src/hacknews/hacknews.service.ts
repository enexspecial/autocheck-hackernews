import { Injectable } from '@nestjs/common';
import { CreateHacknewDto } from './dto/create-hacknew.dto';
import { UpdateHacknewDto } from './dto/update-hacknew.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class HacknewsService {

  constructor(private readonly httpService:HttpService){}
  create(createHacknewDto: CreateHacknewDto) {
    return 'This action adds a new hacknew';
  }

  findAll(): Observable<any> {
    // return `This action returns all hacknews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hacknew`;
  }

  update(id: number, updateHacknewDto: UpdateHacknewDto) {
    return `This action updates a #${id} hacknew`;
  }

  remove(id: number) {
    return `This action removes a #${id} hacknew`;
  }
}
