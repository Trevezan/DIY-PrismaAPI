import { Injectable } from '@nestjs/common';
import { CreateUrubuDto } from './dto/create-urubu.dto';
import { UpdateUrubuDto } from './dto/update-urubu.dto';

@Injectable()
export class UrubuService {
  create(createUrubuDto: CreateUrubuDto) {
    return 'This action adds a new urubu';
  }

  findAll() {
    return `This action returns all urubu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} urubu`;
  }

  update(id: number, updateUrubuDto: UpdateUrubuDto) {
    return `This action updates a #${id} urubu`;
  }

  remove(id: number) {
    return `This action removes a #${id} urubu`;
  }
}
