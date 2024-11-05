//
let todoList = [{
    name: '',
    dueDate: ''
}];

//function to display the todolist on the page
renderTodo();
function renderTodo(){
    let todoListHtml = '';
    for(let i =0; i < todoList.length; i++){
        let todo = todoList[i];

        let {name, dueDate} = todo;
        

        let html =  `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="js-delete-todo-button delete-todo-button">Delete</button>
        `;

        todoListHtml += html;

    }
    document.querySelector('.js-display-todo').innerHTML = todoListHtml;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) =>{
            deleteButton.addEventListener('click', ()=>{
                todoList.splice(index, 1);
                renderTodo();
            })
        })
}

//
function addTodo(){
    let nameTodo = document.querySelector('.js-todo-input');
    const name = nameTodo.value;

    const dateInput = document.querySelector('.js-due-date');
    const dueDate = dateInput.value;

    todoList.push({name, dueDate});

    nameTodo.value = '';
    renderTodo();
    console.log(todoList)
}

