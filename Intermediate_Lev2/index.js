//1.API Call
function makeAPICall(url,callback){
    fetch(url)
    .then(response=>response.json())
    .then(data=>callback(data))
    .catch(err=>console.error("Error during APi Call"+err.message))
}

function handleData(data){
    console.log("Processed Data"+data)
}

function main(){
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2';
    makeAPICall(apiUrl1,handleData)
    makeAPICall(apiUrl2,handleData)
}
main();

//2.API Call using Promises
function makeAPICall(url,callback){
    return fetch(url)
    .then(response=>response.json())
    
}

function handleData(data){
    console.log("Processed Data"+data)
}

function main(){
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2';
    makeAPICall(apiUrl1)
    .then(handleData)
    .catch(err=>console.log(err))
    makeAPICall(apiUrl2)
    .then(handleData)
    .catch(err=>console.log(err))
}
main();

//3.Load Multiple Images using Promises
// prImg = document.getElementById("prImg")
// let imageUrls = ['./1.jpeg','./accelarate.jpeg','cannonball.png',
//     'fourarms.jpeg','greymatter.jpeg']

function loadImage(src){
    return new Promise(
        (resolve,reject)=>{
        let img = new Image(100,100)
        img.onload() = function(){
            resolve(img);
        };
        img.onerror = function(){
            reject(new Error("Failed to load image"+src))
        }
        img.src = src
    })
}

prImg = document.getElementById("prImg")
let imageUrls = ['./1.jpeg','./accelarate.jpeg','cannonball.png',
    'fourarms.jpeg','greymatter.jpeg']


Promise.all(imageUrls.map(loadImage))
.then(image=>{
    image.forEach(image=>prImg.appendChild(image))
})
.catch(error=>console.log(error))

//4.Gallery Creator
let gallery = document.getElementById("gallery")
let imageUrls1 = ['./1.jpeg','./accelarate.jpeg','cannonball.png',
    'fourarms.jpeg','greymatter.jpeg']

    function createImageEle(src){
        let img = document.createElement("img")
        img.src  = src;
        return img;
    }

imageUrls1.forEach(url=>gallery
.appendChild(createImageEle(url)))                                                 


//5.form validation
let f1 = document.getElementById("f1")

const validateForm = () => {
    let f1 = document.getElementById("f1")
    if(f1.checkValidity()){
        alert("Completed")
    }else{
        alert("Form baki hai bhai")
    }
}
f1.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateForm();
})


//6 Countdown timer creator
let timerS = document.getElementById('timerS')

function countTime(){
    let countSec = 60;
    setTimeout((countSec)=>{
        countSec--;
    },1000)
    timerS.innerHTML=countSec;
    console.log(countSec)
}
countTime()

//7.timeout change of motiational quotes

const quotes= [
    "Life is about making an impact, not making an income.-Kevin Cruise",
    "we only regret the chances we didn’t take.",
    "Less perfection, more authenticity",
    "Simplicity is the ultimate sophistication.",
    "Dream big and dare to fail.",
    "Every moment matters.",
    "Find joy in the ordinary.",
    "Life is short; make it sweet.",
    "Cherish the little things.",
    "Be a voice, not an echo"
]

function displayQuotes(){

    const mtDiv = document.getElementById("mtDiv")
    let ind = Math.floor(Math.random()*quotes.length)
    mtDiv.innerText = quotes[ind]
}
function randomPickQuote(){
    setInterval(displayQuotes,5000)
}
randomPickQuote()

//8.Evenish Oddish
const evenOdd = (num1) =>{
    const digit = num1.toString().split('').map(Number);
    const sum = digit.reduce((acc,digit)=>acc+digit,0)
    return sum%2==0?"Evenish":"Oddish"
}
const evOd = document.getElementById("evOd")
evOd.innerHTML = evenOdd(123456786)

//9.Reverse Strings with Odd length
const revOddString = (str2) => {
    const length = str2.length;
    if(length%2!=0){
        console.log(length)
        return str2.split('').reverse().join('').toLowerCase();
    }   
}
console.log(`Reversed String: ${revOddString("Ajinkya")}`)


//10.days in a month
const daysInMonth = (month,year) => {
    if((year%4==0 && year%100!=0)||(year%400==0)){
        if(month==2){
            console.log(29)
        }
    }else{
        if(month==1 || month==3|| month==5 ||month==7||month==8||month==10||month==12){
            console.log(31)
        }else if(month ==2){
            console.log(28)
        }else{
            console.log(30)
        }
    }
    
}
daysInMonth(12,1998)
