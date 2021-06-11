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
    return decimal
}
function flippingBits(n) {
    let controlador = n
    let bin = []
    let binFinal = []
    
    if (n != 0) {
        while (controlador != 1) {
            bin.unshift((controlador % 2))
            controlador = parseInt(controlador / 2)
        }
        bin.unshift(1)
        binFinal = bin.join('')
    } else {
        binFinal = '0'
    }

    var binF = binFinal.split("")
    for (let i = 0; i < 32 - binFinal.length; i++) {
        binF.unshift("0")
    }

    const binF1 = binF.join("")
    let rever = binF1.split('')

    for (let i = 0; i < rever.length; i++) {
        if (rever[i] == '0') {
            rever[i] = 1
        } else {
            rever[i] = 0
        }
    }

    let reverF = rever.join("")
    return binToDec(reverF)
}