document.getElementById("p1")
document.getElementById("bt1")
document.getElementById("bt2")
document.getElementById("bt3")
document.getElementById("bt4")
document.getElementById("bt5")
document.getElementById("bt6")
document.getElementById("bt7")
document.getElementById("bt8")

function checkDate(){
    var date = new Date();
    p1.innerHTML = date;
}

function checkNowDate(){
    var date = new Date();
    var d = date.toDateString()
    p1.innerHTML = d;
}

function checkDay(){
    var date = new Date();
    var d = date.getDay()
    p1.innerHTML = d;
}

function checkMonth(){
    var date = new Date();
    var d = date.getMonth()+1
    p1.innerHTML = d;
}

function checkYear(){
    var date = new Date();
    var d = date.getFullYear()
    p1.innerHTML = d;
}

function checkHours(){
    var date = new Date();
    var d = date.getHours()
    p1.innerHTML = d;
}

function checkMinutes(){
    var date = new Date();
    var d = date.getMinutes()
    p1.innerHTML = d;
}

function checkSeconds(){
    var date = new Date();
    var d = date.getSeconds()
    p1.innerHTML = d;
}

function checkMilliSeconds(){
    var date = new Date();
    var d = date.getMilliseconds()
    p1.innerHTML = d;
}