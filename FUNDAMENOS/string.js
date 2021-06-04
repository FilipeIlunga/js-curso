const escola = "F1l3pe ilunga xindanhi"

console.log("Quinta palavra: " + escola.charAt(4))
console.log("Código ascii da quarta palavra " + escola.charAt(3) + " - " + escola.charCodeAt(3))
console.log("Imprimir do indice 1 ate o final: " + escola.substring(1))
console.log('Substitui todos os numeros por "e": ' + escola.replace(/\d/g, 'e'))
console.log('Substitui todos os l por "x": ' + escola.replace('l', 'x'))
console.log('Transforma a string em lista de palavras: ' + escola.split(' '))

function quantasVezesAperece(texto, palavra) {
    let textos = texto.split(/(?:,| )+/)
    let cont =0
    for (let i = 0; i < textos.length; i++) {
        if (textos[i] == palavra) {
            cont++
        }
    }
    console.log("\n\n\ A palavra " +palavra+" apararece "+cont+" vezes no texto")
};

// Dado um texto, retornar quantas vezes uma palavra aparece no texto
let texto = "O pe do pedro é preto, mas o pedro é branco e preto"

let texto2 =
`Saberás que não te amo e que te amo
posto que de dois modos é a vida,
a palavra é uma asa do silêncio,
o fogo tem uma metade de frio.

Eu te amo para começar a amar - te,
para recomeçar o infinito
e para não deixar de amar - te nunca:
por isso não te amo ainda.

Te amo e não te amo como se tivesse
em minhas mãos as chaves da fortuna
e um incerto destino desafortunado.

Meu amor tem duas vidas para amar - te.
Por isso te amo quando não te amo
e por isso te amo quando te amo.`


quantasVezesAperece(texto2, 'amo') /// 7 e não 12