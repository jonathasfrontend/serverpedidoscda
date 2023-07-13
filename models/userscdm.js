import mongoose from'mongoose';

import moment from 'moment';
const data = moment(new Date()).format('DD/MM/YYYY');

const usercdmSchema = new mongoose.Schema(
  
  {
    nome:{
      type: String,
      require: true
    },
    nascimento:{
      type: String,
      default: data
    },
    telefone:{
      type: String,
      require: true
    },
    estadocivil:{
      type: String,
      require: true
    },
    naturalde:{
      type: String,
      require: true
    },
    endereco:{
      type: String,
      require: true
    },
    createdAt:{
      type: String,
      default: data
    }
}
)

export default mongoose.model('usercdm',usercdmSchema)