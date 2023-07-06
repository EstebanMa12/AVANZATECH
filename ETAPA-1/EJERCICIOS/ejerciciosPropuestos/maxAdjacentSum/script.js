/* Dado un array de números enteros,
devuelve la suma más grande
entre dos números adyacentes */

function maxAdjacentSum(array) {
    let maxSum=-Infinity
    const {length}= array
    for (let i=0;i<length-1;i++){
        const sum =array[i]+array[i+1];
        maxSum=Math.max(maxSum,sum)
    }
    return maxSum
}

const array= [2,4,1,5,6,3]
a=maxAdjacentSum(array)
console.log(a);