//story 1 When user type a todo ithem on input and add button the ithem will be add to the list 

//task 1.1 invoke a function onclick button 

// task 1.2: get input vakue

//task 1-3: Create and add the input value to do this task we have 3 step 

//BugFix  empty input when item  inserted succesfully

// Bugfix dont insert the when input is emty

function addIthem(){
    //acces input box as a node
  let inputValue = document.getElementById("todo_input"); 
  if(inputValue.value.length>0){//if(inputValue.value)

      //create li element for html
      const listItem = document.createElement("li");
      //add clas to li elemet which we add
      listItem.className ="todo_list_ithem"
      //assing input box value to li element innerHTML
      listItem.innerHTML = inputValue.value
      listItem.onclick=function(){
        removeItem(listItem);

      }
      
      //İNSERT NEWLY CREATED Lİ ELEMENT ABOVE TO UL ELEMENT
      
      document.querySelector("#toDoList").appendChild(listItem)
      //empty input boz value after click add
      inputValue.value =""
    }else {
        alert("enter todo ithem")
    }

};
addIthem()



// story 2 when user click on the ithem in the list the ithem will be removed/deleted from the list 

//task2.1 add onclick attribute to the li element 
//// Bugfix add onclick event to listıthrm which ve add with function

function removeItem(listItem){
    const isConfirm = confirm("are you sure")
    if(isConfirm) {

        //console.log(listItem)
        document.getElementById("toDoList").removeChild(listItem)
        //listItem.removed();
       
        //listItem.removed();
    }
}