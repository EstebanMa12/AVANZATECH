
const array = ["Avanzatech","Xvxxxxxxxx","X.a.xxxxxx","X..n.xxxxx","Xvxxz.xxxx","Xvxxxa.xxx","Xvxxxxt.xx","Xvxxxxxe.x","Xvxxxxxxc.","Xvxxxxxxxh"];

const sinXArray = array.map(element => element.replace(/x/gi, ''));

console.log(sinXArray);



function diagonal(array){
    let diagonal=''
    for(let i =0; i<array.length;i++){
        const arreglo=[]
        for (let j  = 0; j <= i; j++) {
            arreglo.push(array[j][j+i]);        
        }
    diagonal += arreglo[0];
    }
    return diagonal
}


function numberAvanzatech(array) {
    const busqueda = "avanzatech"
    let count = array.filter(arr =>arr.toUpperCase().includes(busqueda.toUpperCase())).length
    if(busqueda.toUpperCase()===diagonal(array).toUpperCase()){
        count+=1;
    }
    return count
}

  console.log(numberAvanzatech(array));