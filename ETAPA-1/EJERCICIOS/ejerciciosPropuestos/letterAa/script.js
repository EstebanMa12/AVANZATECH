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


/* Repita el ejercicio anterior pero recibiendo la letra a detectar como argumento.
Ejemplos
contarLetra("anaranjado", “a”) = 4
contarLetra("Algoritmos y programación", “A”) = 3
El llamado a la función sería algo como contarLetra(cadena,caracter) */

function contarLetra(str,letter) {
    return str.split('').filter(element=>element.toLowerCase()===letter.toLowerCase()).length
}

console.log(contarLetra("anaranjado", "A"));
