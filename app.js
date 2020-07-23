var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);

    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.appendChild(delText);
    delBtn.setAttribute("class","btn1");
    delBtn.setAttribute("onclick","deleteItem(this)");

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT"); 
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn1");
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
    todo_item.value = ""

}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Todo",val);
    e.parentNode.firstChild.nodeValue = editValue;
}