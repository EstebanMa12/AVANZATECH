/* Diseña una función en JavaScript que reciba como parámetro un número entero positivo y
retorne un arreglo con los dígitos del número en orden inverso.
Ejemplos:
invertirDigitos(12345) = [5, 4, 3, 2, 1]
invertirDigitos(54321) = [1, 2, 3, 4, 5] */

invertirDigitos=(nums)=>{
    return nums.toString().split('').reverse().map(d=>parseInt(d))
}


console.log(invertirDigitos(123456789))

