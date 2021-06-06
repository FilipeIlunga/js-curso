
function binToDec(string) {
    let decimal = 0;
    let bits = 1;
    for (let i = 0; i < string.length; i++) {
        let currNum = +(string[string.length - i - 1]);
        if (currNum === 1) {
            decimal += bits;
        }
        bits *= 2;
    }
    console.log(decimal);
}

function DecToBin_Reverse_BinToDec(numero){
    let controlador = numero
    let bin = []
    if (numero != 0) {
        while (controlador != 1) {  
            bin.unshift((controlador % 2))
            controlador = parseInt(controlador/2)
        }
        bin.unshift(1)
        binFinal = bin.reverse().join('')
    } else {
        binFinal ='0'
    }
    binToDec(binFinal)
}


 DecToBin_Reverse_BinToDec(73)






