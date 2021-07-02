import * as mongoose from 'mongoose';

const schemaDefinition = {
  categoria : {   type: String, unique: true, },
  descricao: { type: String },
  eventos: [
    {
      nome:{type: String},
      operacao:{type: String},
      valor:{type: Number},
    }
  ],
  jogadores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jogador",
    }
  ]

};
const schemaOption ={
  timestamps: true,
  collection: 'categorias',
};

export const CategoriaSchema = new mongoose.Schema(
  schemaDefinition,
  schemaOption
)