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