function contarVocales(str) {
    const vocales = 'aáeioóu'
    counter=0;
    for(letter of str){
        if(vocales.includes(letter.toLowerCase())){
            counter ++
        }
    }
    return counter
}
console.log(contarVocales("Inteligencia Artificial"));
console.log(contarVocales("Lenguaje de programación"));