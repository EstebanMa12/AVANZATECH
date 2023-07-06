/* Diseñe e implemente una función en javascript que reciba un arreglo de números enteros y
retorne el producto de todos los elementos que sean mayores a 10.
Ejemplo
productoMayoresADiez([8, 2, 20, 1, -2, 15, 0])=300
productoMayoresADiez([10, 3, 12, -1, -2, 9, 0])=12 */


const numerosMayoresADiez = (array)=>{
    return array.filter(element=>element>10).reduce((a,b)=>a*b)
}

console.log(numerosMayoresADiez([10, 3, 12, -1, -2, 9, 0]));
console.log(numerosMayoresADiez([10, 3, 12, -1, -2, 9, 0]));