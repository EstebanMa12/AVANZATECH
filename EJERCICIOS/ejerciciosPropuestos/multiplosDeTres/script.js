/* Diseñe e implemente una función en javascript que reciba un arreglo de números enteros y
retorne el arreglo sin los elementos que sean múltiplos de 3, manteniendo el orden
original de los demás elementos.
Ejemplo
eliminarMultiplosDeTres([8, 2, 3, 1, -2, 9, 0])=[8, 2, 1, -2, 0]
eliminarMultiplosDeTres([10, 3, 4, -1, -2, 9, 0])=[10, 4, -1, -2, 0] */


const eliminarMultiplosDeTres=(array) =>{
    return array.filter(element=>element%3 !==0)
}

console.log(eliminarMultiplosDeTres([10, 3, 4, -1, -2, 9, 0]));
