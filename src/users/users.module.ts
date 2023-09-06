import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AppService } from 'src/app.service';
import { PrismaService } from 'src/database/prisma.service';
//import { AppController } from 'src/app.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AppService, PrismaService],
})
export class UsersModule {}
