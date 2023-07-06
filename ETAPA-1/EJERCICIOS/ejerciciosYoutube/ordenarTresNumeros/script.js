function ordenarTresNumeros(a,b,c)  {       
    const arr = [a,b,c]
    arr.sort((x,y)=>x-y);
    return arr
}

console.log(ordenarTresNumeros(2,43,12));


// Metodo que propone el man 

function ordenarTresNumeros2(a,b,c)  {       
    return [Math.min(a,b,c),(a+b+c)-Math.min(a,b,c)-Math.max(a,b,c), Math.max(a,b,c)]
}

console.log(ordenarTresNumeros2(2,43,12));