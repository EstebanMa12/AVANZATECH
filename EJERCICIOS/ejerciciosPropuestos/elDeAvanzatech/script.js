
const array = ["Avanzatech","Xvxxxxxxxx","X.a.xxxxxx","X..n.xxxxx","Xvxxz.xxxx","Xvxxxa.xxx","Xvxxxxt.xx","Xvxxxxxe.x","Xvxxxxxxc.","Xvxxxxxxxh"];

const sinXArray = array.map(element => element.replace(/x/gi, ''));

console.log(sinXArray);