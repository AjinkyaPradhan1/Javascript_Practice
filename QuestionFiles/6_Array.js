let num1 = [1,3,9,2,"Ajay"]
console.log(num1)

//sort
let sortNum = num1.sort()
console.log(sortNum);

//length
let lenNum = num1.length;
console.log(lenNum);

//concat arrays
let num2 = [7,9,10,23];
let conNum = num1.concat(num2);
console.log(conNum);

//splice and add elements
num1.splice(2,0,"Vijay","Sanjay");
console.log(num1);

//splice and delete elements
num1.splice(0,2);
console.log(num1);

//join array elements with a separator
console.log(num1.join("*"));

//shift : removes first element
console.log(num1.shift())

//unshift
console.log(num1.unshift())

//add elements at the end
num2.push("Varun")
console.log(num2)

//pop elements from the end
num2.pop()
console.log(num2)

let num4 = [1,234,54,0,345,32]
//sort
console.log(num4.sort())

//reverse
console.log(num4.reverse())

//max element
console.log(Math.max.apply(null,num4));

//min element
console.log(Math.min.apply(null,num4));

console.log(" ");

//for loop use
for(let i=0;i<num4.length;i++){
    console.log(num4[i]);
}

console.log(" ");

//fot of use
for(let i of num4){
    console.log(i);
}

console.log(" ");

//for in use 
for(let i in num4){
    console.log(i); //it prints the indices
}

console.log(" ");

//for in use 
for(let i in num4){
    console.log(num4[i]); //it prints the numbers of respective indices
}