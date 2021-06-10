function quantosPares(lista) {
    let cont =0
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] % 2 == 0) {
            cont++
        }
    }
    return cont
}

let lista = []
 for (let i = 0; i < 100; i++){
    lista.push(i)
} 
let q = quantosPares(lista)
console.log(q);
//OUTPUT = 50
