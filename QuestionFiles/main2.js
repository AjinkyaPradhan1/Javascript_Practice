function alertBox(){
    alert("Hello")
}

function changeColour(){
    document.getElementById("div1").style.backgroundColor="red"
}

function baseColour(){
    document.getElementById("div1").style.backgroundColor="white"
}

function searchFunc(){
    document.getElementById("div2").innerHTML="and I am Tony Stark"
}

function focusFunc(){
    document.getElementById("s2").style.backgroundColor="yellow"
}
function focusExitFunc(){
    document.getElementById("s2").style.backgroundColor="white"
}
function changebgColour(){
    document.body.style.backgroundColor="violet"
}

function seeText(event){
    document.getElementById("div5").innerHTML="You pressed: "+event.key
}