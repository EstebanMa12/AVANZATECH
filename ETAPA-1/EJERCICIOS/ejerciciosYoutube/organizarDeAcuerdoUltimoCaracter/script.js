// * Definir una función para ordenar un arreglo de cadenas acorde al último caracter

const cadenaOrdenada=(array)=>{
    return array.sort((a,b)=>a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1))
}

let lenguajes=['Python','Javascript','C#','Go','PHP']

console.log(cadenaOrdenada(lenguajes));