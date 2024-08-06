const submit = document.getElementById("submit")

function convertUpper(){
    const arrStr = ["ajinkya","shlok","shivtej","tanmay"]
    
    // for(let i=0;i<arrStr.length;i++){
    //    arrStr[i] = arrStr[i].charAt(0).toUpperCase()  + arrStr[i].substr(1,length(arrStr[i]));
       
    // }

    arrStr.map( a => a.charAt(0).toUpperCase() + a.substr(1) );

    alert(arrStr.map( a => a.charAt(0).toUpperCase() + a.substr(1) ));
}