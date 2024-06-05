const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //Remove ultimo
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1=pilotos.slice(2) //novo array a partir do indice 2
console.log(algunsPilotos1) 

const algunsPilotos2=pilotos.slice(1,4) //não inclui o indice 4
console.log(algunsPilotos2)