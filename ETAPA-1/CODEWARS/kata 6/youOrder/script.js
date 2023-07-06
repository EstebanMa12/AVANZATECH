words= "is2 Thi1s T4est 3a"
function order(words){
    let split = words.split(' ');
  
    const getNumberFromWord = (word) => {
    const match = word.match(/\d+/); // Expresión regular para obtener el número de la palabra
    return match ? parseInt(match[0], 10) : Infinity; // Si no hay número, se considera Infinity
  };
  
  let result = split.sort((a, b) => getNumberFromWord(a) - getNumberFromWord(b));
    return result.join(' ')
  }


  function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  } 



  function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }



function order(words) {
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}