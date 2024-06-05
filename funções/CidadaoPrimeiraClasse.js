//Forma literal
function fun(){}

//Armazenar em uma variável
const fun2 = function(){}

//Array
const array = [function(a,b) {return a+b},fun,fun2]
console.log(array[0](2,3))

//Objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Função como param
function run(fun){
    fun()
}
run(function(){console.log('Executando')})

//Pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
