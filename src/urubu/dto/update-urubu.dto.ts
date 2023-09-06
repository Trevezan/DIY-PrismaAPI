import { PartialType } from '@nestjs/mapped-types';
import { CreateUrubuDto } from './create-urubu.dto';

export class UpdateUrubuDto extends PartialType(CreateUrubuDto) {}
