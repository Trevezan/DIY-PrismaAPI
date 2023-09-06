import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrubuController } from './urubu/urubu.controller';
import { UrubuModule } from './urubu/urubu.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './database/prisma.service';
import { UrubuService } from './urubu/urubu.service';

@Module({
  imports: [UrubuModule, UsersModule],
  controllers: [AppController, UrubuController],
  providers: [AppService, UsersService, PrismaService, UrubuService],
})
export class AppModule {}
