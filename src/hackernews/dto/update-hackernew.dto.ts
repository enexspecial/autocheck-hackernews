import { PartialType } from '@nestjs/mapped-types';
import { CreateHackernewDto } from './create-hackernew.dto';

export class UpdateHackernewDto extends PartialType(CreateHackernewDto) {}
