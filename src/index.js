import {displayController} from './display.js'

export let taskData = [
    {
        title: "finish this project",
        desc: "wowowowowowoowowowowowowowowowowowow",
        date: "11/11/2021",
        group: "All"
    },
]

export let groupData = [
    'All',
    'Other'
]

export let taskController = (function() {

    let group = 'All'

    function createTask() {
        let titleInput = document.getElementById('title-input')
        let descInput = document.getElementById('desc-input')
        let dateInput = document.getElementById('date-input')

        const newTask = (title, desc, date, group) => {
            return {title, desc, date, group};
        };

        let task = newTask(titleInput.value, descInput.value, dateInput.value, group)
        taskData.push(task)
        displayController.resetDisplay(list)
        displayController.displayTasks()
    }
    return {
        createTask,
    }
})();

displayController.displayTasks()
displayController.displayGroups()
displayController.assignEventListeners()