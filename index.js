const todoObjectlist = [];

class Todo_class {
 constructor(item){
 this.ulElement =item;
 }
add() {
}
done_undone(x) {
}
deleteElement(z) {
}
display(){ 
}
const listSection = document.querySelector("#Myul");
myTodolist = new Todo_class(listsection);

document.querySelector("addButton").addEventlistener("click"), function() {
this.myTodolist.add()
}
add() {
    const todoInput = document.querySelector("#myInput").nodeValue;
    if (todoInput == "") {
    alert("You did not enter any item!")
    } else {
    const todoObject = {
    id: todoObjectlist.length,
    todoText: todoInput,
    isDone: false,
    } 
    
    todoObjectlist.unshift(todoObject);
    this.display();
    document.querySelector("#myInput").value = '';
    }
}
}
