const heading =document.querySelector("h1");
console.log(heading)
const headingContent = heading.innerHTML;
console.log(headingContent);
/* const heading1 =document.querySelector("h1");
const hadingContent1 = heading1.innerText;
console.log(hadingContent1) */

//id ile seçimi 
const toDoList=document.querySelector("#toDoList");
console.log(toDoList)
const contentToDoList = toDoList.innerHTML
console.log(contentToDoList)
// use documentGetByID 
/* const toDoList1=document.getElementById("toDoList");
console.log(toDoList1)
const contentToDoList1 = toDoList.innerHTML
console.log(contentToDoList1) */



//const contentToDoList2 = toDoList.innerText
//console.log(contentToDoList2)
//class ile seçimi 
const toDoListİthem = document.querySelector(".todo_list_ithem")
console.log(toDoListİthem);
const contentToDoListİthem =toDoListİthem.innerHTML;
console.log(contentToDoListİthem);//iki tane aynı class a sahip lioldugu için sadece ilkini yazar 2.de seçmek için querySelectorAll ile yapılmalı 

// use documentsGetByClassName 

/* const toDoListİthemClass = document.querySelector(".todo_list_ithem")
console.log(toDoListİthemClass);
const contentToDoListİthemClass =toDoListİthem.innerHTML;
console.log(contentToDoListİthemClass) */

//querySelectorAll ile 
const toDoListİthem1 = document.querySelectorAll(".todo_list_ithem")
console.log(toDoListİthem1);
const contentToDoListİthem1 =toDoListİthem1[0].innerHTML;
const contentToDoListİthem2 =toDoListİthem1[1].innerHTML;

console.log(contentToDoListİthem1)
console.log(contentToDoListİthem2)

// loop ile yazma 
/* for(let i=0;i<toDoListİthem1.length;i++){
    console.log(toDoListİthem1[i].innerHTML)
}
// foreach ile yazma
toDoListİthem1.forEach(element => {
    console.log(element.innerHTML)
    
}); */

const input = document.getElementsByName("todo_input")[0].value
console.log(input)//aray döndüğü için [0] ithem alınıyor

const input1 = document.getElementById("todo_input").value
console.log(input1)

