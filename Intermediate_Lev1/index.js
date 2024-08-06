//1.Object drive of Car
const objDrive = document.getElementById("objDrive")
let car = {
    company: "Maruti",
    model: "Alto K10",
    purchaseYear: 2016,
    weight:880
}
car.drive = function(){
    console.log("Driving at 40kmph")
    objDrive.innerHTML = "Driving at 40kmph"
}
car.drive();


//2.change text of div using js
const pMain = document.getElementById("pMain")
const btnMp = document.getElementById("btnMp")
const btnGuj = document.getElementById("btnGuj")
const guj = "Gujarat, located on theIndia, is a state known for its vibrant culture, rich history, and economic dynamism. Bordered by the Arabian Sea, Gujarat has a long coastline, which has historically facilitated trade and cultural exchanges. The state is renowned for its diverse cultural heritage, which includes traditional music, dance forms like Garba and Dandiya, and a rich culinary tradition featuring distinct vegetarian cuisine."
const mp = "Madhya Pradesh, often abbreviated as MP, is a state located in the central region of India. Known as the Heart of India due to its geographical location, Madhya Pradesh boasts a rich cultural heritage, diverse wildlife, and numerous historical monuments. The state is renowned for its ancient temples, including the Khajuraho Group of Monuments, which are UNESCO World Heritage Sites celebrated for their intricate carvings and architectural brilliance."
btnGuj.addEventListener('click',()=>{
    function changeToGuj(){
            pMain.textContent = guj        
    }
    changeToGuj()
})
btnMp.addEventListener('click',()=>{
    function changeToMp(){
            pMain.textContent = mp        
    }
    changeToMp()
})

//3.Factorial of a number
const fNum = document.getElementById("fNum")
const calcFact=(numTwo)=>{
    if(numTwo==1){
        return 1
    }else{
        return numTwo*calcFact(numTwo-1)
    }
}
console.log(calcFact(5))
fNum.innerHTML = `Factorial of 5 : ${calcFact(5)}`

//4.Random Number between a range
const rNum = document.getElementById("rNum")
const randNum=(numS,numE)=>{
    return Math.floor(Math.random()*(numE+numS)+(numS));
}
console.log(randNum(1,9))
rNum.innerHTML = `Random Number between 1 and 9 : ${randNum(1,9)}`

//5.Only Even Number from Array
const eNumArray = document.getElementById("eNumArray")
const arr3 = [1,2,3,4,5,6,7,8,9,10]
const arr3Res = arr3.filter((element)=>element%2===0)
console.log(arr3Res)
eNumArray.innerHTML = `Even numbers from array of ${arr3} :<br> ${arr3Res}`

//6.double the element
const eNumDblArray = document.getElementById("eNumDblArray")
const arr4 = [1,2,3,4,5,6,7,8,9,10]
const arr4Res = arr4.map((element)=>element*2)
//console.log(arr3Res)
eNumDblArray.innerHTML = `Elements doubled up from array of ${arr4} :<br> ${arr4Res}`

//7.reduce the element
const eNumlrgEle = document.getElementById("eNumlrgEle")
const arr5 = [1,2,3,4,5,6,7,8,9,10]
const arr5Res = arr5.reduce((max,currVal)=>{return max>currVal?max:currVal},arr5[0])
//console.log(arr5Res)
eNumlrgEle.innerHTML = `Max Value from Array of ${arr5} :<br> ${arr5Res}`

//8.Remove occurences of a specific element from array
const specEleRem = document.getElementById("specEleRem")
const arr6 = [1,2,1,2,1,6,7,8,9,10]
const arr6Res = (numTwo)=> 
    arr6.filter((element)=>element!==numTwo)
//console.log(arr6Res(1))
specEleRem.innerHTML = `Value 1 removed from Array of ${arr6} :<br> ${arr6Res(1)}`

//9.Fibonaaci series
const fibNum = document.getElementById("fibNum")
const calcFib=(numTwo)=>{
    if(numTwo<=1){
        return numTwo
    }else{
        return calcFib(numTwo-1)+calcFib(numTwo-2)
    }
}
//console.log(calcFib(11))
fibNum.innerHTML = `Fibonacci Series result of 11 numbers : ${calcFib(11)}`