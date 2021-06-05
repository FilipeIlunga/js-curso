
 for (numero = 0; numero <= 100; numero++){
    controlador = numero
    
    bin = []
    if (numero != 0) {
        while (controlador != 1) {  
            bin.push((controlador % 2))
            controlador = parseInt(controlador/2)
        }
        bin.push(1)
        binFinal = parseInt(bin.reverse().join('')) 
    } else {
        binFinal =0
    }
    console.log(`${numero}= ${binFinal}\n`)
}

 





