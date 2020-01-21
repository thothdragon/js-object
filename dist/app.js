/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_shared_models_city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/shared/models/city */ \"./src/app/shared/models/city.js\");\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app.scss?");

/***/ }),

/***/ "./src/app/shared/models/city.js":
/*!***************************************!*\
  !*** ./src/app/shared/models/city.js ***!
  \***************************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"City\", function() { return City; });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/app/shared/models/weather.js\");\n/* harmony import */ var _pollution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollution */ \"./src/app/shared/models/pollution.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar City = function City() {\n  _classCallCheck(this, City);\n\n  this.name = null;\n  this.dayTime = null;\n  this.weather = new _weather__WEBPACK_IMPORTED_MODULE_0__[\"Weather\"]();\n  this.pollution = new _pollution__WEBPACK_IMPORTED_MODULE_1__[\"Pollution\"]();\n};\n\n//# sourceURL=webpack:///./src/app/shared/models/city.js?");

/***/ }),

/***/ "./src/app/shared/models/pollution.js":
/*!********************************************!*\
  !*** ./src/app/shared/models/pollution.js ***!
  \********************************************/
/*! exports provided: Pollution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pollution\", function() { return Pollution; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Pollution = function Pollution() {\n  _classCallCheck(this, Pollution);\n\n  this.airQuality = null;\n  this.fineParticle = null;\n  this.ozone = null;\n};\n\n//# sourceURL=webpack:///./src/app/shared/models/pollution.js?");

/***/ }),

/***/ "./src/app/shared/models/temperature.js":
/*!**********************************************!*\
  !*** ./src/app/shared/models/temperature.js ***!
  \**********************************************/
/*! exports provided: Temperature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Temperature\", function() { return Temperature; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Temperature = function Temperature() {\n  _classCallCheck(this, Temperature);\n\n  this.actual = null;\n  this.min = null;\n  this.max = null;\n};\n\n//# sourceURL=webpack:///./src/app/shared/models/temperature.js?");

/***/ }),

/***/ "./src/app/shared/models/weather.js":
/*!******************************************!*\
  !*** ./src/app/shared/models/weather.js ***!
  \******************************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Weather\", function() { return Weather; });\n/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature */ \"./src/app/shared/models/temperature.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar Weather = function Weather() {\n  _classCallCheck(this, Weather);\n\n  this.description = null;\n  this.humidity = null;\n  this.wind = null;\n  this.temperature = new _temperature__WEBPACK_IMPORTED_MODULE_0__[\"Temperature\"]();\n};\n\n//# sourceURL=webpack:///./src/app/shared/models/weather.js?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/app.js */\"./src/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/app.scss */\"./src/app.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js_./src/app.scss?");

/***/ })

/******/ });