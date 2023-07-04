/* Diseña una función en JavaScript que reciba como parámetro un número entero positivo y
retorne el primer número de la secuencia de Fibonacci que es estrictamente mayor que
él.Recuerda que la sucesión de fibonacci es la secuencia de números donde cada término es
la suma de los dos anteriores y empieza con los números 0 y 1. La secuencia es 0, 1, 1, 2,
3, 5, 8, 13, 21, 34, 55, 89,...
Ejemplos:
siguienteEnFibonacci(10) = 13
siguienteEnFibonacci(34) = 55 */

const nextFibonacci=(num)=>{
    if(num<=0){
        return 1;
    }
    let numeroAnterior=0;
    let numeroActual=1;
      //* se deba garantizar que se haga la sucesión mientras el numero que se le ingresa sea mayor
    while(numeroActual<=num){
        let numeroSiguiente= numeroAnterior+numeroActual;
        // ! Aquí esta el truco, los valores van cambiando con cada iteración y no hay necesidad de hacer un ciclo for
        numeroAnterior=numeroActual;
        numeroActual=numeroSiguiente;
    //* Cuando ya no se cumpla la condición ya se puede salir del bucle 
    }
    return numeroActual;
}

console.log(nextFibonacci(37));
