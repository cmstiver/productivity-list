import {data} from './index.js'

export let displayController = (function() {
    function displayTasks() {
        data.forEach((task) => {
            document.getElementById('list').innerHTML += `
            <div class="task">
                <div class="title">${task.title}</div>
                <div class="date">${task.date}</div>
                <div class="delete">Delete</div>
            </div>
            `
        })
    }
    function createTask() {
        let titleInput = document.getElementById('title-input')
        let descInput = document.getElementById('desc-input')
        let dateInput = document.getElementById('date-input')
        
    }
    return {
        displayTasks,
        createTask
    }
})();