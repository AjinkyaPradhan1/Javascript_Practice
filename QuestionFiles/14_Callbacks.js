//gm is the callback function

function gm(error,src){
    if(error){
        alert("Error aaya hai");
    }else{
        alert("partyyy karo bc, kaam ho gaya");
    }
}

function loadScript(src){
    var document = document.createElement("script");
    script.src = src ;
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",gm);