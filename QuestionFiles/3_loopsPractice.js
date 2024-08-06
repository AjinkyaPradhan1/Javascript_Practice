//1

for(let i=0;i<10;i++){
    console.log(i);
}

//2 Print marks of a studet from an object

let marks = {
    eng : 56,
    maths : 67,
    science : 78,
    evs : 89
}

console.log("");

for(let b in marks){
    console.log(b+" : "+marks[b]);
}

console.log(" ");

for(let i=0;i<Object.keys(marks).length ;i++){
    console.log(Object.keys(marks)[i]+" : "+marks[Object.keys(marks)[i]]);
}

do{
    console.log("Try Again");
    let a = prompt("Enter a number");
}while(a==25);