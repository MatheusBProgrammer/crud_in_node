const sequence = {
    _id: 1,
    //retorna o _id e incrimenta em mais 1
    get id() {
        return this._id++
    },
    mostrar() {
        return this._id
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) 
        produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

/*  para visualizar a incrementação de id pelo get
console.log(sequence.id)
cons
 * ole.log(sequence.id)
console.log(sequence.id)
 */

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    //retorna apenas os valores do Objeto "produtos"
    return Object.values(produtos)
}


function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]
    //retorna o produto excluido
    return produto
}

//Torna as funções visívels para fora do arquivo
module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProdutos
}