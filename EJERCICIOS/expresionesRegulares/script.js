//* MULTILINEA DE LOS SCRIPTS

let lorem= "njnsdfcjbscblblbBLblblbLLBlbLblbalblablalbalblablabla \n"+', ahdfbBLbllbalbalblablalbalbblalb'
console.log(lorem);


let lorem2= `njnsdfcjbscblblbBLblblbLLBlbLblbalblablalbalblablabla,
afdasfsfgdfgdffssdgahah`
console.log(lorem2);



let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David',...team1,...team2];

console.log(education);

reg=/bla/

const a= lorem.match(reg)
console.log(a);