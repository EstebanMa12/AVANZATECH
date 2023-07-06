/* Imprimir un patron utilizando el ciclo for */


function patron(num){
    patron=[]
    for (let i=1;i<=num;i++){
        let resultado='';
        for(let j=1; j<=i;j++){
            resultado += '*'
        }
    patron.push(resultado);
    }
    return patron
}

console.log(patron(8));


//PATRON MÁS SENCILLO 
 

const patron2=(num)=>{
    const patron=[];
    for (let i  = 1; i  <=num; i ++) {
        patron.push('*'.repeat(i))        
    }
    return patron;
}
console.log(patron2(6));
