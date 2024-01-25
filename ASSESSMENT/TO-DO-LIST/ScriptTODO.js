function LIST(){    //CREATING FUNTION 

  let TODO = document.getElementById("Field").value;   //GETTING VALUE FROM INPUT FIELD

  let CHILD = document.createElement("p");     //CREATING DYNAMIC ELEMENT

  let CHILDTEXT = document.createTextNode(TODO);      //STORING DATA OF INPUT IN ELEMENT 


  if (TODO != ""){     // GIVING CONDITION IF THE INPUT FIELD IS EMPTY THAN IT WILL GIVE ALERT BOX
    
          CHILD.appendChild(CHILDTEXT);       // PASING DATA OR TEXT INTO DYNAMIC ELEMENT 
          document.getElementById("todolist").appendChild(CHILD);    // DISPLAYING USE ENTERED DATA IN DIV WHICH HAS ID NAME todolist
          
          document.getElementById("todolist").style.border = "3px solid limegreen";
          document.getElementById("todolist").style.borderRadius = "1rem";

  }
  else{
    window.alert("HMMM ITS LOOK LIKE THE INPUT FIELD IS EMPTY YOU HAVE TO WRITE SOMTHIG TO ADD IN TO DO LIST.");
  }    

  document.getElementById("Field").value = "";    // WHEN THE USE ADD ONE TASK THHIS WILL MAKE INPUT FIELD EMPHTY 

}