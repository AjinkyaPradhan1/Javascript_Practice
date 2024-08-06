const submit = document.getElementById("submit");

totalShopping = []

function addEvent(){
    const Ename = document.getElementById("name").value;
    const Eshirts = document.getElementById("shirt").value;
    const Ecost = document.getElementById("cost").value;

    buys = {
        name:Ename,
        shirts:Eshirts,
        cost:Ecost
    };

    totalShopping.push(buys);
    display();
    
}

function display(){
    let tableBody = document.querySelector("#shopTable tbody");
    tableBody.innerHTML = "";
    let totalCost = 0;

    for(let i=0;i<totalShopping.length;i++){
        buys = totalShopping[i];
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let shirtsCell = row.insertCell(1);
        let costCell = row.insertCell(2);
        let totalCell = row.insertCell(3);
        let cancelCell = row.insertCell(4);

        nameCell.innerHTML = buys.name;
        shirtsCell.innerHTML = buys.shirts;
        costCell.innerHTML = buys.cost;

        cancelCell.innerHTML = `<a href="#" id=link${i} onclick="deleteCell(this.id)">Cancel</a>`

        let eventTotal = buys.shirts * buys.cost;
        totalCost += eventTotal;
        totalCell.innerHTML = eventTotal;
    }

    if(totalShopping.length === 0){
        tableBody.innerHTML = "<tr><td colspan='5'>No Events available</td></tr>";
    }
    let totalShoppingHEadingCell = tableBody.insertRow().insertCell();
    totalShoppingHEadingCell.colspan = "7";
    totalShoppingHEadingCell.innerHTML = "Grand Total: "+totalCost;

}

function deleteCell(id){
    let index = parseInt(id.substring(7));
    totalShopping.splice(index,1)
    display();
}