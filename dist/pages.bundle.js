"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_odin"] = self["webpackChunkrestaurant_odin"] || []).push([["pages"],{

/***/ "./src/Footer.js":
/*!***********************!*\
  !*** ./src/Footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent) => ({\r\n    type: 'footer',\r\n    text: 'I\\'m a footer lol ^-^',\r\n    parent\r\n}));\n\n//# sourceURL=webpack://restaurant-odin/./src/Footer.js?");

/***/ }),

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction NavLinks(...args) {\r\n    return args.map((text) => ({\r\n        type: 'li',\r\n        children: [{\r\n            type: 'a',\r\n            text,\r\n            attr: {\r\n                href: '/'\r\n            }\r\n        }]\r\n    }))\r\n}\r\n\r\nfunction NavList() {\r\n    return {\r\n        type: 'ul',\r\n        children: NavLinks('Home', 'Menu', 'Contact')\r\n    }\r\n}\r\n\r\nfunction Nav() {\r\n    return {\r\n        type: 'nav',\r\n        children: [NavList()]\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent) => ({\r\n    type: 'header',\r\n    parent,\r\n    children: [Nav()]\r\n}));\n\n//# sourceURL=webpack://restaurant-odin/./src/NavBar.js?");

/***/ }),

/***/ "./src/Pages.js":
/*!**********************!*\
  !*** ./src/Pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/Footer.js\");\n/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeElement */ \"./src/makeElement.js\");\n\r\n\r\n\r\nconst mainContainer = document.getElementById('content');\r\n\r\nfunction cleanPage() {\r\n    while(mainContainer.firstChild) {\r\n        mainContainer.firstChild.remove();\r\n    }\r\n}\r\n\r\nfunction renderPage(Page) {\r\n    cleanPage();\r\n    (0,_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_NavBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    (0,_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Page)\r\n    ;(0,_makeElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);\n\n//# sourceURL=webpack://restaurant-odin/./src/Pages.js?");

/***/ }),

/***/ "./src/makeElement.js":
/*!****************************!*\
  !*** ./src/makeElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setPropsFromArr(element, cb) {\r\n  return ([prop, val]) => {\r\n    if (typeof val === 'function'){\r\n      val = val.bind(element);\r\n    } \r\n\r\n    if(typeof cb === 'string'){\r\n      element[cb].call(element, prop, val);\r\n    } else {\r\n      cb(element, prop, val);\r\n    }\r\n  }\r\n}\r\n\r\nfunction makeElement({\r\n  type = 'p',\r\n  parent = null,\r\n  text = '',\r\n  properties = {},\r\n  attr = {},\r\n  dataset = {},\r\n  listeners = {},\r\n  children = []\r\n}) {\r\n  const newElement = document.createElement(type);\r\n  const newElementSetProps = setPropsFromArr.bind(newElement, newElement);\r\n  \r\n  Object.entries(dataset)\r\n    .forEach(newElementSetProps((elt, prop, val) => elt.dataset[prop] = val));\r\n  Object.entries(attr)\r\n    .forEach(newElementSetProps('setAttribute'));\r\n  Object.entries(listeners)\r\n    .forEach(newElementSetProps('addEventListener'));\r\n  Object.entries(properties)\r\n    .forEach(newElementSetProps((elt, prop, val) => elt[prop] = val))\r\n\r\n  if(children.length) {\r\n    if(children[0] instanceof HTMLElement) {\r\n      newElement.append(...children);\r\n    }else {\r\n      newElement.append(...children.map(makeElement));\r\n    }\r\n  }\r\n\r\n  newElement.append(document.createTextNode(text));\r\n\r\n  if (parent) {\r\n    parent.append(newElement);\r\n  }\r\n\r\n  return newElement;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeElement);\n\n//# sourceURL=webpack://restaurant-odin/./src/makeElement.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Pages.js"));
/******/ }
]);