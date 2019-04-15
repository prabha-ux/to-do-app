function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');//<ul></ul>

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    let newLi = document.createElement('li'); //create a new li //<li></li>
    let checkbox = document.createElement('input'); //create a new checkbox as an input
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button'); //create delete deleteButton
    deleteBtn.textContent = "Delete"; //adding text content to the delete deleteButton

    deleteBtn.addEventListener('click', function(event){
      //this.parentElement represents the delete button's <li> parent
      toDoList.removeChild(this.parentElement);
    });

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    toDoList.appendChild(newLi);
    newToDoText.value = "";
  });
};

window.onload = function() {
  onReady();
};
