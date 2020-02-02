let todoForm, taskName, showTask, tasks;

todoForm = document.forms.namedItem('todo-form');
taskName = document.querySelector('.task-name');
showTask = document.querySelector('.show-tasks');
tasks = [];

// constructor to make task
let Task = function(task) {
    this.task = task;
}

// fetch local storage data and set into tasks array
let fetchData = () => localStorage.getItem('task') ? tasks = JSON.parse(localStorage.getItem('task')) : tasks = [];


// render funntion to render tasks
let render = () => {
    
    if(tasks) {

        for(let item in tasks) {

            let taskHTML = `<h3>${tasks[item].task}</h3>`;

            showTask.insertAdjacentHTML('beforeend', taskHTML);
        }
        
    }
}

// on form submit create a new task and set into localstorage
if (todoForm) {
    todoForm.addEventListener('submit', e => {
        e.preventDefault();

        let task = new Task(taskName.value);

        tasks.push(task);

        localStorage.setItem('task', JSON.stringify(tasks));

        init();
    })
}

// create initial state function
let init = () => {
    taskName.value = '';
    taskName.focus();
    fetchData();
    render();
}

// initial state
init();



