array = [[1,2,3,5],
         [8,9,4,8],
         [7,6,5,9],
        [3,2,3,1]]
function spiralTraversal(matrix) {
  const result = [];

  while (matrix.length) {
    // Recorre la primera fila de la matriz
    result.push(...matrix.shift());

    // Recorre la última columna de las filas restantes
    for (const row of matrix) {
      if (row.length) {
        result.push(row.pop());
      }
    }

    // Recorre la última fila en orden inverso
    const lastRow = matrix.pop();
    if (lastRow && lastRow.length) {
      result.push(...lastRow.reverse());
    }

    // Recorre la primera columna de las filas restantes en orden inverso
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length) {
        result.push(matrix[i].shift());
      }
    }
  }

  return result;
}
spiralTraversal(array)


//* Otras soluciones 


function snail(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }


  //
snail = function(array) {
  var size = array.length;
  
  if (size == 0)
    return [];

  if (size == 1)
    return array[0];
  
  var top    = array[0].slice(0, -1);
  var right  = array.slice(0, -1).map(a => a[size - 1]);
  var bottom = array[size -1].slice(1).reverse();
  var left   = array.slice(1).map(a => a[0]).reverse();
  var inner  = array.slice(1, -1).map(a => a.slice(1, -1));

  return [].concat(top, right, bottom, left, snail(inner));
}