/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


let displayController = (function() {
    let list = document.getElementById('list')
    let groups = document.getElementById('grouplist')

    function displayTasks() {
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.group === "All") {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.forEach((task) => {
                let date = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.formatDate(task.date)
                list.innerHTML += `
                <div class="task">
                    <div class="taskrow expand">
                        <div class="title">${task.title}</div>
                        <div class="date">${date}</div>
                        <button class="delete">Delete</button>
                    </div>
                    <div class="taskdeschidden">
                    <div class="taskdesc">${task.desc}</div>
                    <button class="edit">Edit</button>
                    </div>
                </div>
                `
            })
        } else {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.forEach((task) => {
                if (_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.group === task.group) {
                    let date = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.formatDate(task.date)
                    list.innerHTML += `
                    <div class="task">
                    <div class="taskrow expand">
                        <div class="title">${task.title}</div>
                        <div class="date">${date}</div>
                        <button class="delete">Delete</button>
                    </div>
                    <div class="taskdeschidden">
                    <div class="taskdesc">${task.desc}</div>
                    <button class="edit">Edit</button>
                    </div>
                </div>
                    `
                }
            })
        }
    }
    function displayGroups() {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.groupData.forEach((group) => {
            grouplist.innerHTML += `
            <button id="${group}" class="group groupbutton">${group}</button>
            `
        })
    }
    function displayAll() {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.sortDates()
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

    function replaceDataWithInput(targeted) {
        let title = targeted.firstChild.nextSibling.firstChild.nextSibling.innerHTML
        let index = _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.findIndex(x => x.title === title)

        targeted.innerHTML = `
        <div class="task">
            <div class="taskrow">
                <input id="${index}" class="task-title-input taskinput" value="${_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData[index].title}"></input>
                <input type="date" class="task-date-input taskinput" value="${_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData[index].date}"></input>
                <button class="delete">Delete</button>
            </div>
            <div class="taskdescshow">
            <input class="task-desc-input taskinput" value="${_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData[index].desc}"></input>
            <button class="confirmedit">Confirm</button>
            </div>
        </div>
        `
        assignEventListeners()
    }

    function assignEventListeners() {
        let createTask = document.getElementById('create-task')
        createTask.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.createTask)

        document.querySelectorAll(".delete").forEach(x => x.addEventListener('click', (e) => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.deleteTask(e.target.parentNode.firstChild.nextSibling.innerHTML)
        }))

        let deleteGroup = document.getElementById('deletegroup')
        deleteGroup.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.deleteGroup)

        document.querySelectorAll(".edit").forEach(x => x.addEventListener('click', (e) => {
            replaceDataWithInput(e.target.parentNode.parentNode)
        }))

        document.querySelectorAll(".confirmedit").forEach(x => x.addEventListener('click', (e) => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.editTask(e.target.parentNode.parentNode)
        }))

        document.querySelectorAll(".group").forEach(x => x.addEventListener('click', (e) => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.changeGroup(e.target.id)
        }))

        let createGroup = document.getElementById('addgroup')
        createGroup.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.newGroup)

        document.querySelectorAll('.expand').forEach((x) => {
            x.addEventListener('click', (e) => {
                e.currentTarget.nextSibling.nextSibling.classList.toggle('taskdescshow')
            })
        })

    }
    return {
        displayAll,
        assignEventListeners,
        resetDisplay,
    }
})();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataHolder": () => (/* binding */ dataHolder),
/* harmony export */   "taskController": () => (/* binding */ taskController)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/display.js");


let dataHolder = (function() {

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

let taskController = (function() {

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
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
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
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
        addToStorage()
    }

    function changeGroup(id) {
        dataHolder.group = id
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
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

        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
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
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
        addToStorage()
    }

    function deleteGroup() {
        if (dataHolder.group === "All") {
            return
        }

        let groupIndex = dataHolder.groupData.findIndex(x => x === dataHolder.group)
        dataHolder.groupData.splice(groupIndex, 1)
        dataHolder.group = 'All'
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
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
_display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBZ0I7QUFDNUIsWUFBWSxrRUFBMkI7QUFDdkMsMkJBQTJCLGdFQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RCw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsWUFBWSxrRUFBMkI7QUFDdkMsb0JBQW9CLHVEQUFnQjtBQUNwQywrQkFBK0IsZ0VBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hELDRDQUE0QyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBNEI7QUFDcEM7QUFDQSwwQkFBMEIsTUFBTSw4QkFBOEIsTUFBTTtBQUNwRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSwrREFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQTZCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSw4Q0FBOEMsMERBQW1CLGNBQWM7QUFDbEgsOEVBQThFLDBEQUFtQixhQUFhO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwwREFBbUIsYUFBYTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxnRUFBeUI7O0FBRXRFO0FBQ0EsWUFBWSxnRUFBeUI7QUFDckMsU0FBUzs7QUFFVDtBQUNBLDhDQUE4QyxpRUFBMEI7O0FBRXhFO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsWUFBWSw4REFBdUI7QUFDbkMsU0FBUzs7QUFFVDtBQUNBLFlBQVksaUVBQTBCO0FBQ3RDLFNBQVM7O0FBRVQ7QUFDQSw4Q0FBOEMsOERBQXVCOztBQUVyRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SDZDOztBQUV2Qzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsU0FBUyxHQUFHLFNBQVMsR0FBRyxTQUFTO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUE0QixFOzs7Ozs7VUNqTDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhSG9sZGVyLCB0YXNrQ29udHJvbGxlcn0gZnJvbSAnLi9pbmRleC5qcydcblxuZXhwb3J0IGxldCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JylcbiAgICBsZXQgZ3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwbGlzdCcpXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gICAgICAgIGlmIChkYXRhSG9sZGVyLmdyb3VwID09PSBcIkFsbFwiKSB7XG4gICAgICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IHRhc2tDb250cm9sbGVyLmZvcm1hdERhdGUodGFzay5kYXRlKVxuICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3JvdyBleHBhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHtkYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY1wiPiR7dGFzay5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhSG9sZGVyLmdyb3VwID09PSB0YXNrLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gdGFza0NvbnRyb2xsZXIuZm9ybWF0RGF0ZSh0YXNrLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tyb3cgZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY2hpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NcIj4ke3Rhc2suZGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5R3JvdXBzKCkge1xuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgZ3JvdXBsaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtncm91cH1cIiBjbGFzcz1cImdyb3VwIGdyb3VwYnV0dG9uXCI+JHtncm91cH08L2J1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbCgpIHtcbiAgICAgICAgdGFza0NvbnRyb2xsZXIuc29ydERhdGVzKClcbiAgICAgICAgZGlzcGxheVRhc2tzKClcbiAgICAgICAgZGlzcGxheUdyb3VwcygpXG4gICAgICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXREaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAobGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKGxpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGdyb3Vwcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBncm91cHMucmVtb3ZlQ2hpbGQoZ3JvdXBzLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZURhdGFXaXRoSW5wdXQodGFyZ2V0ZWQpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gdGFyZ2V0ZWQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlubmVySFRNTFxuICAgICAgICBsZXQgaW5kZXggPSBkYXRhSG9sZGVyLnRhc2tEYXRhLmZpbmRJbmRleCh4ID0+IHgudGl0bGUgPT09IHRpdGxlKVxuXG4gICAgICAgIHRhcmdldGVkLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcm93XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiJHtpbmRleH1cIiBjbGFzcz1cInRhc2stdGl0bGUtaW5wdXQgdGFza2lucHV0XCIgdmFsdWU9XCIke2RhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLnRpdGxlfVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0YXNrLWRhdGUtaW5wdXQgdGFza2lucHV0XCIgdmFsdWU9XCIke2RhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLmRhdGV9XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY3Nob3dcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRhc2stZGVzYy1pbnB1dCB0YXNraW5wdXRcIiB2YWx1ZT1cIiR7ZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGVzY31cIj48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbmZpcm1lZGl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhc3NpZ25FdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRhc2snKVxuICAgICAgICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0NvbnRyb2xsZXIuY3JlYXRlVGFzaylcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKS5mb3JFYWNoKHggPT4geC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udHJvbGxlci5kZWxldGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0U2libGluZy5pbm5lckhUTUwpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGxldCBkZWxldGVHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVncm91cCcpXG4gICAgICAgIGRlbGV0ZUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0NvbnRyb2xsZXIuZGVsZXRlR3JvdXApXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpLmZvckVhY2goeCA9PiB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHJlcGxhY2VEYXRhV2l0aElucHV0KGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb25maXJtZWRpdFwiKS5mb3JFYWNoKHggPT4geC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udHJvbGxlci5lZGl0VGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JvdXBcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xsZXIuY2hhbmdlR3JvdXAoZS50YXJnZXQuaWQpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGxldCBjcmVhdGVHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRncm91cCcpXG4gICAgICAgIGNyZWF0ZUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0NvbnRyb2xsZXIubmV3R3JvdXApXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZCcpLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrZGVzY3Nob3cnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5QWxsLFxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycyxcbiAgICAgICAgcmVzZXREaXNwbGF5LFxuICAgIH1cbn0pKCk7IiwiaW1wb3J0IHtkaXNwbGF5Q29udHJvbGxlcn0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuXG5leHBvcnQgbGV0IGRhdGFIb2xkZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgdGFza0RhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkV4YW1wbGVcIixcbiAgICAgICAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgcHJldGl1bSBlcmF0IGF0IG51bGxhIGJpYmVuZHVtLCBuZWMgc29kYWxlcyBhcmN1IG1hdHRpcy4gSW4gdml0YWUgY29uZGltZW50dW0gbmVxdWUuIFZlc3RpYnVsdW0gZWdldCB0dXJwaXMgbGFjaW5pYSBsb3JlbSBmcmluZ2lsbGEgdnVscHV0YXRlIGF0IGV0IG9yY2kuIE5hbSBtYXVyaXMgbGlndWxhLCBjb252YWxsaXMgZXQgZnJpbmdpbGxhIHV0LCB2b2x1dHBhdCBzZWQganVzdG8uIEV0aWFtIHZpdGFlIGVsaXQgYXQgbnVuYyB1bGxhbWNvcnBlciBpbXBlcmRpZXQuIEV0aWFtIGF0IG1hbGVzdWFkYSBtZXR1cywgbmVjIHZhcml1cyBkaWFtLiBOdWxsYW0gbW9sbGlzIG5lYyBmZWxpcyBxdWlzIG1heGltdXMuIFZpdmFtdXMgYXVjdG9yIHJpc3VzIHZvbHV0cGF0IGxhY3VzIHBvcnR0aXRvciwgcXVpcyBjb252YWxsaXMgdHVycGlzIGZhdWNpYnVzLiBTZWQgcG9ydHRpdG9yIG5pc2kgdml0YWUgY29uZGltZW50dW0gc29kYWxlcy4gTmFtIGFsaXF1ZXQsIGRpYW0gdml0YWUgbHVjdHVzIHBvc3VlcmUsIG1hZ25hIGVzdCB0ZW1wb3IgaXBzdW0sIGlkIG1heGltdXMgZXggc2FwaWVuIGV0IG1hc3NhLiBBZW5lYW4gYmliZW5kdW0gc2VtcGVyIGxlbyB1dCBkaWN0dW0uIE5hbSBzZWQgaXBzdW0gbGFjaW5pYSwgdmFyaXVzIG9yY2kgaW1wZXJkaWV0LCBhbGlxdWFtIGlwc3VtLiBNYWVjZW5hcyBhIGRvbG9yIHBlbGxlbnRlc3F1ZSwgYWxpcXVldCBvZGlvIGV0LCB0ZW1wb3Igb2Rpby4gTmFtIGR1aSBudW5jLCBydXRydW0gZXUgbGVvIGlkLCBkYXBpYnVzIHBvc3VlcmUgbGVvLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDIxLTA3LTAyXCIsXG4gICAgICAgICAgICBncm91cDogXCJBbGxcIlxuICAgICAgICB9LFxuICAgIF1cblxuICAgIGxldCBncm91cERhdGEgPSBbXG4gICAgICAgICdBbGwnLFxuICAgIF1cblxuICAgIGxldCBncm91cCA9ICdBbGwnXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrRGF0YSxcbiAgICAgICAgZ3JvdXBEYXRhLFxuICAgICAgICBncm91cCxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgbGV0IHRhc2tDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKVxuICAgICAgICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5wdXQnKVxuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKVxuXG4gICAgICAgIGxldCBjaGVjayA9IG5ld1Rhc2tWYWxpZGF0aW9uKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKVxuICAgICAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2MsIGRhdGUsIGdyb3VwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkYXRlLCBncm91cH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHRhc2sgPSBhZGRUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBkYXRhSG9sZGVyLmdyb3VwKVxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLnB1c2godGFzaylcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIGRlc2NJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgICAgICBhZGRUb1N0b3JhZ2UoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gYCR7dmFsdWVbMV19LyR7dmFsdWVbMl19LyR7dmFsdWVbMF19YFxuICAgICAgICByZXR1cm4gbmV3VmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHRpdGxlKSB7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBkYXRhSG9sZGVyLnRhc2tEYXRhLmZpbmRJbmRleCh4ID0+IHgudGl0bGUgPT09IHRpdGxlKVxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgICAgICBhZGRUb1N0b3JhZ2UoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUdyb3VwKGlkKSB7XG4gICAgICAgIGRhdGFIb2xkZXIuZ3JvdXAgPSBpZFxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICAgICAgYWRkVG9TdG9yYWdlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0VGFzayh0YXJnZXRlZCkge1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlLWlucHV0JykudmFsdWVcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRhdGUtaW5wdXQnKS52YWx1ZVxuICAgICAgICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzYy1pbnB1dCcpLnZhbHVlXG5cbiAgICAgICAgbGV0IGNoZWNrID0gZWRpdFRhc2tWYWxpZGF0aW9uKHRpdGxlSW5wdXQsIGRhdGVJbnB1dCwgZGVzY0lucHV0KVxuICAgICAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IHRhcmdldGVkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5uZXh0U2libGluZy5pZFxuXG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLnRpdGxlID0gdGl0bGVJbnB1dFxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhW2luZGV4XS5kYXRlID0gZGF0ZUlucHV0XG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLmRlc2MgPSBkZXNjSW5wdXRcblxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICAgICAgYWRkVG9TdG9yYWdlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdHcm91cCgpIHtcbiAgICAgICAgbGV0IGdyb3VwSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXAtaW5wdXQnKVxuXG4gICAgICAgIGxldCBjaGVjayA9IG5ld0dyb3VwVmFsaWRhdGlvbihncm91cElucHV0LnZhbHVlKVxuICAgICAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdncm91cCA9IGdyb3VwSW5wdXQudmFsdWVcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cERhdGEucHVzaChuZXdncm91cClcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cCA9IGdyb3VwSW5wdXQudmFsdWVcbiAgICAgICAgZ3JvdXBJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgICAgICBhZGRUb1N0b3JhZ2UoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUdyb3VwKCkge1xuICAgICAgICBpZiAoZGF0YUhvbGRlci5ncm91cCA9PT0gXCJBbGxcIikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3JvdXBJbmRleCA9IGRhdGFIb2xkZXIuZ3JvdXBEYXRhLmZpbmRJbmRleCh4ID0+IHggPT09IGRhdGFIb2xkZXIuZ3JvdXApXG4gICAgICAgIGRhdGFIb2xkZXIuZ3JvdXBEYXRhLnNwbGljZShncm91cEluZGV4LCAxKVxuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwID0gJ0FsbCdcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpXG4gICAgICAgIGFkZFRvU3RvcmFnZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29ydERhdGVzKCkge1xuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLnNvcnQoKGEsYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIuZGF0ZSA+IGEuZGF0ZSA/IC0xIDogYS5kYXRlID4gYi5kYXRlID8gMSA6IDA7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3VGFza1ZhbGlkYXRpb24odGl0bGVJbnB1dCwgZGVzY0lucHV0LCBkYXRlSW5wdXQpIHtcbiAgICAgICAgaWYgKHRpdGxlSW5wdXQubGVuZ3RoIDwgMSB8fCBkZXNjSW5wdXQubGVuZ3RoIDwgMSB8fCBkYXRlSW5wdXQgPT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoJ0FsbCBpbnB1dHMgc2hvdWxkIGJlIGZpbGxlZC4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbmV3R3JvdXBWYWxpZGF0aW9uKGdyb3VwSW5wdXQpIHtcbiAgICAgICAgaWYgKGdyb3VwSW5wdXQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgYWxlcnQoJ0FsbCBpbnB1dHMgc2hvdWxkIGJlIGZpbGxlZC4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZWRpdFRhc2tWYWxpZGF0aW9uKHRpdGxlSW5wdXQsIGRhdGVJbnB1dCwgZGVzY0lucHV0KSB7XG4gICAgICAgIGlmICh0aXRsZUlucHV0Lmxlbmd0aCA8IDEgfHwgZGVzY0lucHV0Lmxlbmd0aCA8IDEgfHwgZGF0ZUlucHV0ID09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdBbGwgaW5wdXRzIHNob3VsZCBiZSBmaWxsZWQuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFRvU3RvcmFnZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrRGF0YVN0cmluZ1wiLCBKU09OLnN0cmluZ2lmeShkYXRhSG9sZGVyLnRhc2tEYXRhKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3JvdXBEYXRhU3RyaW5nXCIsIEpTT04uc3RyaW5naWZ5KGRhdGFIb2xkZXIuZ3JvdXBEYXRhKSk7XG4gICAgICB9XG4gICAgICBcbiAgICBmdW5jdGlvbiByZXRyaWV2ZUZyb21TdG9yYWdlKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBsZXQgcmV0cmlldmVkVGFza0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tEYXRhU3RyaW5nXCIpO1xuICAgICAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YSA9IEpTT04ucGFyc2UocmV0cmlldmVkVGFza0RhdGEpO1xuXG4gICAgICAgICAgICBsZXQgcmV0cmlldmVkR3JvdXBEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJncm91cERhdGFTdHJpbmdcIik7XG4gICAgICAgICAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YSA9IEpTT04ucGFyc2UocmV0cmlldmVkR3JvdXBEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGNoYW5nZUdyb3VwLFxuICAgICAgICBuZXdHcm91cCxcbiAgICAgICAgZWRpdFRhc2ssXG4gICAgICAgIGZvcm1hdERhdGUsXG4gICAgICAgIHNvcnREYXRlcyxcbiAgICAgICAgZGVsZXRlR3JvdXAsXG4gICAgICAgIHJldHJpZXZlRnJvbVN0b3JhZ2UsXG4gICAgfVxufSkoKTtcblxudGFza0NvbnRyb2xsZXIucmV0cmlldmVGcm9tU3RvcmFnZSgpXG5kaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==