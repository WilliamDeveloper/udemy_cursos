import { Module } from '@nestjs/common';
import { JogadoresService } from './jogadores.service';
import { JogadoresController } from './jogadores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadorSchema } from './interfaces/jogador.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: "Jogador", schema: JogadorSchema }])],
  controllers: [JogadoresController],
  providers: [JogadoresService]
})
export class JogadoresModule {}
