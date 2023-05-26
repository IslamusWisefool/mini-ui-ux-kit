/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/accordion/accordion.js":
/*!********************************************!*\
  !*** ./src/modules/accordion/accordion.js ***!
  \********************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var accordions = document.querySelectorAll(".accordion");
var _iterator = _createForOfIteratorHelper(accordions),
  _step;
try {
  var _loop = function _loop() {
    var accordion = _step.value;
    accordion.addEventListener("click", function () {
      return selectHandler(accordion);
    });
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
function selectHandler(accordionCurrent) {
  accordionTitle = accordionCurrent.querySelector("accordion__title");

  // Toggle menu
  switch (accordionCurrent.getAttribute("data-state")) {
    case "true":
      accordionCurrent.setAttribute("data-state", "false");
      break;
    case "false":
      accordionCurrent.setAttribute("data-state", "true");
      break;
  }
}

/***/ }),

/***/ "./src/modules/btn/btn.js":
/*!********************************!*\
  !*** ./src/modules/btn/btn.js ***!
  \********************************/
/***/ (() => {

// const btns = document.querySelectorAll(".btn[data-btn]");

// for (let btn of btns) {
//   btn.addEventListener("click", () => btnModalHandler(btn));
// }

// function btnModalHandler(btn) {
//    dataBtn =  btn.getAttribute('data-btn')
// }

// function btnModalHandler(btn) {
//   switch (btn.getAttribute("data-btn")) {
//     case "default":
//       modalWindow.setAttribute("data-state", "true");
//       break;
//     case "warning":
//       console.log("warning");
//       break;
//     case "succes":
//       console.log("succes");
//       break;
//     case "danger":
//       console.log("danger");
//       break;
//     case "info":
//       console.log("info");
//       break;
//   }f

/***/ }),

/***/ "./src/modules/modal/modal.js":
/*!************************************!*\
  !*** ./src/modules/modal/modal.js ***!
  \************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var modalContainer = document.querySelector(".modal");
var modalWindow = modalContainer.querySelector(".modal__window");
var modalCloseBtn = modalContainer.querySelector(".modal__window-close");
var modalWindowBtns = modalContainer.querySelectorAll(".btn");
var modalWindowText = modalContainer.querySelector(".modal__window-heading");
var modalOverlay = modalContainer.querySelector(".modal__window-overlay");
var btns = document.querySelectorAll(".btn[data-btn]");
dataBtn = "";
var _iterator = _createForOfIteratorHelper(btns),
  _step;
try {
  var _loop = function _loop() {
    var btn = _step.value;
    btn.addEventListener("click", function () {
      return btnModalHandler(btn);
    });
    console.log(btn);
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
function closeModalWindow() {
  modalContainer.setAttribute("data-state", "false");
}
modalOverlay.addEventListener("click", function () {
  closeModalWindow();
});
modalWindowBtns.forEach(function (btn) {
  return btn.addEventListener("click", function () {
    closeModalWindow();
  });
});
function btnModalHandler(btn) {
  console.log(btn);
  dataBtn = btn.getAttribute("data-btn");
  modalWindowText.innerHTML = "".concat(dataBtn.toUpperCase(), "!");
  modalContainer.setAttribute("data-state", "true");
  modalWindow.setAttribute("data-btn", dataBtn);
  modalWindowBtns.forEach(function (btn) {
    return btn.setAttribute("data-btn", dataBtn);
  });
}
modalCloseBtn.addEventListener("click", function () {
  closeModalWindow();
});

/***/ }),

/***/ "./src/modules/navbar/nav.js":
/*!***********************************!*\
  !*** ./src/modules/navbar/nav.js ***!
  \***********************************/
/***/ (() => {

var navMenu = document.querySelector(".nav__menu");
var burger = document.querySelector(".nav__burger");
burger.addEventListener("click", function () {
  return burgerHandler();
});
function burgerHandler() {
  console.log(burger.getAttribute("data-state"));
  switch (burger.getAttribute("data-state")) {
    case "true":
      burger.setAttribute("data-state", "false");
      navMenu.setAttribute("data-state", "false");
      break;
    case "false":
      burger.setAttribute("data-state", "true");
      navMenu.setAttribute("data-state", "true");
      break;
  }
}

/***/ }),

/***/ "./src/modules/scrollToTop/scrollToTop.js":
/*!************************************************!*\
  !*** ./src/modules/scrollToTop/scrollToTop.js ***!
  \************************************************/
/***/ (() => {

var arrow = document.querySelector(".scrollToTop");
arrow.onclick = function () {
  window.scrollTo(window.pageYOffset, 0);
  arrow.setAttribute("data-state", "false");
};
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    arrow.setAttribute("data-state", "true");
  } else {
    arrow.setAttribute("data-state", "false");
  }
});

/***/ }),

/***/ "./src/modules/themeHandler.js":
/*!*************************************!*\
  !*** ./src/modules/themeHandler.js ***!
  \*************************************/
/***/ (() => {

// Toggle theme
var toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click", function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var newTheme = currentTheme === "dark" ? "custom" : currentTheme === "custom" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat-v23-latin_cyrillic-regular.woff2 */ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat-v23-latin_cyrillic-regular.woff */ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/scrollToTop/arrowUp.svg */ "./src/modules/scrollToTop/arrowUp.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E */ "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n:root[data-theme=light] {\n  --bg-color: rgb(247, 247, 247);\n  --text-color: #09272a;\n  --a-color: #616161;\n  --btn-text-color: #fff;\n  --btn-bg-color: #7a231a;\n  --btn-bg-color_hover: #962b1f;\n  --accent: #260b08;\n}\n\n:root[data-theme=dark] {\n  --bg-color: #02030d;\n  --text-color: #d7dbf9;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #d1bc1f;\n  --btn-bg-color_hover: #c1ae1c;\n  --accent: #d1bc1f;\n}\n\n:root[data-theme=custom] {\n  --bg-color: #fff7f5;\n  --text-color: #0a0200;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #fb8974;\n  --btn-bg-color_hover: #e47c69;\n  --accent: #fb9e8d;\n}\n\n:root {\n  --box-shadow: 1px 10px 22px -20px var(--accent);\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--text-color);\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nh1 {\n  color: black;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\na:hover {\n  color: var(--a-color);\n}\na:target {\n  color: var(--a-color);\n}\n\n.container {\n  margin-bottom: 1rem;\n  padding: 1rem 0 1rem;\n  outline: 1px solid black;\n  text-align: center;\n}\n.container__heading {\n  margin-left: 1rem;\n}\n\n.modal[data-state=true] {\n  position: fixed;\n  display: flex;\n  z-index: 1000;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.modal[data-state=false] {\n  display: none;\n}\n.modal__window-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n}\n.modal__window {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  z-index: 1002;\n  max-width: 600px;\n  padding: 2rem;\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n.modal__window-heading {\n  color: var(--text-color);\n}\n.modal__window-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  color: var(--text-color);\n  font-size: 1.5rem;\n}\n.modal__window-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.scrollToTop {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid var(--accent);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: 12.5px 12.5px;\n}\n.scrollToTop[data-state=true] {\n  display: inline-block;\n}\n.scrollToTop[data-state=false] {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  justify-content: space-between;\n  background-color: var(--bg-color);\n  padding: 1rem 2rem;\n  box-shadow: 1px 10px 22px -20px var(--accent);\n  box-shadow: var(--box-shadow);\n}\n.nav__menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.nav__burger {\n  display: none;\n}\n.btn {\n  background-color: var(--btn-bg-color);\n  color: var(--btn-text-color);\n  text-transform: uppercase;\n  padding: 1em;\n  border: none;\n  border-radius: 0.4em;\n  transition: -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear;\n  transition: transform 0.2s linear, -webkit-transform 0.2s linear;\n}\n.btn:hover {\n  cursor: pointer;\n  background-color: var(--btn-bg-color_hover);\n  -webkit-transform: scale(1.03);\n          transform: scale(1.03);\n}\n.btn:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.btn:focus {\n  outline: 3px solid #4e89ff;\n}\n.btn[data-btn] {\n  border: 2px solid var(--btn-text-color);\n}\n.btn[data-btn=default] {\n  --btn-bg-color: #002727;\n  --btn-text-color: #8ce6e6;\n  --btn-bg-color_hover: #004242;\n}\n.btn[data-btn=warning] {\n  --btn-bg-color: #f4f1d8;\n  --btn-text-color: #d2c230;\n  --btn-bg-color_hover: #d2d0b9;\n}\n.btn[data-btn=succes] {\n  --btn-bg-color: #d1ded1;\n  --btn-text-color: #185c17;\n  --btn-bg-color_hover: #b9c8b9;\n}\n.btn[data-btn=danger] {\n  --btn-bg-color: #fff5f5;\n  --btn-text-color: #b21212;\n  --btn-bg-color_hover: #e4dada;\n}\n.btn[data-btn=info] {\n  --btn-bg-color: #d4dbea;\n  --btn-text-color: #284d97;\n  --btn-bg-color_hover: #c2c9d8;\n}\n\n.accordion {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  margin: 0 auto 1rem;\n  padding: 1rem;\n  max-width: 75ch;\n  text-align: left;\n  background-color: var(--bg-color);\n  box-shadow: 1px 10px 22px -20px var(--accent);\n  box-shadow: var(--box-shadow);\n}\n.accordion[data-state=false]::after {\n  font-size: 1.5rem;\n  font-weight: bold;\n  position: absolute;\n  content: \"˅\";\n  top: calc(50% - 0.7rem);\n  right: 1rem;\n  color: var(--accent);\n}\n.accordion[data-state=false] .accordion__body {\n  display: none;\n}\n.accordion[data-state=true]::after {\n  font-size: 1.5rem;\n  font-weight: bold;\n  position: absolute;\n  content: \"˄\";\n  top: 1rem;\n  right: 1rem;\n  color: var(--accent);\n}\n.accordion[data-state=true] .accordion__body {\n  display: block;\n}\n.accordion__body {\n  padding: 1rem 0;\n}\n\n.select {\n  margin: 0 auto;\n  display: block;\n  color: var(--text-color);\n  padding: 1em 2em;\n  max-width: 75ch;\n  border: 1px solid var(--text-color);\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);\n  border-radius: 0.5em;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--bg-color);\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat, repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  background-size: 0.65em auto, 100%;\n}\n.select:hover {\n  border-color: #888;\n}\n.select:focus {\n  outline: 3px solid #4e89ff;\n}\n.select__option {\n  color: var(--text-color);\n}\n@media (max-width: 600px){\n  .nav {\n    position: relative;\n    align-items: center;\n  }\n  .nav__menu[data-state=true] {\n    position: absolute;\n    top: 70%;\n    right: 0;\n    z-index: 50;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 1rem 2rem;\n    background-color: var(--bg-color);\n  }\n  .nav__menu[data-state=false] {\n    display: none;\n  }\n  .nav__burger {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    width: 50px;\n    height: 25px;\n  }\n  .nav__burger-line {\n    display: inline-block;\n    position: relative;\n    background-color: var(--accent);\n    width: 100%;\n    height: 3px;\n    transition: -webkit-transform 0.5s linear;\n    transition: transform 0.5s linear;\n    transition: transform 0.5s linear, -webkit-transform 0.5s linear;\n  }\n  .nav__burger-line::after, .nav__burger-line::before {\n    transition: -webkit-transform 0.5s linear;\n    transition: transform 0.5s linear;\n    transition: transform 0.5s linear, -webkit-transform 0.5s linear;\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 3px;\n    left: 0;\n    background-color: var(--accent);\n  }\n  .nav__burger-line::after {\n    top: 10px;\n  }\n  .nav__burger-line::before {\n    bottom: 10px;\n  }\n  .nav__burger[data-state=true] .nav__burger-line {\n    -webkit-transform: scale(0.8) rotate(90deg);\n            transform: scale(0.8) rotate(90deg);\n  }\n  .nav__burger[data-state=true] .nav__burger-line::after {\n    -webkit-transform: scale(0.7) translateX(19px) translateY(-31px) rotate(45deg);\n            transform: scale(0.7) translateX(19px) translateY(-31px) rotate(45deg);\n  }\n  .nav__burger[data-state=true] .nav__burger-line::before {\n    -webkit-transform: scale(0.7) translateX(19px) translateY(31px) rotate(135deg);\n            transform: scale(0.7) translateX(19px) translateY(31px) rotate(135deg);\n  }\n}", "",{"version":3,"sources":["webpack://./../UI,%20UX%20mini-kit/src/index.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_style.scss","webpack://./src/modules/modal/modal.scss","webpack://./src/modules/scrollToTop/scrollToTop.scss","webpack://./src/modules/navbar/nav.scss","webpack://./src/modules/btn/btn.scss","webpack://./src/modules/accordion/accordion.scss","webpack://./src/modules/select/select.scss","webpack://./<no source>","webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,yBAAA;EACA,oHAAA;ADGF;AELA;EACE,8BAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,iBAAA;AFOF;;AELA;EACE,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,iBAAA;AFQF;;AENA;EACE,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,iBAAA;AFSF;;AEPA;EACE,+CAAA;AFUF;;AERA;EACE,uBAAA;AFWF;;AERA;EACE,sBAAA;AFWF;;AETA;EACE,wBAAA;EACA,UAAA;EACA,SAAA;EACA,+MAAA;AFYF;;AETA;EACE,YAAA;AFYF;;AEVA;EACE,gBAAA;AFaF;;AEXA;EACE,wBAAA;EACA,qBAAA;AFcF;AEbE;EACE,qBAAA;AFeJ;AEbE;EACE,qBAAA;AFeJ;;AEXA;EACE,mBAAA;EACA,oBAAA;EACA,wBAAA;EACA,kBAAA;AFcF;AEZE;EACE,iBAAA;AFcJ;;AGjFE;EACE,eAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,oCAAA;EAEA,WAAA;EACA,YAAA;AHkFJ;AG/EE;EACE,aAAA;AHiFJ;AG/EE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;AHiFJ;AG/EE;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EAEA,gBAAA;EACA,aAAA;EAEA,iCAAA;EACA,wBAAA;AH+EJ;AG7EE;EACE,wBAAA;AH+EJ;AG7EE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EAEA,WAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EAEA,YAAA;EACA,6BAAA;EACA,wBAAA;EACA,iBAAA;AH6EJ;AGzEE;EACE,aAAA;EACA,yBAAA;EACA,SAAA;AH2EJ;;AItIA;EACE,eAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EAEA,WAAA;EACA,YAAA;EAEA,sBAAA;EACA,kBAAA;EACA,+BAAA;EAEA,yDAAA;EACA,kCAAA;AJsIF;AIpIE;EACE,qBAAA;AJsIJ;AIpIE;EACE,aAAA;AJsIJ;;AK1JA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,8BAAA;EAEA,iCAAA;EACA,kBAAA;EACA,6CAAA;EAAA,6BAAA;AL4JF;AK3JE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AL6JJ;AKzJE;EACE,aAAA;AL2JJ;AM7KA;EACE,qCAAA;EACA,4BAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,yCAAA;EAAA,iCAAA;EAAA,gEAAA;AN0OF;AMzOE;EACE,eAAA;EACA,2CAAA;EACA,8BAAA;UAAA,sBAAA;AN2OJ;AMzOE;EACE,8BAAA;UAAA,sBAAA;AN2OJ;AMxOE;EACE,0BAAA;AN0OJ;AMvOE;EACE,uCAAA;ANyOJ;AMtOE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;ANwOJ;AMtOE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;ANwOJ;AMtOE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;ANwOJ;AMtOE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;ANwOJ;AMtOE;EACE,uBAAA;EACA,yBAAA;EACA,6BAAA;ANwOJ;;AOxRA;EA+BE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EAEA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EAEA,iCAAA;EACA,6CAAA;EAAA,6BAAA;AP2PF;AOnSI;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,oBAAA;APqSN;AOnSI;EACE,aAAA;APqSN;AOhSI;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,oBAAA;APkSN;AOhSI;EACE,cAAA;APkSN;AO/QE;EACE,eAAA;APiRJ;;AQhUA;EACE,cAAA;EACA,cAAA;EACA,wBAAA;EACA,gBAAA;EACA,eAAA;EACA,mCAAA;EACA,2CAAA;EACA,oBAAA;EAEA,wBAAA;EACA,gBAAA;EACA,iCAAA;EACA,eAAA;EAEA,yDAAA;EACA,oCAAA;EACA,6CAAA;EACA,kCAAA;ARkUF;AQhUE;EACE,kBAAA;ARkUJ;AQ/TE;EACE,0BAAA;ARiUJ;AQ9TE;EACE,wBAAA;ARgUJ;AS7VA;EJuBE;IACE,kBAAA;IACA,mBAAA;EL0JF;EKxJI;IACE,kBAAA;IACA,QAAA;IACA,QAAA;IACA,WAAA;IAEA,sBAAA;IACA,SAAA;IACA,kBAAA;IAEA,iCAAA;ELwJN;EKtJI;IACE,aAAA;ELwJN;EKrJE;IACE,qBAAA;IACA,kBAAA;IACA,eAAA;IAEA,WAAA;IACA,YAAA;ELsJJ;EKpJI;IACE,qBAAA;IACA,kBAAA;IACA,+BAAA;IACA,WAAA;IACA,WAAA;IACA,yCAAA;IAAA,iCAAA;IAAA,gEAAA;ELsJN;EKrJM;IAEE,yCAAA;IAAA,iCAAA;IAAA,gEAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,WAAA;IACA,OAAA;IAEA,+BAAA;ELqJR;EKnJM;IACE,SAAA;ELqJR;EKnJM;IACE,YAAA;ELqJR;EKlJI;IACE,2CAAA;YAAA,mCAAA;ELoJN;EKlJM;IACE,8EAAA;YAAA,sEAAA;ELoJR;EKlJM;IACE,8EAAA;YAAA,sEAAA;ELoJR;AUqHF","sourcesContent":["@charset \"UTF-8\";\n@import \"~normalize.css\";\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"../fonts/montserrat-v23-latin_cyrillic-regular.woff2\") format(\"woff2\"), url(\"../fonts/montserrat-v23-latin_cyrillic-regular.woff\") format(\"woff\");\n}\n:root[data-theme=light] {\n  --bg-color: rgb(247, 247, 247);\n  --text-color: #09272a;\n  --a-color: #616161;\n  --btn-text-color: #fff;\n  --btn-bg-color: #7a231a;\n  --btn-bg-color_hover: #962b1f;\n  --accent: #260b08;\n}\n\n:root[data-theme=dark] {\n  --bg-color: #02030d;\n  --text-color: #d7dbf9;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #d1bc1f;\n  --btn-bg-color_hover: #c1ae1c;\n  --accent: #d1bc1f;\n}\n\n:root[data-theme=custom] {\n  --bg-color: #fff7f5;\n  --text-color: #0a0200;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #fb8974;\n  --btn-bg-color_hover: #e47c69;\n  --accent: #fb9e8d;\n}\n\n:root {\n  --box-shadow: 1px 10px 22px -20px var(--accent);\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--text-color);\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nh1 {\n  color: black;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\na:hover {\n  color: var(--a-color);\n}\na:target {\n  color: var(--a-color);\n}\n\n.container {\n  margin-bottom: 1rem;\n  padding: 1rem 0 1rem;\n  outline: 1px solid black;\n  text-align: center;\n}\n.container__heading {\n  margin-left: 1rem;\n}\n\n.modal[data-state=true] {\n  position: fixed;\n  display: flex;\n  z-index: 1000;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.modal[data-state=false] {\n  display: none;\n}\n.modal__window-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n}\n.modal__window {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  z-index: 1002;\n  max-width: 600px;\n  padding: 2rem;\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n.modal__window-heading {\n  color: var(--text-color);\n}\n.modal__window-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  color: var(--text-color);\n  font-size: 1.5rem;\n}\n.modal__window-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.scrollToTop {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid var(--accent);\n  background-image: url(arrowUp.svg);\n  background-position: 12.5px 12.5px;\n}\n.scrollToTop[data-state=true] {\n  display: inline-block;\n}\n.scrollToTop[data-state=false] {\n  display: none;\n}\n\n.nav {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  justify-content: space-between;\n  background-color: var(--bg-color);\n  padding: 1rem 2rem;\n  box-shadow: var(--box-shadow);\n}\n.nav__menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.nav__burger {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .nav {\n    position: relative;\n    align-items: center;\n  }\n  .nav__menu[data-state=true] {\n    position: absolute;\n    top: 70%;\n    right: 0;\n    z-index: 50;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 1rem 2rem;\n    background-color: var(--bg-color);\n  }\n  .nav__menu[data-state=false] {\n    display: none;\n  }\n  .nav__burger {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    width: 50px;\n    height: 25px;\n  }\n  .nav__burger-line {\n    display: inline-block;\n    position: relative;\n    background-color: var(--accent);\n    width: 100%;\n    height: 3px;\n    transition: transform 0.5s linear;\n  }\n  .nav__burger-line::after, .nav__burger-line::before {\n    transition: transform 0.5s linear;\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 3px;\n    left: 0;\n    background-color: var(--accent);\n  }\n  .nav__burger-line::after {\n    top: 10px;\n  }\n  .nav__burger-line::before {\n    bottom: 10px;\n  }\n  .nav__burger[data-state=true] .nav__burger-line {\n    transform: scale(0.8) rotate(90deg);\n  }\n  .nav__burger[data-state=true] .nav__burger-line::after {\n    transform: scale(0.7) translateX(19px) translateY(-31px) rotate(45deg);\n  }\n  .nav__burger[data-state=true] .nav__burger-line::before {\n    transform: scale(0.7) translateX(19px) translateY(31px) rotate(135deg);\n  }\n}\n.btn {\n  background-color: var(--btn-bg-color);\n  color: var(--btn-text-color);\n  text-transform: uppercase;\n  padding: 1em;\n  border: none;\n  border-radius: 0.4em;\n  transition: transform 0.2s linear;\n}\n.btn:hover {\n  cursor: pointer;\n  background-color: var(--btn-bg-color_hover);\n  transform: scale(1.03);\n}\n.btn:active {\n  transform: scale(0.95);\n}\n.btn:focus {\n  outline: 3px solid #4e89ff;\n}\n.btn[data-btn] {\n  border: 2px solid var(--btn-text-color);\n}\n.btn[data-btn=default] {\n  --btn-bg-color: #002727;\n  --btn-text-color: #8ce6e6;\n  --btn-bg-color_hover: #004242;\n}\n.btn[data-btn=warning] {\n  --btn-bg-color: #f4f1d8;\n  --btn-text-color: #d2c230;\n  --btn-bg-color_hover: #d2d0b9;\n}\n.btn[data-btn=succes] {\n  --btn-bg-color: #d1ded1;\n  --btn-text-color: #185c17;\n  --btn-bg-color_hover: #b9c8b9;\n}\n.btn[data-btn=danger] {\n  --btn-bg-color: #fff5f5;\n  --btn-text-color: #b21212;\n  --btn-bg-color_hover: #e4dada;\n}\n.btn[data-btn=info] {\n  --btn-bg-color: #d4dbea;\n  --btn-text-color: #284d97;\n  --btn-bg-color_hover: #c2c9d8;\n}\n\n.accordion {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  margin: 0 auto 1rem;\n  padding: 1rem;\n  max-width: 75ch;\n  text-align: left;\n  background-color: var(--bg-color);\n  box-shadow: var(--box-shadow);\n}\n.accordion[data-state=false]::after {\n  font-size: 1.5rem;\n  font-weight: bold;\n  position: absolute;\n  content: \"˅\";\n  top: calc(50% - 0.7rem);\n  right: 1rem;\n  color: var(--accent);\n}\n.accordion[data-state=false] .accordion__body {\n  display: none;\n}\n.accordion[data-state=true]::after {\n  font-size: 1.5rem;\n  font-weight: bold;\n  position: absolute;\n  content: \"˄\";\n  top: 1rem;\n  right: 1rem;\n  color: var(--accent);\n}\n.accordion[data-state=true] .accordion__body {\n  display: block;\n}\n.accordion__body {\n  padding: 1rem 0;\n}\n\n.select {\n  margin: 0 auto;\n  display: block;\n  color: var(--text-color);\n  padding: 1em 2em;\n  max-width: 75ch;\n  border: 1px solid var(--text-color);\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);\n  border-radius: 0.5em;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--bg-color);\n  cursor: pointer;\n  background-image: url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat, repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  background-size: 0.65em auto, 100%;\n}\n.select:hover {\n  border-color: #888;\n}\n.select:focus {\n  outline: 3px solid #4e89ff;\n}\n.select__option {\n  color: var(--text-color);\n}","@font-face {\n  font-family: 'Montserrat';\n  src: url('../fonts/montserrat-v23-latin_cyrillic-regular.woff2') format('woff2'),\n    url('../fonts/montserrat-v23-latin_cyrillic-regular.woff') format('woff');\n}\n",":root[data-theme=\"light\"] {\n  --bg-color: rgb(247, 247, 247);\n  --text-color: #09272a;\n  --a-color: #616161;\n  --btn-text-color: #fff;\n  --btn-bg-color: #7a231a;\n  --btn-bg-color_hover: #962b1f;\n  --accent: #260b08;\n}\n:root[data-theme=\"dark\"] {\n  --bg-color: #02030d;\n  --text-color: #d7dbf9;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #d1bc1f;\n  --btn-bg-color_hover: #c1ae1c;\n  --accent: #d1bc1f;\n}\n:root[data-theme=\"custom\"] {\n  --bg-color: #fff7f5;\n  --text-color: #0a0200;\n  --a-color: #616161;\n  --btn-text-color: #000;\n  --btn-bg-color: #fb8974;\n  --btn-bg-color_hover: #e47c69;\n  --accent: #fb9e8d;\n}\n:root {\n  --box-shadow: 1px 10px 22px -20px var(--accent);\n}\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n}\nbody {\n  color: var(--text-color);\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\nh1 {\n  color: black;\n}\nli {\n  list-style: none;\n}\na {\n  color: var(--text-color);\n  text-decoration: none;\n  &:hover {\n    color: var(--a-color);\n  }\n  &:target {\n    color: var(--a-color);\n  }\n}\n\n.container {\n  margin-bottom: 1rem;\n  padding: 1rem 0 1rem;\n  outline: 1px solid black;\n  text-align: center;\n\n  &__heading {\n    margin-left: 1rem;\n  }\n}\n",".modal {\n  &[data-state=\"true\"] {\n    position: fixed;\n    display: flex;\n    z-index: 1000;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(#000000, 0.5);\n\n    width: 100%;\n    height: 100%;\n  }\n\n  &[data-state=\"false\"] {\n    display: none;\n  }\n  &__window-overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1001;\n  }\n  &__window {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    z-index: 1002;\n\n    max-width: 600px;\n    padding: 2rem;\n\n    background-color: var(--bg-color);\n    color: var(--text-color);\n  }\n  &__window-heading {\n    color: var(--text-color);\n  }\n  &__window-close {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    cursor: pointer;\n\n    width: 2rem;\n    height: 2rem;\n    padding: 0;\n    margin: 0;\n\n    border: none;\n    background-color: transparent;\n    color: var(--text-color);\n    font-size: 1.5rem;\n  }\n  &__window-text {\n  }\n  &__window-btns {\n    display: flex;\n    justify-content: flex-end;\n    gap: 1rem;\n  }\n}\n",".scrollToTop {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  cursor: pointer;\n\n  width: 50px;\n  height: 50px;\n\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid var(--accent);\n\n  background-image: url(arrowUp.svg);\n  background-position: 12.5px 12.5px;\n\n  &[data-state=\"true\"] {\n    display: inline-block;\n  }\n  &[data-state=\"false\"] {\n    display: none;\n  }\n}\n",".nav {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  justify-content: space-between;\n\n  background-color: var(--bg-color);\n  padding: 1rem 2rem;\n  box-shadow: var(--box-shadow);\n  &__menu {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 1rem;\n    &-item {\n    }\n  }\n  &__burger {\n    display: none;\n  }\n}\n\n@media (max-width: 600px) {\n  .nav {\n    position: relative;\n    align-items: center;\n    &__menu {\n      &[data-state=\"true\"] {\n        position: absolute;\n        top: 70%;\n        right: 0;\n        z-index: 50;\n\n        flex-direction: column;\n        gap: 2rem;\n        padding: 1rem 2rem;\n\n        background-color: var(--bg-color);\n      }\n      &[data-state=\"false\"] {\n        display: none;\n      }\n    }\n    &__burger {\n      display: inline-block;\n      position: relative;\n      cursor: pointer;\n\n      width: 50px;\n      height: 25px;\n\n      &-line {\n        display: inline-block;\n        position: relative;\n        background-color: var(--accent);\n        width: 100%;\n        height: 3px;\n        transition: transform 0.5s linear;\n        &::after,\n        &::before {\n          transition: transform 0.5s linear;\n          position: absolute;\n          content: \"\";\n          width: 100%;\n          height: 3px;\n          left: 0;\n\n          background-color: var(--accent);\n        }\n        &::after {\n          top: 10px;\n        }\n        &::before {\n          bottom: 10px;\n        }\n      }\n      &[data-state=\"true\"] .nav__burger-line {\n        transform: scale(0.8) rotate(90deg);\n\n        &::after {\n          transform: scale(0.7) translateX(19px) translateY(-31px) rotate(45deg);\n        }\n        &::before {\n          transform: scale(0.7) translateX(19px) translateY(31px) rotate(135deg);\n        }\n      }\n    }\n  }\n}\n",".btn {\n  background-color: var(--btn-bg-color);\n  color: var(--btn-text-color);\n  text-transform: uppercase;\n  padding: 1em;\n  border: none;\n  border-radius: 0.4em;\n  transition: transform 0.2s linear;\n  &:hover {\n    cursor: pointer;\n    background-color: var(--btn-bg-color_hover);\n    transform: scale(1.03);\n  }\n  &:active {\n    transform: scale(0.95);\n  }\n\n  &:focus {\n    outline: 3px solid #4e89ff;\n  }\n\n  &[data-btn] {\n    border: 2px solid var(--btn-text-color);\n  }\n\n  &[data-btn=\"default\"] {\n    --btn-bg-color: #002727;\n    --btn-text-color: #8ce6e6;\n    --btn-bg-color_hover: #004242;\n  }\n  &[data-btn=\"warning\"] {\n    --btn-bg-color: #f4f1d8;\n    --btn-text-color: #d2c230;\n    --btn-bg-color_hover: #d2d0b9;\n  }\n  &[data-btn=\"succes\"] {\n    --btn-bg-color: #d1ded1;\n    --btn-text-color: #185c17;\n    --btn-bg-color_hover: #b9c8b9;\n  }\n  &[data-btn=\"danger\"] {\n    --btn-bg-color: #fff5f5;\n    --btn-text-color: #b21212;\n    --btn-bg-color_hover: #e4dada;\n  }\n  &[data-btn=\"info\"] {\n    --btn-bg-color: #d4dbea;\n    --btn-text-color: #284d97;\n    --btn-bg-color_hover: #c2c9d8;\n  }\n}\n",".accordion {\n  &[data-state=\"false\"] {\n    &::after {\n      font-size: 1.5rem;\n      font-weight: bold;\n      position: absolute;\n      content: \"˅\";\n      top: calc(50% - 0.7rem);\n      right: 1rem;\n      color: var(--accent);\n    }\n    & .accordion__body {\n      display: none;\n    }\n  }\n\n  &[data-state=\"true\"] {\n    &::after {\n      font-size: 1.5rem;\n      font-weight: bold;\n      position: absolute;\n      content: \"˄\";\n      top: 1rem;\n      right: 1rem;\n      color: var(--accent);\n    }\n    & .accordion__body {\n      display: block;\n    }\n  }\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n\n  margin: 0 auto 1rem;\n  padding: 1rem;\n  max-width: 75ch;\n  text-align: left;\n\n  background-color: var(--bg-color);\n  box-shadow: var(--box-shadow);\n\n  &__title {\n  }\n  &__body {\n    padding: 1rem 0;\n  }\n}\n",".select {\n  margin: 0 auto;\n  display: block;\n  color: var(--text-color);\n  padding: 1em 2em;\n  max-width: 75ch;\n  border: 1px solid var(--text-color);\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);\n  border-radius: 0.5em;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--bg-color);\n  cursor: pointer;\n\n  background-image: url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat, repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  background-size: 0.65em auto, 100%;\n\n  &:hover {\n    border-color: #888;\n  }\n\n  &:focus {\n    outline: 3px solid #4e89ff;\n  }\n\n  &__option {\n    color: var(--text-color);\n  }\n}\n",null,"@import \"~normalize.css\";\n@import \"style/fonts\";\n@import \"style/var\";\n@import \"style/style\";\n\n@import \"./modules/modal/modal.scss\";\n@import \"./modules/scrollToTop/scrollToTop.scss\";\n@import \"./modules/navbar/nav.scss\";\n@import \"./modules/btn/btn.scss\";\n@import \"./modules/accordion/accordion.scss\";\n@import \"./modules/select/select.scss\";\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\" data-theme=\"light\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>UI/UX kit</title>\n  </head>\n  <body>\n    <!-- SCROLL TO TOP START -->\n\n    <div data-state=\"false\" class=\"scrollToTop\"></div>\n\n    <!-- SCROLL TO TOP END -->\n\n    <!-- MODAL WINDOW START -->\n\n    <div data-state=\"false\" data-modal=\"\" class=\"modal\">\n      <div class=\"modal__window-overlay\"></div>\n      <div class=\"modal__window\">\n        <h2 class=\"modal__window-heading\">Atention!</h2>\n        <button class=\"modal__window-close\">x</button>\n        <p class=\"modal__window-text\">\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci\n          blanditiis magni culpa aliquam hic aperiam, nostrum placeat natus sint\n          aut?\n        </p>\n        <div class=\"modal__window-btns\">\n          <button class=\"btn\">Ok</button>\n          <button class=\"btn\">Close</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- MODAL WINDOW END -->\n\n    <!-- NAVIGATION START -->\n\n    <section class=\"container\">\n      <h1 class=\"container__heading\">Navbar</h1>\n      <nav class=\"nav\">\n        <ul data-state=\"false\" class=\"nav__menu\">\n          <li class=\"nav__menu-item\">\n            <a class=\"nav__menu-item-link\" href=\"#\">Home</a>\n          </li>\n          <li class=\"nav__menu-item\">\n            <a class=\"nav__menu-item-link\" href=\"#\">About</a>\n          </li>\n          <li class=\"nav__menu-item\">\n            <a class=\"nav__menu-item-link\" href=\"#\">Blog</a>\n          </li>\n        </ul>\n        <button id=\"toggle-theme\" class=\"btn nav__theme\">Change theme</button>\n        <div data-state=\"false\" class=\"nav__burger\">\n          <span class=\"nav__burger-line\"></span>\n        </div>\n      </nav>\n    </section>\n\n    <!-- NAVIGATION END -->\n\n    <!-- ACCORDION START -->\n\n    <section class=\"container\">\n      <h1 class=\"container__heading\">Accordion</h1>\n      <div class=\"accordion\" data-state=\"false\">\n        <div class=\"accordion__title\">Lorem ipsum dolor sit amet.</div>\n        <div class=\"accordion__body\">\n          <p class=\"accordion__body-text\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero\n            asperiores sunt eaque omnis voluptatem sint magnam aliquam veniam\n            dolore eligendi.\n          </p>\n        </div>\n      </div>\n      <div class=\"accordion\" data-state=\"false\">\n        <div class=\"accordion__title\">Lorem ipsum dolor sit amet.</div>\n        <div class=\"accordion__body\">\n          <p class=\"accordion__body-text\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero\n            asperiores sunt eaque omnis voluptatem sint magnam aliquam veniam\n            dolore eligendi.\n          </p>\n        </div>\n      </div>\n      <div class=\"accordion\" data-state=\"false\">\n        <div class=\"accordion__title\">Lorem ipsum dolor sit amet.</div>\n        <div class=\"accordion__body\">\n          <p class=\"accordion__body-text\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero\n            asperiores sunt eaque omnis voluptatem sint magnam aliquam veniam\n            dolore eligendi.\n          </p>\n        </div>\n      </div>\n    </section>\n\n    <!-- ACCORDION END -->\n\n    <!-- BUTTONS START -->\n\n    <div class=\"container\">\n      <h1 class=\"container__heading\">Buttons</h1>\n\n      <button data-btn=\"default\" class=\"btn btn-def\">Default</button>\n\n      <button data-btn=\"warning\" class=\"btn btn-warn\">Warning</button>\n\n      <button data-btn=\"succes\" class=\"btn btn-succ\">Succes</button>\n\n      <button data-btn=\"danger\" class=\"btn btn-danger\">Danger</button>\n\n      <button data-btn=\"info\" class=\"btn btn-info\">Info</button>\n    </div>\n\n    <!-- BUTTONS END -->\n\n    <!-- SELECT START -->\n\n    <div class=\"container\">\n      <h1 class=\"container__heading\">Select</h1>\n\n      <select name=\"select\" class=\"select\">\n        <option class=\"select__option\" value=\"value1\">Значение 1</option>\n        <option class=\"select__option\" value=\"value2\" selected>\n          Значение 2\n        </option>\n        <option class=\"select__option\" value=\"value3\">Значение 3</option>\n      </select>\n    </div>\n\n    <!-- SELECT END -->\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff":
/*!**************************************************************!*\
  !*** ./src/fonts/montserrat-v23-latin_cyrillic-regular.woff ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/montserrat-v23-latin_cyrillic-regular.woff";

/***/ }),

/***/ "./src/fonts/montserrat-v23-latin_cyrillic-regular.woff2":
/*!***************************************************************!*\
  !*** ./src/fonts/montserrat-v23-latin_cyrillic-regular.woff2 ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/montserrat-v23-latin_cyrillic-regular.woff2";

/***/ }),

/***/ "./src/modules/scrollToTop/arrowUp.svg":
/*!*********************************************!*\
  !*** ./src/modules/scrollToTop/arrowUp.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/arrowUp.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_themeHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/themeHandler */ "./src/modules/themeHandler.js");
/* harmony import */ var _modules_themeHandler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_themeHandler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion/accordion */ "./src/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/btn/btn */ "./src/modules/btn/btn.js");
/* harmony import */ var _modules_btn_btn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_btn_btn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal/modal */ "./src/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_scrollToTop_scrollToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollToTop/scrollToTop */ "./src/modules/scrollToTop/scrollToTop.js");
/* harmony import */ var _modules_scrollToTop_scrollToTop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_scrollToTop_scrollToTop__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_navbar_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/navbar/nav */ "./src/modules/navbar/nav.js");
/* harmony import */ var _modules_navbar_nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_navbar_nav__WEBPACK_IMPORTED_MODULE_7__);








})();

/******/ })()
;
//# sourceMappingURL=main.3ae2a66c75ca22808522.js.map