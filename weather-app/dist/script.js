/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\n\nlet units = \"metric\"; \nlet symbol = \"°C\";\n\n(0,_data__WEBPACK_IMPORTED_MODULE_1__.GetData)(\"Prague\",units).then(data => {\n    _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.status_div.textContent = data.state;\n    _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.city_div.textContent = data.city;\n    _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.temp_div.textContent = data.temp + symbol;\n    _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.feels_like_div.textContent = data.feels_like + symbol;\n})\n\n//Units\n_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.input_units_imperial.addEventListener(\"change\",()=> {\n    symbol =  \"°F\";\n    units = \"imperial\";\n    _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.input_units_metric.checked = false;\n})\n\n_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.input_units_metric.addEventListener(\"change\",()=> {\n    symbol =  \"°C\";\n    units = \"metric\";\n    _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.input_units_imperial.checked = false;\n})\n\n\n//Submit\n_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.input_button.addEventListener(\"click\",()=> {\n\n    //Data Fetch\n    ;(0,_data__WEBPACK_IMPORTED_MODULE_1__.GetData)(_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.input_field.value,units)\n        .then(data => {\n            _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.status_div.textContent = data.state;\n            _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.city_div.textContent = data.city;\n            _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.temp_div.textContent = data.temp + symbol;\n            _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.feels_like_div.textContent = data.feels_like + symbol;\n        }).catch(err => {\n            console.log(err);\n            console.log(\"city not found\");\n        })\n\n    //Clearing \n    _elements__WEBPACK_IMPORTED_MODULE_0__.Elements.input_field.value = \"\";\n\n})\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetData\": () => (/* binding */ GetData)\n/* harmony export */ });\n\nconst link = `https://api.openweathermap.org/data/2.5/weather?appid=f853431833e546c01617d6e726787121`\n\nasync function GetData(city,units) {\n    let data = await fetch(`${link}&units=${units}&q=${city}`);\n    let parsed = await data.json();\n    \n    return {\n        city: parsed.name,\n        temp: Math.round(parsed.main.temp),\n        feels_like: Math.round(parsed.main.feels_like),\n        state: parsed.weather[0].main,\n    }\n}\n\n//# sourceURL=webpack://weather-app/./src/data.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Elements\": () => (/* binding */ Elements)\n/* harmony export */ });\n\nconst Elements = {\n    //Input\n    input_field: document.querySelector(\"input.city_pick_input\"),\n    input_button: document.querySelector(\"button.city_pick_button\"),\n    input_units_metric: document.querySelector(\"input#metric\"),\n    input_units_imperial: document.querySelector(\"input#imperial\"),\n    status_div: document.querySelector(\"div.info_status\"),\n    city_div: document.querySelector(\"h1.info_city\"),\n    temp_div: document.querySelector(\"h2.info_temp\"),\n    feels_like_div: document.querySelector(\"h2.info_feels\"),\n};\n\n//# sourceURL=webpack://weather-app/./src/elements.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;