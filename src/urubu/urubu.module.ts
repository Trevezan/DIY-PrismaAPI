import { Module } from '@nestjs/common';
import { UrubuService } from './urubu.service';
import { UrubuController } from './urubu.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [UrubuController],
  providers: [UrubuService, PrismaService, AppService],
})
export class UrubuModule {}
