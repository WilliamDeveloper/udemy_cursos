import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
// import { v4 as uuidv4 } from 'uuid';
import { v4 as uuid } from 'uuid';
import { find } from 'rxjs/operators';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class JogadoresService {

  constructor(
    @InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>
  ){

  }

  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void>{
    const { email } = criarJogadorDto;
    // const jogadorEncontrado = await this.jogadores.find( jogador => jogador.email === email);
    const jogadorEncontrado = await this.jogadorModel.findOne({email: email}).exec();
    if(jogadorEncontrado){
      this.atualizar(criarJogadorDto);
    }else{
      this.criar(criarJogadorDto);
    }

  }

  private async criar(criarJogadorDto: CriarJogadorDto) : Promise<Jogador>{

    const jogadorCriado = new this.jogadorModel(criarJogadorDto)
    return await jogadorCriado.save();
  }
  private async atualizar(criarJogadorDto: CriarJogadorDto) : Promise<Jogador>{
    const { email } = criarJogadorDto;
    const updateFilter = {email: email};
    const updateObject = {$set: criarJogadorDto}
    return await this.jogadorModel.findOneAndUpdate(
      updateFilter,
      updateObject
    ).exec()


  }

  async consultarTodosJogadores() : Promise<Jogador[]>{
    return await this.jogadorModel.find().exec();
  }

  async consultarTodosJogadoresByEmail(email: string) : Promise<Jogador>{
    const jogadorEncontrado =  await this.jogadorModel.findOne({email: email}).exec();

    if(!jogadorEncontrado){
      throw new NotFoundException(`Jogado com email ${email} nao encontrado`);
    }
    return jogadorEncontrado;

  }
  async deletarJogadorByEmail(email: string) : Promise<any>{
    return await this.jogadorModel.deleteOne({email:email}).exec()

  }

}
