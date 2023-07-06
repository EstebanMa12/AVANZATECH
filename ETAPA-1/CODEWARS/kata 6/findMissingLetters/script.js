/* Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P' */

//* En este caso me equivoque y primero hice una función que me devolviera la letra que sigue del alfabeto
function findMissingLetter(array)
{
  const alphabet="abcdefghijklmnopqrstuvxyz"
  const indice = alphabet.indexOf(array[array.length -1])
  return array[0]===array[0].toUpperCase()? alphabet[indice+1].toUpperCase:alphabet[indice+1]
}


//* Luego me confundí otra vez xD

function findMissingLetter(array) {
    let alphabet="abcdefghijklmnopqrstuvwxyz";
    const isUpperCase = array[0] === array[0].toUpperCase();
  
    if (isUpperCase) {
      alphabet = alphabet.toUpperCase();
      array = array.map(letter => letter.toUpperCase());
    }
  
    const missingLetter = alphabet.split('').filter(letter => !array.includes(letter))[0];
    return isUpperCase ? missingLetter.toUpperCase() : missingLetter;
  }


  // * Ahora si el propio

function findMissingLetter(array) {
let alphabet="abcdefghijklmnopqrstuvwxyz";
const isUpperCase = array[0] === array[0].toUpperCase();

if (isUpperCase) {
    alphabet = alphabet.toUpperCase();
    const start=alphabet.indexOf(array[0]);
    const expectedLetters =alphabet.slice(start, start + array.length)
    const missingLetter =     expectedLetters.split('').find(letter => !array.includes(letter));
    return missingLetter;

}

const missingLetter = alphabet.split('').filter(letter => !array.includes(letter))[0];
return missingLetter;
}


// * Miento, este no fue xD // Este sí 

function findMissingLetter(array) {
    const isUpperCase = array[0] === array[0].toUpperCase();
    const referenceAlphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
  
    const startIndex = referenceAlphabet.indexOf(array[0]);
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== referenceAlphabet[startIndex + i]) {
        return referenceAlphabet[startIndex + i];
      }
    }
  }


// AHORA VEAMOS LA RESPUESTA DE OTROS//  LA QUE MÁS ME GUSTÓ

const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
  };



