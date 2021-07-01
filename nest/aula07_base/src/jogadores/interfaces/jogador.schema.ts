import * as mongoose from 'mongoose';

const schemaDefinition = {
  telefoneCelular : {   type: String, unique: true, },
  email : {   type: String, unique: true, },
  nome : String,
  ranking : String,
  posicaoRanking : Number,
  urlFotoJogador : String,
};
const schemaOption ={
  timestamps: true,
  collection: 'jogadores',
};

export const JogadorSchema = new mongoose.Schema(
  schemaDefinition,
  schemaOption,
);