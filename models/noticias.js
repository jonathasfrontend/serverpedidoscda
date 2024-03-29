import mongoose from'mongoose';
import moment from 'moment';
const data = moment(new Date()).format('LL');

const PostSchema = new mongoose.Schema(

  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    autor: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    createdAt:{
      type: String,
      default: data
    }
});

export default mongoose.model('noticias', PostSchema)