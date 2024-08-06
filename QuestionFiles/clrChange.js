
function chngColor(){
    let bg1 = document.getElementById("bg1");
    let valClr = document.getElementById("clr1").value;
    let resClr = document.getElementById("resClr").innerHTML=valClr;
    bg1.style.backgroundColor = resClr;
}