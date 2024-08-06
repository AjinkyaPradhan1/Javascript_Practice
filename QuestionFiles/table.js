const submit = document.getElementById("submit")

function submitData(){
    const node = document.createElement("<tr></tr>");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

