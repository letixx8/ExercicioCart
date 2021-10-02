const Cart = require('./cart.json')
//console.log(Cart);

// 1. calcular a quantidade de produtos no objeto cart.

let products = Cart.items
//console.log(products)

let qtdProdutos= products.length

console.log('Há', qtdProdutos, "modelos de sapatos no carrinho")

let qtdItens = 0
for (let i = 0; i < qtdProdutos; i++) {
    qtdItens = Cart.items[i].quantity + qtdItens
}

console.log("O total de itens no carrinho é", qtdItens)

// 2. somar o valor total do cart.

function TotalProdutos(atual, index){
    let total = 0
    total = total + atual.quantity * atual.price
    return total
}

function soma(acc, cur){
    return acc + cur
}
TotalCart = products.map(TotalProdutos).reduce(soma,0)

console.log("Valor Total do Carrinho é", Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL'}).format(TotalCart))


// 3. imprimir o nome de cada produto no cart.

console.log("Produtos do carrinho:")

for (let i = 0; i < qtdProdutos; i++) {
    console.log(Cart.items[i].title)
}


