const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const produto = {}

function salvarProduto(produto){
    if((!produto.id)){
        produto.id = sequence.id
    }
    produto[produto.id] = produto
    return produto
}


function getProduto(id){
    return produto[id] || {}
}

function getProdutos(){
    return Object.values(produto)
}

module.exports = { salvarProduto, getProdutos, getProduto}