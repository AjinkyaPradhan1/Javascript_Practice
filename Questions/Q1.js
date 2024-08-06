console.log("Find the sum of all odd numbers: ");
const array1=[25,24,26,29,40,42,43]
const s1 =(elements,index)=> elements%2
const sum1 =(acc,current,index)=>acc+current;
console.log("The odd Numbers are: ")
console.log(array1.filter(s1));
console.log("The sum of all odd Numbers are: ")
console.log(array1.filter(s1).reduce(sum1,0));
