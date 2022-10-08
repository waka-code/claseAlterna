"use strict";
/*
Escriba un programa que reciba un número entre 0  y 100 e imprima en la consola el equivalente en letras de esa calificación.

La escala que utilizamos es la siguiente:

> 90 -> A
80-89 -> B
70-79 -> C
60-69 -> D
< 60 -> F

Ejemplo:

Si la calificación es un 95, el programa debe imprimir "La calificación en letras es una A"
Si la calificación es un 75, el programa debe imprimir "La calificación en letras es una C"
Si la calificación es un 50, el programa debe imprimir "La calificación en letras es una F"


El entregable es el código en TypeScript del programa en un documento.
El desarrollo de este programa debe hacerse de forma individual.
*/
const btnGrades = document.getElementById("btnGrades");
btnGrades === null || btnGrades === void 0 ? void 0 : btnGrades.addEventListener("click", (e) => {
    let grades = document.querySelector("#Grades");
    const ratingContainer = document.querySelector(".ratingContainer");
    const estudiante = "Waddimi Saint Louis";
    const qualification = parseInt(grades.value);
    if (qualification < 0) {
        ratingContainer.innerHTML = `Nota minima 0.`;
    }
    else if (qualification >= 90 && qualification <= 100) {
        ratingContainer.innerHTML = `${estudiante} aprobo con un ${qualification} = A, Excelente.`;
    }
    else if (qualification >= 80 && qualification <= 89) {
        ratingContainer.innerHTML = `${estudiante} aprobo con una B, Muy bien.`;
    }
    else if (qualification >= 70 && qualification <= 79) {
        ratingContainer.innerHTML = `${estudiante} aprobo con una C, Puedes mejorar.`;
    }
    else if (qualification >= 60 && qualification <= 69) {
        ratingContainer.innerHTML = `${estudiante} aprobo con una D, Pasaste de Milagro.`;
    }
    else if (qualification >= 0 && qualification <= 60) {
        ratingContainer.innerHTML = `${estudiante} aprobo con una F, Reprovado.`;
    }
    else if (qualification > 100) {
        ratingContainer.innerHTML = `Nota limite 100.`;
    }
    else {
        ratingContainer.innerHTML = `hubo un error, digite la nota por favor.`;
    }
    grades.value = "";
    grades.focus();
});
