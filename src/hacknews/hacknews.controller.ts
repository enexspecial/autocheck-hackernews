import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HacknewsService } from './hacknews.service';
import { CreateHacknewDto } from './dto/create-hacknew.dto';
import { UpdateHacknewDto } from './dto/update-hacknew.dto';

@Controller('hacknews')
export class HacknewsController {
  constructor(private readonly hacknewsService: HacknewsService) {}

  @Post()
  create(@Body() createHacknewDto: CreateHacknewDto) {
    return this.hacknewsService.create(createHacknewDto);
  }

  @Get()
  findAll() {
    return this.hacknewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hacknewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHacknewDto: UpdateHacknewDto) {
    return this.hacknewsService.update(+id, updateHacknewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hacknewsService.remove(+id);
  }
}
