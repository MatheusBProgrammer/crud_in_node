const porta = 65535

const bancoDeDados = require('./bancoDeDados')

const express = require("express")

const app = express()

app.get('/produtos', (req, res, next) => {
    // res.send({nome: "Produto1", preco: "123456.789"}) Conversão automática de
    // Objeto para JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto(
        {nome: req.body.name, preco: req.body.preco}
    )
    res.send(produto) // JSON

})

app.listen(porta, () => {
    console.log(`A porta ${porta} está em uso!`)
})