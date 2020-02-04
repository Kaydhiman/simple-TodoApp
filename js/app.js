let todoForm, taskName, showTask, tasks;

todoForm = document.forms.namedItem('todo-form');
taskName = document.querySelector('.task-name');
showTask = document.querySelector('.show-tasks');
tasks = [];

// constructor to make task
let Task = function(task) {
    this.task = task;
    this.id = tasks.length + 1
}

// fetch local storage data and set into tasks array
let fetchData = () => localStorage.getItem('task') ? tasks = JSON.parse(localStorage.getItem('task')) : tasks = [];


// render funntion to render tasks
let render = () => {
    
    if(tasks) {

        showTask.innerHTML = '';

        for(let item in tasks) {

            let taskHTML = `<h3 data-id="${tasks[item].id}">${tasks[item].task}</h3>`;

            showTask.insertAdjacentHTML('beforeend', taskHTML);
        }
        
    }
}


// set task to localstoragef

let setData = () => {
    let task = new Task(taskName.value);
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
}


// delete item from task list
let deleteData = () => {
    let taskList = document.querySelectorAll('.show-tasks h3');

    taskList.forEach(item => {
        item.addEventListener('click', () => {
            let dataId = item.dataset.id;

            tasks.splice([dataId - 1], 1);
            console.log(tasks)
        })
    })
}


// on form submit create a new task and set into localstorage
if (todoForm) {
    todoForm.addEventListener('submit', e => {
        e.preventDefault();

        setData();

        init();
    })
}

// create initial state function
let init = () => {
    taskName.value = '';
    taskName.focus();
    fetchData();
    render();
    deleteData();
}

// initial state
init();



