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
                    list.innerHTML += `
                    <div class="task">
                        <div class="taskrow">
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
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium erat at nulla bibendum, nec sodales arcu mattis. In vitae condimentum neque. Vestibulum eget turpis lacinia lorem fringilla vulputate at et orci. Nam mauris ligula, convallis et fringilla ut, volutpat sed justo. Etiam vitae elit at nunc ullamcorper imperdiet. Etiam at malesuada metus, nec varius diam. Nullam mollis nec felis quis maximus. Vivamus auctor risus volutpat lacus porttitor, quis convallis turpis faucibus. Sed porttitor nisi vitae condimentum sodales. Nam aliquet, diam vitae luctus posuere, magna est tempor ipsum, id maximus ex sapien et massa. Aenean bibendum semper leo ut dictum. Nam sed ipsum lacinia, varius orci imperdiet, aliquam ipsum. Maecenas a dolor pellentesque, aliquet odio et, tempor odio. Nam dui nunc, rutrum eu leo id, dapibus posuere leo.",
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

        let formattedDate = formatDate(dateInput.value)

        let task = addTask(titleInput.value, descInput.value, formattedDate, dataHolder.group)
        dataHolder.taskData.push(task)
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
    }
    function formatDate(value) {
        value = value.split("-")
        console.log(value)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBZ0I7QUFDNUIsWUFBWSxrRUFBMkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQsNENBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULFlBQVksa0VBQTJCO0FBQ3ZDLG9CQUFvQix1REFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUE0QjtBQUNwQztBQUNBLDBCQUEwQixNQUFNLDhCQUE4QixNQUFNO0FBQ3BFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdFQUF5Qjs7QUFFdEU7QUFDQSxZQUFZLGdFQUF5QjtBQUNyQyxTQUFTO0FBQ1Q7QUFDQSxZQUFZLGlFQUEwQjtBQUN0QyxTQUFTOztBQUVUO0FBQ0EsOENBQThDLDhEQUF1Qjs7QUFFckU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7Ozs7O0FDekY2Qzs7QUFFdkM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUE4QjtBQUN0QyxRQUFRLHFFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSxxRUFBNEI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxRUFBNEIsRTs7Ozs7O1VDL0U1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGF0YUhvbGRlciwgdGFza0NvbnRyb2xsZXJ9IGZyb20gJy4vaW5kZXguanMnXG5cbmV4cG9ydCBsZXQgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpXG4gICAgbGV0IGdyb3VwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cGxpc3QnKVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICAgICAgICBpZiAoZGF0YUhvbGRlci5ncm91cCA9PT0gXCJBbGxcIikge1xuICAgICAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dGFzay5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY1wiPiR7dGFzay5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhSG9sZGVyLmdyb3VwID09PSB0YXNrLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHt0YXNrLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY1wiPiR7dGFzay5kZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlHcm91cHMoKSB7XG4gICAgICAgIGRhdGFIb2xkZXIuZ3JvdXBEYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBncm91cGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke2dyb3VwfVwiIGNsYXNzPVwiZ3JvdXAgZ3JvdXBidXR0b25cIj4ke2dyb3VwfTwvYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsKCkge1xuICAgICAgICBkaXNwbGF5VGFza3MoKVxuICAgICAgICBkaXNwbGF5R3JvdXBzKClcbiAgICAgICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldERpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoZ3JvdXBzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5yZW1vdmVDaGlsZChncm91cHMuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXNzaWduRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrJylcbiAgICAgICAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tDb250cm9sbGVyLmNyZWF0ZVRhc2spXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xsZXIuZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuaW5uZXJIVE1MKVxuICAgICAgICB9KSlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cFwiKS5mb3JFYWNoKHggPT4geC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udHJvbGxlci5jaGFuZ2VHcm91cChlLnRhcmdldC5pZClcbiAgICAgICAgfSkpXG5cbiAgICAgICAgbGV0IGNyZWF0ZUdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGdyb3VwJylcbiAgICAgICAgY3JlYXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ29udHJvbGxlci5uZXdHcm91cClcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3JvdycpLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrZGVzY3Nob3cnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5QWxsLFxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycyxcbiAgICAgICAgcmVzZXREaXNwbGF5LFxuICAgIH1cbn0pKCk7IiwiaW1wb3J0IHtkaXNwbGF5Q29udHJvbGxlcn0gZnJvbSAnLi9kaXNwbGF5LmpzJ1xuXG5leHBvcnQgbGV0IGRhdGFIb2xkZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgdGFza0RhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcImZpbmlzaCBwcm9qZWN0XCIsXG4gICAgICAgICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIHByZXRpdW0gZXJhdCBhdCBudWxsYSBiaWJlbmR1bSwgbmVjIHNvZGFsZXMgYXJjdSBtYXR0aXMuIEluIHZpdGFlIGNvbmRpbWVudHVtIG5lcXVlLiBWZXN0aWJ1bHVtIGVnZXQgdHVycGlzIGxhY2luaWEgbG9yZW0gZnJpbmdpbGxhIHZ1bHB1dGF0ZSBhdCBldCBvcmNpLiBOYW0gbWF1cmlzIGxpZ3VsYSwgY29udmFsbGlzIGV0IGZyaW5naWxsYSB1dCwgdm9sdXRwYXQgc2VkIGp1c3RvLiBFdGlhbSB2aXRhZSBlbGl0IGF0IG51bmMgdWxsYW1jb3JwZXIgaW1wZXJkaWV0LiBFdGlhbSBhdCBtYWxlc3VhZGEgbWV0dXMsIG5lYyB2YXJpdXMgZGlhbS4gTnVsbGFtIG1vbGxpcyBuZWMgZmVsaXMgcXVpcyBtYXhpbXVzLiBWaXZhbXVzIGF1Y3RvciByaXN1cyB2b2x1dHBhdCBsYWN1cyBwb3J0dGl0b3IsIHF1aXMgY29udmFsbGlzIHR1cnBpcyBmYXVjaWJ1cy4gU2VkIHBvcnR0aXRvciBuaXNpIHZpdGFlIGNvbmRpbWVudHVtIHNvZGFsZXMuIE5hbSBhbGlxdWV0LCBkaWFtIHZpdGFlIGx1Y3R1cyBwb3N1ZXJlLCBtYWduYSBlc3QgdGVtcG9yIGlwc3VtLCBpZCBtYXhpbXVzIGV4IHNhcGllbiBldCBtYXNzYS4gQWVuZWFuIGJpYmVuZHVtIHNlbXBlciBsZW8gdXQgZGljdHVtLiBOYW0gc2VkIGlwc3VtIGxhY2luaWEsIHZhcml1cyBvcmNpIGltcGVyZGlldCwgYWxpcXVhbSBpcHN1bS4gTWFlY2VuYXMgYSBkb2xvciBwZWxsZW50ZXNxdWUsIGFsaXF1ZXQgb2RpbyBldCwgdGVtcG9yIG9kaW8uIE5hbSBkdWkgbnVuYywgcnV0cnVtIGV1IGxlbyBpZCwgZGFwaWJ1cyBwb3N1ZXJlIGxlby5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMTEvMTEvMjAyMVwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiQWxsXCJcbiAgICAgICAgfSxcbiAgICBdXG5cbiAgICBsZXQgZ3JvdXBEYXRhID0gW1xuICAgICAgICAnQWxsJyxcbiAgICAgICAgJ090aGVyJ1xuICAgIF1cblxuICAgIGxldCBncm91cCA9ICdBbGwnXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrRGF0YSxcbiAgICAgICAgZ3JvdXBEYXRhLFxuICAgICAgICBncm91cCxcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgbGV0IHRhc2tDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKVxuICAgICAgICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5wdXQnKVxuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKVxuXG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2MsIGRhdGUsIGdyb3VwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkYXRlLCBncm91cH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGVJbnB1dC52YWx1ZSlcblxuICAgICAgICBsZXQgdGFzayA9IGFkZFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBmb3JtYXR0ZWREYXRlLCBkYXRhSG9sZGVyLmdyb3VwKVxuICAgICAgICBkYXRhSG9sZGVyLnRhc2tEYXRhLnB1c2godGFzaylcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIi1cIilcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAke3ZhbHVlWzFdfS8ke3ZhbHVlWzJdfS8ke3ZhbHVlWzBdfWBcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0aXRsZSkge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gZGF0YUhvbGRlci50YXNrRGF0YS5maW5kSW5kZXgoeCA9PiB4LnRpdGxlID09PSB0aXRsZSlcbiAgICAgICAgZGF0YUhvbGRlci50YXNrRGF0YS5zcGxpY2UodGFza0luZGV4LCAxKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlR3JvdXAoaWQpIHtcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cCA9IGlkXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKSBcbiAgICB9XG4gICAgZnVuY3Rpb24gbmV3R3JvdXAoKSB7XG4gICAgICAgIGxldCBncm91cElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwLWlucHV0JylcbiAgICAgICAgbGV0IG5ld2dyb3VwID0gZ3JvdXBJbnB1dC52YWx1ZVxuICAgICAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YS5wdXNoKG5ld2dyb3VwKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICBjaGFuZ2VHcm91cCxcbiAgICAgICAgbmV3R3JvdXAsXG4gICAgfVxufSkoKTtcblxuZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=