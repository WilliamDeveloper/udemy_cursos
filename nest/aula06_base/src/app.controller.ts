import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api/v1')
export class AppController {

  constructor(){

  }

  @Get()
  async raizApi(){
    return JSON.stringify({msg:'Bem vindo a api'});
  }

}
