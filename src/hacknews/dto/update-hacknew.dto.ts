import { PartialType } from '@nestjs/mapped-types';
import { CreateHacknewDto } from './create-hacknew.dto';

export class UpdateHacknewDto extends PartialType(CreateHacknewDto) {}
