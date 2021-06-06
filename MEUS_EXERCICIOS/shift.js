
function shif(texto, shifts) {
    const array = texto.split("")
    for (let i = 0; i < shifts; i++) {
        let pop = array[array.length - 1]
        array.pop()
        array.unshift(pop)
    }
    return array.join('')
}

let lista = "ABCDE"
lista = shif(lista, 17)
console.log(lista)





