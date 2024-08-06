perDetails = [];

function addEvent(){
   alert("bveperDetailshjebv")
    const eName = document.getElementById("name").value;
    const eAge = document.getElementById("age").value;
    const eUsername = document.getElementById("username").value;
    const ePassword = document.getElementById("password").value;
    const eDate = document.getElementById("date").value;

    

    details = {
        name:eName,
        age:eAge,
        username:eUsername,
        password:ePassword,
        date:eDate
    };

    perDetails.push(details)

    display();
}

function display(){
    let tableBody = document.querySelector("#myTable tbody");
    tableBody.innerHTML = "";

    for(let i=0;i<perDetails.length;i++){
        let details = perDetails[i];
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let ageCell = row.insertCell(1);
        let usernameCell = row.insertCell(2);
        let passwordCell = row.insertCell(3);
        let dateCell = row.insertCell(4);
        let cancelCell = row.insertCell(5);

        nameCell.innerHTML = details.name;
        ageCell.innerHTML = details.age;
        usernameCell.innerHTML = details.username;
        passwordCell.innerHTML = details.password;
        dateCell.innerHTML = details.date;
        
        
    }
}



