function onReady() {
  let id = 0;
  let toDos = localStorage.getItem("toDos");
  console.log(toDos)
  if(toDos == null) {
    toDos = [];
  } else {
    toDos = JSON.parse(toDos);
    console.log(toDos)
  }
  const addToDoForm = document.getElementById('addToDoForm');
  renderTheUI();

function createNewToDo(){
  const newToDoText = document.getElementById('newToDoText');
  if (!newToDoText.value) { return; }
  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: id
  });
  localStorage.setItem("toDos", JSON.stringify(toDos));
  id++;
  newToDoText.value = '';
  renderTheUI();
}

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    checkbox.addEventListener('click', event => {
      toDos.forEach (function(item){
          if (item.id == toDo.id) {
            if (checkbox.checked == true){
              item.complete = true;
            }
            else {
              item.complete = false;
            }
          }
        }
      )
      localStorage.setItem("toDos", JSON.stringify(toDos));
    });

    const delete_btn = document.createElement('button');
    delete_btn.textContent = "Delete!";

    delete_btn.addEventListener('click', event => {
      toDos = toDos.filter(function(item){
        return item.id !== toDo.id;
      })
      localStorage.setItem("toDos", JSON.stringify(toDos));
      renderTheUI();
    });
    newLi.textContent = toDo.id + ". " + toDo.title;
    checkbox.checked = toDo.complete;
    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(delete_btn);
  });
}

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
}

window.onload = function() {
  onReady();
};
