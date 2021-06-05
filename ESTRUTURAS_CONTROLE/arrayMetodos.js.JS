const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log("Original: "+pilotos)
pilotos.pop() //  remove o ultimo elemento
console.log("\nPop: "+pilotos)

pilotos.push('Verstappen')
console.log("\nPush: "+pilotos)

pilotos.shift()  // Remove o primeiro
console.log("\nShift: "+pilotos)

pilotos.unshift('Hamilton')  // Insere no inicio da lista
console.log("\nUnshif: " + pilotos)

//SPLICE - ADICIONA OU REMOVE ELEMENTOS DO ARRAY
pilotos.splice(2, 1, "Botas", "Massa") // Adicionar no indice 2, não remover ninguem, adicionar o "Bottas" e o "Massa"
console.log("\nSplice: " + pilotos)

pilotos.splice(3, 1)  //Apartir do indice 3, remover 1 elemento
console.log("\nSplice Remove: " + pilotos)

//SLICE - PEGA UMA PARTE DO ARRAY
const algunsPilotos = pilotos.slice(2) // Cria um novo array a partir do indice 2 do array antigo
console.log("\nNovo: " + algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,3) // Cria um novo array com os indeces de 1 até 2
console.log("\nNovo2: " + algunsPilotos2)
