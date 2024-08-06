console.log("har\"".length)     //prints length as 4

let str = "Virat Kohli";
console.log(str.includes("Kohli"));
console.log(str.startsWith("V"));
console.log(str.endsWith("li"));

console.log(str.toLowerCase());

let str1 = "Please give me amount of Rs 1000";
console.log(str1.slice(28,33));

//strings are immutable
let str2 = "Rohit Sharma";
str2[4] = "j";
console.log(str2);