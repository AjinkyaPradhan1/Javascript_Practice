let nav = document.getElementsByClassName("topnav");
console.log(nav)

//colors the text red to all the text within the rows of the navbar
let navChild1 = document.getElementsByClassName("nav1")[0].firstElementChild.firstElementChild.style.color="red";
console.log(navChild1)

let navChild2 = document.getElementsByClassName("nav1")[0].firstElementChild.firstElementChild.lastChild.style.color="blue";
console.log(navChild2)

let n1 = document.getElementsByClassName("div1")[0].firstElementChild.style.backgroundColor = "green";
let n2 = document.getElementsByClassName("div1")[0].lastElementChild.style.backgroundColor = "red";