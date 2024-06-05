function Carro(vmax=200,delta=5){
    //atributo privado
    let vatual=0

    //metodo publico
    this.acelerar=function(){
        if(vatual+delta<=vmax){
            vatual+=delta
        }else{
            vatual=vmax
        }
    }

    //metodo publico
    this.getvatual=function(){
        return vatual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvatual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvatual())