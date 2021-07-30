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


let displayController = (function () {
  let list = document.getElementById("list");
  let groups = document.getElementById("grouplist");

  function displayTasks() {
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.group === "All") {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.forEach((task) => {
        let date = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.formatDate(task.date);
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
                `;
      });
    } else {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.forEach((task) => {
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.group === task.group) {
          let date = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.formatDate(task.date);
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
                    `;
        }
      });
    }
  }
  function displayGroups() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.groupData.forEach((group) => {
      groups.innerHTML += `
            <button id="${group}" class="group groupbutton">${group}</button>
            `;
    });
  }
  function displayAll() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.sortDates();
    displayTasks();
    displayGroups();
    assignEventListeners();
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
    let title =
      targeted.firstChild.nextSibling.firstChild.nextSibling.innerHTML;
    let index = _index_js__WEBPACK_IMPORTED_MODULE_0__.dataHolder.taskData.findIndex((x) => x.title === title);

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
        `;
    assignEventListeners();
  }

  function assignEventListeners() {
    let createTask = document.getElementById("create-task");
    createTask.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.createTask);

    document.querySelectorAll(".delete").forEach((x) =>
      x.addEventListener("click", (e) => {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.deleteTask(
          e.target.parentNode.firstChild.nextSibling.innerHTML
        );
      })
    );

    let deleteGroup = document.getElementById("deletegroup");
    deleteGroup.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.deleteGroup);

    document.querySelectorAll(".edit").forEach((x) =>
      x.addEventListener("click", (e) => {
        replaceDataWithInput(e.target.parentNode.parentNode);
      })
    );

    document.querySelectorAll(".confirmedit").forEach((x) =>
      x.addEventListener("click", (e) => {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.editTask(e.target.parentNode.parentNode);
      })
    );

    document.querySelectorAll(".group").forEach((x) =>
      x.addEventListener("click", (e) => {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.changeGroup(e.target.id);
      })
    );

    let createGroup = document.getElementById("addgroup");
    createGroup.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_0__.taskController.newGroup);

    document.querySelectorAll(".expand").forEach((x) => {
      x.addEventListener("click", (e) => {
        e.currentTarget.nextSibling.nextSibling.classList.toggle(
          "taskdescshow"
        );
      });
    });
  }
  return {
    displayAll,
    assignEventListeners,
    resetDisplay,
  };
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


let dataHolder = (function () {
  let taskData = [
    {
      title: "Example",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium erat at nulla bibendum, nec sodales arcu mattis. In vitae condimentum neque. Vestibulum eget turpis lacinia lorem fringilla vulputate at et orci. Nam mauris ligula, convallis et fringilla ut, volutpat sed justo. Etiam vitae elit at nunc ullamcorper imperdiet. Etiam at malesuada metus, nec varius diam. Nullam mollis nec felis quis maximus. Vivamus auctor risus volutpat lacus porttitor, quis convallis turpis faucibus. Sed porttitor nisi vitae condimentum sodales. Nam aliquet, diam vitae luctus posuere, magna est tempor ipsum, id maximus ex sapien et massa. Aenean bibendum semper leo ut dictum. Nam sed ipsum lacinia, varius orci imperdiet, aliquam ipsum. Maecenas a dolor pellentesque, aliquet odio et, tempor odio. Nam dui nunc, rutrum eu leo id, dapibus posuere leo.",
      date: "2021-07-06",
      group: "All",
    },
    {
      title: "Do the dishes",
      desc: "Why not?",
      date: "2021-07-08",
      group: "Chores",
    },
    {
      title: "Clean the litter boxes :(",
      desc: "My least favorite chore. :(",
      date: "2021-07-09",
      group: "Chores",
    },
  ];

  let groupData = ["All", "Chores"];

  let group = "All";

  return {
    taskData,
    groupData,
    group,
  };
})();

let taskController = (function () {
  function createTask() {
    let titleInput = document.getElementById("title-input");
    let descInput = document.getElementById("desc-input");
    let dateInput = document.getElementById("date-input");

    let check = newTaskValidation(
      titleInput.value,
      descInput.value,
      dateInput.value
    );
    if (check === false) {
      return;
    }

    const addTask = (title, desc, date, group) => {
      return { title, desc, date, group };
    };

    let task = addTask(
      titleInput.value,
      descInput.value,
      dateInput.value,
      dataHolder.group
    );
    dataHolder.taskData.push(task);
    titleInput.value = "";
    descInput.value = "";
    dateInput.value = "";
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll();
    addToStorage();
  }

  function formatDate(value) {
    value = value.split("-");
    let newValue = `${value[1]}/${value[2]}/${value[0]}`;
    return newValue;
  }

  function deleteTask(title) {
    let taskIndex = dataHolder.taskData.findIndex((x) => x.title === title);
    dataHolder.taskData.splice(taskIndex, 1);
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll();
    addToStorage();
  }

  function changeGroup(id) {
    dataHolder.group = id;
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll();
    addToStorage();
  }

  function editTask(targeted) {
    let titleInput = document.querySelector(".task-title-input").value;
    let dateInput = document.querySelector(".task-date-input").value;
    let descInput = document.querySelector(".task-desc-input").value;

    let check = editTaskValidation(titleInput, dateInput, descInput);
    if (check === false) {
      return;
    }

    let index = targeted.firstChild.nextSibling.firstChild.nextSibling.id;

    dataHolder.taskData[index].title = titleInput;
    dataHolder.taskData[index].date = dateInput;
    dataHolder.taskData[index].desc = descInput;

    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll();
    addToStorage();
  }

  function newGroup() {
    let groupInput = document.getElementById("group-input");

    let check = newGroupValidation(groupInput.value);
    if (check === false) {
      return;
    }

    let newgroup = groupInput.value;
    dataHolder.groupData.push(newgroup);
    dataHolder.group = groupInput.value;
    groupInput.value = "";
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll();
    addToStorage();
  }

  function deleteGroup() {
    if (dataHolder.group === "All") {
      return;
    }

    let groupIndex = dataHolder.groupData.findIndex(
      (x) => x === dataHolder.group
    );
    dataHolder.groupData.splice(groupIndex, 1);
    dataHolder.group = "All";
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.resetDisplay();
    _display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll();
    addToStorage();
  }

  function sortDates() {
    if (dataHolder.taskData === "") {
      return;
    }
    dataHolder.taskData.sort((a, b) => {
      return b.date > a.date ? -1 : a.date > b.date ? 1 : 0;
    });
  }

  function newTaskValidation(titleInput, descInput, dateInput) {
    if (titleInput.length < 1 || descInput.length < 1 || dateInput == "") {
      alert("All inputs should be filled.");
      return false;
    }
  }
  function newGroupValidation(groupInput) {
    if (groupInput.length < 1) {
      alert("All inputs should be filled.");
      return false;
    }
  }
  function editTaskValidation(titleInput, dateInput, descInput) {
    if (titleInput.length < 1 || descInput.length < 1 || dateInput == "") {
      alert("All inputs should be filled.");
      return false;
    }
  }
  function addToStorage() {
    localStorage.setItem("taskDataString", JSON.stringify(dataHolder.taskData));
    localStorage.setItem(
      "groupDataString",
      JSON.stringify(dataHolder.groupData)
    );
  }

  function retrieveFromStorage() {
    if (
      localStorage.taskDataString != null &&
      localStorage.groupDataString != null
    ) {
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
    addToStorage,
  };
})();

taskController.retrieveFromStorage();
taskController.addToStorage();
_display_js__WEBPACK_IMPORTED_MODULE_0__.displayController.displayAll();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9kdWN0aXZpdHktbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2R1Y3Rpdml0eS1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvZHVjdGl2aXR5LWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDs7QUFFakQ7QUFDUDtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBZ0I7QUFDeEIsTUFBTSxrRUFBMkI7QUFDakMsbUJBQW1CLGdFQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RCw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsTUFBTSxrRUFBMkI7QUFDakMsWUFBWSx1REFBZ0I7QUFDNUIscUJBQXFCLGdFQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RCw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQTRCO0FBQ2hDO0FBQ0EsMEJBQTBCLE1BQU0sOEJBQThCLE1BQU07QUFDcEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksK0RBQXdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQTZCOztBQUU3QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSw4Q0FBOEMsMERBQW1CLGNBQWM7QUFDbEgsOEVBQThFLDBEQUFtQixhQUFhO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwwREFBbUIsYUFBYTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxnRUFBeUI7O0FBRWxFO0FBQ0E7QUFDQSxRQUFRLGdFQUF5QjtBQUNqQztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsMENBQTBDLGlFQUEwQjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhEQUF1QjtBQUMvQixPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFFBQVEsaUVBQTBCO0FBQ2xDLE9BQU87QUFDUDs7QUFFQTtBQUNBLDBDQUEwQyw4REFBdUI7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklnRDs7QUFFMUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQThCO0FBQ2xDLElBQUkscUVBQTRCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUE4QjtBQUNsQyxJQUFJLHFFQUE0QjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVFQUE4QjtBQUNsQyxJQUFJLHFFQUE0QjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHVFQUE4QjtBQUNsQyxJQUFJLHFFQUE0QjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUE4QjtBQUNsQyxJQUFJLHFFQUE0QjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUE4QjtBQUNsQyxJQUFJLHFFQUE0QjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxxRUFBNEI7Ozs7Ozs7VUMvTTVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YUhvbGRlciwgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgbGV0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XG4gIGxldCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwbGlzdFwiKTtcblxuICBmdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gICAgaWYgKGRhdGFIb2xkZXIuZ3JvdXAgPT09IFwiQWxsXCIpIHtcbiAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBsZXQgZGF0ZSA9IHRhc2tDb250cm9sbGVyLmZvcm1hdERhdGUodGFzay5kYXRlKTtcbiAgICAgICAgbGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrcm93IGV4cGFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjXCI+JHt0YXNrLmRlc2N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAoZGF0YUhvbGRlci5ncm91cCA9PT0gdGFzay5ncm91cCkge1xuICAgICAgICAgIGxldCBkYXRlID0gdGFza0NvbnRyb2xsZXIuZm9ybWF0RGF0ZSh0YXNrLmRhdGUpO1xuICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tyb3cgZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrZGVzY2hpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza2Rlc2NcIj4ke3Rhc2suZGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheUdyb3VwcygpIHtcbiAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgZ3JvdXBzLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtncm91cH1cIiBjbGFzcz1cImdyb3VwIGdyb3VwYnV0dG9uXCI+JHtncm91cH08L2J1dHRvbj5cbiAgICAgICAgICAgIGA7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheUFsbCgpIHtcbiAgICB0YXNrQ29udHJvbGxlci5zb3J0RGF0ZXMoKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbiAgICBkaXNwbGF5R3JvdXBzKCk7XG4gICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldERpc3BsYXkoKSB7XG4gICAgd2hpbGUgKGxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICB3aGlsZSAoZ3JvdXBzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGdyb3Vwcy5yZW1vdmVDaGlsZChncm91cHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZURhdGFXaXRoSW5wdXQodGFyZ2V0ZWQpIHtcbiAgICBsZXQgdGl0bGUgPVxuICAgICAgdGFyZ2V0ZWQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlubmVySFRNTDtcbiAgICBsZXQgaW5kZXggPSBkYXRhSG9sZGVyLnRhc2tEYXRhLmZpbmRJbmRleCgoeCkgPT4geC50aXRsZSA9PT0gdGl0bGUpO1xuXG4gICAgdGFyZ2V0ZWQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tyb3dcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCIke2luZGV4fVwiIGNsYXNzPVwidGFzay10aXRsZS1pbnB1dCB0YXNraW5wdXRcIiB2YWx1ZT1cIiR7ZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0udGl0bGV9XCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInRhc2stZGF0ZS1pbnB1dCB0YXNraW5wdXRcIiB2YWx1ZT1cIiR7ZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGF0ZX1cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tkZXNjc2hvd1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1kZXNjLWlucHV0IHRhc2tpbnB1dFwiIHZhbHVlPVwiJHtkYXRhSG9sZGVyLnRhc2tEYXRhW2luZGV4XS5kZXNjfVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybWVkaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnbkV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGxldCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtdGFza1wiKTtcbiAgICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrQ29udHJvbGxlci5jcmVhdGVUYXNrKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpLmZvckVhY2goKHgpID0+XG4gICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0YXNrQ29udHJvbGxlci5kZWxldGVUYXNrKFxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0U2libGluZy5pbm5lckhUTUxcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGxldCBkZWxldGVHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlZ3JvdXBcIik7XG4gICAgZGVsZXRlR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDb250cm9sbGVyLmRlbGV0ZUdyb3VwKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdFwiKS5mb3JFYWNoKCh4KSA9PlxuICAgICAgeC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcmVwbGFjZURhdGFXaXRoSW5wdXQoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29uZmlybWVkaXRcIikuZm9yRWFjaCgoeCkgPT5cbiAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHRhc2tDb250cm9sbGVyLmVkaXRUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwXCIpLmZvckVhY2goKHgpID0+XG4gICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0YXNrQ29udHJvbGxlci5jaGFuZ2VHcm91cChlLnRhcmdldC5pZCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBsZXQgY3JlYXRlR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGdyb3VwXCIpO1xuICAgIGNyZWF0ZUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrQ29udHJvbGxlci5uZXdHcm91cCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4cGFuZFwiKS5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgICAgICBcInRhc2tkZXNjc2hvd1wiXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlBbGwsXG4gICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMsXG4gICAgcmVzZXREaXNwbGF5LFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheS5qc1wiO1xuXG5leHBvcnQgbGV0IGRhdGFIb2xkZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgdGFza0RhdGEgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiRXhhbXBsZVwiLFxuICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBwcmV0aXVtIGVyYXQgYXQgbnVsbGEgYmliZW5kdW0sIG5lYyBzb2RhbGVzIGFyY3UgbWF0dGlzLiBJbiB2aXRhZSBjb25kaW1lbnR1bSBuZXF1ZS4gVmVzdGlidWx1bSBlZ2V0IHR1cnBpcyBsYWNpbmlhIGxvcmVtIGZyaW5naWxsYSB2dWxwdXRhdGUgYXQgZXQgb3JjaS4gTmFtIG1hdXJpcyBsaWd1bGEsIGNvbnZhbGxpcyBldCBmcmluZ2lsbGEgdXQsIHZvbHV0cGF0IHNlZCBqdXN0by4gRXRpYW0gdml0YWUgZWxpdCBhdCBudW5jIHVsbGFtY29ycGVyIGltcGVyZGlldC4gRXRpYW0gYXQgbWFsZXN1YWRhIG1ldHVzLCBuZWMgdmFyaXVzIGRpYW0uIE51bGxhbSBtb2xsaXMgbmVjIGZlbGlzIHF1aXMgbWF4aW11cy4gVml2YW11cyBhdWN0b3IgcmlzdXMgdm9sdXRwYXQgbGFjdXMgcG9ydHRpdG9yLCBxdWlzIGNvbnZhbGxpcyB0dXJwaXMgZmF1Y2lidXMuIFNlZCBwb3J0dGl0b3IgbmlzaSB2aXRhZSBjb25kaW1lbnR1bSBzb2RhbGVzLiBOYW0gYWxpcXVldCwgZGlhbSB2aXRhZSBsdWN0dXMgcG9zdWVyZSwgbWFnbmEgZXN0IHRlbXBvciBpcHN1bSwgaWQgbWF4aW11cyBleCBzYXBpZW4gZXQgbWFzc2EuIEFlbmVhbiBiaWJlbmR1bSBzZW1wZXIgbGVvIHV0IGRpY3R1bS4gTmFtIHNlZCBpcHN1bSBsYWNpbmlhLCB2YXJpdXMgb3JjaSBpbXBlcmRpZXQsIGFsaXF1YW0gaXBzdW0uIE1hZWNlbmFzIGEgZG9sb3IgcGVsbGVudGVzcXVlLCBhbGlxdWV0IG9kaW8gZXQsIHRlbXBvciBvZGlvLiBOYW0gZHVpIG51bmMsIHJ1dHJ1bSBldSBsZW8gaWQsIGRhcGlidXMgcG9zdWVyZSBsZW8uXCIsXG4gICAgICBkYXRlOiBcIjIwMjEtMDctMDZcIixcbiAgICAgIGdyb3VwOiBcIkFsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRG8gdGhlIGRpc2hlc1wiLFxuICAgICAgZGVzYzogXCJXaHkgbm90P1wiLFxuICAgICAgZGF0ZTogXCIyMDIxLTA3LTA4XCIsXG4gICAgICBncm91cDogXCJDaG9yZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNsZWFuIHRoZSBsaXR0ZXIgYm94ZXMgOihcIixcbiAgICAgIGRlc2M6IFwiTXkgbGVhc3QgZmF2b3JpdGUgY2hvcmUuIDooXCIsXG4gICAgICBkYXRlOiBcIjIwMjEtMDctMDlcIixcbiAgICAgIGdyb3VwOiBcIkNob3Jlc1wiLFxuICAgIH0sXG4gIF07XG5cbiAgbGV0IGdyb3VwRGF0YSA9IFtcIkFsbFwiLCBcIkNob3Jlc1wiXTtcblxuICBsZXQgZ3JvdXAgPSBcIkFsbFwiO1xuXG4gIHJldHVybiB7XG4gICAgdGFza0RhdGEsXG4gICAgZ3JvdXBEYXRhLFxuICAgIGdyb3VwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGxldCB0YXNrQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpO1xuICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2MtaW5wdXRcIik7XG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1pbnB1dFwiKTtcblxuICAgIGxldCBjaGVjayA9IG5ld1Rhc2tWYWxpZGF0aW9uKFxuICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NJbnB1dC52YWx1ZSxcbiAgICAgIGRhdGVJbnB1dC52YWx1ZVxuICAgICk7XG4gICAgaWYgKGNoZWNrID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2MsIGRhdGUsIGdyb3VwKSA9PiB7XG4gICAgICByZXR1cm4geyB0aXRsZSwgZGVzYywgZGF0ZSwgZ3JvdXAgfTtcbiAgICB9O1xuXG4gICAgbGV0IHRhc2sgPSBhZGRUYXNrKFxuICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NJbnB1dC52YWx1ZSxcbiAgICAgIGRhdGVJbnB1dC52YWx1ZSxcbiAgICAgIGRhdGFIb2xkZXIuZ3JvdXBcbiAgICApO1xuICAgIGRhdGFIb2xkZXIudGFza0RhdGEucHVzaCh0YXNrKTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkZXNjSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpO1xuICAgIGFkZFRvU3RvcmFnZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0RGF0ZSh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCItXCIpO1xuICAgIGxldCBuZXdWYWx1ZSA9IGAke3ZhbHVlWzFdfS8ke3ZhbHVlWzJdfS8ke3ZhbHVlWzBdfWA7XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFzayh0aXRsZSkge1xuICAgIGxldCB0YXNrSW5kZXggPSBkYXRhSG9sZGVyLnRhc2tEYXRhLmZpbmRJbmRleCgoeCkgPT4geC50aXRsZSA9PT0gdGl0bGUpO1xuICAgIGRhdGFIb2xkZXIudGFza0RhdGEuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpO1xuICAgIGFkZFRvU3RvcmFnZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlR3JvdXAoaWQpIHtcbiAgICBkYXRhSG9sZGVyLmdyb3VwID0gaWQ7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVzZXREaXNwbGF5KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheUFsbCgpO1xuICAgIGFkZFRvU3RvcmFnZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRhc2sodGFyZ2V0ZWQpIHtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZS1pbnB1dFwiKS52YWx1ZTtcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRhdGUtaW5wdXRcIikudmFsdWU7XG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjLWlucHV0XCIpLnZhbHVlO1xuXG4gICAgbGV0IGNoZWNrID0gZWRpdFRhc2tWYWxpZGF0aW9uKHRpdGxlSW5wdXQsIGRhdGVJbnB1dCwgZGVzY0lucHV0KTtcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gdGFyZ2V0ZWQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlkO1xuXG4gICAgZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0udGl0bGUgPSB0aXRsZUlucHV0O1xuICAgIGRhdGFIb2xkZXIudGFza0RhdGFbaW5kZXhdLmRhdGUgPSBkYXRlSW5wdXQ7XG4gICAgZGF0YUhvbGRlci50YXNrRGF0YVtpbmRleF0uZGVzYyA9IGRlc2NJbnB1dDtcblxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlc2V0RGlzcGxheSgpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKTtcbiAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld0dyb3VwKCkge1xuICAgIGxldCBncm91cElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cC1pbnB1dFwiKTtcblxuICAgIGxldCBjaGVjayA9IG5ld0dyb3VwVmFsaWRhdGlvbihncm91cElucHV0LnZhbHVlKTtcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld2dyb3VwID0gZ3JvdXBJbnB1dC52YWx1ZTtcbiAgICBkYXRhSG9sZGVyLmdyb3VwRGF0YS5wdXNoKG5ld2dyb3VwKTtcbiAgICBkYXRhSG9sZGVyLmdyb3VwID0gZ3JvdXBJbnB1dC52YWx1ZTtcbiAgICBncm91cElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKCk7XG4gICAgYWRkVG9TdG9yYWdlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVHcm91cCgpIHtcbiAgICBpZiAoZGF0YUhvbGRlci5ncm91cCA9PT0gXCJBbGxcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBncm91cEluZGV4ID0gZGF0YUhvbGRlci5ncm91cERhdGEuZmluZEluZGV4KFxuICAgICAgKHgpID0+IHggPT09IGRhdGFIb2xkZXIuZ3JvdXBcbiAgICApO1xuICAgIGRhdGFIb2xkZXIuZ3JvdXBEYXRhLnNwbGljZShncm91cEluZGV4LCAxKTtcbiAgICBkYXRhSG9sZGVyLmdyb3VwID0gXCJBbGxcIjtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZXNldERpc3BsYXkoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5QWxsKCk7XG4gICAgYWRkVG9TdG9yYWdlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzb3J0RGF0ZXMoKSB7XG4gICAgaWYgKGRhdGFIb2xkZXIudGFza0RhdGEgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGF0YUhvbGRlci50YXNrRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYi5kYXRlID4gYS5kYXRlID8gLTEgOiBhLmRhdGUgPiBiLmRhdGUgPyAxIDogMDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld1Rhc2tWYWxpZGF0aW9uKHRpdGxlSW5wdXQsIGRlc2NJbnB1dCwgZGF0ZUlucHV0KSB7XG4gICAgaWYgKHRpdGxlSW5wdXQubGVuZ3RoIDwgMSB8fCBkZXNjSW5wdXQubGVuZ3RoIDwgMSB8fCBkYXRlSW5wdXQgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJBbGwgaW5wdXRzIHNob3VsZCBiZSBmaWxsZWQuXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBuZXdHcm91cFZhbGlkYXRpb24oZ3JvdXBJbnB1dCkge1xuICAgIGlmIChncm91cElucHV0Lmxlbmd0aCA8IDEpIHtcbiAgICAgIGFsZXJ0KFwiQWxsIGlucHV0cyBzaG91bGQgYmUgZmlsbGVkLlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZWRpdFRhc2tWYWxpZGF0aW9uKHRpdGxlSW5wdXQsIGRhdGVJbnB1dCwgZGVzY0lucHV0KSB7XG4gICAgaWYgKHRpdGxlSW5wdXQubGVuZ3RoIDwgMSB8fCBkZXNjSW5wdXQubGVuZ3RoIDwgMSB8fCBkYXRlSW5wdXQgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJBbGwgaW5wdXRzIHNob3VsZCBiZSBmaWxsZWQuXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhZGRUb1N0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrRGF0YVN0cmluZ1wiLCBKU09OLnN0cmluZ2lmeShkYXRhSG9sZGVyLnRhc2tEYXRhKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICBcImdyb3VwRGF0YVN0cmluZ1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YUhvbGRlci5ncm91cERhdGEpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHJpZXZlRnJvbVN0b3JhZ2UoKSB7XG4gICAgaWYgKFxuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tEYXRhU3RyaW5nICE9IG51bGwgJiZcbiAgICAgIGxvY2FsU3RvcmFnZS5ncm91cERhdGFTdHJpbmcgIT0gbnVsbFxuICAgICkge1xuICAgICAgbGV0IHJldHJpZXZlZFRhc2tEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrRGF0YVN0cmluZ1wiKTtcbiAgICAgIGRhdGFIb2xkZXIudGFza0RhdGEgPSBKU09OLnBhcnNlKHJldHJpZXZlZFRhc2tEYXRhKTtcblxuICAgICAgbGV0IHJldHJpZXZlZEdyb3VwRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3JvdXBEYXRhU3RyaW5nXCIpO1xuICAgICAgZGF0YUhvbGRlci5ncm91cERhdGEgPSBKU09OLnBhcnNlKHJldHJpZXZlZEdyb3VwRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgY2hhbmdlR3JvdXAsXG4gICAgbmV3R3JvdXAsXG4gICAgZWRpdFRhc2ssXG4gICAgZm9ybWF0RGF0ZSxcbiAgICBzb3J0RGF0ZXMsXG4gICAgZGVsZXRlR3JvdXAsXG4gICAgcmV0cmlldmVGcm9tU3RvcmFnZSxcbiAgICBhZGRUb1N0b3JhZ2UsXG4gIH07XG59KSgpO1xuXG50YXNrQ29udHJvbGxlci5yZXRyaWV2ZUZyb21TdG9yYWdlKCk7XG50YXNrQ29udHJvbGxlci5hZGRUb1N0b3JhZ2UoKTtcbmRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlBbGwoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9