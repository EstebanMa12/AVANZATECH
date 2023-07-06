/* Diseñe e implemente una función en javascript que reciba un arreglo de números enteros
/* todos positivos y retorna un nuevo arreglo pero sólo con los números que son múltiplos de */
/* 10. Además, el arreglo debe estar ordenado de menor a mayor.
Ejemplo
extraerMultiplosDeDiez([20,5,100,81,7,11])=[20,100]
extraerMultiplosDeDiez([100000,1,120,12])=[100000,120] */  

function extraerMultiplosDeDiez(arr){
    return arr.filter(num=>num % 10 === 0).sort((a,b)=>a - b)
  }
  
  extraerMultiplosDeDiez([100000,1,120,12])

  // OPTIMIZACIÓN
  
  const extraerMultiplosDeDiez = (arr) => arr.filter(num=>num % 10 === 0).sort((a,b)=>a - b);
  
  extraerMultiplosDeDiez([100000,1,120,12])