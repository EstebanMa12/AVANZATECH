/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

array=[false,1,0,1,2,0,1,3,"a"]
// MY SOLUTION 
function moveZeros(array) {
    return array.filter(arr=>arr!==0).concat(array.filter(arr=>arr===0))
}

console.log(moveZeros(array));


// LA SOLUCIÓN QUE MÁS ME GUSTÓ 

function moveZeros2(arr) {
    return arr.sort((a, b) => b === 0 ? -1 : 0);
}

console.log(moveZeros2(array));

