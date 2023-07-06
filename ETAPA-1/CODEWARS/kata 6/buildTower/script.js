function towerBuilder(nFloors) {
    let floors =[]
    for(let i=1;i<=nFloors;i++){
      let spaces = " ".repeat(nFloors-i)
      let stars = "*".repeat(2*i - 1 )
      floors.push(spaces+stars+spaces)
    }
    return floors
  }



  //* LA VARIANTE PARA HACER UN ROMBO ASÍMETRICO SERÍA

let floors =[]
for(let i=1;i<=nFloors;i++){
    let spaces = " ".repeat(nFloors-i)
    let stars = "*".repeat(2*i - 1 )
    floors.push(spaces+stars+spaces)
}
let downFloors=floors.slice(0,nFloors-1).reverse()
floors.concat(downFloors)