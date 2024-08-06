//declare a number array and add user input values

let num = [1,2,3,4,5,6]
for(let i =0;i<5;i++){
    let a = prompt("Enter a number");
    num.push(a);
}
console.log(num);


//keep adding the  values in the array until 0 is entered

let num1 = [];
let b;
do{
    b = prompt("Enter a number");
    num1.push(b);
}while(b!=0);
    
console.log("Numbers eneterd before encountering 0: "+num1);

//filter the array by the condidion that only divisible by 5 should exist

let num2 = [12,23,54,56,55,45,23,78,90,76,234,431,670]
const outputArr = num2.filter(num => num%5==0);
console.log(outputArr);

//filter array elements by divisibility by 2

let num3 = [12,23,54,56,55,45,23,78,90,76,234,431,670];
const outputArr2 = num3.filter((num)=>{
    return num%2==0;
})
console.log(outputArr2);

//create an array of square of numbers

let num4 = [1,2,3,4,5,6,7];
const sqrFunc = (num) =>{
    return num*num;
}

const outputArr4 = num4.map(sqrFunc)
console.log(outputArr4)

//example of map function

let num5 = [5,6,7,8,9,10];
const cubeFunc = (num) => {
    return num * num *num;
}
const outputArr5 = num5.map(cubeFunc);
console.log(outputArr5);

//total of all the elements given in the array
let num6 = [1,2,3,4,5,6,7,8,9,10];
const outputArr6 = num6.reduce((num1,num2)=>{
    return num1+num2;
})
console.log(outputArr6);

//reduce use

let num7 = [1,2,3,4,5,6,7,8,9,10];
const outputArr7 = num7.reduce((num1,num2)=>{
    return num1*num2;
})
console.log("Output of array elements' Mulitplication: "+outputArr7)