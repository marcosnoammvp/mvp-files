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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\n  constructor(model, view) {\n    this.model = model;\n    this.view = view;\n    this.view.bindRemoveToper();\n  }\n\n}\n\n//# sourceURL=webpack://toper-mvp/./src/Controller.js?");

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Model\": () => (/* binding */ Model),\n/* harmony export */   \"createAsyncModel\": () => (/* binding */ createAsyncModel)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/**\r\n * @typedef ModelData\r\n * @property {string} brand - an UUID.\r\n * @property {object} configs - configs for UI.\r\n */\n\n/**\r\n * Manages the data of an application.\r\n * @class\r\n */\n\nclass Model {\n  /**\r\n   * @typedef ModelData\r\n   * @property {string} brand - an UUID.\r\n   * @property {object} configs - configs for UI.\r\n   */\n\n  /**\r\n   * @param {string} brand - an UUID.\r\n   */\n  constructor() {\n    var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"no-brand\";\n    this.brand = brand;\n  }\n  /**\r\n   * @returns {ModelData} data required for UI.\r\n   */\n\n\n  getModelData() {\n    var data = {\n      brand: this.brand,\n      configs: this.configs\n    };\n    return data;\n  }\n  /**\r\n   * @desc Initialize the model fetching data from server.\r\n   */\n\n\n  initialize() {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      try {\n        var configs = yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getConfigsMock)(true, 250);\n        _this.configs = configs;\n      } catch (error) {\n        _this.brand = \"no-brand\";\n      }\n    })();\n  }\n\n}\n/**\r\n * @param {string} brand - an UUID.\r\n * @desc API for creting model fetching data from server\r\n */\n\nfunction createAsyncModel(_x) {\n  return _createAsyncModel.apply(this, arguments);\n}\n\nfunction _createAsyncModel() {\n  _createAsyncModel = _asyncToGenerator(function* (brand) {\n    var model = new Model(brand);\n    yield model.initialize();\n    return model;\n  });\n  return _createAsyncModel.apply(this, arguments);\n}\n\n//# sourceURL=webpack://toper-mvp/./src/Model.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeButtonStrategies\": () => (/* binding */ closeButtonStrategies),\n/* harmony export */   \"View\": () => (/* binding */ View),\n/* harmony export */   \"HtmlElement\": () => (/* binding */ HtmlElement)\n/* harmony export */ });\nvar {\n  css\n} = __webpack_require__(/*! ./styles */ \"./src/styles.js\");\n\nvar closeButtonStrategies = new Map([[\"top-right\", function (button) {\n  button.style.top = 0;\n  button.style.right = 0;\n}], [\"top-left\", function (button) {\n  button.style.top = 0;\n  button.style.left = 0;\n}], [\"bottom-rigth\", function (button) {\n  button.style.bottom = 0;\n  button.style.rigth = 0;\n}], [\"bottom-left\", function (button) {\n  button.style.bottom = 0;\n  button.style.left = 0;\n}]]); // div #topperRoot\n// -- div #topperIframeContainer\n// ---- button #topperCloseButton\n// ---- iframe #topperIframe\n// data = {\n//   component: \"Cairo\",\n//   params: null,\n//   ui: {\n//     closeButton: {\n//       strategy: \"top-left\",\n//       color: \"white\",\n//     },\n//   },\n// };\n\nclass View {\n  constructor(data) {\n    var {\n      brand,\n      configs\n    } = data;\n    var {\n      component,\n      ui\n    } = configs;\n    var {\n      closeButton\n    } = ui;\n    this.createIframe(component, brand);\n    this.createCloseButton(closeButton);\n    this.createIframeContainer();\n    this.createStyle(css);\n    this.createRoot();\n    var htmlRef = this.getElementBySelector(\"html\");\n    this.insertAsFirstChild(htmlRef, this.cssTag);\n    this.insertAsFirstChild(htmlRef, this.root);\n  }\n\n  bindRemoveToper() {\n    this.closeButton.addEventListener(\"click\", event => {\n      this.root.remove();\n    });\n  }\n\n  createElement(tag) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var {\n      styles,\n      attributes\n    } = options;\n    var element = new HtmlElement(tag).whitAttributes(attributes).whitStyles(styles).getElement();\n    return element;\n  }\n\n  getElementBySelector(selector) {\n    var element = document.querySelector(selector);\n    return element;\n  }\n\n  insertAsFirstChild(father, child) {\n    father.insertBefore(child, father.firstChild);\n  }\n\n  createRoot() {\n    this.root = this.createElement(\"div\", {\n      attributes: {\n        id: \"topperRoot\"\n      }\n    });\n    this.root.appendChild(this.iframeContainer);\n  }\n\n  createIframeContainer() {\n    this.iframeContainer = this.createElement(\"div\", {\n      attributes: {\n        id: \"topperIframeContainer\"\n      }\n    });\n    this.iframeContainer.appendChild(this.closeButton);\n    this.iframeContainer.appendChild(this.iframe);\n  }\n\n  createIframe(component, brand) {\n    this.iframe = this.createElement(\"iframe\", {\n      attributes: {\n        id: \"topperIframe\",\n        src: \"https://mvp-pages.vercel.app/\".concat(component, \"/\").concat(brand)\n      }\n    });\n  }\n\n  createCloseButton(closeButton) {\n    var defaultStrategy = \"right-left\";\n    var {\n      strategy,\n      color\n    } = closeButton;\n    this.closeButton = this.createElement(\"button\", {\n      attributes: {\n        id: \"topperCloseButton\"\n      },\n      styles: {\n        color\n      }\n    });\n    closeButtonStrategies.get(strategy || defaultStrategy)(this.closeButton);\n    this.closeButton.innerHTML = \"X\";\n  }\n\n  createStyle(css) {\n    this.cssTag = this.createElement(\"style\");\n    this.cssTag.innerHTML = css;\n  }\n\n}\nclass HtmlElement {\n  constructor(tag) {\n    this.element = document.createElement(tag);\n  }\n\n  whitStyles() {\n    var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var styleTupples = Object.entries(styles);\n    styleTupples.forEach(tupple => {\n      this.element.style.setProperty(tupple[0], tupple[1], \"important\");\n    });\n    return this;\n  }\n\n  whitAttributes() {\n    var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var attrTuples = Object.entries(attributes) || [];\n\n    for (var i = 0; i < attrTuples.length; i++) {\n      this.element.setAttribute(attrTuples[i][0], attrTuples[i][1]);\n    }\n\n    return this;\n  }\n\n  getElement() {\n    return this.element;\n  }\n\n}\n\n//# sourceURL=webpack://toper-mvp/./src/View.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initTopper\": () => (/* binding */ initTopper)\n/* harmony export */ });\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ \"./src/Model.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction initTopper() {\n  return _initTopper.apply(this, arguments);\n}\n\nfunction _initTopper() {\n  _initTopper = _asyncToGenerator(function* () {\n    var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"no-brand\";\n    var model = yield (0,_Model__WEBPACK_IMPORTED_MODULE_0__.createAsyncModel)(brand);\n\n    if (model.brand !== \"no-brand\") {\n      var view = new _View__WEBPACK_IMPORTED_MODULE_1__.View(model.getModelData());\n      var app = new _Controller__WEBPACK_IMPORTED_MODULE_2__.Controller(model, view);\n    }\n  });\n  return _initTopper.apply(this, arguments);\n}\n\n//# sourceURL=webpack://toper-mvp/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nwindow[\"topper\"] = _app__WEBPACK_IMPORTED_MODULE_0__.initTopper;\n\n//# sourceURL=webpack://toper-mvp/./src/index.js?");

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/***/ ((module) => {

eval("var css = \"\\n      #topperRoot {\\n        all: initial; /* blocking inheritance for all properties */\\n      }\\n      #topperRoot * {\\n        all: unset; /* allowing inheritance within #mydiv */\\n      }\\n      #topperRoot {\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        height: 100%;\\n        width: 100%;\\n        background: rgba(0, 0, 0, 0.5);\\n        position: fixed;\\n        z-index: 999;\\n      }\\n      #topperIframeContainer {\\n        width: 640px;\\n        height: 480px;\\n        position: relative;\\n      }\\n      #topperIframe {\\n        width: 100%;\\n        height: 100%;\\n      }\\n\\n      #topperCloseButton {\\n        color: white !important;\\n        position: absolute;\\n        margin: 8px;\\n      }\\n\\n      button#topperCloseButton {\\n        font-family: inherit;\\n        font-size: 100%;\\n        padding: 0;\\n        box-shadow: none;\\n      }\\n\\n      @media (max-width: 499px) {\\n        #topperIframeContainer {\\n          width: 385px;\\n          height: 480px;\\n        }\\n      }\\n      @media (min-width: 500px) and (max-width: 1000px) {\\n        #topperIframeContainer {\\n          width: 580px;\\n          height: 480px;\\n        }\\n      }\\n      @media (min-width: 1000px) {\\n        #topperIframeContainer {\\n          width: 640px;\\n          height: 480px;\\n        }\\n      }\";\nmodule.exports = {\n  css\n};\n\n//# sourceURL=webpack://toper-mvp/./src/styles.js?");

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