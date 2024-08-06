const submit = document.getElementById("submit");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");

const arr1 = [1,"Virat",true,2.345134]

function resArray(){
    alert(arr1)
}



// 1) Add elements
function addEle(){
    arr1.push(2,"Rohit",false,3.34521322)
}

//2) add two elements from prompt
function addElementPrompt(){
    const a = parseInt(prompt("Enter number a: "))
    const b = parseInt(prompt("Enter number b: "))
    var c = a+b;
    result2.innerHTML = c
}

//3 add all elements entered from prompt

function addeleMultiple(){
    var arr3 = []
    const a = parseInt(prompt("How many numbers you want: "))

    for(let i =0;i<a;i++){
         arr3.push(parseInt(prompt("Enter number "+i+" :")))
    }
    result.innerHTML = arr3
}


//table in js
function genTable(){
    
    const a = parseInt(prompt("Whose table you want to generate: "))

    for(let i =1;i<=10;i++){
        const resultTab  = i*a
        console.log(`${a}*${i}=${resultTab}`)
    }
   
}

//check the type of array

function checkArrayType(){
    const arr4 = [1,'Virat',4.3456,true]
    console.log(typeof(arr4))
}


//clone Array

function cloneArray(){
    const arr4 = [1,'Virat',4.3456,true]
    arr5 = []
    arr5 = arr4
    console.log(arr5)
}

//get first element of array

function enterString(n){
    arr6 = []
    for(let i =0;i<5;i++){
        arr6.push(prompt("Enter String "+i+" :"))
    }
    console.log(arr6)
    let arr6New = arr6.join("-");
    console.log(arr6New)
}

//dash before even numbers

function enterDash(){
    arr8 = []
    arr9 = []
    let numA = prompt("Enter how many number you want to Enter: ")
    for(let i =0;i<numA;i++){
        arr8.push(parseInt(prompt("Enter number "+i+" :")))
    }
    console.log(arr8)
    for(let j=0;j<arr8.length;j++){
        if((arr8[j-1])%2==0 && ((arr8[j])%2==0)){
            arr9.push('-',arr8[j]);
        }else{
            arr9.push(arr8)
        }
    }
    console.log(arr9.join(''))
    
}

//sort array
function sortArray(){
    arr10 = []
    
    let num = prompt("Enter how many number you want to Enter: ")
    for(let i =0;i<num;i++){
        arr10.push(parseInt(prompt("Enter number "+(i+1)+" :")))
    }
    console.log(arr10)

    let temp = 0
    for(let i=0;i<arr10.length;i++){
        for(let j=i+1;j<arr10.length;j++){
            if(arr10[i]>arr10[j]){
                temp = arr10[i]
                arr10[i] = arr10[j]
                arr10[j] = temp
            }
        }
    }
    console.log(arr10)
}










//last 
function display(){
    result.innerHTML = arr3
}
