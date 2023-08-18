import { Injectable } from '@nestjs/common';
import { CreateHackernewDto } from './dto/create-hackernew.dto';
import { UpdateHackernewDto } from './dto/update-hackernew.dto';

@Injectable()
export class HackernewsService {
  create(createHackernewDto: CreateHackernewDto) {
    return 'This action adds a new hackernew';
  }

  findAll() {
    return `This action returns all hackernews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hackernew`;
  }

  update(id: number, updateHackernewDto: UpdateHackernewDto) {
    return `This action updates a #${id} hackernew`;
  }

  remove(id: number) {
    return `This action removes a #${id} hackernew`;
  }
}
