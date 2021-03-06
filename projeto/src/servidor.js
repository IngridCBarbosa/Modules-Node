const porta = 3003


const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produto', (request,res,next) =>{
    res.send(bancoDeDados.getProdutos()) // converter para JSON
})

app.get('*produto/:id',(reuest,res,next) =>{
    res.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produto',(request,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    res.send(produto) // converte em um JSON
})

app.listen(porta, () =>{
    console.log(`Servidor  executando na porta ${porta}.`)
})