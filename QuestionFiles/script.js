let eventArray = [];

function addEvent() {
    let eventName = document.getElementById("eventName").value;
    let eventCost = document.getElementById("eventCost").value;
    let eventDays = document.getElementById("eventDays").value;

    let event = {
        name: eventName,
        cost: eventCost,
        days: eventDays
    };

    eventArray.push(event);
    display();
}

function display() {
    let tableBody = document.querySelector("#eventTable tbody");
    tableBody.innerHTML = "";
    let totalCost = 0;

    for(let i=0; i<eventArray.length; i++) {
        let event = eventArray[i];
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let costCell = row.insertCell(1);
        let daysCell = row.insertCell(2);
        let totalCell = row.insertCell(3);
        let cancelCell = row.insertCell(4);

        nameCell.innerHTML = event.name;
        costCell.innerHTML = event.cost;
        daysCell.innerHTML = event.days;
        let eventTotal = event.cost * event.days;
        totalCost += eventTotal;
        totalCell.innerHTML = eventTotal;
        cancelCell.innerHTML = `<a href="#" id="link${i}" onclick="deleteElement(this.id)">Cancel</a>`;
    }

    if(eventArray.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='5'>No Events available</td></tr>";
    }

    let totalCostCell = tableBody.insertRow().insertCell();
    totalCostCell.colSpan = "3";
    totalCostCell.innerHTML = "Total";
    let totalCell = tableBody.insertRow().insertCell();
    totalCell.innerHTML = totalCost;
}

function deleteElement(id) {
    let index = parseInt(id.substring(4));
    eventArray.splice(index, 1);
    display();
}
