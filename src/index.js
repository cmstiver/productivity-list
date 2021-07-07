import {displayController} from './display.js'

export let dataHolder = (function() {

    let taskData = [
        {
            title: "Example",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium erat at nulla bibendum, nec sodales arcu mattis. In vitae condimentum neque. Vestibulum eget turpis lacinia lorem fringilla vulputate at et orci. Nam mauris ligula, convallis et fringilla ut, volutpat sed justo. Etiam vitae elit at nunc ullamcorper imperdiet. Etiam at malesuada metus, nec varius diam. Nullam mollis nec felis quis maximus. Vivamus auctor risus volutpat lacus porttitor, quis convallis turpis faucibus. Sed porttitor nisi vitae condimentum sodales. Nam aliquet, diam vitae luctus posuere, magna est tempor ipsum, id maximus ex sapien et massa. Aenean bibendum semper leo ut dictum. Nam sed ipsum lacinia, varius orci imperdiet, aliquam ipsum. Maecenas a dolor pellentesque, aliquet odio et, tempor odio. Nam dui nunc, rutrum eu leo id, dapibus posuere leo.",
            date: "2021-07-02",
            group: "All"
        },
    ]

    let groupData = [
        'All',
    ]

    let group = 'All'

    return {
        taskData,
        groupData,
        group,
    }
})();

export let taskController = (function() {

    function createTask() {
        let titleInput = document.getElementById('title-input')
        let descInput = document.getElementById('desc-input')
        let dateInput = document.getElementById('date-input')

        let check = newTaskValidation(titleInput.value, descInput.value, dateInput.value)
        if (check === false) {
            return
        }

        const addTask = (title, desc, date, group) => {
            return {title, desc, date, group};
        };

        let task = addTask(titleInput.value, descInput.value, dateInput.value, dataHolder.group)
        dataHolder.taskData.push(task)
        titleInput.value = ''
        descInput.value = ''
        dateInput.value = ''
        displayController.resetDisplay()
        displayController.displayAll()
        addToStorage()
    }

    function formatDate(value) {
        value = value.split("-")
        let newValue = `${value[1]}/${value[2]}/${value[0]}`
        return newValue
    }

    function deleteTask(title) {
        let taskIndex = dataHolder.taskData.findIndex(x => x.title === title)
        dataHolder.taskData.splice(taskIndex, 1)
        displayController.resetDisplay()
        displayController.displayAll()
        addToStorage()
    }

    function changeGroup(id) {
        dataHolder.group = id
        displayController.resetDisplay()
        displayController.displayAll()
        addToStorage()
    }

    function editTask(targeted) {
        let titleInput = document.querySelector('.task-title-input').value
        let dateInput = document.querySelector('.task-date-input').value
        let descInput = document.querySelector('.task-desc-input').value

        let check = editTaskValidation(titleInput, dateInput, descInput)
        if (check === false) {
            return
        }

        let index = targeted.firstChild.nextSibling.firstChild.nextSibling.id

        dataHolder.taskData[index].title = titleInput
        dataHolder.taskData[index].date = dateInput
        dataHolder.taskData[index].desc = descInput

        displayController.resetDisplay()
        displayController.displayAll()
        addToStorage()
    }

    function newGroup() {
        let groupInput = document.getElementById('group-input')

        let check = newGroupValidation(groupInput.value)
        if (check === false) {
            return
        }

        let newgroup = groupInput.value
        dataHolder.groupData.push(newgroup)
        dataHolder.group = groupInput.value
        groupInput.value = ''
        displayController.resetDisplay()
        displayController.displayAll()
        addToStorage()
    }

    function deleteGroup() {
        if (dataHolder.group === "All") {
            return
        }

        let groupIndex = dataHolder.groupData.findIndex(x => x === dataHolder.group)
        dataHolder.groupData.splice(groupIndex, 1)
        dataHolder.group = 'All'
        displayController.resetDisplay()
        displayController.displayAll()
        addToStorage()
    }

    function sortDates() {
        dataHolder.taskData.sort((a,b) => {
            return b.date > a.date ? -1 : a.date > b.date ? 1 : 0;
          });
    }

    function newTaskValidation(titleInput, descInput, dateInput) {
        if (titleInput.length < 1 || descInput.length < 1 || dateInput == "") {
            alert('All inputs should be filled.')
            return false
        }
    }
    function newGroupValidation(groupInput) {
        if (groupInput.length < 1) {
            alert('All inputs should be filled.')
            return false
        }
    }
    function editTaskValidation(titleInput, dateInput, descInput) {
        if (titleInput.length < 1 || descInput.length < 1 || dateInput == "") {
            alert('All inputs should be filled.')
            return false
        }
    }
    function addToStorage() {
        localStorage.setItem("taskDataString", JSON.stringify(dataHolder.taskData));
        localStorage.setItem("groupDataString", JSON.stringify(dataHolder.groupData));
      }
      
    function retrieveFromStorage() {
        if (localStorage.length != 0) {
            let retrievedTaskData = localStorage.getItem("taskDataString");
            dataHolder.taskData = JSON.parse(retrievedTaskData);

            let retrievedGroupData = localStorage.getItem("groupDataString");
            dataHolder.groupData = JSON.parse(retrievedGroupData);
        }
    }

    return {
        createTask,
        deleteTask,
        changeGroup,
        newGroup,
        editTask,
        formatDate,
        sortDates,
        deleteGroup,
        retrieveFromStorage,
    }
})();

taskController.retrieveFromStorage()
displayController.displayAll()