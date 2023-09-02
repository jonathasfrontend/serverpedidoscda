import mongoose from'mongoose';

const PostSchema = new mongoose.Schema(

  {
    categoria: {
      type: String,
      required: true
    }
});

export default mongoose.model('categoria', PostSchema)