const submit = document.getElementById("submit");

eventDetails = []

function addEvent(){
    
    const eName = document.getElementById("name").value;
    const eEmail = document.getElementById("email").value;
    const eMob = document.getElementById("mob").value;
    const eDate = document.getElementById("date").value;
    const eOccasion = document.getElementById("occasion").value;
    const ePeople = document.getElementById("people").value;
    const eDays = document.getElementById("days").value;

    event1 = {
        name : eName,
        email: eEmail ,
        mob : eMob,
        date : eDate ,
        occasion : eOccasion,
        people : ePeople ,
        days :eDays

    };

    eventDetails.push(event1);
    display();
}

function display(){
    let tableBody = document.querySelector("#eventTable tbody");   
    tableBody.innerHTML = "";
    let totalCost = 0;
    
    for(let i =0;i<eventDetails.length;i++){
        event1 = eventDetails[i];
        
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let emailCell = row.insertCell(1);
        let mobCell = row.insertCell(2);
        let dateCell = row.insertCell(3);
        let occasionCell = row.insertCell(4);
        let peopleCell = row.insertCell(5);
        let daysCell = row.insertCell(6);
        let totalCell = row.insertCell(7);
        let cancelCell = row.insertCell(8);

        nameCell.innerHTML = event1.name;
        emailCell.innerHTML = event1.email;
        mobCell.innerHTML = event1.mob;
        dateCell.innerHTML = event1.date;
        occasionCell.innerHTML = event1.occasion;
        peopleCell.innerHTML = event1.people;
        daysCell.innerHTML = event1.days;
        

        cancelCell.innerHTML = `<a href="#" id="link${i}" onclick="deleteElement(this.id)">Cancel</a>`;

        let eventTotal = event1.people * event1.days;
        totalCost += eventTotal;
        totalCell.innerHTML = eventTotal;
        
    }
    
    let totalEventCell = tableBody.insertRow().insertCell();
    totalEventCell.colspan = "7";
    totalEventCell.innerHTML = totalCost;
}

function deleteElement(id){
    let index = parseInt(id.substring(7));
    eventDetails.splice(index,1);
    display();
}
