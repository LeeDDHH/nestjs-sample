import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MydataService } from './mydata.service';
import { MydataController } from './mydata.controller';
import { Mydata } from '../entities/mydata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mydata])],
  providers: [MydataService],
  controllers: [MydataController],
})
export class MydataModule {}
