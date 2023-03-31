document.getElementById("convertir").addEventListener("click", function() {
    let nota = document.getElementById("nota").value;
    let equivalente = "";
    if (nota >= 90 && nota <= 100) {
        equivalente = "A";
        document.getElementById("recomendacion").innerHTML = "Exceeds proficiency";
    } else if (nota >= 80 && nota < 90) {
        equivalente = "B";
        document.getElementById("recomendacion").innerHTML = "Demonstrates proficiency";
    } else if (nota >= 70 && nota < 80) {
        equivalente = "C";
        document.getElementById("recomendacion").innerHTML = "Approaches proficiency";
    } else if (nota >= 60 && nota < 70) {
        equivalente = "D";
        document.getElementById("recomendacion").innerHTML = "Falls well below proficiency";
    } else if (nota >= 0 && nota < 60) {
        equivalente = "F";
        document.getElementById("recomendacion").innerHTML = "Lacks all proficiency";
    } else {
        alert("Ingrese una nota válida");
        return;
    }
});
