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
                list.innerHTML += `
                <div class="task">
                    <div class="taskrow">
                        <div class="title">${task.title}</div>
                        <div class="date">${task.date}</div>
                        <div class="delete">Delete</div>
                    </div>
                    <div class="taskdeschidden">${task.desc}</div>
                </div>
                `
            })
        } else {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.forEach((task) => {
                if (_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.group === task.group) {
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
        _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.groupData.forEach((group) => {
            grouplist.innerHTML += `
            <div id="${group}" class="group groupbutton">${group}</div>
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
        createTask.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.createTask)

        document.querySelectorAll(".delete").forEach(x => x.addEventListener('click', (e) => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.deleteTask(e.target.parentNode.firstChild.nextSibling.innerHTML)
        }))
        document.querySelectorAll(".group").forEach(x => x.addEventListener('click', (e) => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.changeGroup(e.target.id)
        }))

        let createGroup = document.getElementById('addgroup')
        createGroup.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.newGroup)

        document.querySelectorAll('.taskrow').forEach((x) => {
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
            desc: "wowowowowowoowowowowowowowowowowowow",
            date: "11/11/2021",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBZ0I7QUFDNUIsWUFBWSxrRUFBMkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQsNENBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULFlBQVksa0VBQTJCO0FBQ3ZDLG9CQUFvQix1REFBZ0I7QUFDcEM7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hELDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQTRCO0FBQ3BDO0FBQ0EsdUJBQXVCLE1BQU0sOEJBQThCLE1BQU07QUFDakU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0VBQXlCOztBQUV0RTtBQUNBLFlBQVksZ0VBQXlCO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLFlBQVksaUVBQTBCO0FBQ3RDLFNBQVM7O0FBRVQ7QUFDQSw4Q0FBOEMsOERBQXVCOztBQUVyRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRjZDOztBQUV2Qzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdUVBQThCO0FBQ3RDLFFBQVEscUVBQTRCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQThCO0FBQ3RDLFFBQVEscUVBQTRCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscUVBQTRCLEU7Ozs7OztVQ3RFNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RhdGFIb2xkZXIsIHRhc2tDb250cm9sbGVyfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKVxuICAgIGxldCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBsaXN0JylcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgICAgICAgaWYgKGRhdGFIb2xkZXIuZ3JvdXAgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke3Rhc2suZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY2hpZGRlblwiPiR7dGFzay5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUhvbGRlci5ncm91cCA9PT0gdGFzay5ncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUdyb3VwcygpIHtcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cERhdGEuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGdyb3VwbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7Z3JvdXB9XCIgY2xhc3M9XCJncm91cCBncm91cGJ1dHRvblwiPiR7Z3JvdXB9PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGwoKSB7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpXG4gICAgICAgIGRpc3BsYXlHcm91cHMoKVxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycygpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0RGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKGxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChncm91cHMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZ3JvdXBzLnJlbW92ZUNoaWxkKGdyb3Vwcy5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhc3NpZ25FdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRhc2snKVxuICAgICAgICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0NvbnRyb2xsZXIuY3JlYXRlVGFzaylcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKS5mb3JFYWNoKHggPT4geC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udHJvbGxlci5kZWxldGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0U2libGluZy5pbm5lckhUTUwpXG4gICAgICAgIH0pKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwXCIpLmZvckVhY2goeCA9PiB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250cm9sbGVyLmNoYW5nZUdyb3VwKGUudGFyZ2V0LmlkKVxuICAgICAgICB9KSlcblxuICAgICAgICBsZXQgY3JlYXRlR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZ3JvdXAnKVxuICAgICAgICBjcmVhdGVHcm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tDb250cm9sbGVyLm5ld0dyb3VwKVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrcm93JykuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tkZXNjc2hvdycpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlBbGwsXG4gICAgICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzLFxuICAgICAgICByZXNldERpc3BsYXksXG4gICAgfVxufSkoKTsiLCJpbXBvcnQge2Rpc3BsYXlDb250cm9sbGVyfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cbmV4cG9ydCBsZXQgZGF0YUhvbGRlciA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCB0YXNrRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiZmluaXNoIHByb2plY3RcIixcbiAgICAgICAgICAgIGRlc2M6IFwid293b3dvd293b3dvb3dvd293b3dvd293b3dvd293b3dvd293XCIsXG4gICAgICAgICAgICBkYXRlOiBcIjExLzExLzIwMjFcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIkFsbFwiXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgbGV0IGdyb3VwRGF0YSA9IFtcbiAgICAgICAgJ0FsbCcsXG4gICAgICAgICdPdGhlcidcbiAgICBdXG5cbiAgICBsZXQgZ3JvdXAgPSAnQWxsJ1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza0RhdGEsXG4gICAgICAgIGdyb3VwRGF0YSxcbiAgICAgICAgZ3JvdXAsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGxldCB0YXNrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JylcbiAgICAgICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjLWlucHV0JylcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWlucHV0JylcblxuICAgICAgICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXNjLCBkYXRlLCBncm91cCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgZGF0ZSwgZ3JvdXB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB0YXNrID0gYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgZGF0YUhvbGRlci5ncm91cClcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5wdXNoKHRhc2spXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHRpdGxlKSB7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBkYXRhSG9sZGVyLnRhc2tEYXRhLmZpbmRJbmRleCh4ID0+IHgudGl0bGUgPT09IHRpdGxlKVxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VHcm91cChpZCkge1xuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwID0gaWRcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpIFxuICAgIH1cbiAgICBmdW5jdGlvbiBuZXdHcm91cCgpIHtcbiAgICAgICAgbGV0IGdyb3VwSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXAtaW5wdXQnKVxuICAgICAgICBsZXQgbmV3Z3JvdXAgPSBncm91cElucHV0LnZhbHVlXG4gICAgICAgIGRhdGFIb2xkZXIuZ3JvdXBEYXRhLnB1c2gobmV3Z3JvdXApXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGNoYW5nZUdyb3VwLFxuICAgICAgICBuZXdHcm91cCxcbiAgICB9XG59KSgpO1xuXG5kaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==