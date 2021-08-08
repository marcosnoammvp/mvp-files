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

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": () => (/* binding */ Controller)\n/* harmony export */ });\nfunction Controller(model, view) {\n  this.model = model;\n  this.view = view;\n  this.view.bindRemoveToper();\n}\n\n//# sourceURL=webpack://toper-mvp/./src/Controller.js?");

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Model\": () => (/* binding */ Model),\n/* harmony export */   \"createAsyncModel\": () => (/* binding */ createAsyncModel)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction Model() {\n  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"no-brand\";\n  this.brand = brand;\n}\n\nModel.prototype.getModelData = function () {\n  var data = {\n    brand: this.brand,\n    configs: this.configs\n  };\n  return data;\n};\n\nModel.prototype.initialize = /*#__PURE__*/_asyncToGenerator(function* () {\n  try {\n    var configs = yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getConfigsMock)(true, 250);\n    this.configs = configs;\n  } catch (error) {\n    this.brand = \"no-brand\";\n  }\n});\nfunction createAsyncModel(_x) {\n  return _createAsyncModel.apply(this, arguments);\n}\n\nfunction _createAsyncModel() {\n  _createAsyncModel = _asyncToGenerator(function* (brand) {\n    var model = new Model(brand);\n    yield model.initialize();\n    return model;\n  });\n  return _createAsyncModel.apply(this, arguments);\n}\n\n//# sourceURL=webpack://toper-mvp/./src/Model.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeButtonStrategies\": () => (/* binding */ closeButtonStrategies),\n/* harmony export */   \"View\": () => (/* binding */ View)\n/* harmony export */ });\nvar {\n  cssDeclarationAsString\n} = __webpack_require__(/*! ./libs */ \"./src/libs/index.js\");\n\nvar {\n  createHTMLElement\n} = __webpack_require__(/*! ./libs */ \"./src/libs/index.js\");\n\nvar closeButtonStrategies = new Map([[\"top-right\", function (button) {\n  button.style.top = 0;\n  button.style.right = 0;\n}], [\"top-left\", function (button) {\n  button.style.top = 0;\n  button.style.left = 0;\n}], [\"bottom-rigth\", function (button) {\n  button.style.bottom = 0;\n  button.style.rigth = 0;\n}], [\"bottom-left\", function (button) {\n  button.style.bottom = 0;\n  button.style.left = 0;\n}]]);\nfunction View(data) {\n  var {\n    brand,\n    configs\n  } = data;\n  var {\n    component,\n    ui\n  } = configs;\n  var {\n    closeButton\n  } = ui;\n  this.iframe = this.createIframe(component, brand);\n  this.closeButton = this.createCloseButton(closeButton);\n  this.iframeContainer = this.createIframeContainer(this.closeButton, this.iframe);\n  this.root = this.createRoot(this.iframeContainer);\n  this.styleTag = this.createStyle(cssString);\n  var htmlRef = this.getElementBySelector(\"html\");\n  this.insertAsFirstChild(htmlRef, this.styleTag);\n  this.insertAsFirstChild(htmlRef, this.root);\n}\n\nView.prototype.createCloseButton = function (closeButton) {\n  var defaultStrategy = \"right-left\";\n  var {\n    strategy,\n    color\n  } = closeButton;\n  var element = createHTMLElement(\"button\", {\n    attributes: {\n      id: \"topperCloseButton\"\n    },\n    styles: {\n      color\n    }\n  });\n  closeButtonStrategies.get(strategy || defaultStrategy)(element);\n  element.innerHTML = \"X\";\n  return element;\n};\n\nView.prototype.createStyle = function (cssDeclarationAsString) {\n  var element = createHTMLElement(\"style\");\n  element.innerHTML = cssDeclarationAsString;\n  return element;\n};\n\nView.prototype.getElementBySelector = function (selector) {\n  var element = document.querySelector(selector);\n  return element;\n};\n\nView.prototype.createIframeContainer = function (closeButton, iframe) {\n  var element = createHTMLElement(\"div\", {\n    attributes: {\n      id: \"topperIframeContainer\"\n    }\n  });\n  element.appendChild(closeButton);\n  element.appendChild(iframe);\n  return element;\n};\n\nView.prototype.createIframe = function (component, brand) {\n  var element = createHTMLElement(\"iframe\", {\n    attributes: {\n      id: \"topperIframe\",\n      src: \"https://mvp-pages.vercel.app/\".concat(component, \"/\").concat(brand)\n    }\n  });\n  return element;\n};\n\nView.prototype.createRoot = function (iframeContainer) {\n  var element = createHTMLElement(\"div\", {\n    attributes: {\n      id: \"topperRoot\"\n    }\n  });\n  element.appendChild(iframeContainer);\n  return element;\n};\n\nView.prototype.insertAsFirstChild = function (father, child) {\n  father.insertBefore(child, father.firstChild);\n};\n\nView.prototype.bindRemoveToper = function () {\n  this.closeButton.addEventListener(\"click\", e => {\n    this.root.remove();\n  });\n}; // div #topperRoot\n// -- div #topperIframeContainer\n// ---- button #topperCloseButton\n// ---- iframe #topperIframe\n// data = {\n//   component: \"Cairo\",\n//   params: null,\n//   ui: {\n//     closeButton: {\n//       strategy: \"top-left\",\n//       color: \"white\",\n//     },\n//   },\n// };\n\n//# sourceURL=webpack://toper-mvp/./src/View.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ \"./src/Model.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction App() {\n  return _App.apply(this, arguments);\n}\n\nfunction _App() {\n  _App = _asyncToGenerator(function* () {\n    var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"no-brand\";\n    var model = yield (0,_Model__WEBPACK_IMPORTED_MODULE_0__.createAsyncModel)(brand);\n\n    if (model.brand !== \"no-brand\") {\n      var view = new _View__WEBPACK_IMPORTED_MODULE_1__.View(model.getModelData());\n      var app = new _Controller__WEBPACK_IMPORTED_MODULE_2__.Controller(model, view);\n    }\n  });\n  return _App.apply(this, arguments);\n}\n\n//# sourceURL=webpack://toper-mvp/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nwindow[\"topper\"] = _app__WEBPACK_IMPORTED_MODULE_0__.App;\n\n//# sourceURL=webpack://toper-mvp/./src/index.js?");

/***/ }),

/***/ "./src/libs/HTMLElement/HTMLElement.js":
/*!*********************************************!*\
  !*** ./src/libs/HTMLElement/HTMLElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HTMLElement\": () => (/* binding */ HTMLElement),\n/* harmony export */   \"createHTMLElement\": () => (/* binding */ createHTMLElement)\n/* harmony export */ });\nfunction HTMLElement(tag) {\n  this.element = document.createElement(tag);\n}\n\nHTMLElement.prototype.whitStyles = function () {\n  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var styleTupples = Object.entries(styles);\n  styleTupples.forEach(tupple => {\n    this.element.style.setProperty(tupple[0], tupple[1], \"important\");\n  });\n  return this;\n};\n\nHTMLElement.prototype.whitAttributes = function () {\n  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var attrTuples = Object.entries(attributes) || [];\n\n  for (var i = 0; i < attrTuples.length; i++) {\n    this.element.setAttribute(attrTuples[i][0], attrTuples[i][1]);\n  }\n\n  return this;\n};\n\nHTMLElement.prototype.getElement = function () {\n  return this.element;\n};\n\nfunction createHTMLElement(tag) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    styles: {},\n    attributes: {}\n  };\n  var {\n    styles,\n    attributes\n  } = options;\n  var element = new HTMLElement(tag).whitAttributes(attributes).whitStyles(styles).getElement();\n  return element;\n}\n\n//# sourceURL=webpack://toper-mvp/./src/libs/HTMLElement/HTMLElement.js?");

/***/ }),

/***/ "./src/libs/HTMLElement/index.js":
/*!***************************************!*\
  !*** ./src/libs/HTMLElement/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HTMLElement\": () => (/* reexport safe */ _HTMLElement__WEBPACK_IMPORTED_MODULE_0__.HTMLElement),\n/* harmony export */   \"createHTMLElement\": () => (/* reexport safe */ _HTMLElement__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)\n/* harmony export */ });\n/* harmony import */ var _HTMLElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLElement */ \"./src/libs/HTMLElement/HTMLElement.js\");\n\n\n\n//# sourceURL=webpack://toper-mvp/./src/libs/HTMLElement/index.js?");

/***/ }),

/***/ "./src/libs/appStyles/appStyles.js":
/*!*****************************************!*\
  !*** ./src/libs/appStyles/appStyles.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var {\n  mediaQueries\n} = __webpack_require__(/*! ./mediaQueries.js */ \"./src/libs/appStyles/mediaQueries.js\");\n\nvar cssDeclarationAsString = \"\\n      #topperRoot {\\n        all: initial; /* blocking inheritance for all properties */\\n      }\\n      #topperRoot * {\\n        all: unset; /* allowing inheritance within #mydiv */\\n      }\\n      #topperRoot {\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        height: 100%;\\n        width: 100%;\\n        background: rgba(0, 0, 0, 0.5);\\n        position: fixed;\\n        z-index: 999;\\n        font-size: 16px;\\n      }\\n      #topperIframeContainer {\\n        position: relative;\\n      }\\n      #topperIframe {\\n        width: 100%;\\n        height: 100%;\\n      }\\n\\n      #topperCloseButton {\\n        color: white;\\n        position: absolute;\\n        margin: 8px;\\n        cursor: pointer;\\n        transition: font-size 1s;\\n      }\\n\\n      #topperCloseButton:hover{\\n        font-weight: normal;\\n        font-size: 1.1rem;\\n      }\\n      @media \".concat(mediaQueries.s, \" {\\n        #topperIframeContainer {\\n          width: 385px;\\n          height: 480px;\\n        }\\n      }\\n      @media \").concat(mediaQueries.m, \"  {\\n        #topperIframeContainer  {\\n          width: 580px;\\n          height: 480px;\\n        }\\n      }\\n      @media \").concat(mediaQueries.l, \" {\\n        #topperIframeContainer {\\n          width: 640px;\\n          height: 480px;\\n        }\\n      }\");\nmodule.exports = {\n  cssDeclarationAsString\n};\n\n//# sourceURL=webpack://toper-mvp/./src/libs/appStyles/appStyles.js?");

/***/ }),

/***/ "./src/libs/appStyles/index.js":
/*!*************************************!*\
  !*** ./src/libs/appStyles/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssDeclarationAsString\": () => (/* reexport safe */ _appStyles__WEBPACK_IMPORTED_MODULE_0__.cssDeclarationAsString)\n/* harmony export */ });\n/* harmony import */ var _appStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appStyles */ \"./src/libs/appStyles/appStyles.js\");\n/* harmony import */ var _appStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_appStyles__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://toper-mvp/./src/libs/appStyles/index.js?");

/***/ }),

/***/ "./src/libs/appStyles/mediaQueries.js":
/*!********************************************!*\
  !*** ./src/libs/appStyles/mediaQueries.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mediaQueries\": () => (/* binding */ mediaQueries)\n/* harmony export */ });\nvar mediaQueries = {\n  s: '(max-width: 499px)',\n  m: '(min-width: 500px) and (max-width: 1000px)',\n  l: '(min-width: 1000px)'\n};\n\n//# sourceURL=webpack://toper-mvp/./src/libs/appStyles/mediaQueries.js?");

/***/ }),

/***/ "./src/libs/index.js":
/*!***************************!*\
  !*** ./src/libs/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HTMLElement\": () => (/* reexport safe */ _HTMLElement___WEBPACK_IMPORTED_MODULE_0__.HTMLElement),\n/* harmony export */   \"createHTMLElement\": () => (/* reexport safe */ _HTMLElement___WEBPACK_IMPORTED_MODULE_0__.createHTMLElement),\n/* harmony export */   \"cssDeclarationAsString\": () => (/* reexport safe */ _appStyles__WEBPACK_IMPORTED_MODULE_1__.cssDeclarationAsString)\n/* harmony export */ });\n/* harmony import */ var _HTMLElement___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLElement/ */ \"./src/libs/HTMLElement/index.js\");\n/* harmony import */ var _appStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appStyles */ \"./src/libs/appStyles/index.js\");\n\n\n\n\n//# sourceURL=webpack://toper-mvp/./src/libs/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getConfigsMock\": () => (/* binding */ getConfigsMock)\n/* harmony export */ });\n/* Mock for http request */\nfunction getConfigsMock() {\n  var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n    component: \"Cairo\",\n    params: null,\n    ui: {\n      closeButton: {\n        strategy: \"top-left\",\n        color: \"white\"\n      }\n    }\n  };\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (success) {\n        resolve(data);\n      } else {\n        reject({\n          message: \"Error\"\n        });\n      }\n    }, timeout);\n  });\n}\n\n//# sourceURL=webpack://toper-mvp/./src/utils.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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