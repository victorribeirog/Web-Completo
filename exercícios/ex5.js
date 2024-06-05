function maiorIgual(x,y){
    if (typeof x != typeof y) return false
    return x >= y
}
console.log(maiorIgual(0,"0"))
console.log(maiorIgual(0,0))
