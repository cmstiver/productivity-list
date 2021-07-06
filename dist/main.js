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
    let groups = document.getElementById('groups')

    function displayTasks() {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.forEach((task) => {
            list.innerHTML += `
            <div class="task">
                <div class="title">${task.title}</div>
                <div class="date">${task.date}</div>
                <div class="delete">Delete</div>
            </div>
            `
        })
    }
    function displayGroups() {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.groupData.forEach((group) => {
            groups.innerHTML += `
            <div id="${group}" class="group">${group}</div>
            `
        })
    }
    function displayAll() {
        displayTasks()
        displayGroups()
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
    return {
        taskData,
        groupData,
    }
})();

let taskController = (function() {

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
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
    }
    function deleteTask(title) {
        let taskIndex = taskData.findIndex(x => x.title === title)
        taskData.splice(taskIndex, 1)
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay()
    }
    return {
        createTask,
        deleteTask,
    }
})();

_display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll()
_display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.assignEventListeners()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDUDtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrRUFBMkI7QUFDbkM7QUFDQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hELG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxtRUFBNEI7QUFDcEM7QUFDQSx1QkFBdUIsTUFBTSxrQkFBa0IsTUFBTTtBQUNyRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0VBQXlCOztBQUV0RTtBQUNBLFlBQVksZ0VBQXlCO0FBQ3JDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDZDOztBQUV2Qzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdUVBQThCO0FBQ3RDLFFBQVEscUVBQTRCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscUVBQTRCO0FBQzVCLCtFQUFzQyxFOzs7Ozs7VUNyRHRDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhSG9sZGVyLCB0YXNrQ29udHJvbGxlcn0gZnJvbSAnLi9pbmRleC5qcydcblxuZXhwb3J0IGxldCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JylcbiAgICBsZXQgZ3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwcycpXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gICAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke3Rhc2suZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUdyb3VwcygpIHtcbiAgICAgICAgZGF0YUhvbGRlci5ncm91cERhdGEuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGdyb3Vwcy5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIiR7Z3JvdXB9XCIgY2xhc3M9XCJncm91cFwiPiR7Z3JvdXB9PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGwoKSB7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpXG4gICAgICAgIGRpc3BsYXlHcm91cHMoKVxuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldERpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoZ3JvdXBzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5yZW1vdmVDaGlsZChncm91cHMuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXNzaWduRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrJylcbiAgICAgICAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tDb250cm9sbGVyLmNyZWF0ZVRhc2spXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIikuZm9yRWFjaCh4ID0+IHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xsZXIuZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuaW5uZXJIVE1MKVxuICAgICAgICB9KSlcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheUFsbCxcbiAgICAgICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMsXG4gICAgICAgIHJlc2V0RGlzcGxheSxcbiAgICB9XG59KSgpOyIsImltcG9ydCB7ZGlzcGxheUNvbnRyb2xsZXJ9IGZyb20gJy4vZGlzcGxheS5qcydcblxuZXhwb3J0IGxldCBkYXRhSG9sZGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IHRhc2tEYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJmaW5pc2ggcHJvamVjdFwiLFxuICAgICAgICAgICAgZGVzYzogXCJ3b3dvd293b3dvd29vd293b3dvd293b3dvd293b3dvd293b3dcIixcbiAgICAgICAgICAgIGRhdGU6IFwiMTEvMTEvMjAyMVwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiQWxsXCJcbiAgICAgICAgfSxcbiAgICBdXG5cbiAgICBsZXQgZ3JvdXBEYXRhID0gW1xuICAgICAgICAnQWxsJyxcbiAgICAgICAgJ090aGVyJ1xuICAgIF1cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrRGF0YSxcbiAgICAgICAgZ3JvdXBEYXRhLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBsZXQgdGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgZ3JvdXAgPSAnQWxsJ1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKVxuICAgICAgICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MtaW5wdXQnKVxuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKVxuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSAodGl0bGUsIGRlc2MsIGRhdGUsIGdyb3VwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkYXRlLCBncm91cH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHRhc2sgPSBuZXdUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBncm91cClcbiAgICAgICAgdGFza0RhdGEucHVzaCh0YXNrKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKClcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0aXRsZSkge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGFza0RhdGEuZmluZEluZGV4KHggPT4geC50aXRsZSA9PT0gdGl0bGUpXG4gICAgICAgIHRhc2tEYXRhLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgfVxufSkoKTtcblxuZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpXG5kaXNwbGF5Q29udHJvbGxlci5hc3NpZ25FdmVudExpc3RlbmVycygpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=