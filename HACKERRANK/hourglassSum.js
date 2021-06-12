function hourglassSum(arr) {
    var soma1 = []
    var soma = 0
    let maior
    for (let lin = 0; lin <= 3; lin++){
        for (let col = 0; col <= 3; col++){
             soma=0
            soma = arr[lin][col]+arr[lin][col + 1] + arr[lin][col + 2] + arr[lin + 1][col + 1] + arr[lin + 2][col] + arr[lin + 2][col + 1] + arr[lin + 2][col + 2]
            soma1.push(soma)         
         }
    }
    maior=soma1[0]
    for (let i = 0; i < soma1.length; i++){
        if (soma1[i] > maior) {
            maior=soma1[i]
        }
    }
    return maior
} 


