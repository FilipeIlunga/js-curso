function rotLeft(array, d) {
    // Write your code here
    var pop
    for (let i = 0; i < d; i++) {
        pop = array[0]
        array.shift()
        array.push(pop)
    }
    return array
}