let promise1 = new Promise(function(resolve,reject){
    console.log("Waiting");
    setTimeout(()=>{
        resolve(true);
    },3000);
});

promise1.then("Ho gaya");

