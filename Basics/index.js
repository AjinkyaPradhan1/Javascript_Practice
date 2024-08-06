//1 : print table of 10
let table = document.getElementById('tables')
for(let a=1;a<11;a++){
    table.innerHTML += a+"*"+10+"="+a*10+ "<br>"
}

//2: print table 1 to 10
let tables1To10 = document.getElementById('tables1To10')
let tableName = document.getElementById('tableName')
for(let a=1;a<3;a++){
    tables1To10.innerHTML += "Table for "+a+":<br>"
    for(let b=1;b<11;b++){
        tables1To10.innerHTML += 
        a+"*"+b+"="+a*b+ "<br>"
    }
    tables1To10.innerHTML += "<br>"
    
}

//3: print addition of 2 numbers
let add = document.getElementById("add");
const addVar = (numOne,numTwo)=>{
    return `The Sum of ${numOne} and ${numTwo} is : ${numOne+numTwo}`
}
add.innerHTML = addVar(2,3)

//4: Perimeter of Rectangle
let periRec = document.getElementById("periRec");
const calcPerimeter = (numOne,numTwo)=>{
    return `The Perimeter of Rectangle with Breadth ${numOne} and Height ${numTwo} is : ${2*(numOne+numTwo)}`
}
periRec.innerHTML = calcPerimeter(2,3)

//5: Reverse a String
let revString = document.getElementById("revString");
const reverseString = (strOne)=>{
    let strRev = 
    strOne
    .split("")
    .reverse()
    .join("")
    return(strRev)
}
revString.innerHTML = reverseString('ajinkya')

//6: Even Odd
let evenOdd = document.getElementById("evenOdd");
const identifyOddEven = (numOne)=>{
    const check = ((numOne%2==0)?"Even":"Odd")
    return check
}
//console.log(identifyOddEven(2))
evenOdd.innerHTML = identifyOddEven(2)

//7: Leap Year
let leapY = document.getElementById("leapY");
const calcLeap = (numOne)=>{
    const checkL = 
    (numOne%4==0 && numOne%100!=0) || (numOne%400==0)?"Leap Year":"Not Leap Year"
    return `${numOne} is ${checkL}`
}
//console.log(calcLeap(1200))
leapY.innerHTML = calcLeap(2016)

//8: Sum of Array Elements
let aSum = document.getElementById("aSum");
const arr1 = [1,2,3,4,5,6,7,8,9]
let sum = 0;
for(let e=0;e<arr1.length;e++){
    sum += arr1[e]
}
//console.log(sum)
aSum.innerHTML = `Sum of ${arr1} : ${sum}`