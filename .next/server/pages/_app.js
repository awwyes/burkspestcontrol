(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

<<<<<<< HEAD
/***/ "./components/SEO/SEO.tsx":
/*!********************************!*\
  !*** ./components/SEO/SEO.tsx ***!
  \********************************/
/*! exports provided: SEO, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEO\", function() { return SEO; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./components/constants.tsx\");\n\nvar _jsxFileName = \"/Users/tonyburks/_code/burkspestcontrol/components/SEO/SEO.tsx\";\n\n\n\nconst SEO = ({\n  description = _constants__WEBPACK_IMPORTED_MODULE_3__[\"SEO_DESCRIPTION\"],\n  keywords = _constants__WEBPACK_IMPORTED_MODULE_3__[\"SEO_KEYWORDS\"],\n  title = _constants__WEBPACK_IMPORTED_MODULE_3__[\"SEO_TITLE\"],\n  ogImage = _constants__WEBPACK_IMPORTED_MODULE_3__[\"SEO_OG_IMAGE\"],\n  ogUrl = _constants__WEBPACK_IMPORTED_MODULE_3__[\"PRODUCTION_URL\"],\n  twitterImage = _constants__WEBPACK_IMPORTED_MODULE_3__[\"SEO_TWITTER_IMAGE\"]\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"keywords\",\n      content: keywords\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:title\",\n      content: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:image\",\n      content: ogImage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:site_name\",\n      content: _constants__WEBPACK_IMPORTED_MODULE_3__[\"SEO_TITLE\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:url\",\n      content: `${ogUrl}${router.asPath}`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: \"og:type\",\n      content: 'website'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:title\",\n      content: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:description\",\n      content: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:image\",\n      content: twitterImage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"twitter:card\",\n      content: \"summary_large_image\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SEO);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NFTy9TRU8udHN4PzUzN2MiXSwibmFtZXMiOlsiU0VPIiwiZGVzY3JpcHRpb24iLCJTRU9fREVTQ1JJUFRJT04iLCJrZXl3b3JkcyIsIlNFT19LRVlXT1JEUyIsInRpdGxlIiwiU0VPX1RJVExFIiwib2dJbWFnZSIsIlNFT19PR19JTUFHRSIsIm9nVXJsIiwiUFJPRFVDVElPTl9VUkwiLCJ0d2l0dGVySW1hZ2UiLCJTRU9fVFdJVFRFUl9JTUFHRSIsInJvdXRlciIsInVzZVJvdXRlciIsImFzUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFlTyxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUNoQkMsYUFBVyxHQUFHQywwREFERTtBQUVoQkMsVUFBUSxHQUFHQyx1REFGSztBQUdoQkMsT0FBSyxHQUFHQyxvREFIUTtBQUloQkMsU0FBTyxHQUFHQyx1REFKTTtBQUtoQkMsT0FBSyxHQUFHQyx5REFMUTtBQU1oQkMsY0FBWSxHQUFHQyw0REFBaUJBO0FBTmhCLENBQUQsS0FPSDtBQUNaLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDSSxxRUFBQyxnREFBRDtBQUFBLDRCQUNJO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFFYjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUVFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLGdCQUFRRTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRUE7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQU0sY0FBUSxFQUFDLGdCQUFmO0FBQWdDLGFBQU8sRUFBRUo7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQU0sY0FBUSxFQUFDLFVBQWY7QUFBMEIsYUFBTyxFQUFFTTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBT0k7QUFBTSxjQUFRLEVBQUMsY0FBZjtBQUE4QixhQUFPLEVBQUVELG9EQUFTQTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBUUk7QUFBTSxjQUFRLEVBQUMsUUFBZjtBQUF3QixhQUFPLEVBQUcsR0FBRUcsS0FBTSxHQUFFSSxNQUFNLENBQUNFLE1BQU87QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQVNJO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsYUFBTyxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFVSTtBQUFNLFVBQUksRUFBQyxlQUFYO0FBQTJCLGFBQU8sRUFBRVY7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSixlQVdJO0FBQU0sVUFBSSxFQUFDLHFCQUFYO0FBQWlDLGFBQU8sRUFBRUo7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQVlJO0FBQU0sVUFBSSxFQUFDLGVBQVg7QUFBMkIsYUFBTyxFQUFFVTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKLGVBYUk7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixhQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWlCSCxDQTNCTTtBQTZCUVgsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NFTy9TRU8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBTRU9fVElUTEUsIFNFT19ERVNDUklQVElPTiwgU0VPX0tFWVdPUkRTLCBTRU9fT0dfSU1BR0UsIFNFT19UV0lUVEVSX0lNQUdFLCBQUk9EVUNUSU9OX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IHR5cGUgU0VPUHJvcHMgPSB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAga2V5d29yZHM/OiBzdHJpbmc7XG4gICAgb2dUaXRsZT86IHN0cmluZztcbiAgICBvZ0Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIG9nSW1hZ2U/OiBzdHJpbmc7XG4gICAgb2dVcmw/OiBzdHJpbmc7XG4gICAgdHdpdHRlclRpdGxlPzogc3RyaW5nO1xuICAgIHR3aXR0ZXJEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB0d2l0dGVySW1hZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTRU8gPSAoe1xuICAgIGRlc2NyaXB0aW9uID0gU0VPX0RFU0NSSVBUSU9OLFxuICAgIGtleXdvcmRzID0gU0VPX0tFWVdPUkRTLFxuICAgIHRpdGxlID0gU0VPX1RJVExFLFxuICAgIG9nSW1hZ2UgPSBTRU9fT0dfSU1BR0UsXG4gICAgb2dVcmwgPSBQUk9EVUNUSU9OX1VSTCxcbiAgICB0d2l0dGVySW1hZ2UgPSBTRU9fVFdJVFRFUl9JTUFHRSxcbn06IFNFT1Byb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtrZXl3b3Jkc30gLz5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtvZ0ltYWdlfSAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtTRU9fVElUTEV9IC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake29nVXJsfSR7cm91dGVyLmFzUGF0aH1gfSAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17J3dlYnNpdGUnfSAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3R3aXR0ZXJJbWFnZX0gLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU0VPOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SEO/SEO.tsx\n");

/***/ }),

/***/ "./components/constants.tsx":
/*!**********************************!*\
  !*** ./components/constants.tsx ***!
  \**********************************/
/*! exports provided: PRODUCTION_URL, SEO_TITLE, SEO_DESCRIPTION, SEO_KEYWORDS, SEO_OG_IMAGE, SEO_TWITTER_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCTION_URL\", function() { return PRODUCTION_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEO_TITLE\", function() { return SEO_TITLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEO_DESCRIPTION\", function() { return SEO_DESCRIPTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEO_KEYWORDS\", function() { return SEO_KEYWORDS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEO_OG_IMAGE\", function() { return SEO_OG_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEO_TWITTER_IMAGE\", function() { return SEO_TWITTER_IMAGE; });\nconst PRODUCTION_URL = 'https://burkspestcontrol.com';\n/**\n * SEO constants\n */\n\nconst SEO_TITLE = 'Burks Pest Control';\nconst SEO_DESCRIPTION = 'A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.';\nconst SEO_KEYWORDS = 'burks pest control, burkspest control, burkspestcontrol, ooltewah tn, cleveland tn, ';\nconst SEO_OG_IMAGE = '../public/favicon.png';\nconst SEO_TWITTER_IMAGE = '../publick/twitter.png';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnN0YW50cy50c3g/MTJkZiJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OX1VSTCIsIlNFT19USVRMRSIsIlNFT19ERVNDUklQVElPTiIsIlNFT19LRVlXT1JEUyIsIlNFT19PR19JTUFHRSIsIlNFT19UV0lUVEVSX0lNQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGNBQWMsR0FBRyw4QkFBdkI7QUFFUDtBQUNBO0FBQ0E7O0FBQ1EsTUFBTUMsU0FBUyxHQUFHLG9CQUFsQjtBQUNBLE1BQU1DLGVBQWUsR0FDMUIsNkdBREs7QUFFQSxNQUFNQyxZQUFZLEdBQ3ZCLHNGQURLO0FBRUEsTUFBTUMsWUFBWSxHQUFHLHVCQUFyQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLHdCQUExQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29uc3RhbnRzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQUk9EVUNUSU9OX1VSTCA9ICdodHRwczovL2J1cmtzcGVzdGNvbnRyb2wuY29tJztcblxuLyoqXG4gKiBTRU8gY29uc3RhbnRzXG4gKi9cbiBleHBvcnQgY29uc3QgU0VPX1RJVExFID0gJ0J1cmtzIFBlc3QgQ29udHJvbCc7XG4gZXhwb3J0IGNvbnN0IFNFT19ERVNDUklQVElPTiA9XG4gICAnQSBncm93aW5nIG9wZW4tc291cmNlIGNvbGxlY3Rpb24gb2YgaGFuZC1jcmFmdGVkIENoYWtyYSBVSSB0ZW1wbGF0ZXMgcmVhZHkgdG8gZHJvcCBpbnRvIHlvdXIgUmVhY3QgcHJvamVjdC4nO1xuIGV4cG9ydCBjb25zdCBTRU9fS0VZV09SRFMgPVxuICAgJ2J1cmtzIHBlc3QgY29udHJvbCwgYnVya3NwZXN0IGNvbnRyb2wsIGJ1cmtzcGVzdGNvbnRyb2wsIG9vbHRld2FoIHRuLCBjbGV2ZWxhbmQgdG4sICc7XG4gZXhwb3J0IGNvbnN0IFNFT19PR19JTUFHRSA9ICcuLi9wdWJsaWMvZmF2aWNvbi5wbmcnO1xuIGV4cG9ydCBjb25zdCBTRU9fVFdJVFRFUl9JTUFHRSA9ICcuLi9wdWJsaWNrL3R3aXR0ZXIucG5nJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/constants.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SEO/SEO */ \"./components/SEO/SEO.tsx\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./theme.tsx\");\n\nvar _jsxFileName = \"/Users/tonyburks/_code/burkspestcontrol/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNsRCxzQkFDQSxxRUFBQywrREFBRDtBQUFnQixTQUFLLEVBQUVDLDhDQUF2QjtBQUFBLDRCQUNJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBUUgiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDb2xvck1vZGVQcm92aWRlciwgQ1NTUmVzZXQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBTRU8gZnJvbSAnLi4vY29tcG9uZW50cy9TRU8vU0VPJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDU1NSZXNldCAvPlxuICAgICAgICA8U0VPIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIFxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./theme.tsx":
/*!*******************!*\
  !*** ./theme.tsx ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"extendTheme\"])({\n  config: {\n    cssVarPrefix: \"ck\",\n    initialColorMode: \"light\",\n    useSystemColorMode: true\n  },\n  colors: {\n    yellow: {\n      500: '#ffff00'\n    }\n  },\n  fonts: {\n    body: \"system-ui, sans-serif\",\n    heading: \"Georiga, serif\",\n    mono: \"Menlo, monospace\"\n  },\n  fontSizes: {\n    xs: \"0.75rem\",\n    sm: \"0.875rem\",\n    md: \"1rem\",\n    lg: \"1.125rem\",\n    xl: \"1.25rem\",\n    \"2xl\": \"1.5rem\",\n    \"3xl\": \"1.875rem\",\n    \"4xl\": \"2.25rem\",\n    \"5xl\": \"3rem\",\n    \"6xl\": \"3.75rem\",\n    \"7xl\": \"4.5rem\",\n    \"8xl\": \"6rem\",\n    \"9xl\": \"8rem\"\n  },\n  fontWeights: {\n    hairline: 100,\n    thin: 200,\n    light: 300,\n    normal: 400,\n    medium: 500,\n    semibold: 600,\n    bold: 700,\n    extrabold: 800,\n    black: 900\n  },\n  lineHeights: {\n    normal: \"normal\",\n    none: 1,\n    shorter: 1.25,\n    short: 1.375,\n    base: 1.5,\n    tall: 1.625,\n    taller: \"2\",\n    \"3\": \".75rem\",\n    \"4\": \"1rem\",\n    \"5\": \"1.25rem\",\n    \"6\": \"1.5rem\",\n    \"7\": \"1.75rem\",\n    \"8\": \"2rem\",\n    \"9\": \"2.25rem\",\n    \"10\": \"2.5rem\"\n  },\n  letterSpacings: {\n    tighter: \"-0.05em\",\n    tight: \"-0.025em\",\n    normal: \"0\",\n    wide: \"0.025em\",\n    wider: \"0.05em\",\n    widest: \"0.1em\"\n  },\n  components: {\n    Button: {\n      // 1. We can update the base styles\n      baseStyle: {\n        fontWeight: \"bold\" // Normally, it is \"semibold\"\n\n      },\n      // 2. We can add a new button size or extend existing\n      sizes: {\n        xl: {\n          h: \"56px\",\n          fontSize: \"lg\",\n          px: \"32px\"\n        }\n      },\n      // 3. We can add a new visual variant\n      variants: {\n        \"with-shadow\": {\n          bg: \"yellow.300\",\n          boxShadow: \"0 0 2px 2px #efdfde\"\n        },\n        \"chakra-icon\": {\n          color: \"black\"\n        },\n        // 4. We can override existing variants\n        solid: props => ({\n          bg: props.colorMode === \"dark\" ? \"yellow.500\" : \"dark\"\n        })\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS50c3g/NzVlYyJdLCJuYW1lcyI6WyJ0aGVtZSIsImV4dGVuZFRoZW1lIiwiY29uZmlnIiwiY3NzVmFyUHJlZml4IiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsImNvbG9ycyIsInllbGxvdyIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJtb25vIiwiZm9udFNpemVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsImZvbnRXZWlnaHRzIiwiaGFpcmxpbmUiLCJ0aGluIiwibGlnaHQiLCJub3JtYWwiLCJtZWRpdW0iLCJzZW1pYm9sZCIsImJvbGQiLCJleHRyYWJvbGQiLCJibGFjayIsImxpbmVIZWlnaHRzIiwibm9uZSIsInNob3J0ZXIiLCJzaG9ydCIsImJhc2UiLCJ0YWxsIiwidGFsbGVyIiwibGV0dGVyU3BhY2luZ3MiLCJ0aWdodGVyIiwidGlnaHQiLCJ3aWRlIiwid2lkZXIiLCJ3aWRlc3QiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwiYmFzZVN0eWxlIiwiZm9udFdlaWdodCIsInNpemVzIiwiaCIsImZvbnRTaXplIiwicHgiLCJ2YXJpYW50cyIsImJnIiwiYm94U2hhZG93IiwiY29sb3IiLCJzb2xpZCIsInByb3BzIiwiY29sb3JNb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLEtBQUssR0FBR0Msb0VBQVcsQ0FBQztBQUN0QkMsUUFBTSxFQUFFO0FBQ0pDLGdCQUFZLEVBQUUsSUFEVjtBQUVKQyxvQkFBZ0IsRUFBRSxPQUZkO0FBR0pDLHNCQUFrQixFQUFFO0FBSGhCLEdBRGM7QUFNdEJDLFFBQU0sRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFDSixXQUFLO0FBREQ7QUFESixHQU5jO0FBV3RCQyxPQUFLLEVBQUU7QUFDSEMsUUFBSSxFQUFFLHVCQURIO0FBRUhDLFdBQU8sRUFBRSxnQkFGTjtBQUdIQyxRQUFJLEVBQUU7QUFISCxHQVhlO0FBZ0J0QkMsV0FBUyxFQUFFO0FBQ1BDLE1BQUUsRUFBRSxTQURHO0FBRVBDLE1BQUUsRUFBRSxVQUZHO0FBR1BDLE1BQUUsRUFBRSxNQUhHO0FBSVBDLE1BQUUsRUFBRSxVQUpHO0FBS1BDLE1BQUUsRUFBRSxTQUxHO0FBTVAsV0FBTyxRQU5BO0FBT1AsV0FBTyxVQVBBO0FBUVAsV0FBTyxTQVJBO0FBU1AsV0FBTyxNQVRBO0FBVVAsV0FBTyxTQVZBO0FBV1AsV0FBTyxRQVhBO0FBWVAsV0FBTyxNQVpBO0FBYVAsV0FBTztBQWJBLEdBaEJXO0FBK0J0QkMsYUFBVyxFQUFFO0FBQ1RDLFlBQVEsRUFBRSxHQUREO0FBRVRDLFFBQUksRUFBRSxHQUZHO0FBR1RDLFNBQUssRUFBRSxHQUhFO0FBSVRDLFVBQU0sRUFBRSxHQUpDO0FBS1RDLFVBQU0sRUFBRSxHQUxDO0FBTVRDLFlBQVEsRUFBRSxHQU5EO0FBT1RDLFFBQUksRUFBRSxHQVBHO0FBUVRDLGFBQVMsRUFBRSxHQVJGO0FBU1RDLFNBQUssRUFBRTtBQVRFLEdBL0JTO0FBMEN0QkMsYUFBVyxFQUFFO0FBQ1ROLFVBQU0sRUFBRSxRQURDO0FBRVRPLFFBQUksRUFBRSxDQUZHO0FBR1RDLFdBQU8sRUFBRSxJQUhBO0FBSVRDLFNBQUssRUFBRSxLQUpFO0FBS1RDLFFBQUksRUFBRSxHQUxHO0FBTVRDLFFBQUksRUFBRSxLQU5HO0FBT1RDLFVBQU0sRUFBRSxHQVBDO0FBUVQsU0FBSyxRQVJJO0FBU1QsU0FBSyxNQVRJO0FBVVQsU0FBSyxTQVZJO0FBV1QsU0FBSyxRQVhJO0FBWVQsU0FBSyxTQVpJO0FBYVQsU0FBSyxNQWJJO0FBY1QsU0FBSyxTQWRJO0FBZVQsVUFBTTtBQWZHLEdBMUNTO0FBMkR0QkMsZ0JBQWMsRUFBRTtBQUNaQyxXQUFPLEVBQUUsU0FERztBQUVaQyxTQUFLLEVBQUUsVUFGSztBQUdaZixVQUFNLEVBQUUsR0FISTtBQUlaZ0IsUUFBSSxFQUFFLFNBSk07QUFLWkMsU0FBSyxFQUFFLFFBTEs7QUFNWkMsVUFBTSxFQUFFO0FBTkksR0EzRE07QUFtRXRCQyxZQUFVLEVBQUU7QUFDUkMsVUFBTSxFQUFFO0FBQ0o7QUFDQUMsZUFBUyxFQUFFO0FBQ1BDLGtCQUFVLEVBQUUsTUFETCxDQUNhOztBQURiLE9BRlA7QUFLSjtBQUNBQyxXQUFLLEVBQUU7QUFDSDVCLFVBQUUsRUFBRTtBQUNBNkIsV0FBQyxFQUFFLE1BREg7QUFFQUMsa0JBQVEsRUFBRSxJQUZWO0FBR0FDLFlBQUUsRUFBRTtBQUhKO0FBREQsT0FOSDtBQWFKO0FBQ0FDLGNBQVEsRUFBRTtBQUNWLHVCQUFlO0FBQ1hDLFlBQUUsRUFBRSxZQURPO0FBRVhDLG1CQUFTLEVBQUU7QUFGQSxTQURMO0FBS1YsdUJBQWU7QUFDWEMsZUFBSyxFQUFFO0FBREksU0FMTDtBQVFOO0FBQ0FDLGFBQUssRUFBR0MsS0FBRCxLQUFZO0FBQ2ZKLFlBQUUsRUFBRUksS0FBSyxDQUFDQyxTQUFOLEtBQW9CLE1BQXBCLEdBQTZCLFlBQTdCLEdBQTRDO0FBRGpDLFNBQVo7QUFURDtBQWROO0FBREE7QUFuRVUsQ0FBRCxDQUF6QjtBQW1HZXZELG9FQUFmIiwiZmlsZSI6Ii4vdGhlbWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICAgIGNvbmZpZzoge1xuICAgICAgICBjc3NWYXJQcmVmaXg6IFwiY2tcIixcbiAgICAgICAgaW5pdGlhbENvbG9yTW9kZTogXCJsaWdodFwiLFxuICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcbiAgICB9LFxuICAgIGNvbG9yczoge1xuICAgICAgICB5ZWxsb3c6IHtcbiAgICAgICAgICAgIDUwMDogJyNmZmZmMDAnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBmb250czoge1xuICAgICAgICBib2R5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBoZWFkaW5nOiBcIkdlb3JpZ2EsIHNlcmlmXCIsXG4gICAgICAgIG1vbm86IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxuICAgIH0sXG4gICAgZm9udFNpemVzOiB7XG4gICAgICAgIHhzOiBcIjAuNzVyZW1cIixcbiAgICAgICAgc206IFwiMC44NzVyZW1cIixcbiAgICAgICAgbWQ6IFwiMXJlbVwiLFxuICAgICAgICBsZzogXCIxLjEyNXJlbVwiLFxuICAgICAgICB4bDogXCIxLjI1cmVtXCIsXG4gICAgICAgIFwiMnhsXCI6IFwiMS41cmVtXCIsXG4gICAgICAgIFwiM3hsXCI6IFwiMS44NzVyZW1cIixcbiAgICAgICAgXCI0eGxcIjogXCIyLjI1cmVtXCIsXG4gICAgICAgIFwiNXhsXCI6IFwiM3JlbVwiLFxuICAgICAgICBcIjZ4bFwiOiBcIjMuNzVyZW1cIixcbiAgICAgICAgXCI3eGxcIjogXCI0LjVyZW1cIixcbiAgICAgICAgXCI4eGxcIjogXCI2cmVtXCIsXG4gICAgICAgIFwiOXhsXCI6IFwiOHJlbVwiLFxuICAgIH0sXG4gICAgZm9udFdlaWdodHM6IHtcbiAgICAgICAgaGFpcmxpbmU6IDEwMCxcbiAgICAgICAgdGhpbjogMjAwLFxuICAgICAgICBsaWdodDogMzAwLFxuICAgICAgICBub3JtYWw6IDQwMCxcbiAgICAgICAgbWVkaXVtOiA1MDAsXG4gICAgICAgIHNlbWlib2xkOiA2MDAsXG4gICAgICAgIGJvbGQ6IDcwMCxcbiAgICAgICAgZXh0cmFib2xkOiA4MDAsXG4gICAgICAgIGJsYWNrOiA5MDAsXG4gICAgfSxcbiAgICBsaW5lSGVpZ2h0czoge1xuICAgICAgICBub3JtYWw6IFwibm9ybWFsXCIsXG4gICAgICAgIG5vbmU6IDEsXG4gICAgICAgIHNob3J0ZXI6IDEuMjUsXG4gICAgICAgIHNob3J0OiAxLjM3NSxcbiAgICAgICAgYmFzZTogMS41LFxuICAgICAgICB0YWxsOiAxLjYyNSxcbiAgICAgICAgdGFsbGVyOiBcIjJcIixcbiAgICAgICAgXCIzXCI6IFwiLjc1cmVtXCIsXG4gICAgICAgIFwiNFwiOiBcIjFyZW1cIixcbiAgICAgICAgXCI1XCI6IFwiMS4yNXJlbVwiLFxuICAgICAgICBcIjZcIjogXCIxLjVyZW1cIixcbiAgICAgICAgXCI3XCI6IFwiMS43NXJlbVwiLFxuICAgICAgICBcIjhcIjogXCIycmVtXCIsXG4gICAgICAgIFwiOVwiOiBcIjIuMjVyZW1cIixcbiAgICAgICAgXCIxMFwiOiBcIjIuNXJlbVwiLFxuICAgIH0sXG4gICAgbGV0dGVyU3BhY2luZ3M6IHtcbiAgICAgICAgdGlnaHRlcjogXCItMC4wNWVtXCIsXG4gICAgICAgIHRpZ2h0OiBcIi0wLjAyNWVtXCIsXG4gICAgICAgIG5vcm1hbDogXCIwXCIsXG4gICAgICAgIHdpZGU6IFwiMC4wMjVlbVwiLFxuICAgICAgICB3aWRlcjogXCIwLjA1ZW1cIixcbiAgICAgICAgd2lkZXN0OiBcIjAuMWVtXCIsXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEJ1dHRvbjoge1xuICAgICAgICAgICAgLy8gMS4gV2UgY2FuIHVwZGF0ZSB0aGUgYmFzZSBzdHlsZXNcbiAgICAgICAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCAvLyBOb3JtYWxseSwgaXQgaXMgXCJzZW1pYm9sZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gMi4gV2UgY2FuIGFkZCBhIG5ldyBidXR0b24gc2l6ZSBvciBleHRlbmQgZXhpc3RpbmdcbiAgICAgICAgICAgIHNpemVzOiB7XG4gICAgICAgICAgICAgICAgeGw6IHtcbiAgICAgICAgICAgICAgICAgICAgaDogXCI1NnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcImxnXCIsXG4gICAgICAgICAgICAgICAgICAgIHB4OiBcIjMycHhcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIDMuIFdlIGNhbiBhZGQgYSBuZXcgdmlzdWFsIHZhcmlhbnRcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgICAgICBcIndpdGgtc2hhZG93XCI6IHtcbiAgICAgICAgICAgICAgICBiZzogXCJ5ZWxsb3cuMzAwXCIsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAycHggMnB4ICNlZmRmZGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoYWtyYS1pY29uXCI6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIDQuIFdlIGNhbiBvdmVycmlkZSBleGlzdGluZyB2YXJpYW50c1xuICAgICAgICAgICAgICAgIHNvbGlkOiAocHJvcHMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGJnOiBwcm9wcy5jb2xvck1vZGUgPT09IFwiZGFya1wiID8gXCJ5ZWxsb3cuNTAwXCIgOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.tsx\n");
=======
/***/ 515:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./components/constants.tsx
const PRODUCTION_URL = 'https://burkspestcontrol.com';
/**
 * SEO constants
 */

const SEO_TITLE = 'Burks Pest Control';
const SEO_DESCRIPTION = 'A growing open-source collection of hand-crafted Chakra UI templates ready to drop into your React project.';
const SEO_KEYWORDS = 'burks pest control, burkspest control, burkspestcontrol, ooltewah tn, cleveland tn, ';
const SEO_OG_IMAGE = '../public/favicon.png';
const SEO_TWITTER_IMAGE = '../publick/twitter.png';
;// CONCATENATED MODULE: ./components/SEO/SEO.tsx



>>>>>>> 0dbc9eb53bc978d9e61a291a6ca276f0361aa133

/***/ }),

<<<<<<< HEAD
/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");

=======
const SEO = ({
  description = SEO_DESCRIPTION,
  keywords = SEO_KEYWORDS,
  title = SEO_TITLE,
  ogImage = SEO_OG_IMAGE,
  ogUrl = PRODUCTION_URL,
  twitterImage = SEO_TWITTER_IMAGE
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: ogImage
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:site_name",
      content: SEO_TITLE
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:url",
      content: `${ogUrl}${router.asPath}`
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: 'website'
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:image",
      content: twitterImage
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};
/* harmony default export */ var SEO_SEO = (SEO);
;// CONCATENATED MODULE: ./theme.tsx

const theme = (0,react_.extendTheme)({
  config: {
    cssVarPrefix: "ck",
    initialColorMode: "light",
    useSystemColorMode: true
  },
  colors: {
    yellow: {
      500: '#ffff00'
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georiga, serif",
    mono: "Menlo, monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold" // Normally, it is "semibold"

      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px"
        }
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "yellow.300",
          boxShadow: "0 0 2px 2px #efdfde"
        },
        "chakra-icon": {
          color: "black"
        },
        // 4. We can override existing variants
        solid: props => ({
          bg: props.colorMode === "dark" ? "yellow.500" : "dark"
        })
      }
    }
  }
});
/* harmony default export */ var theme_0 = (theme);
;// CONCATENATED MODULE: ./pages/_app.tsx
>>>>>>> 0dbc9eb53bc978d9e61a291a6ca276f0361aa133

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");
=======
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
    theme: theme_0,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.CSSReset, {}), /*#__PURE__*/jsx_runtime_.jsx(SEO_SEO, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ 426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;
>>>>>>> 0dbc9eb53bc978d9e61a291a6ca276f0361aa133

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(515));
module.exports = __webpack_exports__;

})();