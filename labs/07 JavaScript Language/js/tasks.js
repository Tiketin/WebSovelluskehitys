// tasks.js
// This script manages a to-do list.

// Need a global variable:
let tasks = [];
const button = document.getElementById('remove');
button.addEventListener('click', removeDuplicates);
// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    let task = document.getElementById('task');

    // Reference to where the output goes:
    let output = document.getElementById('output');
    
    // For the output:
    let message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (let i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.
function removeDuplicates() {
    'use strict';
    let message = '';
    let output = document.getElementById('output');
    tasks = tasks.filter(function(item, index, inputArray) {
        output.innerHTML = message;
        return inputArray.indexOf(item) == index;
    });
    message = '<h2>To-Do</h2><ol>';
    for (let i = 0, count = tasks.length; i < count; i++) {
        message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
}





// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;