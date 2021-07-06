import {taskData, groupData, taskController} from './index.js'

export let displayController = (function() {
    function displayTasks() {
        let list = document.getElementById('list')
        taskData.forEach((task) => {
            list.innerHTML += `
            <div class="task">
                <div class="title">${task.title}</div>
                <div class="date">${task.date}</div>
                <div class="delete">Delete</div>
            </div>
            `
        })
    }
    function displayGroups() {
        let groups = document.getElementById('groups')
        groupData.forEach((group) => {
            groups.innerHTML += `
            <div id="${group}" class="group">${group}</div>
            `
        })
    }
    function resetDisplay(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    function assignEventListeners() {
        let createTask = document.getElementById('create-task')
        createTask.addEventListener('click', taskController.createTask)
    }
    return {
        displayTasks,
        displayGroups,
        assignEventListeners,
        resetDisplay
    }
})();