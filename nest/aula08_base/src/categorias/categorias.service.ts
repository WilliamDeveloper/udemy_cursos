import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { Model } from 'mongoose';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';

@Injectable()
export class CategoriasService {


  constructor(
    @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>
  ){}

  async criarCategoria( criarCategoriaDto : CriarCategoriaDto): Promise<Categoria>{
      const { categoria } = criarCategoriaDto;
      const categoriaEncontrada = await  this.categoriaModel.findOne({categoria}).exec()
      if(categoriaEncontrada){
        throw new BadRequestException(`categoria ${categoria} ja cadastrada`)
      }
      const categoriaCriada = new this.categoriaModel(criarCategoriaDto)
      return await categoriaCriada.save();
  }

  async  consultarTodasCategorias () : Promise<Array<Categoria>>{
    return await this.categoriaModel.find().exec();
  }
  async  consultarCategoriaById (categoria: string) : Promise<Categoria>{
    const categoriaEncontrada =  await this.categoriaModel.findOne({categoria}).exec();
    if(!categoriaEncontrada){
      throw new NotFoundException(`categoria ${categoria} nao encontrada`);
    }
    return categoriaEncontrada;
  }

  async atualizarCategoria( categoria: string, atualizarCategoriaDto: AtualizarCategoriaDto ){
    const categoriaEncontrada = await this.categoriaModel.findOne({categoria}).exec()
    if(!categoriaEncontrada){
      throw new NotFoundException(`categoria ${categoria} nao encontrada`);
    }
    await this.categoriaModel.findOneAndUpdate({categoria},{$set: atualizarCategoriaDto})
  }

}
