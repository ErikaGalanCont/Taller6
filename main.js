
let precioBase = Number(prompt("Ingrese el valor"));
let precioMax = 150000
console.log(precioBase);


if(precioBase > precioMax){
    console.log('Tienes un descuento, debes pagar:' + (precioBase*0.81).toFixed());
}else{
    console.log('Tienes un descuento, debes pagar:' + (precioBase*0.84).toFixed());
}


