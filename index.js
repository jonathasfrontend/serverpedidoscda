import express from "express";
import mongoose from "mongoose";
import pedidos from './models/pedidos.js'
import usercdm from './models/userscdm.js'
import noticias from "./models/noticias.js";


const app = express();
app.use(express.json());

app.get("/post", async (req, res)=>{
  const noticia = await noticias.find()
  return res.status(200).json(noticia)
})
// app.get("/post/:id", async (req, res)=>{
//   const { id } = req.params;

//   const noticia = await noticias.find( post => post.id === Number(id) )

//   return res.status(200).json(noticia)

// })
app.post("/post-add", async (req, res)=>{
  const postnoticia = req.body
  const newNoticia = await noticias.create(postnoticia);
  return res.status(200).json(newNoticia);
})


app.get("/pedidos", async (req, res)=>{
  const pedido = await pedidos.find()
  return res.status(200).json(pedido)
})
app.get("/userscursodemembresia", async (req, res)=>{
  const userscdm = await usercdm.find()
  return res.status(200).json(userscdm)
})

app.post("/adduserscursodemembresia", async (req, res)=>{
  const userscdm = req.body
  const newUsercdm = await usercdm.create(userscdm)
  return res.json(newUsercdm);
});

app.post("/pushpedidos", async (req, res)=>{
  const pedido = req.body
  const newPedido = await pedidos.create(pedido)
  return res.json(newPedido);
});

app.get('/deletaroracao/:id',(req,res)=>{
  pedidos.deleteOne({_id:req.params.id}).then(function(){
      res.redirect('https://admincasadeadoracao.vercel.app/oracoes');
  })
})

mongoose.connect('mongodb+srv://root:Jonathas001@cluster0.vmkcvsj.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log("bd connected")})
.catch(()=>{console.log("Deu ruin")})

app.listen(4000)