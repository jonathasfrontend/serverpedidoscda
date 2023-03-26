import mongoose from'mongoose';
import moment from 'moment';
const data = moment(new Date()).format('DD/MM/YYYY');

const pedidosSchema = new mongoose.Schema(
  
  {
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
      type: String,
      default: data
    }
}
)

export default mongoose.model('Pedidos',pedidosSchema)