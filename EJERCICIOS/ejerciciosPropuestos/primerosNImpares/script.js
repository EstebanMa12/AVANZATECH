function primerosNImpares(num) {
    impares=[]
    for (let i=1;i<=num;i++){
        impares.push(2*i -1)
    }
    return impares
}

primerosNImpares(3)

//* FORMA MÁS OPTIMIZADA

function primerosNImpares2(num) {
    return Array.from({ length: num }, (_, i) => 2 * i + 1);
  }
  
  console.log(primerosNImpares2(3)); // Salida: [1, 3, 5]