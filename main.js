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
    function displayTasks() {
        let list = document.getElementById('list')
        _index_js__WEBPACK_IMPORTED_MODULE_0__.taskData.forEach((task) => {
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
        let groups = document.getElementById('groups')
        _index_js__WEBPACK_IMPORTED_MODULE_0__.groupData.forEach((group) => {
            groups.innerHTML += `
            <div id="${group}" class="group">${group}</div>
            `
        })
    }
    function resetDisplay(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    function assignEventListeners() {
        let createTask = document.getElementById('create-task')
        createTask.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.createTask)
    }
    return {
        displayTasks,
        displayGroups,
        assignEventListeners,
        resetDisplay
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
/* harmony export */   "taskData": () => (/* binding */ taskData),
/* harmony export */   "groupData": () => (/* binding */ groupData),
/* harmony export */   "taskController": () => (/* binding */ taskController)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/display.js");


let taskData = [
    {
        title: "finish this project",
        desc: "wowowowowowoowowowowowowowowowowowow",
        date: "11/11/2021",
        group: "All"
    },
]

let groupData = [
    'All',
    'Other'
]

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
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay(list)
        _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayTasks()
    }
    return {
        createTask,
    }
})();

_display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayTasks()
_display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayGroups()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDs7QUFFdkQ7QUFDUDtBQUNBO0FBQ0EsUUFBUSx1REFBZ0I7QUFDeEI7QUFDQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hELG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFpQjtBQUN6QjtBQUNBLHVCQUF1QixNQUFNLGtCQUFrQixNQUFNO0FBQ3JEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0VBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNkM7O0FBRXZDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1RUFBOEI7QUFDdEMsUUFBUSx1RUFBOEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVFQUE4QjtBQUM5Qix3RUFBK0I7QUFDL0IsK0VBQXNDLEU7Ozs7OztVQ3pDdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rhc2tEYXRhLCBncm91cERhdGEsIHRhc2tDb250cm9sbGVyfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpXG4gICAgICAgIHRhc2tEYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHt0YXNrLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlHcm91cHMoKSB7XG4gICAgICAgIGxldCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBzJylcbiAgICAgICAgZ3JvdXBEYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBncm91cHMuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke2dyb3VwfVwiIGNsYXNzPVwiZ3JvdXBcIj4ke2dyb3VwfTwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldERpc3BsYXkocGFyZW50KSB7XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhc3NpZ25FdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRhc2snKVxuICAgICAgICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0NvbnRyb2xsZXIuY3JlYXRlVGFzaylcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheVRhc2tzLFxuICAgICAgICBkaXNwbGF5R3JvdXBzLFxuICAgICAgICBhc3NpZ25FdmVudExpc3RlbmVycyxcbiAgICAgICAgcmVzZXREaXNwbGF5XG4gICAgfVxufSkoKTsiLCJpbXBvcnQge2Rpc3BsYXlDb250cm9sbGVyfSBmcm9tICcuL2Rpc3BsYXkuanMnXG5cbmV4cG9ydCBsZXQgdGFza0RhdGEgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJmaW5pc2ggdGhpcyBwcm9qZWN0XCIsXG4gICAgICAgIGRlc2M6IFwid293b3dvd293b3dvb3dvd293b3dvd293b3dvd293b3dvd293XCIsXG4gICAgICAgIGRhdGU6IFwiMTEvMTEvMjAyMVwiLFxuICAgICAgICBncm91cDogXCJBbGxcIlxuICAgIH0sXG5dXG5cbmV4cG9ydCBsZXQgZ3JvdXBEYXRhID0gW1xuICAgICdBbGwnLFxuICAgICdPdGhlcidcbl1cblxuZXhwb3J0IGxldCB0YXNrQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCBncm91cCA9ICdBbGwnXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpXG4gICAgICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYy1pbnB1dCcpXG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpXG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9ICh0aXRsZSwgZGVzYywgZGF0ZSwgZ3JvdXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGRhdGUsIGdyb3VwfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdGFzayA9IG5ld1Rhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIGdyb3VwKVxuICAgICAgICB0YXNrRGF0YS5wdXNoKHRhc2spXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheShsaXN0KVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VGFza3MoKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgIH1cbn0pKCk7XG5cbmRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUYXNrcygpXG5kaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5R3JvdXBzKClcbmRpc3BsYXlDb250cm9sbGVyLmFzc2lnbkV2ZW50TGlzdGVuZXJzKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==