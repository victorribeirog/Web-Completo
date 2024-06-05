function triangulo(x,y,z){
    if(x==y && y==z){
        return "Equilatero"
    }else if(x==y || x==z || y==z){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}

console.log(triangulo(2,2,2))
console.log(triangulo(2,2,3))
console.log(triangulo(1,2,3))