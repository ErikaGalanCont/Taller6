
// 2.	Calcular el sueldo que le corresponde al trabajador de una empresa que cobra $14.400.000 anual, el programa debe realizar los cálculos en función de los siguientes criterios:

// •	Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// •	Si lleva menos de 10 años, pero más que 5 se le aplica un aumento del 7%.
// •	Si lleva menos de 5 años, pero más que 3 se le aplica un aumento del 5%.
// •	Si lleva menos de 3 años se le aplica un aumento del 3%.

let años = Number(prompt("Ingrese el numero exacto de años que lleva laborando en la compañia"));
let salario = 14400000;

if (años < 3) {
    console.log('Tu nuevo sueldo sera: $' + ((salario*0.03) +salario) + ' anual');
}else if (años < 5 ) {
    console.log('Tu nuevo sueldo sera: $' + ((salario*0.05) +salario) + ' anual');
}else if (años < 10 && años > 5) {
    console.log('Tu nuevo sueldo sera: $' + ((salario*0.07) +salario) + ' anual');
}else if (años => 10) {
    console.log('Tu nuevo sueldo sera: $' + ((salario*0.10) +salario) + ' anual');
};


