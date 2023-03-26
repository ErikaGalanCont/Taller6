// 3.	Programa para solicitar el nombre, y la nota promedio de 5 estudiantes de un curso de computación.

let estudiantes = [];

for (let i = 0; i <= 4; i++) {

    let nombre = prompt(`Ingrese el nombre del estudiante ${i}:`);
    let nota = parseFloat(prompt(`Ingrese la nota promedio de ${nombre}:`));

    estudiantes.push({ nombre, nota });
}

console.log(estudiantes);

