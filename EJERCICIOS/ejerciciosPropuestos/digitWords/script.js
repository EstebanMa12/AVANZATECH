/* Diseña una función en JavaScript que reciba como parámetro una cadena de texto y retorne
el número de palabras que tienen al menos un dígito.
Ejemplos:
palabrasConDigitos("Una cadena sin dígitos") = 0
palabrasConDigitos("T3ngo 3 palabras con dígit0s") = 3 */


function wordDigits(str) {
    counter=0;
    const strsplit=str.split(' ')
    for (word of strsplit){
        if (/\d+/.test(word)) {
        counter++
    }
}
    return counter
}

console.log(wordDigits("Una cadena sin dígitos"));
console.log(wordDigits("T3ngo 3 palabras con dígit0s"));