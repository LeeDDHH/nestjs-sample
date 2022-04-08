import { Controller, Get, Post, Redirect, Body } from '@nestjs/common';
import { MydataService } from './mydata.service';

@Controller('mydata')
export class MydataController {
  constructor(private readonly mydataService: MydataService) {}

  @Get('/')
  root(): Promise<any[]> {
    return this.mydataService.getAll();
  }

  @Post('/')
  @Redirect('/mydata/')
  async send(@Body() form: any): Promise<void> {
    await this.mydataService.addMydata(form);
  }
}
