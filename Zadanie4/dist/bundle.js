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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar signs_1 = __webpack_require__(/*! ./signs */ \"./src/signs.ts\");\r\n__webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\r\nvar guessTheNumberContainer = document.getElementById(\"GuessTheNumberContainer\");\r\nvar ticTacToeContainer = document.getElementById(\"TicTacToeContainer\");\r\nvar guessTheNumberButton = document.getElementById(\"guessTheNumber\");\r\nguessTheNumberButton.addEventListener(\"click\", function () { return DisplayGuessTheNumber(); });\r\nvar DisplayGuessTheNumber = function () {\r\n    ticTacToeContainer.style.display = \"none\";\r\n    guessTheNumberContainer.style.display = \"block\";\r\n    document.body.style.backgroundColor = \"dodgerblue\";\r\n};\r\nvar ticTacToeButton = document.getElementById(\"TicTacToe\");\r\nticTacToeButton.addEventListener(\"click\", function () { return DisplayTicTacToe(); });\r\nvar DisplayTicTacToe = function () {\r\n    guessTheNumberContainer.style.display = \"none\";\r\n    ticTacToeContainer.style.display = \"block\";\r\n    document.body.style.backgroundColor = \"lightpink\";\r\n};\r\n// let product: Product = new Product(\"Dupa\", 123);\r\n// let product1: Product = new Product(\"tesdt\", 243, Category.Jedzenie);\r\n// let produktus: Product[] = [product, product1];\r\n// console.log(produktus);\r\n/// TicTacToe \r\nvar counter = 0;\r\nvar elementCells = Array.from(document.getElementsByClassName(\"cells\"));\r\nvar resetButton = document.getElementById(\"reset\");\r\nvar cells = new Array(9);\r\nvar currentSign = signs_1.Sign.O;\r\nresetButton.addEventListener(\"click\", function () { return reset(); });\r\nelementCells.forEach(function (element) {\r\n    element.addEventListener(\"click\", function () { return fillCell(element); });\r\n});\r\nvar fillCell = function (element) {\r\n    if (counter % 2 === 0) {\r\n        console.log(\"dupa\");\r\n        currentSign = signs_1.Sign.O;\r\n        element.children[0].innerHTML = currentSign.toString();\r\n        element.children[0].disabled = true;\r\n        document.getElementById(\"playerTurn\").innerHTML = \"It's player 2's turn ( X )\";\r\n    }\r\n    else {\r\n        currentSign = signs_1.Sign.X;\r\n        element.children[0].innerHTML = currentSign.toString();\r\n        element.children[0].disabled = true;\r\n        element;\r\n        document.getElementById(\"playerTurn\").innerHTML = \"It's player 1's turn ( O )\";\r\n    }\r\n    counter++;\r\n    var x = element.attributes[1].value;\r\n    cells[x] = currentSign.toString();\r\n    checkWinner();\r\n    console.log(counter);\r\n};\r\nvar checkWinner = function () {\r\n    if ((cells[0] === \"X\" && cells[1] === \"X\" && cells[2] === \"X\") ||\r\n        (cells[0] === \"O\" && cells[1] === \"O\" && cells[2] === \"O\"))\r\n        endGame(currentSign);\r\n    else if ((cells[3] === \"X\" && cells[4] === \"X\" && cells[5] === \"X\") ||\r\n        (cells[3] === \"O\" && cells[4] === \"O\" && cells[5] === \"O\"))\r\n        endGame(currentSign);\r\n    else if ((cells[6] === \"X\" && cells[7] === \"X\" && cells[8] === \"X\") ||\r\n        (cells[6] === \"O\" && cells[7] === \"O\" && cells[8] === \"O\"))\r\n        endGame(currentSign);\r\n    else if ((cells[0] === \"X\" && cells[3] === \"X\" && cells[6] === \"X\") ||\r\n        (cells[0] === \"O\" && cells[3] === \"O\" && cells[6] === \"O\"))\r\n        endGame(currentSign);\r\n    else if ((cells[1] === \"X\" && cells[4] === \"X\" && cells[7] === \"X\") ||\r\n        (cells[1] === \"O\" && cells[4] === \"O\" && cells[7] === \"O\"))\r\n        endGame(currentSign);\r\n    else if ((cells[2] === \"X\" && cells[5] === \"X\" && cells[8] === \"X\") ||\r\n        (cells[2] === \"O\" && cells[5] === \"O\" && cells[8] === \"O\"))\r\n        endGame(currentSign);\r\n    else if ((cells[0] === \"X\" && cells[4] === \"X\" && cells[8] === \"X\") ||\r\n        (cells[0] === \"O\" && cells[4] === \"O\" && cells[8] === \"O\"))\r\n        endGame(currentSign);\r\n    else if ((cells[2] === \"X\" && cells[4] === \"X\" && cells[6] === \"X\") ||\r\n        (cells[2] === \"O\" && cells[4] === \"O\" && cells[6] === \"O\"))\r\n        endGame(currentSign);\r\n    else {\r\n        if (counter > 8)\r\n            remis();\r\n    }\r\n};\r\nvar remis = function () {\r\n    document.getElementById(\"playerTurn\").innerHTML = \"\";\r\n    document.getElementById(\"winnerInfo\").innerHTML = \"DRAW!\";\r\n    elementCells.forEach(function (element) {\r\n        element.children[0].disabled = true;\r\n    });\r\n    counter = 0;\r\n};\r\nvar endGame = function (player) {\r\n    document.getElementById(\"playerTurn\").innerHTML = \"\";\r\n    document.getElementById(\"winnerInfo\").innerHTML = \"The winner is ( \" + player.toString() + \" )!\";\r\n    elementCells.forEach(function (element) {\r\n        element.children[0].disabled = true;\r\n    });\r\n};\r\nvar reset = function () {\r\n    document.getElementById(\"playerTurn\").innerHTML =\r\n        \"It's player 1's turn ( O )\";\r\n    cells = new Array(9);\r\n    counter = 0;\r\n    document.getElementById(\"winnerInfo\").innerHTML = \"\";\r\n    elementCells.forEach(function (element) {\r\n        element.children[0].innerHTML = \"\";\r\n        element.children[0].disabled = false;\r\n    });\r\n};\r\n/// GuessTheNumber\r\nvar RandomNumber = function (min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n};\r\nvar inputField = 0;\r\nvar guessButton = document.getElementById(\"check\");\r\nvar minButton = document.getElementById(\"setMin\");\r\nvar maxButton = document.getElementById(\"setMax\");\r\nvar minNumber = 0;\r\nvar maxNumber = 0;\r\nvar minNumberInput = document.getElementById(\"minNumber\");\r\nvar maxNumberInput = document.getElementById(\"maxNumber\");\r\nvar isMinReady = false;\r\nvar isMaxReady = false;\r\nvar random = 0;\r\nvar resetGuessingButton = document.getElementById(\"resetGuessing\");\r\nvar tries = 0;\r\nguessButton.disabled = true;\r\nmaxButton.disabled = true;\r\nresetGuessingButton.addEventListener(\"click\", function () { return resetGuessing(); });\r\nticTacToeButton.addEventListener(\"click\", function () { return DisplayTicTacToe(); });\r\nminButton.addEventListener(\"click\", function () { return SetMinNumber(); });\r\nmaxButton.addEventListener(\"click\", function () { return SetMaxNumber(); });\r\nguessButton.addEventListener(\"click\", function () { return checkIfClose(); });\r\nvar SetMinNumber = function () {\r\n    if ((document.getElementById(\"minNumber\").value) === \"\") {\r\n        alert(\"Minimum numbet must be set!\");\r\n    }\r\n    else {\r\n        maxNumberInput.disabled = false;\r\n        minNumber = (document.getElementById(\"minNumber\").value);\r\n        console.log(minNumber);\r\n        minNumberInput.style.fontSize = '30px';\r\n        minNumberInput.disabled = true;\r\n        isMinReady = true;\r\n        minButton.disabled = true;\r\n        maxButton.disabled = false;\r\n        if (isMinReady === true && isMaxReady === true) {\r\n            document.getElementById(\"isReady\").innerHTML = \"Random number from \" + minNumber + \" to \" + maxNumber + \" has been generated!\";\r\n            random = RandomNumber(minNumber, maxNumber);\r\n            console.log(random);\r\n        }\r\n    }\r\n};\r\nvar SetMaxNumber = function () {\r\n    // maxNumber = ((document.getElementById(\"maxNumber\") as HTMLInputElement).value) as unknown as number\r\n    if ((document.getElementById(\"maxNumber\").value) === \"\") {\r\n        alert(\"Maximum numbet must be set!\");\r\n    }\r\n    else {\r\n        maxNumber = (document.getElementById(\"maxNumber\").value);\r\n        console.log(\" max  \" + maxNumber);\r\n        console.log(\" min  \" + minNumber);\r\n        if (minNumber > maxNumber) {\r\n            alert(\"Minimum number can't be bigger than maximum number!\");\r\n        }\r\n        else {\r\n            maxNumberInput.style.fontSize = '30px';\r\n            maxNumberInput.disabled = true;\r\n            isMaxReady = true;\r\n            maxButton.disabled = true;\r\n            if (isMinReady === true && isMaxReady === true) {\r\n                document.getElementById(\"isReady\").innerHTML = \"Random number from \" + minNumber + \" to \" + maxNumber + \" has been generated!\";\r\n                random = RandomNumber(minNumber, maxNumber);\r\n                console.log(random);\r\n                guessButton.disabled = false;\r\n            }\r\n        }\r\n    }\r\n};\r\nvar checkIfClose = function () {\r\n    inputField = (document.getElementById(\"guessingField\").value);\r\n    console.log(inputField);\r\n    tries++;\r\n    if (inputField > random) {\r\n        document.getElementById(\"howClose\").innerHTML = \"Number is too big!\";\r\n        document.getElementById(\"howClose\").style.display = \"flex\";\r\n        document.getElementById(\"numberOfTries\").innerHTML = \"Number of tries : \" + tries;\r\n        console.log(\"too big\");\r\n    }\r\n    if (inputField < random) {\r\n        document.getElementById(\"howClose\").innerHTML = \"Number is too small!\";\r\n        document.getElementById(\"howClose\").style.display = \"flex\";\r\n        document.getElementById(\"numberOfTries\").innerHTML = \"Number of tries : \" + tries;\r\n        console.log(\"too small\");\r\n    }\r\n    if (inputField == random) {\r\n        document.getElementById(\"howClose\").innerHTML = \"Congratulations! Your generated number was \" + random;\r\n        document.getElementById(\"howClose\").style.display = \"flex\";\r\n        document.getElementById(\"numberOfTries\").innerHTML = \"Number of tries : \" + tries;\r\n        guessButton.disabled = true;\r\n        document.getElementById(\"numberOfTries\").style.backgroundColor = \"chartreuse\";\r\n        document.getElementById(\"numberOfTries\").style.backgroundColor = \"chartreuse\";\r\n        console.log(\"win\");\r\n    }\r\n};\r\nvar resetGuessing = function () {\r\n    tries = 0;\r\n    document.getElementById(\"numberOfTries\").style.backgroundColor = \"white\";\r\n    document.getElementById(\"numberOfTries\").innerHTML = \"\";\r\n    document.getElementById(\"howClose\").style.display = \"none\";\r\n    random = 0;\r\n    inputField = 0;\r\n    minNumber = 0;\r\n    maxNumber = 0;\r\n    isMaxReady = false;\r\n    isMinReady = false;\r\n    (document.getElementById(\"maxNumber\").value) === \"2\";\r\n    (document.getElementById(\"minNumber\").value) === \"asdasdasdasd\";\r\n    guessButton.disabled = true;\r\n    maxButton.disabled = true;\r\n    minButton.disabled = false;\r\n    maxNumberInput.disabled = true;\r\n    minNumberInput.disabled = false;\r\n    document.getElementById(\"isReady\").innerHTML = \"\";\r\n    console.log(isMaxReady);\r\n    console.log(isMinReady);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/signs.ts":
/*!**********************!*\
  !*** ./src/signs.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.Sign = void 0;\r\nvar Sign;\r\n(function (Sign) {\r\n    Sign[\"X\"] = \"X\";\r\n    Sign[\"O\"] = \"O\";\r\n})(Sign = exports.Sign || (exports.Sign = {}));\r\n\n\n//# sourceURL=webpack:///./src/signs.ts?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;