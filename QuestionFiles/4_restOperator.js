//here all the elements passed as parameters in the function wre taken as an array in args 

const sum1 = (...args) =>{
    let sum = 0 ;
    for(let a of args){
        sum += a;
    }
    return sum;
}

let sm = sum1(1,2,3,4,5,6,7,8,9,10);
console.log("Sum: "+sm);


//here the first two elements are considered as and b respectively and rest 
//all the elements passed as parameters in the function wre taken as an array in args 

const sum2 = (a,b,...args) =>{
    let sum = 0 ;
    sum = a+b;
    for(let a of args){
        sum += a;
    }
    return sum;
}

let sm2 = sum2(1,2,3,4,5,6,7,8,9,10);
console.log("Sum: "+sm2);


