import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';
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

  async criarJogador(criarJogadorDto: CriarJogadorDto): Promise<Jogador>{
    const { email } = criarJogadorDto;
    // const jogadorEncontrado = await this.jogadores.find( jogador => jogador.email === email);
    const jogadorEncontrado = await this.jogadorModel.findOne({email: email}).exec();
    if(jogadorEncontrado){
       throw new BadRequestException(`jogador com email ja cadastrado`) ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }else{
    }
    const jogadorCriado = new this.jogadorModel(criarJogadorDto)
    return await jogadorCriado.save();
  }

  async atualizarJogador(_id: string, atualizarJogadorDto: AtualizarJogadorDto): Promise<void>{
    // const jogadorEncontrado = await this.jogadores.find( jogador => jogador.email === email);
    const jogadorEncontrado = await this.jogadorModel.findOne({_id: _id}).exec();

    if(!jogadorEncontrado){
      throw new NotFoundException(`jogador con id ${_id} nao encontrado`)
    }

    const updateFilter = {_id: _id};
    const updateObject = {$set: atualizarJogadorDto}
    await this.jogadorModel.findOneAndUpdate(
      updateFilter,
      updateObject
    ).exec()
  }

  async consultarTodosJogadores() : Promise<Jogador[]>{
    return await this.jogadorModel.find().exec();
  }

  async consultarJogadorById(_id: string) : Promise<Jogador>{
    const jogadorEncontrado =  await this.jogadorModel.findOne({_id}).exec();

    if(!jogadorEncontrado){
      throw new NotFoundException(`Jogado com _id ${_id} nao encontrado`);
    }
    return jogadorEncontrado;
  }

  async deletarJogadorByEmail(_id: string) : Promise<any>{
    const jogadorEncontrado =  await this.jogadorModel.findOne({_id}).exec();

    if(!jogadorEncontrado){
      throw new NotFoundException(`Jogado com _id ${_id} nao encontrado`);
    }
    return await this.jogadorModel.deleteOne({_id}).exec()
  }

}
