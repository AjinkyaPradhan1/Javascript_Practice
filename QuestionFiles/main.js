//setTimeout(
function alertFunc(){
    alert("Heelo")
}
//,0)

function sumVal(){
    let num1 = prompt("Enter Value 1")
    let num2 = prompt("Enter Value 2")
    let sum = num1+num2;
    document.getElementById("div2").innerHTML=sum
    
}

function ClosureFunc(){
    document.getElementById("div1").innerHTML = "Hello Ajinkya";
    function checkInnerFunc(){
        document.getElementById("div2").innerHTML = "Hello Pradhan";
    }
}

const f1 = ClosureFunc()
console.log("Function printed: "+f1())