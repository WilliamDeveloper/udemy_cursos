import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';


@Controller('api/v1/jogadores')
export class JogadoresController {

  constructor(
    private readonly jogadoresService: JogadoresService
  ){

  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(
    @Body() criarJogadorDto: CriarJogadorDto
  ): Promise<Jogador>{
    return await this.jogadoresService.criarJogador(criarJogadorDto);
  }

  @Get()
  async consultarJogadores() : Promise<Jogador[]>{
      return await this.jogadoresService.consultarTodosJogadores();
  }

  @Get('/:_id')
  async consultarJogadorById(
    @Param('_id',JogadoresValidacaoParametrosPipe) _id: string
  ) : Promise<Jogador>{
        return await this.jogadoresService.consultarJogadorById(_id);
  }

  @Put('/:_id')
  async AtualizarJogador(
    @Body() criarJogadorDto: CriarJogadorDto,
    @Param('_id',JogadoresValidacaoParametrosPipe) _id: string
  ){
    await this.jogadoresService.atualizarJogador(_id, criarJogadorDto);
  }

  @Delete('/:_id')
  async deletarJogarByEmail(
    @Query('_id',JogadoresValidacaoParametrosPipe) _id: string
  ) : Promise<void>{

      await this.jogadoresService.deletarJogadorByEmail(_id);

  }
}
