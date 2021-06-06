
function shifString(texto, sL,sR) {
    const array = texto.split("")

    if (sR > sL) {
        for (let i = 0; i < (sR-sL); i++) {
            let pop = array[array.length - 1]
            array.pop()
            array.unshift(pop)
        }
    } else{
        for (let i = 0; i < (sL -sR); i++) {
            let pop = array[0]
            array.shift()
            array.push(pop)
        }
    }
    return array.join('')
}

let lista = "ABCDEF"
lista = shifString(lista,3,2)
console.log(lista)





