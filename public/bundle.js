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

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\n  constructor(model, view) {\n    this.model = model;\n    this.view = view;\n    this.view.bindRemoveToper();\n  }\n\n}\n\n//# sourceURL=webpack://toper-mvp/./src/Controller.js?");

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Model\": () => (/* binding */ Model),\n/* harmony export */   \"createAsyncModel\": () => (/* binding */ createAsyncModel)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nclass Model {\n  constructor(brand) {\n    this.brand = brand;\n  }\n\n  getConfigs() {\n    var data = {\n      brand: this.brand,\n      configs: this.configs\n    };\n    return data;\n  }\n  /*\r\n  This function should fetch all the customer data\r\n  */\n\n\n  initialize() {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      _this.configs = yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getConfigsMock)(true, 250, {\n        component: \"cairo\",\n        params: null,\n        ui: {\n          closeButton: {\n            strategy: \"top-left\",\n            color: \"white\"\n          }\n        }\n      });\n    })();\n  }\n\n}\nfunction createAsyncModel(_x) {\n  return _createAsyncModel.apply(this, arguments);\n}\n\nfunction _createAsyncModel() {\n  _createAsyncModel = _asyncToGenerator(function* (customerId) {\n    var model = new Model(customerId);\n    yield model.initialize();\n    return model;\n  });\n  return _createAsyncModel.apply(this, arguments);\n}\n\n//# sourceURL=webpack://toper-mvp/./src/Model.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeButtonStrategies\": () => (/* binding */ closeButtonStrategies),\n/* harmony export */   \"View\": () => (/* binding */ View)\n/* harmony export */ });\nvar closeButtonStrategies = new Map([[\"top-right\", function (button) {\n  button.style.top = 0;\n  button.style.right = 0;\n}], [\"top-left\", function (button) {\n  button.style.top = 0;\n  button.style.left = 0;\n}], [\"bottom-rigth\", function (button) {\n  button.style.bottom = 0;\n  button.style.rigth = 0;\n}], [\"bottom-left\", function (button) {\n  button.style.bottom = 0;\n  button.style.left = 0;\n}]]);\nclass View {\n  constructor(data) {\n    this.root = this.getElement(\"#root\");\n    this.iframeContainer = this.createElement(\"div\");\n    this.setAttributes(this.iframeContainer, {\n      id: \"toperIframeContainer\"\n    });\n    this.iframe = this.createElement(\"iframe\");\n    this.setAttributes(this.iframe, {\n      id: \"toperIframe\",\n      src: \"http://localhost:3000/\".concat(data.configs.component, \"/\").concat(data.brand)\n    });\n    this.closeButton = this.createElement(\"button\", data.configs.ui.closeButton);\n    closeButtonStrategies.get(data.configs.ui.closeButton.strategy)(this.closeButton);\n    this.closeButton.innerHTML = \"X\";\n    this.setAttributes(this.closeButton, {\n      id: \"toperIframeButton\"\n    });\n    this.iframeContainer.appendChild(this.closeButton);\n    this.iframeContainer.appendChild(this.iframe);\n    this.root.appendChild(this.iframeContainer);\n  }\n\n  bindRemoveToper() {\n    this.closeButton.addEventListener(\"click\", event => {\n      console.log(\"button clicked\");\n      this.root.remove();\n    });\n  } // Create an element with an optional CSS class\n\n\n  createElement(tag, styles) {\n    var element = document.createElement(tag);\n\n    if (styles) {\n      var styleTupples = Object.entries(styles);\n      styleTupples.forEach(tupple => {\n        element.style.setProperty(tupple[0], tupple[1], \"important\");\n      });\n    }\n\n    return element;\n  } // Retrieve an element from the DOM\n\n\n  getElement(selector) {\n    var element = document.querySelector(selector);\n    return element;\n  }\n\n  setAttributes(element, attributes) {\n    var attrTuples = Object.entries(attributes);\n\n    for (var i = 0; i < attrTuples.length; i++) {\n      element.setAttribute(attrTuples[i][0], attrTuples[i][1]);\n    }\n  }\n\n}\n\n//# sourceURL=webpack://toper-mvp/./src/View.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAppRoot\": () => (/* binding */ createAppRoot),\n/* harmony export */   \"initTopper\": () => (/* binding */ initTopper)\n/* harmony export */ });\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ \"./src/Model.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction createAppRoot() {\n  var root = document.createElement(\"div\");\n  root.setAttribute(\"id\", \"root\");\n  var htmlRef = document.querySelector(\"html\");\n  htmlRef.insertBefore(root, htmlRef.firstChild);\n}\nfunction initTopper(_x) {\n  return _initTopper.apply(this, arguments);\n}\n\nfunction _initTopper() {\n  _initTopper = _asyncToGenerator(function* (brand) {\n    createAppRoot();\n    var model = yield (0,_Model__WEBPACK_IMPORTED_MODULE_0__.createAsyncModel)(brand);\n    var view = new _View__WEBPACK_IMPORTED_MODULE_1__.View(model.getConfigs());\n    var app = new _Controller__WEBPACK_IMPORTED_MODULE_2__.Controller(model, view);\n  });\n  return _initTopper.apply(this, arguments);\n}\n\n//# sourceURL=webpack://toper-mvp/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nwindow[\"topper\"] = _app__WEBPACK_IMPORTED_MODULE_0__.initTopper;\n\n//# sourceURL=webpack://toper-mvp/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getConfigsMock\": () => (/* binding */ getConfigsMock)\n/* harmony export */ });\n/* Mock for http request */\nfunction getConfigsMock(success, timeout, data) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (success) {\n        resolve(data);\n      } else {\n        reject({\n          message: \"Error\"\n        });\n      }\n    }, timeout);\n  });\n}\n\n//# sourceURL=webpack://toper-mvp/./src/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;