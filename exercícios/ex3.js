function calcularSalario(horas, qtd){
    const salario = horas * qtd
    return `Salário igual a R$ ${salario}`
}
console.log(calcularSalario(150,40.5))