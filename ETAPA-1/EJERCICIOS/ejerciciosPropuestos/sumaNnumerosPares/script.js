/* Diseña una función en JavaScript que reciba como parámetro un entero positivo n y retorne
la suma de los primeros n números pares.
Ejemplos:
sumaPrimerosPares(3) = 2 + 4 + 6 = 12
sumaPrimerosPares(5) = 2 + 4 + 6 + 8 + 10 = 30 */

const sumPares= (num)=> {
    let suma=0
    let par=2;
    for(let i=1;i<=num;i++){
        suma += par;
        par +=2;
    }
    return suma
}


//* Forma optimizada

const sumaPrimerosPares = (n) => {
    return n * (n + 1);
};

console.log(sumPares(8));
console.log(sumaPrimerosPares(8));