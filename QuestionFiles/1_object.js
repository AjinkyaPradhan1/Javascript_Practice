let obj1 = {
    name : "Virat Kohli",
    age : 32,
    country : "India",
    GOAT_cricket : true,
    retirement: undefined,
    jerseys : {
        RCB : "red",
        India : "blue",
    }
}

console.log(obj1);
console.log(obj1.retirement);
console.log(obj1.country);
console.log(obj1.jerseys.India);

obj1['name'] = "Siraj";
obj1['country'] = "India";
obj1['GOAT_cricket'] = false;

console.log(obj1);
