import {displayController} from './display.js'

export let dataHolder = (function() {

    let taskData = [
        {
            title: "finish project",
            desc: "wowowowowowoowowowowowowowowowowowow",
            date: "11/11/2021",
            group: "All"
        },
    ]

    let groupData = [
        'All',
        'Other'
    ]

    return {
        taskData,
        groupData,
    }
})();

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
        dataHolder.taskData.push(task)
        displayController.resetDisplay()
        displayController.displayAll()
    }
    function deleteTask(title) {
        let taskIndex = dataHolder.taskData.findIndex(x => x.title === title)
        dataHolder.taskData.splice(taskIndex, 1)
        displayController.resetDisplay()
        displayController.displayAll()
    }
    function changeGroup(id) {
        group = id
        console.log(dataHolder.taskData)
    }
    return {
        createTask,
        deleteTask,
        changeGroup,
    }
})();

displayController.displayAll()