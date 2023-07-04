/* Diseñe e implemente una función en javascript que reciba un número entero positivo N y
retorne un arreglo con los N primeros números que son potencias de 2 (2^x).
Ejemplo
potenciasDeDos(5)=[1, 2, 4, 8, 16]
potenciasDeDos(3)=[1, 2, 4] */ 

function potenciasDeDos(N) {
    const potencias = [];
    for (let i = 0; i < N; i++) {
    const potencia = Math.pow(2, i);
    potencias.push(potencia);
    }
    return potencias;
}

potenciasDeDos(15)