import express from "express";
import mongoose from "mongoose";
import pedidos from './models/pedidos.js'

const app = express();
app.use(express.json());

app.get("/pedidos", async (req, res)=>{
  const pedido = await pedidos.find()
  return res.status(200).json(pedido)
})

app.post("/pushpedidos", async (req, res)=>{
  const pedido = req.body
  const newPedido = await pedidos.create(pedido)

  return res.json(newPedido);
});

mongoose.connect('mongodb+srv://root:Jonathas001@cluster0.vmkcvsj.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log("bd connected")})
.catch(()=>{console.log("Deu ruin")})

app.listen(3000)