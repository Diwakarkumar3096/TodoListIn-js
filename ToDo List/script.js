//get excess  of all data
const inputBox=document.getElementById("input-box");
const ListContainer=document.getElementById("list-container");
const countElement=document.getElementById("count");
let count=0;
//to add the data
function AddTask(){
    
    if(inputBox.value === ""){
        alert("you must write something");
    }
    else{
       
         let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          ListContainer.appendChild(li);
          //to create a span for remove button
          let span=document.createElement("span");
          span.innerHTML= "\u00d7";
          li.appendChild(span);
          saveData();
          // callled function save the data in local 
          count=count+1;// counting increases
          // display in the html
          countElement.innerHTML="count : "+count;
          saveData();
          
    }
    inputBox.value =" "// make the input place blank again
}
//added an event for checked or deleted
ListContainer.addEventListener('click', function(e) {
    //for check or uncheck
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        console.log("toggle");
        saveData();
        //remove the data
    } else if (e.target.tagName === "SPAN") {
        console.log("removed");
        e.target.parentElement.remove();
        count--;
        countElement.innerHTML="count : "+count;
        saveData();
    }
}, false);
countElement.innerHTML="count : "+count;

// to save the data
function saveData(){
    localStorage.setItem('data',ListContainer.innerHTML);
}
// to show the task after refreshing 
function showTask(){
    ListContainer.innerHTML=localStorage.getItem("data");
}
showTask()
