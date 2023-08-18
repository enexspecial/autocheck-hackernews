import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HackernewsService } from './hackernews.service';
import { CreateHackernewDto } from './dto/create-hackernew.dto';
import { UpdateHackernewDto } from './dto/update-hackernew.dto';

@Controller('hackernews')
export class HackernewsController {
  constructor(private readonly hackernewsService: HackernewsService) {}

  @Post()
  create(@Body() createHackernewDto: CreateHackernewDto) {
    return this.hackernewsService.create(createHackernewDto);
  }

  @Get()
  findAll() {
    return this.hackernewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hackernewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHackernewDto: UpdateHackernewDto) {
    return this.hackernewsService.update(+id, updateHackernewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hackernewsService.remove(+id);
  }
}
