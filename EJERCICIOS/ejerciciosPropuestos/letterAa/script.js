/* Diseña una función en JavaScript que reciba como parámetro una cadena de texto y retorne
cuántas veces aparece la letra 'a' o 'A' en la cadena.
Ejemplos:
contarLetraA("anaranjado") = 4
contarLetraA("Algoritmos y programación") = 3 */

function contarLetraA(str) {
    return str.split('').filter(element=>element==="a"||element==="A").length
}

console.log(contarLetraA("Algoritmos y programación"));
console.log(contarLetraA("anaranjado"));