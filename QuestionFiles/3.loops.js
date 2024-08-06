let obj1 = {
    name : "Virat Kohli",
    age : 32,
    city : "Delhi",
    country : "India",
    ranji : "Delhi"
}

//used to print the values for the respective keys in obj1
for(let b in obj1){
    console.log(b);
}

console.log(" ");

for(let c of obj1.name){
    console.log(c);
}

console.log(" ");

let obj2 = {
    name : "Lionel Messi",
    age : 35,
    country : "Argentina",
    jersey : {
        arg : "white-Blue",
        barca : "red-yellow-darkBlue",
        psg : "purple-white-red"
    },
    GOAT : true
}

console.log(" ");

for(let d in obj2){
    console.log(d);
}

console.log(" ");

for(let e of obj2.jersey.arg){
    console.log(e);
}