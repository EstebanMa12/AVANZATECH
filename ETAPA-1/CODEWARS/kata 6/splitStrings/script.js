a = 'abcdsfsdfsdfvssfuhshdfbj'
resultado = []
for ( let i=0; i<a.length;i+=2){
  console.log(a.slice(i,))
}


// * La verdadera forma era esta 
for ( let i=0; i<a.length;i+=2){
    console.log(a.slice(i,i+2))
  }



/*   Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  Examples:
  
/*   * 'abc' =>  ['ab', 'c_']
/*   * 'abcdef' => ['ab', 'cd', 'ef'] */  /*/
*/

function solution(a){
    resultado = []
    if (a.length%2 !==0){
    let b = a.concat("_");
    for ( let i=0; i<b.length;i+=2){
        let segmento =b.slice(i,i+2);
        resultado.push(segmento);
    }
    }else{
        for ( let i=0; i<a.length;i+=2){
        let segmento = a.slice(i,i+2);
        resultado.push(segmento);
        }
    }
    return resultado
    }