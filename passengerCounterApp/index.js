//document.getElementById("count-el").innerText = 5
//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el");

let count = 0;
let increment = () => {
    count = count + 1;
    countEl.textContent = count;
}
//1.grab the save-el paragraph and store it in a variable called save-el
let saveEl = document.getElementById("save-el");
let save = () => {
    //2.create a variable that contains both the count and the dash separator,i.e "12 - "
    //3.render the variable in the saveEl using innerText
    //NB: make sure to not delete the existing content of the paragraph
    let countS = count + " - ";
    saveEl.textContent += countS;
    console.log(count);
    count=0;
    countEl.textContent=count; 
}
