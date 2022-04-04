import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/')
  send(@Body() form: any): string {
    //{ title: string; msg: string }
    return 'postされた';
    // return {
    //   title: 'Nest form',
    //   msg: JSON.stringify(form),
    // };
  }
}
