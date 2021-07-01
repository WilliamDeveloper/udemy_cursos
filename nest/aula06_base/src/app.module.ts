import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresController } from './jogadores/jogadores.controller';
import { JogadoresModule } from './jogadores/jogadores.module';
import { JogadoresService } from './jogadores/jogadores.service';
import { AppController } from './app.controller';

// const mongoDB_url = 'mongodb+srv://admin_mongo:BNnz295Wk3gDLhU@cluster0.dwwu8.mongodb.net/test?retryWrites=true&w=majority';
const db_user = 'admin_mongo';
const db_pass = 'BNnz295Wk3gDLhU';
const db_database = 'smartranking';
const mongoDB_url = `mongodb+srv://${db_user}:${db_pass}@cluster0.dwwu8.mongodb.net/${db_database}?retryWrites=true&w=majority`;
const mongoDB_params = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

@Module({
  imports: [
    MongooseModule.forRoot(mongoDB_url, mongoDB_params),
    JogadoresModule
  ],
  controllers: [JogadoresController, AppController],
  providers: [JogadoresService],
})
export class AppModule {}
