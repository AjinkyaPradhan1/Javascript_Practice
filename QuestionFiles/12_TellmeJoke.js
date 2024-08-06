let array1 = ["Virat","Rohit","Hardik","Bumrah","Ashwin","Jadeja","Pant","Shami","Rahane","Pujara"];
const idx = Math.floor(Math.random()*array1.length);
const itm = array1[idx];

function getName(){
    let resClr = document.getElementById("resClr").innerHTML = itm;
}