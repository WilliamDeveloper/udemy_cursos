import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getOutraRota(): string {
    return 'Outra Rota - com nestjs!';
  }
}
