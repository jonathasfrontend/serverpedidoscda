import mongoose from'mongoose';
import moment from 'moment';
const data = moment(new Date()).format('LL');

const PostSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    menssagem: {
      type: String,
      required: true
    },
    createdAt:{
      type: String,
      default: data
    }
});

export default mongoose.model('contatos', PostSchema)