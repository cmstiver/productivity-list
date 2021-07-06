import {displayController} from './display.js'

export let data = [
    {
        title: "finish this project",
        desc: "wowowowowowoowowowowowowowowowowowow",
        date: "11/11/2021",
        group: "all"
    },
    {
        title: "omg",
        desc: "wowowowowowoowowowowowowowowowowowow",
        date: "11/66/2021",
        group: "all"
    }
]

export let taskController = (function() {
    function createTask() {
        let titleInput = document.getElementById('title-input')
        let descInput = document.getElementById('desc-input')
        let dateInput = document.getElementById('date-input')

        const newTask = (title, desc, date, group) => {
            return {title, desc, date, group};
        };

        let task = newTask(titleInput.value, descInput.value, dateInput.value)
        displayController.displayTasks()
    }
    return {
        createTask,
    }
})();

displayController.displayTasks()