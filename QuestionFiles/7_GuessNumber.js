console.log("Guess the Number: ");
let rndNum;
let userInpt;
do{
    rndNum = Math.floor(Math.random(1,100)*100);
    //console.log(rndNum)
    //rndNum = 56;
    userInpt = prompt("Enter a number between 1 and 100");
}while(userInpt!=rndNum);

console.log("Yessss,you guessed it right...The number was 56")