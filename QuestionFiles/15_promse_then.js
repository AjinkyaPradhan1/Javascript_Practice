//promise with resolve(true scenario);

let promise1 = new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(() =>{
        // console.log("Nachooo bc, ho gaya kaam")
        resolve(true);
    },3000);
});

promise1.then("Nachooo bc, ho gaya kaam")

//promise with reject scenario;

let promise2 = new Promise(function(resolve,reject){
    console.log("Pending work");
    setTimeout(()=>{
        // console.log("nahi hua, wapas karna padega yaar");
        //reject(new Error ("wapas kar"));
    },3000);
});

promise2.catch(alert("wapas kar")); 
//if this is used than the error that has been specified would not 
//being printed in the console as it will be caught by the catch function