import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('prefixo')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('teste') //  /prefixo/teste
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('outrarota')
  outraRota(): string {
    return this.appService.getOutraRota();
  }
}
