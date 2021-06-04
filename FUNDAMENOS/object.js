const prod1 = {} // Objeto vazio criado de forma literal

//Criando atributos de forma dinâmica
prod1.nome = 'Celular Ultra Power'
prod1.preco = 4998.9

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    descricao: {
        titulo: 'Camisa polo Nike - 2018',
        modelo: 132,
        ano: 2018,
        paisOrigem: 'Espanha',
        temDesconto: false
    }
}
prod2.descricao.temDesconto = true

console.log(prod2)
