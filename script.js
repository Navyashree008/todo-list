function delete_task(index){
    console.log(1)
    var list1 = JSON.parse(localStorage.getItem("key"));
    list1.splice(index, 1);
    showtasks(list1)
    localStorage.setItem("key",JSON.stringify(list1))
}
function showtasks(list1){
    console.log(2)
    var input = document.getElementById("input1");
    var index = 0
    var x=""
    for(i of list1){
        x+="<li>"+i+"<input type='button' value='X' onclick='delete_task("+index+")' />"+"</li>"
        index++
    } 
    document.getElementById("todoList").innerHTML = x;
    var list1 = JSON.parse(localStorage.getItem("key")).length;
    var show = "you have"+list1+"tasks"   
    document.getElementById("footer").innerHTML = show;
}
function func(){
    console.log(3)
    var input = document.getElementById("input1");
    var footer = document.getElementById("footer");
    localStorage.removeItem("key")
    document.getElementById("todoList").innerHTML = ""; 
    document.getElementById("footer").innerHTML = ""; 
    showtasks()


}
function addBtn(){
    console.log(4)
    l = []
    var input = document.getElementById("input1");
    var list1 = localStorage.getItem("key");
    var newList=[]
    
    if (list1 == null){
        newList.push(input.value)
        localStorage.setItem("key",JSON.stringify(newList))
    }
    else{
        newList=JSON.parse(list1);
        newList.push(input.value);
        localStorage.setItem("key",JSON.stringify(newList))
    }
    input.value = ""
    showtasks(newList)
}