try{
    let age = prompt("Enter age")
    let AgeNum = Number.parseInt(age);
    if(AgeNum>200){
        throw new SyntaxError("Kitna Fekega");
    }

}catch(err){
    console.log(err.name);      //prints error type
    console.log(err.message);   //prints custome message designed by user
    console.log(err.stack);
    
}