document.cookie = "Value=Ajinkya"

//user generated cookie
let key = prompt("Enter a key value");
let value = prompt("Enter a value")

let cookie = `user generated cookie: ${key}=${value}`
console.log(cookie)

//encode uri component
let cookie2 = `user generated cookie: ${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie2)

//decode uri component
decodeURI(cookie2)