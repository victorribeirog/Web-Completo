const aprovados = ['Ana','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome,indice,/*array*/){
    console.log(`${indice+1}) ${nome}`)
    //console.log(array)
})

aprovados.forEach(nome=>console.log(nome))

const exbibirAprovados=aprovado=>console.log(aprovado)
aprovados.forEach(exbibirAprovados)


