/* Suponiendo que se pueden repetir palitos. Por Ejemplo, para escribir el 0,
necesitas 6 palitos, para escribir el 1, necesitas 2 palitos, en general para los números del 0 al 9:
O=>6
1=>2
2=>5
3=>5
4=>4
5=>5
6=>6
7=>3
8=>7
9=>6
*/
function writingSticks(num){
    const palitos = [6,2,5,5,4,5,6,3,7,6]
    let suma=0
    for (let i = 0; i <= num; i++) {
    suma += palitos[i];
    }
    return suma
}   

console.log(writingSticks(3));

// ¿Cómo lo hago para números mayores a 9?//
