//1) calculate mean of numbers

/*

const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4;
}
let mn = mean(1,2,3,4);
console.log(mn);

*/

//2) area of rectangle
/*

const area = (length) =>{
    let sqr = length * length;
    console.log(sqr);
}

let n = prompt("Enter a number for length")
let areaInp = area(n);
console.log(areaInp);

*/

//3) Reverse a number



const rev = (str) =>{
    let revStr = 0;
    while(str>0){
        str = str % 10;
        //console.log(str);
        revStr = (revStr*10) + str;
        str = Math.floor(str/10);
    }
    
    return revStr;
}

console.log(rev(123));