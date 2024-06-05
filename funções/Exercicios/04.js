function divisao(x,y){
    let resultado = Math.floor(x/y)
    let resto = Math.floor(x%y)

    return {resultado,resto}
}

console.log(divisao(11,4))