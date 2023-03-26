import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect('mongodb+srv://root:Jonathas001@cluster0.vmkcvsj.mongodb.net/?retryWrites=true&w=majority')
}

export default connectDatabase