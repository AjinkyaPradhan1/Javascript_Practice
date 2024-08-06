//example of async function 

async function check(){
    let pWeather = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("29 Degrees");
        },3000);
    })

    let iWeather = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("30 Degrees");
        },6000);
    })

    let pW = pWeather.then(alert);
    let iW= iWeather.then(alert);
}

console.log("Function in proecess");
check();


//example of async function without await function

async function check2(){
    let vRuns = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("12000 Runs");
        },4000);
    });

    let rRuns = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("7000 Runs");
        },10000);
    });

    let v = vRuns.then(alert);
    let r = rRuns.then(alert);
}   

console.log("Function Exceuted");
check2();


//example of async function with await function
//the execution of vRuns awits untill rRuns is being executed
async function check3(){
    let vRuns = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("12000 Runs");
        },4000);
    });

    let rRuns = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("7000 Runs");
        },10000);
    });

    let v = await vRuns;
    let r = await rRuns;
    return [v,r];
}   

console.log("Function Exceuted");
let b = check3();
console.log(b);