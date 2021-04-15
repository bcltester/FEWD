// GLOBAL VARIABLES
let storage;
let list;
let task;
let tasks = [];

// GET DOM ELEMENTS

const $ = (elem) => {
    return document.querySelector(elem);
}

// DISPLAY TASK LIST
const displayTaskList = () => {
    // IF THERE ARE NO TASKS IN ARRAY, CHECK STORAGE
    if (tasks.length === 0) {
        storage = localStorage.getItem('tasks') || '';  //if there's something in tasks, then storage becomes that value. If there's nothing it gets set to ''.
    
        if (storage.length > 0) {
            tasks = storage.split('|');
        }
    }

    // IF THERE ARE TASK IN THE ARRAY ...
    // SORT AND CREATE TASKS STRING
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join('\n');
        $('#task_list').value = list;
    }
};


// ADD TASK TO LIST
const addTaskToList = () => {
    if ($('#task').value !== '') {
        //ADD TASK TO ARRAY
        tasks.push($('#task').value);
        //ADD TASK TO STORAGE
        localStorage.setItem('tasks', tasks.join('|'));   //don't need JSON.stringify because it's not a multi-dimensional array.  He's doing this join('|') to make it pipe-delimited instead of comma-delimited
        //CLEAR TEXT BOX
        $('#task').value = '';
        // SHOW UPDATED TASK LIST
        displayTaskList();
    } else {
        alert('Please enter a task');
    }

};

// CLEAR TASK LIST
const clearTaskList = () => {
    tasks.length = 0;
    localStorage.removeItem('tasks');
    $('#task_list').value = '';
};

window.addEventListener('load', () => {
    $('#add_task').addEventListener('click', addTaskToList);
    $('#clear_tasks').addEventListener('click', clearTaskList);
    displayTaskList();
});
