//Q1: craete a promise

let prom1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Ho gaya")
    },3000);
});

prom1.then(alert);


//Q2 use async / await to write the above program


async function check4(){
    let prom2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Ho gaya")
        },3000);
    });
}

console.log("Hello,program chal rha hai");
let a=check4();
console.log(alert(a));