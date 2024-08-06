let promise1 = new Promise(function(resolve,reject){
    console.log("Hello waiting");

    setTimeout(()=>{
        resolve(true)
    },2000);
});

promise1.then((value)=>{
    console.log("Waiting2");
    setTimeout(()=>{
        console.log("Hellow Promise 2 aaya")
    },2000);
});






















let promise3 = new Promise(function(resolve,reject){
    console.log("Hello Buddy, ruka hu abhi");

    setTimeout(()=>{
        console.log("3rd Promise Aa gaya")
    },4000);
});

promise3.then((value)=>{
    let promise4 = new Promise(function(resolve,reject){
        console.log("Hellow buddy 4th promise ke liye ruka hu");
        setTimeout(()=>{
            console.log("ho gaya kaam, goodbye");
            resolve(true);
        },4000);
    })
    return promise4;
}).then((value)=>{
    console.log("Ho gaya , so ja ab");
})