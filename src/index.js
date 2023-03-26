import express from "express";
import connectDatabase from "./database/db.js";
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

connectDatabase().then(()=>{console.log("bd connected")}).catch(()=>{console.log("Deu ruin")})

app.listen(3000)