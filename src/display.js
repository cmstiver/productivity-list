import {dataHolder, taskController} from './index.js'

export let displayController = (function() {
    let list = document.getElementById('list')
    let groups = document.getElementById('groups')

    function displayTasks() {
        dataHolder.taskData.forEach((task) => {
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
        dataHolder.groupData.forEach((group) => {
            groups.innerHTML += `
            <div id="${group}" class="group">${group}</div>
            `
        })
    }
    function displayAll() {
        displayTasks()
        displayGroups()
        assignEventListeners()
    }
    function resetDisplay() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        while (groups.firstChild) {
            groups.removeChild(groups.firstChild);
        }
    }
    function assignEventListeners() {
        let createTask = document.getElementById('create-task')
        createTask.addEventListener('click', taskController.createTask)

        document.querySelectorAll(".delete").forEach(x => x.addEventListener('click', (e) => {
            taskController.deleteTask(e.target.parentNode.firstChild.nextSibling.innerHTML)
        }))
    }
    return {
        displayAll,
        assignEventListeners,
        resetDisplay,
    }
})();