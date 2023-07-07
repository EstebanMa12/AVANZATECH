function disemvowel(str) {
    vowels="aeiou"
    result=''
    for (letter of str){
        vowels.includes(letter.toLowerCase())?NaN:result+=letter;
    }
    return result;
}

//
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }