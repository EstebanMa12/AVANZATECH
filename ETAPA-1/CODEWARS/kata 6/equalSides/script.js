let Total=arr.reduce((a,b)=>a+b)
let left=0
for (number of arr){
  Total-=number
  if(left ===Total){
    return arr.indexOf(number)
  }
  left +=number
}