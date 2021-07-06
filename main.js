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
                task.date = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.formatDate(task.date)
                list.innerHTML += `
                <div class="task">
                    <div class="taskrow expand">
                        <div class="title">${task.title}</div>
                        <div class="date">${task.date}</div>
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
                    task.date = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.formatDate(task.date)
                    list.innerHTML += `
                    <div class="task">
                        <div class="taskrow expand">
                            <div class="title">${task.title}</div>
                            <div class="date">${task.date}</div>
                            <div class="delete">Delete</div>
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
                <input id="${index}" class="task-title-input" value="${_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData[index].title}"></input>
                <input type="date" class="task-date-input" value="${_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData[index].date}"></input>
                <button class="delete">Delete</button>
            </div>
            <div class="taskdescshow">
            <input class="task-desc-input" value="${_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData[index].desc}"></input>
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
            title: "finish project",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium erat at nulla bibendum, nec sodales arcu mattis. In vitae condimentum neque. Vestibulum eget turpis lacinia lorem fringilla vulputate at et orci. Nam mauris ligula, convallis et fringilla ut, volutpat sed justo. Etiam vitae elit at nunc ullamcorper imperdiet. Etiam at malesuada metus, nec varius diam. Nullam mollis nec felis quis maximus. Vivamus auctor risus volutpat lacus porttitor, quis convallis turpis faucibus. Sed porttitor nisi vitae condimentum sodales. Nam aliquet, diam vitae luctus posuere, magna est tempor ipsum, id maximus ex sapien et massa. Aenean bibendum semper leo ut dictum. Nam sed ipsum lacinia, varius orci imperdiet, aliquam ipsum. Maecenas a dolor pellentesque, aliquet odio et, tempor odio. Nam dui nunc, rutrum eu leo id, dapibus posuere leo.",
            date: "2021-07-15",
            group: "All"
        },
    ]

    let groupData = [
        'All',
        'Other'
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
        let index = targeted.firstChild.nextSibling.firstChild.nextSibling.id

        dataHolder.taskData[index].title = titleInput
        dataHolder.taskData[index].date = dateInput
        dataHolder.taskData[index].desc = descInput

        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
    }

    function newGroup() {
        let groupInput = document.getElementById('group-input')
        let newgroup = groupInput.value
        dataHolder.groupData.push(newgroup)
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
    }

    return {
        createTask,
        deleteTask,
        changeGroup,
        newGroup,
        editTask,
        formatDate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBZ0I7QUFDNUIsWUFBWSxrRUFBMkI7QUFDdkMsNEJBQTRCLGdFQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RCw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsWUFBWSxrRUFBMkI7QUFDdkMsb0JBQW9CLHVEQUFnQjtBQUNwQyxnQ0FBZ0MsZ0VBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVELGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBNEI7QUFDcEM7QUFDQSwwQkFBMEIsTUFBTSw4QkFBOEIsTUFBTTtBQUNwRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQTZCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSxvQ0FBb0MsMERBQW1CLGNBQWM7QUFDeEcsb0VBQW9FLDBEQUFtQixhQUFhO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCwwREFBbUIsYUFBYTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxnRUFBeUI7O0FBRXRFO0FBQ0EsWUFBWSxnRUFBeUI7QUFDckMsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLFlBQVksOERBQXVCO0FBQ25DLFNBQVM7O0FBRVQ7QUFDQSxZQUFZLGlFQUEwQjtBQUN0QyxTQUFTOztBQUVUO0FBQ0EsOENBQThDLDhEQUF1Qjs7QUFFckU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7Ozs7O0FDekg2Qzs7QUFFdkM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQThCO0FBQ3RDLFFBQVEscUVBQTRCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQThCO0FBQ3RDLFFBQVEscUVBQTRCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHFFQUE0QixFOzs7Ozs7VUMvRjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhSG9sZGVyLCB0YXNrQ29udHJvbGxlcn0gZnJvbSAnLi9pbmRleC5qcydcblxuZXhwb3J0IGxldCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JylcbiAgICBsZXQgZ3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwbGlzdCcpXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gICAgICAgIGlmIChkYXRhSG9sZGVyLmdyb3VwID09PSBcIkFsbFwiKSB7XG4gICAgICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLmRhdGUgPSB0YXNrQ29udHJvbGxlci5mb3JtYXREYXRlKHRhc2suZGF0ZSlcbiAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tyb3cgZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY1wiPiR7dGFzay5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhSG9sZGVyLmdyb3VwID09PSB0YXNrLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suZGF0ZSA9IHRhc2tDb250cm9sbGVyLmZvcm1hdERhdGUodGFzay5kYXRlKVxuICAgICAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3JvdyBleHBhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke3Rhc2suZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY2hpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjXCI+JHt0YXNrLmRlc2N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUdyb3VwcygpIHtcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cERhdGEuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGdyb3VwbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7Z3JvdXB9XCIgY2xhc3M9XCJncm91cCBncm91cGJ1dHRvblwiPiR7Z3JvdXB9PC9idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGwoKSB7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpXG4gICAgICAgIGRpc3BsYXlHcm91cHMoKVxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycygpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0RGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKGxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChncm91cHMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZ3JvdXBzLnJlbW92ZUNoaWxkKGdyb3Vwcy5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VEYXRhV2l0aElucHV0KHRhcmdldGVkKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRhcmdldGVkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5uZXh0U2libGluZy5pbm5lckhUTUxcbiAgICAgICAgbGV0IGluZGV4ID0gZGF0YUhvbGRlci50YXNrRGF0YS5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSB0aXRsZSlcblxuICAgICAgICB0YXJnZXRlZC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3Jvd1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIiR7aW5kZXh9XCIgY2xhc3M9XCJ0YXNrLXRpdGxlLWlucHV0XCIgdmFsdWU9XCIke2RhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLnRpdGxlfVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0YXNrLWRhdGUtaW5wdXRcIiB2YWx1ZT1cIiR7ZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGF0ZX1cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjc2hvd1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1kZXNjLWlucHV0XCIgdmFsdWU9XCIke2RhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLmRlc2N9XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb25maXJtZWRpdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzaWduRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrJylcbiAgICAgICAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tDb250cm9sbGVyLmNyZWF0ZVRhc2spXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xsZXIuZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuaW5uZXJIVE1MKVxuICAgICAgICB9KSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVwbGFjZURhdGFXaXRoSW5wdXQoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICB9KSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbmZpcm1lZGl0XCIpLmZvckVhY2goeCA9PiB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250cm9sbGVyLmVkaXRUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cFwiKS5mb3JFYWNoKHggPT4geC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udHJvbGxlci5jaGFuZ2VHcm91cChlLnRhcmdldC5pZClcbiAgICAgICAgfSkpXG5cbiAgICAgICAgbGV0IGNyZWF0ZUdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGdyb3VwJylcbiAgICAgICAgY3JlYXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ29udHJvbGxlci5uZXdHcm91cClcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kJykuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tkZXNjc2hvdycpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlBbGwsXG4gICAgICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzLFxuICAgICAgICByZXNldERpc3BsYXksXG4gICAgfVxufSkoKTsiLCJpbXBvcnQge2Rpc3BsYXlDb250cm9sbGVyfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cbmV4cG9ydCBsZXQgZGF0YUhvbGRlciA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCB0YXNrRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiZmluaXNoIHByb2plY3RcIixcbiAgICAgICAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgcHJldGl1bSBlcmF0IGF0IG51bGxhIGJpYmVuZHVtLCBuZWMgc29kYWxlcyBhcmN1IG1hdHRpcy4gSW4gdml0YWUgY29uZGltZW50dW0gbmVxdWUuIFZlc3RpYnVsdW0gZWdldCB0dXJwaXMgbGFjaW5pYSBsb3JlbSBmcmluZ2lsbGEgdnVscHV0YXRlIGF0IGV0IG9yY2kuIE5hbSBtYXVyaXMgbGlndWxhLCBjb252YWxsaXMgZXQgZnJpbmdpbGxhIHV0LCB2b2x1dHBhdCBzZWQganVzdG8uIEV0aWFtIHZpdGFlIGVsaXQgYXQgbnVuYyB1bGxhbWNvcnBlciBpbXBlcmRpZXQuIEV0aWFtIGF0IG1hbGVzdWFkYSBtZXR1cywgbmVjIHZhcml1cyBkaWFtLiBOdWxsYW0gbW9sbGlzIG5lYyBmZWxpcyBxdWlzIG1heGltdXMuIFZpdmFtdXMgYXVjdG9yIHJpc3VzIHZvbHV0cGF0IGxhY3VzIHBvcnR0aXRvciwgcXVpcyBjb252YWxsaXMgdHVycGlzIGZhdWNpYnVzLiBTZWQgcG9ydHRpdG9yIG5pc2kgdml0YWUgY29uZGltZW50dW0gc29kYWxlcy4gTmFtIGFsaXF1ZXQsIGRpYW0gdml0YWUgbHVjdHVzIHBvc3VlcmUsIG1hZ25hIGVzdCB0ZW1wb3IgaXBzdW0sIGlkIG1heGltdXMgZXggc2FwaWVuIGV0IG1hc3NhLiBBZW5lYW4gYmliZW5kdW0gc2VtcGVyIGxlbyB1dCBkaWN0dW0uIE5hbSBzZWQgaXBzdW0gbGFjaW5pYSwgdmFyaXVzIG9yY2kgaW1wZXJkaWV0LCBhbGlxdWFtIGlwc3VtLiBNYWVjZW5hcyBhIGRvbG9yIHBlbGxlbnRlc3F1ZSwgYWxpcXVldCBvZGlvIGV0LCB0ZW1wb3Igb2Rpby4gTmFtIGR1aSBudW5jLCBydXRydW0gZXUgbGVvIGlkLCBkYXBpYnVzIHBvc3VlcmUgbGVvLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDIxLTA3LTE1XCIsXG4gICAgICAgICAgICBncm91cDogXCJBbGxcIlxuICAgICAgICB9LFxuICAgIF1cblxuICAgIGxldCBncm91cERhdGEgPSBbXG4gICAgICAgICdBbGwnLFxuICAgICAgICAnT3RoZXInXG4gICAgXVxuXG4gICAgbGV0IGdyb3VwID0gJ0FsbCdcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tEYXRhLFxuICAgICAgICBncm91cERhdGEsXG4gICAgICAgIGdyb3VwLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBsZXQgdGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpXG4gICAgICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1pbnB1dCcpXG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpXG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgZGVzYywgZGF0ZSwgZ3JvdXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGRhdGUsIGdyb3VwfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdGFzayA9IGFkZFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIGRhdGFIb2xkZXIuZ3JvdXApXG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEucHVzaCh0YXNrKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCItXCIpXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAke3ZhbHVlWzFdfS8ke3ZhbHVlWzJdfS8ke3ZhbHVlWzBdfWBcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0aXRsZSkge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gZGF0YUhvbGRlci50YXNrRGF0YS5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSB0aXRsZSlcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5zcGxpY2UodGFza0luZGV4LCAxKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VHcm91cChpZCkge1xuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwID0gaWRcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRUYXNrKHRhcmdldGVkKSB7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUtaW5wdXQnKS52YWx1ZVxuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGF0ZS1pbnB1dCcpLnZhbHVlXG4gICAgICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjLWlucHV0JykudmFsdWVcbiAgICAgICAgbGV0IGluZGV4ID0gdGFyZ2V0ZWQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlkXG5cbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0udGl0bGUgPSB0aXRsZUlucHV0XG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLmRhdGUgPSBkYXRlSW5wdXRcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGVzYyA9IGRlc2NJbnB1dFxuXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0dyb3VwKCkge1xuICAgICAgICBsZXQgZ3JvdXBJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cC1pbnB1dCcpXG4gICAgICAgIGxldCBuZXdncm91cCA9IGdyb3VwSW5wdXQudmFsdWVcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cERhdGEucHVzaChuZXdncm91cClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgZGVsZXRlVGFzayxcbiAgICAgICAgY2hhbmdlR3JvdXAsXG4gICAgICAgIG5ld0dyb3VwLFxuICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgZm9ybWF0RGF0ZVxuICAgIH1cbn0pKCk7XG5cbmRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9