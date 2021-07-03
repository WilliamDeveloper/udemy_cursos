import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaSchema } from './interfaces/categoria.schema';
import { JogadoresService } from '../jogadores/jogadores.service';

const mongooseModels = [
  {name:'Categoria', schema: CategoriaSchema},
]

@Module({
  imports:[
    MongooseModule.forFeature(mongooseModels) ,
    JogadoresService
  ],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
