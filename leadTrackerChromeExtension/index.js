
const inputBtn = document.getElementById("input-btn");
let myLead = [];
let oldLead=[];

const inputEl = document.getElementById("input-el")

const deleteBtn = document.getElementById("delete-btn")

let val = document.querySelector('#input-el');//or you can use the document.getElementById("Id_name").value

const ulEl = document.getElementById("ul-el");

const tabBtn=document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
console.log(leadsFromLocalStorage);
if (leadsFromLocalStorage) {//checking if leadsFromLocalStorage is truthy
    myLead = leadsFromLocalStorage;
    render(myLead);
}

inputBtn.addEventListener("click", function () { //proffessionals use .addEventListeners to sense if the element is clicked instead of onclick
    myLead.push(val.value);
    inputEl.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLead));
    render(myLead);
})

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLead.push(tabs[0].url);
        localStorage.setItem("myLead",JSON.stringify(myLead))
        render(myLead)
    })   

})

deleteBtn.addEventListener("dblclick", function () {//listening for double clicks on delete button
    localStorage.clear();
    myLead=[]
    render(myLead);

})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems+="<li><a href='"+myLead[i]+"' target='_blank'>"+myLead[i]+"</a></li>"; 
        listItems += `<li>
     <a href='${leads[i]}' target='_blank'>
     ${leads[i]}
     </a>
     </li>`;
    }
    ulEl.innerHTML = listItems;
    //the following is done above with the help of .innerHTML
//create element
//set text content
//append to ul (below is the same thing)
/*const li = document.createElement("li");
li.textContent=myLead[i];
ulEl.append(li)*/

}
 

