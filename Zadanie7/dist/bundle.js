/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (() => {

eval("var renderNotes = function () {\r\n    var notesInStorage = JSON.parse(localStorage.getItem('notes'));\r\n    var userNotesElement = document.getElementById('userNotes');\r\n    while (userNotesElement.firstChild) {\r\n        userNotesElement.removeChild(userNotesElement.lastChild);\r\n    }\r\n    notesInStorage.map(function (element) {\r\n        var note = document.createElement('div');\r\n        var title = document.createElement('p');\r\n        title.innerHTML = element;\r\n        note.classList.add('userNote');\r\n        note.appendChild(title);\r\n        userNotesElement.appendChild(note);\r\n    });\r\n};\r\nvar showFormAdd = function () {\r\n    var container = document.createElement('div');\r\n    var noteTitle = document.createElement('p');\r\n    var inputName = document.createElement('input');\r\n    var btnCancel = document.createElement('button');\r\n    var btnConfirm = document.createElement('button');\r\n    noteTitle.innerHTML = \"New note\";\r\n    btnCancel.innerHTML = \"Cancel\";\r\n    btnConfirm.innerHTML = \"Add\";\r\n    btnCancel.addEventListener('click', cancelNote);\r\n    btnConfirm.addEventListener('click', function () { return createNote(inputName.value); });\r\n    container.appendChild(noteTitle);\r\n    container.appendChild(inputName);\r\n    container.appendChild(btnCancel);\r\n    container.appendChild(btnConfirm);\r\n    container.classList.add('newNoteForm');\r\n    document.body.appendChild(container);\r\n};\r\nvar showFormDelete = function () {\r\n    var container = document.createElement('div');\r\n    var noteTitle = document.createElement('p');\r\n    var inputName = document.createElement('input');\r\n    var btnCancel = document.createElement('button');\r\n    var btnConfirm = document.createElement('button');\r\n    noteTitle.innerHTML = \"Type note title to remove\";\r\n    btnCancel.innerHTML = \"Cancel\";\r\n    btnConfirm.innerHTML = \"Delete\";\r\n    btnCancel.addEventListener('click', cancelNote);\r\n    btnConfirm.addEventListener('click', function () { return deleteNote(inputName.value); });\r\n    container.appendChild(noteTitle);\r\n    container.appendChild(inputName);\r\n    container.appendChild(btnCancel);\r\n    container.appendChild(btnConfirm);\r\n    container.classList.add('newNoteForm');\r\n    document.body.appendChild(container);\r\n};\r\nvar storage = localStorage.getItem('notes');\r\nif (storage !== null) {\r\n    renderNotes();\r\n}\r\nvar cancelNote = function () {\r\n    document.body.removeChild(document.body.lastChild);\r\n};\r\nvar createNote = function (text) {\r\n    if (text !== \"\") {\r\n        var values = [];\r\n        if (localStorage.getItem('notes') !== null) {\r\n            values = JSON.parse(localStorage.getItem('notes'));\r\n            values.push(text);\r\n        }\r\n        else {\r\n            values.push(text);\r\n        }\r\n        localStorage.setItem('notes', JSON.stringify(values));\r\n        renderNotes();\r\n    }\r\n    else {\r\n        alert(\"Please provide name for note.\");\r\n    }\r\n};\r\nvar deleteNote = function (title) {\r\n    var values = [];\r\n    if (localStorage.getItem('notes') !== null) {\r\n        values = JSON.parse(localStorage.getItem('notes'));\r\n        if (values.length !== 0) {\r\n            values = values.filter(function (v) {\r\n                return v !== title;\r\n            });\r\n            localStorage.setItem('notes', JSON.stringify(values));\r\n            renderNotes();\r\n        }\r\n        else {\r\n            alert(\"No notes to delete!\");\r\n        }\r\n    }\r\n    else {\r\n        alert(\"No notes to delete!\");\r\n    }\r\n};\r\nvar btnNewNote = document.getElementById('btnNewNote');\r\nvar btnDeleteNote = document.getElementById('btnDeleteNote');\r\nbtnNewNote.addEventListener('click', showFormAdd);\r\nbtnDeleteNote.addEventListener('click', showFormDelete);\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;