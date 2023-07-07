/* En este kata, su tarea es crear todas las permutaciones de una cadena de entrada no vacía y eliminar los duplicados, si los hay.

¡Crea tantos "barajes" como puedas!

Ejemplos:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Nota: El orden de las permutaciones no importa.

¡Buena suerte! */


let str = 'abc'
const permutacionesCadena= str=>{
    if (str.length<=2){
        return str.length ===2?[str,str[1]+str[0]]:[str];
}
    return str.split('').reduce((a,c,i)=>a.concat(permutacionesCadena(str.slice(0,i)+str.slice(i+1)).map(v=>c+v)),[]);
}


// chatGpt
const permutations = str => {
    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str];
    }
    
    const result = str.split('').reduce((a, c, i) => {
        const subPermutations = permutations(str.slice(0, i) + str.slice(i + 1));
        const uniquePermutations = subPermutations.filter((v, idx, arr) => arr.indexOf(v) === idx);
        return a.concat(uniquePermutations.map(v => c + v));
    }, []);
    
    return result.filter((v, idx, arr) => arr.indexOf(v) === idx);

}


const permutations2 = str => {
    if (str.length <= 1) {
        return [str];
    }
    
    const result = str.split('').reduce((a, c, i) => {
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const subPermutations = permutations2(remainingChars);
        return a.concat(subPermutations.map(v => c + v));
    }, []);
    
    return Array.from(new Set(result));
}


//
function permutations(string) {
    return (string.length == 1) ? [string] : string.split('').map(
       (e, i) => permutations(string.slice(0,i) + string.slice(i+1)).map((e2) => e+e2)
    ).reduce((r,e) => r.concat(e)).sort().filter((e,i,a) => (i==0) || a[i-1] != e);
  }
