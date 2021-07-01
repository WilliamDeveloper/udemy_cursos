import { Module } from '@nestjs/common';
import { JogadoresService } from './jogadores.service';

@Module({
  providers: [JogadoresService]
})
export class JogadoresModule {}
