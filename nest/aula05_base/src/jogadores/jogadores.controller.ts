import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Controller('jogadores')
export class JogadoresController {

  @Post()
  async criarAtualizarJogador(
    @Body() criarJogadorDto: CriarJogadorDto
  ){
    const { email, nome, telefoneCelular } = criarJogadorDto;
    return JSON.stringify({email, nome, telefoneCelular})
  }
}