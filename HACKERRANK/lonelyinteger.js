function lonelyinteger(arr) {
    var quer = []
    var cont = 0
    var achou = -1
  
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (a[i] == a[j]) {
                cont++
            }
        }
        quer.push(cont)
        cont = 0
    }
    console.log(quer)
    for (let i = 0; i < quer.length; i++) {
        if (quer[i] == 1) {
            achou = arr[i]
        }
    }
    return achou
}

