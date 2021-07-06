import {dataHolder, taskController} from './index.js'

export let displayController = (function() {
    let list = document.getElementById('list')
    let groups = document.getElementById('groups')

    function displayTasks() {
        if (dataHolder.group === "All") {
            dataHolder.taskData.forEach((task) => {
                list.innerHTML += `
                <div class="task">
                    <div class="title">${task.title}</div>
                    <div class="date">${task.date}</div>
                    <div class="delete">Delete</div>
                </div>
                `
            })
        } else {
            dataHolder.taskData.forEach((task) => {
                if (dataHolder.group === task.group) {
                    list.innerHTML += `
                    <div class="task">
                        <div class="title">${task.title}</div>
                        <div class="date">${task.date}</div>
                        <div class="delete">Delete</div>
                    </div>
                    `
                }
            })
        }
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
        document.querySelectorAll(".group").forEach(x => x.addEventListener('click', (e) => {
            taskController.changeGroup(e.target.id)
        }))
    }
    return {
        displayAll,
        assignEventListeners,
        resetDisplay,
    }
})();