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
            title: "second",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium erat at nulla bibendum, nec sodales arcu mattis. In vitae condimentum neque. Vestibulum eget turpis lacinia lorem fringilla vulputate at et orci. Nam mauris ligula, convallis et fringilla ut, volutpat sed justo. Etiam vitae elit at nunc ullamcorper imperdiet. Etiam at malesuada metus, nec varius diam. Nullam mollis nec felis quis maximus. Vivamus auctor risus volutpat lacus porttitor, quis convallis turpis faucibus. Sed porttitor nisi vitae condimentum sodales. Nam aliquet, diam vitae luctus posuere, magna est tempor ipsum, id maximus ex sapien et massa. Aenean bibendum semper leo ut dictum. Nam sed ipsum lacinia, varius orci imperdiet, aliquam ipsum. Maecenas a dolor pellentesque, aliquet odio et, tempor odio. Nam dui nunc, rutrum eu leo id, dapibus posuere leo.",
            date: "2021-07-02",
            group: "All"
        },
        {
            title: "first",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium erat at nulla bibendum, nec sodales arcu mattis. In vitae condimentum neque. Vestibulum eget turpis lacinia lorem fringilla vulputate at et orci. Nam mauris ligula, convallis et fringilla ut, volutpat sed justo. Etiam vitae elit at nunc ullamcorper imperdiet. Etiam at malesuada metus, nec varius diam. Nullam mollis nec felis quis maximus. Vivamus auctor risus volutpat lacus porttitor, quis convallis turpis faucibus. Sed porttitor nisi vitae condimentum sodales. Nam aliquet, diam vitae luctus posuere, magna est tempor ipsum, id maximus ex sapien et massa. Aenean bibendum semper leo ut dictum. Nam sed ipsum lacinia, varius orci imperdiet, aliquam ipsum. Maecenas a dolor pellentesque, aliquet odio et, tempor odio. Nam dui nunc, rutrum eu leo id, dapibus posuere leo.",
            date: "2021-07-01",
            group: "All"
        },
        {
            title: "third",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium erat at nulla bibendum, nec sodales arcu mattis. In vitae condimentum neque. Vestibulum eget turpis lacinia lorem fringilla vulputate at et orci. Nam mauris ligula, convallis et fringilla ut, volutpat sed justo. Etiam vitae elit at nunc ullamcorper imperdiet. Etiam at malesuada metus, nec varius diam. Nullam mollis nec felis quis maximus. Vivamus auctor risus volutpat lacus porttitor, quis convallis turpis faucibus. Sed porttitor nisi vitae condimentum sodales. Nam aliquet, diam vitae luctus posuere, magna est tempor ipsum, id maximus ex sapien et massa. Aenean bibendum semper leo ut dictum. Nam sed ipsum lacinia, varius orci imperdiet, aliquam ipsum. Maecenas a dolor pellentesque, aliquet odio et, tempor odio. Nam dui nunc, rutrum eu leo id, dapibus posuere leo.",
            date: "2021-07-03",
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

    function sortDates() {
        dataHolder.taskData.sort((a,b) => {
            return b.date > a.date ? -1 : a.date > b.date ? 1 : 0;
          });
    }

    return {
        createTask,
        deleteTask,
        changeGroup,
        newGroup,
        editTask,
        formatDate,
        sortDates
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBZ0I7QUFDNUIsWUFBWSxrRUFBMkI7QUFDdkMsMkJBQTJCLGdFQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RCw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsWUFBWSxrRUFBMkI7QUFDdkMsb0JBQW9CLHVEQUFnQjtBQUNwQywrQkFBK0IsZ0VBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hELDRDQUE0QyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBNEI7QUFDcEM7QUFDQSwwQkFBMEIsTUFBTSw4QkFBOEIsTUFBTTtBQUNwRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSwrREFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQTZCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSw4Q0FBOEMsMERBQW1CLGNBQWM7QUFDbEgsOEVBQThFLDBEQUFtQixhQUFhO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwwREFBbUIsYUFBYTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxnRUFBeUI7O0FBRXRFO0FBQ0EsWUFBWSxnRUFBeUI7QUFDckMsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLFlBQVksOERBQXVCO0FBQ25DLFNBQVM7O0FBRVQ7QUFDQSxZQUFZLGlFQUEwQjtBQUN0QyxTQUFTOztBQUVUO0FBQ0EsOENBQThDLDhEQUF1Qjs7QUFFckU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUg2Qzs7QUFFdkM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxRUFBNEIsRTs7Ozs7O1VDbEg1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGF0YUhvbGRlciwgdGFza0NvbnRyb2xsZXJ9IGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCBsZXQgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpXG4gICAgbGV0IGdyb3VwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cGxpc3QnKVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICAgICAgICBpZiAoZGF0YUhvbGRlci5ncm91cCA9PT0gXCJBbGxcIikge1xuICAgICAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSB0YXNrQ29udHJvbGxlci5mb3JtYXREYXRlKHRhc2suZGF0ZSlcbiAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tyb3cgZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY2hpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NcIj4ke3Rhc2suZGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUhvbGRlci5ncm91cCA9PT0gdGFzay5ncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IHRhc2tDb250cm9sbGVyLmZvcm1hdERhdGUodGFzay5kYXRlKVxuICAgICAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcm93IGV4cGFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjXCI+JHt0YXNrLmRlc2N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUdyb3VwcygpIHtcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cERhdGEuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGdyb3VwbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7Z3JvdXB9XCIgY2xhc3M9XCJncm91cCBncm91cGJ1dHRvblwiPiR7Z3JvdXB9PC9idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGwoKSB7XG4gICAgICAgIHRhc2tDb250cm9sbGVyLnNvcnREYXRlcygpXG4gICAgICAgIGRpc3BsYXlUYXNrcygpXG4gICAgICAgIGRpc3BsYXlHcm91cHMoKVxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycygpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0RGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKGxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChncm91cHMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZ3JvdXBzLnJlbW92ZUNoaWxkKGdyb3Vwcy5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VEYXRhV2l0aElucHV0KHRhcmdldGVkKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRhcmdldGVkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5uZXh0U2libGluZy5pbm5lckhUTUxcbiAgICAgICAgbGV0IGluZGV4ID0gZGF0YUhvbGRlci50YXNrRGF0YS5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSB0aXRsZSlcblxuICAgICAgICB0YXJnZXRlZC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3Jvd1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIiR7aW5kZXh9XCIgY2xhc3M9XCJ0YXNrLXRpdGxlLWlucHV0IHRhc2tpbnB1dFwiIHZhbHVlPVwiJHtkYXRhSG9sZGVyLnRhc2tEYXRhW2luZGV4XS50aXRsZX1cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwidGFzay1kYXRlLWlucHV0IHRhc2tpbnB1dFwiIHZhbHVlPVwiJHtkYXRhSG9sZGVyLnRhc2tEYXRhW2luZGV4XS5kYXRlfVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NzaG93XCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0YXNrLWRlc2MtaW5wdXQgdGFza2lucHV0XCIgdmFsdWU9XCIke2RhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLmRlc2N9XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb25maXJtZWRpdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXNzaWduRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrJylcbiAgICAgICAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tDb250cm9sbGVyLmNyZWF0ZVRhc2spXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xsZXIuZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuaW5uZXJIVE1MKVxuICAgICAgICB9KSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVwbGFjZURhdGFXaXRoSW5wdXQoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuICAgICAgICB9KSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbmZpcm1lZGl0XCIpLmZvckVhY2goeCA9PiB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250cm9sbGVyLmVkaXRUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgfSkpXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cFwiKS5mb3JFYWNoKHggPT4geC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udHJvbGxlci5jaGFuZ2VHcm91cChlLnRhcmdldC5pZClcbiAgICAgICAgfSkpXG5cbiAgICAgICAgbGV0IGNyZWF0ZUdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGdyb3VwJylcbiAgICAgICAgY3JlYXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ29udHJvbGxlci5uZXdHcm91cClcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kJykuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tkZXNjc2hvdycpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlBbGwsXG4gICAgICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzLFxuICAgICAgICByZXNldERpc3BsYXksXG4gICAgfVxufSkoKTsiLCJpbXBvcnQge2Rpc3BsYXlDb250cm9sbGVyfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cbmV4cG9ydCBsZXQgZGF0YUhvbGRlciA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCB0YXNrRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwic2Vjb25kXCIsXG4gICAgICAgICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIHByZXRpdW0gZXJhdCBhdCBudWxsYSBiaWJlbmR1bSwgbmVjIHNvZGFsZXMgYXJjdSBtYXR0aXMuIEluIHZpdGFlIGNvbmRpbWVudHVtIG5lcXVlLiBWZXN0aWJ1bHVtIGVnZXQgdHVycGlzIGxhY2luaWEgbG9yZW0gZnJpbmdpbGxhIHZ1bHB1dGF0ZSBhdCBldCBvcmNpLiBOYW0gbWF1cmlzIGxpZ3VsYSwgY29udmFsbGlzIGV0IGZyaW5naWxsYSB1dCwgdm9sdXRwYXQgc2VkIGp1c3RvLiBFdGlhbSB2aXRhZSBlbGl0IGF0IG51bmMgdWxsYW1jb3JwZXIgaW1wZXJkaWV0LiBFdGlhbSBhdCBtYWxlc3VhZGEgbWV0dXMsIG5lYyB2YXJpdXMgZGlhbS4gTnVsbGFtIG1vbGxpcyBuZWMgZmVsaXMgcXVpcyBtYXhpbXVzLiBWaXZhbXVzIGF1Y3RvciByaXN1cyB2b2x1dHBhdCBsYWN1cyBwb3J0dGl0b3IsIHF1aXMgY29udmFsbGlzIHR1cnBpcyBmYXVjaWJ1cy4gU2VkIHBvcnR0aXRvciBuaXNpIHZpdGFlIGNvbmRpbWVudHVtIHNvZGFsZXMuIE5hbSBhbGlxdWV0LCBkaWFtIHZpdGFlIGx1Y3R1cyBwb3N1ZXJlLCBtYWduYSBlc3QgdGVtcG9yIGlwc3VtLCBpZCBtYXhpbXVzIGV4IHNhcGllbiBldCBtYXNzYS4gQWVuZWFuIGJpYmVuZHVtIHNlbXBlciBsZW8gdXQgZGljdHVtLiBOYW0gc2VkIGlwc3VtIGxhY2luaWEsIHZhcml1cyBvcmNpIGltcGVyZGlldCwgYWxpcXVhbSBpcHN1bS4gTWFlY2VuYXMgYSBkb2xvciBwZWxsZW50ZXNxdWUsIGFsaXF1ZXQgb2RpbyBldCwgdGVtcG9yIG9kaW8uIE5hbSBkdWkgbnVuYywgcnV0cnVtIGV1IGxlbyBpZCwgZGFwaWJ1cyBwb3N1ZXJlIGxlby5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAyMS0wNy0wMlwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiQWxsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiZmlyc3RcIixcbiAgICAgICAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgcHJldGl1bSBlcmF0IGF0IG51bGxhIGJpYmVuZHVtLCBuZWMgc29kYWxlcyBhcmN1IG1hdHRpcy4gSW4gdml0YWUgY29uZGltZW50dW0gbmVxdWUuIFZlc3RpYnVsdW0gZWdldCB0dXJwaXMgbGFjaW5pYSBsb3JlbSBmcmluZ2lsbGEgdnVscHV0YXRlIGF0IGV0IG9yY2kuIE5hbSBtYXVyaXMgbGlndWxhLCBjb252YWxsaXMgZXQgZnJpbmdpbGxhIHV0LCB2b2x1dHBhdCBzZWQganVzdG8uIEV0aWFtIHZpdGFlIGVsaXQgYXQgbnVuYyB1bGxhbWNvcnBlciBpbXBlcmRpZXQuIEV0aWFtIGF0IG1hbGVzdWFkYSBtZXR1cywgbmVjIHZhcml1cyBkaWFtLiBOdWxsYW0gbW9sbGlzIG5lYyBmZWxpcyBxdWlzIG1heGltdXMuIFZpdmFtdXMgYXVjdG9yIHJpc3VzIHZvbHV0cGF0IGxhY3VzIHBvcnR0aXRvciwgcXVpcyBjb252YWxsaXMgdHVycGlzIGZhdWNpYnVzLiBTZWQgcG9ydHRpdG9yIG5pc2kgdml0YWUgY29uZGltZW50dW0gc29kYWxlcy4gTmFtIGFsaXF1ZXQsIGRpYW0gdml0YWUgbHVjdHVzIHBvc3VlcmUsIG1hZ25hIGVzdCB0ZW1wb3IgaXBzdW0sIGlkIG1heGltdXMgZXggc2FwaWVuIGV0IG1hc3NhLiBBZW5lYW4gYmliZW5kdW0gc2VtcGVyIGxlbyB1dCBkaWN0dW0uIE5hbSBzZWQgaXBzdW0gbGFjaW5pYSwgdmFyaXVzIG9yY2kgaW1wZXJkaWV0LCBhbGlxdWFtIGlwc3VtLiBNYWVjZW5hcyBhIGRvbG9yIHBlbGxlbnRlc3F1ZSwgYWxpcXVldCBvZGlvIGV0LCB0ZW1wb3Igb2Rpby4gTmFtIGR1aSBudW5jLCBydXRydW0gZXUgbGVvIGlkLCBkYXBpYnVzIHBvc3VlcmUgbGVvLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDIxLTA3LTAxXCIsXG4gICAgICAgICAgICBncm91cDogXCJBbGxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJ0aGlyZFwiLFxuICAgICAgICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBwcmV0aXVtIGVyYXQgYXQgbnVsbGEgYmliZW5kdW0sIG5lYyBzb2RhbGVzIGFyY3UgbWF0dGlzLiBJbiB2aXRhZSBjb25kaW1lbnR1bSBuZXF1ZS4gVmVzdGlidWx1bSBlZ2V0IHR1cnBpcyBsYWNpbmlhIGxvcmVtIGZyaW5naWxsYSB2dWxwdXRhdGUgYXQgZXQgb3JjaS4gTmFtIG1hdXJpcyBsaWd1bGEsIGNvbnZhbGxpcyBldCBmcmluZ2lsbGEgdXQsIHZvbHV0cGF0IHNlZCBqdXN0by4gRXRpYW0gdml0YWUgZWxpdCBhdCBudW5jIHVsbGFtY29ycGVyIGltcGVyZGlldC4gRXRpYW0gYXQgbWFsZXN1YWRhIG1ldHVzLCBuZWMgdmFyaXVzIGRpYW0uIE51bGxhbSBtb2xsaXMgbmVjIGZlbGlzIHF1aXMgbWF4aW11cy4gVml2YW11cyBhdWN0b3IgcmlzdXMgdm9sdXRwYXQgbGFjdXMgcG9ydHRpdG9yLCBxdWlzIGNvbnZhbGxpcyB0dXJwaXMgZmF1Y2lidXMuIFNlZCBwb3J0dGl0b3IgbmlzaSB2aXRhZSBjb25kaW1lbnR1bSBzb2RhbGVzLiBOYW0gYWxpcXVldCwgZGlhbSB2aXRhZSBsdWN0dXMgcG9zdWVyZSwgbWFnbmEgZXN0IHRlbXBvciBpcHN1bSwgaWQgbWF4aW11cyBleCBzYXBpZW4gZXQgbWFzc2EuIEFlbmVhbiBiaWJlbmR1bSBzZW1wZXIgbGVvIHV0IGRpY3R1bS4gTmFtIHNlZCBpcHN1bSBsYWNpbmlhLCB2YXJpdXMgb3JjaSBpbXBlcmRpZXQsIGFsaXF1YW0gaXBzdW0uIE1hZWNlbmFzIGEgZG9sb3IgcGVsbGVudGVzcXVlLCBhbGlxdWV0IG9kaW8gZXQsIHRlbXBvciBvZGlvLiBOYW0gZHVpIG51bmMsIHJ1dHJ1bSBldSBsZW8gaWQsIGRhcGlidXMgcG9zdWVyZSBsZW8uXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMjEtMDctMDNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIkFsbFwiXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgbGV0IGdyb3VwRGF0YSA9IFtcbiAgICAgICAgJ0FsbCcsXG4gICAgICAgICdPdGhlcidcbiAgICBdXG5cbiAgICBsZXQgZ3JvdXAgPSAnQWxsJ1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza0RhdGEsXG4gICAgICAgIGdyb3VwRGF0YSxcbiAgICAgICAgZ3JvdXAsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGxldCB0YXNrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JylcbiAgICAgICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjLWlucHV0JylcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JylcblxuICAgICAgICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXNjLCBkYXRlLCBncm91cCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgZGF0ZSwgZ3JvdXB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB0YXNrID0gYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgZGF0YUhvbGRlci5ncm91cClcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5wdXNoKHRhc2spXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIi1cIilcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gYCR7dmFsdWVbMV19LyR7dmFsdWVbMl19LyR7dmFsdWVbMF19YFxuICAgICAgICByZXR1cm4gbmV3VmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHRpdGxlKSB7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBkYXRhSG9sZGVyLnRhc2tEYXRhLmZpbmRJbmRleCh4ID0+IHgudGl0bGUgPT09IHRpdGxlKVxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUdyb3VwKGlkKSB7XG4gICAgICAgIGRhdGFIb2xkZXIuZ3JvdXAgPSBpZFxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKCkgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdFRhc2sodGFyZ2V0ZWQpIHtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS1pbnB1dCcpLnZhbHVlXG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kYXRlLWlucHV0JykudmFsdWVcbiAgICAgICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MtaW5wdXQnKS52YWx1ZVxuICAgICAgICBsZXQgaW5kZXggPSB0YXJnZXRlZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuaWRcblxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhW2luZGV4XS50aXRsZSA9IHRpdGxlSW5wdXRcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGF0ZSA9IGRhdGVJbnB1dFxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhW2luZGV4XS5kZXNjID0gZGVzY0lucHV0XG5cbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3R3JvdXAoKSB7XG4gICAgICAgIGxldCBncm91cElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwLWlucHV0JylcbiAgICAgICAgbGV0IG5ld2dyb3VwID0gZ3JvdXBJbnB1dC52YWx1ZVxuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YS5wdXNoKG5ld2dyb3VwKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzb3J0RGF0ZXMoKSB7XG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuc29ydCgoYSxiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi5kYXRlID4gYS5kYXRlID8gLTEgOiBhLmRhdGUgPiBiLmRhdGUgPyAxIDogMDtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICBjaGFuZ2VHcm91cCxcbiAgICAgICAgbmV3R3JvdXAsXG4gICAgICAgIGVkaXRUYXNrLFxuICAgICAgICBmb3JtYXREYXRlLFxuICAgICAgICBzb3J0RGF0ZXNcbiAgICB9XG59KSgpO1xuXG5kaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==