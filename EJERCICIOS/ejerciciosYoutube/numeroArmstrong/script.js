// *  Definir una Función para Verificar Si un Número Dado es de Tipo Armstrong con el lenguaje de programación JavaScript.


function ArmstrongNumber(numero){
    resultado=numero.toString().split('').map(element=>parseInt(element)).reduce((a,d)=>{
        return a + Math.pow(d,3); // a es un acumuilador y d es el digito que se eleva 
    },0)
    return resultado === numero
}

console.log(ArmstrongNumber(351));