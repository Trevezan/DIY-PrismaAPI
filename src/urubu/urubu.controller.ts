import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UrubuService } from './urubu.service';
import { CreateUrubuDto } from './dto/create-urubu.dto';
import { UpdateUrubuDto } from './dto/update-urubu.dto';

@Controller('urubu')
export class UrubuController {
  constructor(private readonly urubuService: UrubuService) {}

  @Post()
  create(@Body() createUrubuDto: CreateUrubuDto) {
    return this.urubuService.create(createUrubuDto);
  }

  @Get()
  findAll() {
    return this.urubuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.urubuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUrubuDto: UpdateUrubuDto) {
    return this.urubuService.update(+id, updateUrubuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urubuService.remove(+id);
  }
}
