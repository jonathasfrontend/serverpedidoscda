import mongoose from'mongoose';

const pedidosSchema = new mongoose.Schema({
    name:{
      type: String,
      require: true
    },
    telefone:{
      type: String,
      require: true
    },
    pedido:{
      type: String,
      require: true
    },
    createdAt:{
      type: Date,
      default: Date.now()
    }
})

export default mongoose.model('Pedidos',pedidosSchema)