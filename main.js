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
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
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
    }

    function changeGroup(id) {
        dataHolder.group = id
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll() 
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
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
    }

    function deleteGroup() {
        let groupIndex = dataHolder.groupData.findIndex(x => x === dataHolder.group)
        console.log(groupIndex)
        dataHolder.groupData.splice(groupIndex, 1)
        dataHolder.group = 'All'
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
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

    return {
        createTask,
        deleteTask,
        changeGroup,
        newGroup,
        editTask,
        formatDate,
        sortDates,
        deleteGroup
    }
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBZ0I7QUFDNUIsWUFBWSxrRUFBMkI7QUFDdkMsMkJBQTJCLGdFQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RCw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsWUFBWSxrRUFBMkI7QUFDdkMsb0JBQW9CLHVEQUFnQjtBQUNwQywrQkFBK0IsZ0VBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hELDRDQUE0QyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBNEI7QUFDcEM7QUFDQSwwQkFBMEIsTUFBTSw4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c2tDb250cm9sbGVyfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKVxuICAgIGxldCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBsaXN0JylcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgICAgICAgaWYgKGRhdGFIb2xkZXIuZ3JvdXAgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gdGFza0NvbnRyb2xsZXIuZm9ybWF0RGF0ZSh0YXNrLmRhdGUpXG4gICAgICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcm93IGV4cGFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjXCI+JHt0YXNrLmRlc2N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFIb2xkZXIuZ3JvdXAgPT09IHRhc2suZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSB0YXNrQ29udHJvbGxlci5mb3JtYXREYXRlKHRhc2suZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3JvdyBleHBhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHtkYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY1wiPiR7dGFzay5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlHcm91cHMoKSB7XG4gICAgICAgIGRhdGFIb2xkZXIuZ3JvdXBEYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBncm91cGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke2dyb3VwfVwiIGNsYXNzPVwiZ3JvdXAgZ3JvdXBidXR0b25cIj4ke2dyb3VwfTwvYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsKCkge1xuICAgICAgICB0YXNrQ29udHJvbGxlci5zb3J0RGF0ZXMoKVxuICAgICAgICBkaXNwbGF5VGFza3MoKVxuICAgICAgICBkaXNwbGF5R3JvdXBzKClcbiAgICAgICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldERpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoZ3JvdXBzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5yZW1vdmVDaGlsZChncm91cHMuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlRGF0YVdpdGhJbnB1dCh0YXJnZXRlZCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0YXJnZXRlZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuaW5uZXJIVE1MXG4gICAgICAgIGxldCBpbmRleCA9IGRhdGFIb2xkZXIudGFza0RhdGEuZmluZEluZGV4KHggPT4geC50aXRsZSA9PT0gdGl0bGUpXG5cbiAgICAgICAgdGFyZ2V0ZWQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tyb3dcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCIke2luZGV4fVwiIGNsYXNzPVwidGFzay10aXRsZS1pbnB1dCB0YXNraW5wdXRcIiB2YWx1ZT1cIiR7ZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0udGl0bGV9XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInRhc2stZGF0ZS1pbnB1dCB0YXNraW5wdXRcIiB2YWx1ZT1cIiR7ZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGF0ZX1cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjc2hvd1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1kZXNjLWlucHV0IHRhc2tpbnB1dFwiIHZhbHVlPVwiJHtkYXRhSG9sZGVyLnRhc2tEYXRhW2luZGV4XS5kZXNjfVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybWVkaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzc2lnbkV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgY3JlYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdGFzaycpXG4gICAgICAgIGNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ29udHJvbGxlci5jcmVhdGVUYXNrKVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpLmZvckVhY2goeCA9PiB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250cm9sbGVyLmRlbGV0ZVRhc2soZS50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlubmVySFRNTClcbiAgICAgICAgfSkpXG5cbiAgICAgICAgbGV0IGRlbGV0ZUdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZWdyb3VwJylcbiAgICAgICAgZGVsZXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ29udHJvbGxlci5kZWxldGVHcm91cClcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVwbGFjZURhdGFXaXRoSW5wdXQoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICB9KSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbmZpcm1lZGl0XCIpLmZvckVhY2goeCA9PiB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250cm9sbGVyLmVkaXRUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cFwiKS5mb3JFYWNoKHggPT4geC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udHJvbGxlci5jaGFuZ2VHcm91cChlLnRhcmdldC5pZClcbiAgICAgICAgfSkpXG5cbiAgICAgICAgbGV0IGNyZWF0ZUdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGdyb3VwJylcbiAgICAgICAgY3JlYXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ29udHJvbGxlci5uZXdHcm91cClcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kJykuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tkZXNjc2hvdycpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlBbGwsXG4gICAgICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzLFxuICAgICAgICByZXNldERpc3BsYXksXG4gICAgfVxufSkoKTsiLCJpbXBvcnQge2Rpc3BsYXlDb250cm9sbGVyfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cbmV4cG9ydCBsZXQgZGF0YUhvbGRlciA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCB0YXNrRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiRXhhbXBsZVwiLFxuICAgICAgICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBwcmV0aXVtIGVyYXQgYXQgbnVsbGEgYmliZW5kdW0sIG5lYyBzb2RhbGVzIGFyY3UgbWF0dGlzLiBJbiB2aXRhZSBjb25kaW1lbnR1bSBuZXF1ZS4gVmVzdGlidWx1bSBlZ2V0IHR1cnBpcyBsYWNpbmlhIGxvcmVtIGZyaW5naWxsYSB2dWxwdXRhdGUgYXQgZXQgb3JjaS4gTmFtIG1hdXJpcyBsaWd1bGEsIGNvbnZhbGxpcyBldCBmcmluZ2lsbGEgdXQsIHZvbHV0cGF0IHNlZCBqdXN0by4gRXRpYW0gdml0YWUgZWxpdCBhdCBudW5jIHVsbGFtY29ycGVyIGltcGVyZGlldC4gRXRpYW0gYXQgbWFsZXN1YWRhIG1ldHVzLCBuZWMgdmFyaXVzIGRpYW0uIE51bGxhbSBtb2xsaXMgbmVjIGZlbGlzIHF1aXMgbWF4aW11cy4gVml2YW11cyBhdWN0b3IgcmlzdXMgdm9sdXRwYXQgbGFjdXMgcG9ydHRpdG9yLCBxdWlzIGNvbnZhbGxpcyB0dXJwaXMgZmF1Y2lidXMuIFNlZCBwb3J0dGl0b3IgbmlzaSB2aXRhZSBjb25kaW1lbnR1bSBzb2RhbGVzLiBOYW0gYWxpcXVldCwgZGlhbSB2aXRhZSBsdWN0dXMgcG9zdWVyZSwgbWFnbmEgZXN0IHRlbXBvciBpcHN1bSwgaWQgbWF4aW11cyBleCBzYXBpZW4gZXQgbWFzc2EuIEFlbmVhbiBiaWJlbmR1bSBzZW1wZXIgbGVvIHV0IGRpY3R1bS4gTmFtIHNlZCBpcHN1bSBsYWNpbmlhLCB2YXJpdXMgb3JjaSBpbXBlcmRpZXQsIGFsaXF1YW0gaXBzdW0uIE1hZWNlbmFzIGEgZG9sb3IgcGVsbGVudGVzcXVlLCBhbGlxdWV0IG9kaW8gZXQsIHRlbXBvciBvZGlvLiBOYW0gZHVpIG51bmMsIHJ1dHJ1bSBldSBsZW8gaWQsIGRhcGlidXMgcG9zdWVyZSBsZW8uXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMjEtMDctMDJcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIkFsbFwiXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgbGV0IGdyb3VwRGF0YSA9IFtcbiAgICAgICAgJ0FsbCcsXG4gICAgXVxuXG4gICAgbGV0IGdyb3VwID0gJ0FsbCdcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tEYXRhLFxuICAgICAgICBncm91cERhdGEsXG4gICAgICAgIGdyb3VwLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBsZXQgdGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpXG4gICAgICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1pbnB1dCcpXG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpXG5cbiAgICAgICAgbGV0IGNoZWNrID0gbmV3VGFza1ZhbGlkYXRpb24odGl0bGVJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpXG4gICAgICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgZGVzYywgZGF0ZSwgZ3JvdXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGRhdGUsIGdyb3VwfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdGFzayA9IGFkZFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIGRhdGFIb2xkZXIuZ3JvdXApXG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEucHVzaCh0YXNrKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCItXCIpXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAke3ZhbHVlWzFdfS8ke3ZhbHVlWzJdfS8ke3ZhbHVlWzBdfWBcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0aXRsZSkge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gZGF0YUhvbGRlci50YXNrRGF0YS5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSB0aXRsZSlcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5zcGxpY2UodGFza0luZGV4LCAxKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VHcm91cChpZCkge1xuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwID0gaWRcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRUYXNrKHRhcmdldGVkKSB7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUtaW5wdXQnKS52YWx1ZVxuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGF0ZS1pbnB1dCcpLnZhbHVlXG4gICAgICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjLWlucHV0JykudmFsdWVcblxuICAgICAgICBsZXQgY2hlY2sgPSBlZGl0VGFza1ZhbGlkYXRpb24odGl0bGVJbnB1dCwgZGF0ZUlucHV0LCBkZXNjSW5wdXQpXG4gICAgICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluZGV4ID0gdGFyZ2V0ZWQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlkXG5cbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0udGl0bGUgPSB0aXRsZUlucHV0XG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLmRhdGUgPSBkYXRlSW5wdXRcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGVzYyA9IGRlc2NJbnB1dFxuXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0dyb3VwKCkge1xuICAgICAgICBsZXQgZ3JvdXBJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cC1pbnB1dCcpXG5cbiAgICAgICAgbGV0IGNoZWNrID0gbmV3R3JvdXBWYWxpZGF0aW9uKGdyb3VwSW5wdXQudmFsdWUpXG4gICAgICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld2dyb3VwID0gZ3JvdXBJbnB1dC52YWx1ZVxuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YS5wdXNoKG5ld2dyb3VwKVxuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwID0gZ3JvdXBJbnB1dC52YWx1ZVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcm91cCgpIHtcbiAgICAgICAgbGV0IGdyb3VwSW5kZXggPSBkYXRhSG9sZGVyLmdyb3VwRGF0YS5maW5kSW5kZXgoeCA9PiB4ID09PSBkYXRhSG9sZGVyLmdyb3VwKVxuICAgICAgICBjb25zb2xlLmxvZyhncm91cEluZGV4KVxuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YS5zcGxpY2UoZ3JvdXBJbmRleCwgMSlcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cCA9ICdBbGwnXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvcnREYXRlcygpIHtcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5zb3J0KChhLGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLmRhdGUgPiBhLmRhdGUgPyAtMSA6IGEuZGF0ZSA+IGIuZGF0ZSA/IDEgOiAwO1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1Rhc2tWYWxpZGF0aW9uKHRpdGxlSW5wdXQsIGRlc2NJbnB1dCwgZGF0ZUlucHV0KSB7XG4gICAgICAgIGlmICh0aXRsZUlucHV0Lmxlbmd0aCA8IDEgfHwgZGVzY0lucHV0Lmxlbmd0aCA8IDEgfHwgZGF0ZUlucHV0ID09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdBbGwgaW5wdXRzIHNob3VsZCBiZSBmaWxsZWQuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5ld0dyb3VwVmFsaWRhdGlvbihncm91cElucHV0KSB7XG4gICAgICAgIGlmIChncm91cElucHV0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdBbGwgaW5wdXRzIHNob3VsZCBiZSBmaWxsZWQuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVkaXRUYXNrVmFsaWRhdGlvbih0aXRsZUlucHV0LCBkYXRlSW5wdXQsIGRlc2NJbnB1dCkge1xuICAgICAgICBpZiAodGl0bGVJbnB1dC5sZW5ndGggPCAxIHx8IGRlc2NJbnB1dC5sZW5ndGggPCAxIHx8IGRhdGVJbnB1dCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydCgnQWxsIGlucHV0cyBzaG91bGQgYmUgZmlsbGVkLicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGNoYW5nZUdyb3VwLFxuICAgICAgICBuZXdHcm91cCxcbiAgICAgICAgZWRpdFRhc2ssXG4gICAgICAgIGZvcm1hdERhdGUsXG4gICAgICAgIHNvcnREYXRlcyxcbiAgICAgICAgZGVsZXRlR3JvdXBcbiAgICB9XG59KSgpO1xuXG5kaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==