import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UsersEntity> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }
}
