a = 'hola'
const vowel = ["a","e","i","o","u"];
let count=0;
for (letter in a){
  if(vowel.includes(a[letter])){
    count++;
  }
}
console.log(count)