const valores = [1, 2, 3, 4, 5, 6, 7, 8]

valores[8] = 9
console.log(valores)

valores.push(10)
console.log(valores)
valores.pop()
console.log(valores)
delete valores[0]
console.log(valores)