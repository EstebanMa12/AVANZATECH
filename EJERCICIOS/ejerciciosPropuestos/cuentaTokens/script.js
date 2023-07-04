/* Diseña una función en javascript que recibe una cadena de texto y retorna como resultado
cuántos tokens hay conformados por sólo dígitos. Un token es una secuencia de caracteres
sin espacios.
Ejemplos
cuentaTokenesSoloDigitos(“Una cadena sin digitos”) = 0
cuentaTokenesSoloDigitos(“Una 234 c4d3na d3 2 palabras de sólo dígitos distribuidos
aleatoriamente”) = 2 */

function cuentaTokensSoloDigitos(cadena) {
const tokens = cadena.split(" ");
let count = 0;

for (let token of tokens) {
    if (/^\d+$/.test(token)) {
    count++;
    }
}

return count;
}

cuentaTokensSoloDigitos('Una 234 c4d3na d3 2 palabras 9999999 m9')


