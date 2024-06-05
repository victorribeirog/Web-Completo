function repetir(x,y){
    let resultado = []
    for(let i = 0; i < y; i++){
        resultado.push(x)
    }
    return resultado
}
console.log(repetir(1,3))