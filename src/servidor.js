/* Considerações importantes ao iniciar um projeto nodejs:
baixar a dependencia
 * body-parser(npm install body-parser@1.18.2 -E), que entregará para o
 * desenvolvedor os dados para utilização, caso contrário, ocorrerá um erro
ao
 * fazer uma requisição(no postman, por exemplo)
 */

const bancoDeDados = require('./bancoDeDados')
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const porta = 3000

//app.use(bodyParser.urlencoded({extended: true})) sem usar o bodyParser
app.use(express.urlencoded({extended: true}));

app.get('/produtos', (req, res, next) => {
    // res.send({nome: "Produto1", preco: "123456.789"}) Conversão automática de
    // Objeto para JSON
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto(
        //passando um objeto
        {
            nome: req.body.nome,
            preco: req.body.preco
        }
    )

})

//substitui
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto(
        //passando um objeto
        {
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco
        }
    )

})

//deleta
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(
        bancoDeDados.excluirProdutos(req.params.id)
    )

})
app.listen(porta, () => {
    console.log(`A porta ${porta} está em uso!`)
})