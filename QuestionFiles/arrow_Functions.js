const submit = document.getElementById("submit")

let greet = (name) =>{
    return `Hello, ${name}`
}

console.log(greet("Virat"))


//reduce function example use
//reduce would reduce the arr value into a specified value generally a single value

arr = [10,20,30,40]

let sum = arr.reduce((accumulator,currentValue)=>{
    return (accumulator+currentValue);
},0)

console.log(sum/arr.length)


// increase counter if the counter is less than 100, else counter = 0
let x = 101;
let cnt = (x)=>{x>100 ? 0 : x++}

console.log(cnt)


//reduce function to find sum of even array functions
arr2 = [23,34,45,56,67,78,89,90]
let sum1 = 0
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        sum1 = sum1+arr2[i];
    }
}

console.log(sum1)


//map function
//square all the elements of the array

arr3 = [1,2,3,4,5,6]

let sqr = arr3.map((x)=>{
    return x*x*x;
})

console.log(sqr)

let sqrSum = sqr.reduce((accum,currVal)=>{
    return accum+currVal;
},0)

console.log(sqrSum)


//map function + arrrow function
//map function to multiple each number of array by 10

let arr4 = [1,2,5,3,6,8,12,89]

let mulTen = arr4.map((x)=>{
    return x*10;
})

console.log(mulTen)


//return the array elements which are even
let arr5 = [23,24,25,26,78,65,98]
let isEven = arr5.map((x)=>{
    return x%2==0?x:false
})
console.log(isEven)


const arr6 = [23,12,76,23,89,45,90,123,32,6756,2351]

let sumOdd = 
arr6.filter((x)=>{
    return x%2!=0;
})
.reduce((acc,currVal)=>{
    return (acc+currVal);
},0)

console.log(sumOdd)


//capitalize first letters of a string in elements of an array in javascript

function capitalizeWords(arr) {
    return arr.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return firstLetter + rest;
    });
  }

console.log(capitalizeWords(['bobby', 'hadz', 'com']));

//capitalize  last word of a string

arr7 = ['virat','rohit','shikhar','bumrah']

function capitalizeLastWord(arr7){
    return arr7.map(word=>{
        const lastLetter = word.charAt(word.length-1).toUpperCase();
        const rest = word.slice(0,word.length-1);
        return rest + lastLetter ;
    })
}

console.log(capitalizeLastWord(arr7))



//capitalize first and last words of a string

let arr8 = ['messi','ronaldo','neymar','maradona','Cryuff','eusebio']

function capLastFirstWords(arr){
    return arr.map(words=>{
        const firstWord = words.charAt(0).toUpperCase();
        const lastWord = words.charAt(words.length-1).toUpperCase();
        const rest = words.slice(1,words.length-1);
        return firstWord+rest+lastWord;
    })
}

console.log(capLastFirstWords(arr8))


//get first letters from the string words
const strInput = "George Raymond Richard Martin";

let strFirstLetters = strInput.split(" ").map(function (word) {
    return word[0];
  })
  .join("");

  console.log(strFirstLetters);


let arrA = [""]