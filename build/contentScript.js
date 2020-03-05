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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/content-script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app/adobe/target.js":
/*!************************************!*\
  !*** ./src/js/app/adobe/target.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ \"./src/js/app/services/helper.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n    if (Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"adobeTestAndTargetIsPresent\"])()) {\r\n        window.TestSpy.adobeTestAndTarget['present'] = true;\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Adobe Test & Target present:');\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])(Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getAdobeTestAndTargetInfo\"])());\r\n    } else {\r\n        window.TestSpy.adobeTestAndTarget['present'] = false;\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Adobe Test & Target not present');\r\n    }\r\n\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwL2Fkb2JlL3RhcmdldC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAvYWRvYmUvdGFyZ2V0LmpzP2VhYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIGFkb2JlVGVzdEFuZFRhcmdldElzUHJlc2VudCxcclxuICAgIGdldEFkb2JlVGVzdEFuZFRhcmdldEluZm8sXHJcbiAgICBsb2dcclxufSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBpZiAoYWRvYmVUZXN0QW5kVGFyZ2V0SXNQcmVzZW50KCkpIHtcclxuICAgICAgICB3aW5kb3cuVGVzdFNweS5hZG9iZVRlc3RBbmRUYXJnZXRbJ3ByZXNlbnQnXSA9IHRydWU7XHJcbiAgICAgICAgbG9nKCdBZG9iZSBUZXN0ICYgVGFyZ2V0IHByZXNlbnQ6Jyk7XHJcbiAgICAgICAgbG9nKGdldEFkb2JlVGVzdEFuZFRhcmdldEluZm8oKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5UZXN0U3B5LmFkb2JlVGVzdEFuZFRhcmdldFsncHJlc2VudCddID0gZmFsc2U7XHJcbiAgICAgICAgbG9nKCdBZG9iZSBUZXN0ICYgVGFyZ2V0IG5vdCBwcmVzZW50Jyk7XHJcbiAgICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app/adobe/target.js\n");

/***/ }),

/***/ "./src/js/app/googleOptimize/optimize.js":
/*!***********************************************!*\
  !*** ./src/js/app/googleOptimize/optimize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ \"./src/js/app/services/helper.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n\n    if (Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"googleOptimizeIsPresent\"])()) {\n        window.TestSpy.googleOptmize['present'] = true;\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('googleOptmize present:');\n        const exId = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getGoogleOptimizeExperimentId\"])()\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('ExpiremtID:',exId);\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('variationId:',Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getGoogleOptimizeVariationInfo\"])(exId));\n    } else {\n        window.TestSpy.googleOptmize['present'] = false;\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('oops... googleOptmize not present');\n    }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwL2dvb2dsZU9wdGltaXplL29wdGltaXplLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC9nb29nbGVPcHRpbWl6ZS9vcHRpbWl6ZS5qcz9hZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgZ29vZ2xlT3B0aW1pemVJc1ByZXNlbnQsXG4gICAgZ2V0R29vZ2xlT3B0aW1pemVFeHBlcmltZW50SWQsXG4gICAgZ2V0R29vZ2xlT3B0aW1pemVWYXJpYXRpb25JbmZvLFxuICAgIGxvZ1xufSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKGdvb2dsZU9wdGltaXplSXNQcmVzZW50KCkpIHtcbiAgICAgICAgd2luZG93LlRlc3RTcHkuZ29vZ2xlT3B0bWl6ZVsncHJlc2VudCddID0gdHJ1ZTtcbiAgICAgICAgbG9nKCdnb29nbGVPcHRtaXplIHByZXNlbnQ6Jyk7XG4gICAgICAgIGNvbnN0IGV4SWQgPSBnZXRHb29nbGVPcHRpbWl6ZUV4cGVyaW1lbnRJZCgpXG4gICAgICAgIGxvZygnRXhwaXJlbXRJRDonLGV4SWQpO1xuICAgICAgICBsb2coJ3ZhcmlhdGlvbklkOicsZ2V0R29vZ2xlT3B0aW1pemVWYXJpYXRpb25JbmZvKGV4SWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuVGVzdFNweS5nb29nbGVPcHRtaXplWydwcmVzZW50J10gPSBmYWxzZTtcbiAgICAgICAgbG9nKCdvb3BzLi4uIGdvb2dsZU9wdG1pemUgbm90IHByZXNlbnQnKTtcbiAgICB9XG5cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app/googleOptimize/optimize.js\n");

/***/ }),

/***/ "./src/js/app/optimizely/classic.js":
/*!******************************************!*\
  !*** ./src/js/app/optimizely/classic.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ \"./src/js/app/services/helper.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n    if (Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"optimizelyClassicIsPresent\"])()) {\r\n\r\n        window.TestSpy.optimizelyClassic['present'] = true;\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Optimizely Classic present:');\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getOptimizelyClassicInfo\"])();\r\n    } else {\r\n        window.TestSpy.optimizelyClassic['present'] = false;\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Optimizely Classic not present');\r\n    }\r\n\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwL29wdGltaXplbHkvY2xhc3NpYy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAvb3B0aW1pemVseS9jbGFzc2ljLmpzP2Q3MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIG9wdGltaXplbHlDbGFzc2ljSXNQcmVzZW50LFxyXG4gICAgZ2V0T3B0aW1pemVseUNsYXNzaWNJbmZvLFxyXG4gICAgbG9nXHJcbn0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgaWYgKG9wdGltaXplbHlDbGFzc2ljSXNQcmVzZW50KCkpIHtcclxuXHJcbiAgICAgICAgd2luZG93LlRlc3RTcHkub3B0aW1pemVseUNsYXNzaWNbJ3ByZXNlbnQnXSA9IHRydWU7XHJcbiAgICAgICAgbG9nKCdPcHRpbWl6ZWx5IENsYXNzaWMgcHJlc2VudDonKTtcclxuICAgICAgICBnZXRPcHRpbWl6ZWx5Q2xhc3NpY0luZm8oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LlRlc3RTcHkub3B0aW1pemVseUNsYXNzaWNbJ3ByZXNlbnQnXSA9IGZhbHNlO1xyXG4gICAgICAgIGxvZygnT3B0aW1pemVseSBDbGFzc2ljIG5vdCBwcmVzZW50Jyk7XHJcbiAgICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app/optimizely/classic.js\n");

/***/ }),

/***/ "./src/js/app/optimizely/optimizelyX.js":
/*!**********************************************!*\
  !*** ./src/js/app/optimizely/optimizelyX.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ \"./src/js/app/services/helper.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\r\n    if (Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"optimizelyXIsPresent\"])()) {\r\n        window.TestSpy.optimizelyX['present'] = true;\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Optimizely X present:');\r\n\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getActiveExperiments\"])();\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getActiveCampaigns\"])();\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getActiveAudiences\"])();\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"getActivePages\"])();\r\n\r\n\r\n    } else {\r\n        window.TestSpy.optimizelyX['present'] = false;\r\n        Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Optimizely X not present');\r\n    }\r\n\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwL29wdGltaXplbHkvb3B0aW1pemVseVguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwL29wdGltaXplbHkvb3B0aW1pemVseVguanM/NTY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgb3B0aW1pemVseVhJc1ByZXNlbnQsXHJcbiAgICBsb2csXHJcbiAgICBnZXRBY3RpdmVFeHBlcmltZW50cyxcclxuICAgIGdldEFjdGl2ZUNhbXBhaWducyxcclxuICAgIGdldEFjdGl2ZUF1ZGllbmNlcyxcclxuICAgIGdldEFjdGl2ZVBhZ2VzXHJcbn0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgaWYgKG9wdGltaXplbHlYSXNQcmVzZW50KCkpIHtcclxuICAgICAgICB3aW5kb3cuVGVzdFNweS5vcHRpbWl6ZWx5WFsncHJlc2VudCddID0gdHJ1ZTtcclxuICAgICAgICBsb2coJ09wdGltaXplbHkgWCBwcmVzZW50OicpO1xyXG5cclxuICAgICAgICBnZXRBY3RpdmVFeHBlcmltZW50cygpO1xyXG4gICAgICAgIGdldEFjdGl2ZUNhbXBhaWducygpO1xyXG4gICAgICAgIGdldEFjdGl2ZUF1ZGllbmNlcygpO1xyXG4gICAgICAgIGdldEFjdGl2ZVBhZ2VzKCk7XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LlRlc3RTcHkub3B0aW1pemVseVhbJ3ByZXNlbnQnXSA9IGZhbHNlO1xyXG4gICAgICAgIGxvZygnT3B0aW1pemVseSBYIG5vdCBwcmVzZW50Jyk7XHJcbiAgICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app/optimizely/optimizelyX.js\n");

/***/ }),

/***/ "./src/js/app/services/constant.js":
/*!*****************************************!*\
  !*** ./src/js/app/services/constant.js ***!
  \*****************************************/
/*! exports provided: tesSpyObj, cookieName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tesSpyObj\", function() { return tesSpyObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cookieName\", function() { return cookieName; });\nconst tesSpyObj = {\n    optimizelyClassic: {\n        src:{\n            imgLink:'classic.jpeg'\n        }\n    },\n    optimizelyX: {\n        src:{\n            imgLink:'optimizelyX.png'\n        }\n    },\n    adobeTestAndTarget: {\n        src:{\n            imgLink:'adobeTest.jpg'\n        }\n    },\n    googleOptmize: {\n        src:{\n            imgLink:'googleOptimize.png'\n        }\n    },\n};\n\nconst cookieName = 'Test_Spy'//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwL3NlcnZpY2VzL2NvbnN0YW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC9zZXJ2aWNlcy9jb25zdGFudC5qcz84NDVmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZXNTcHlPYmogPSB7XG4gICAgb3B0aW1pemVseUNsYXNzaWM6IHtcbiAgICAgICAgc3JjOntcbiAgICAgICAgICAgIGltZ0xpbms6J2NsYXNzaWMuanBlZydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb3B0aW1pemVseVg6IHtcbiAgICAgICAgc3JjOntcbiAgICAgICAgICAgIGltZ0xpbms6J29wdGltaXplbHlYLnBuZydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWRvYmVUZXN0QW5kVGFyZ2V0OiB7XG4gICAgICAgIHNyYzp7XG4gICAgICAgICAgICBpbWdMaW5rOidhZG9iZVRlc3QuanBnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnb29nbGVPcHRtaXplOiB7XG4gICAgICAgIHNyYzp7XG4gICAgICAgICAgICBpbWdMaW5rOidnb29nbGVPcHRpbWl6ZS5wbmcnXG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGNvb2tpZU5hbWUgPSAnVGVzdF9TcHknIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app/services/constant.js\n");

/***/ }),

/***/ "./src/js/app/services/helper.js":
/*!***************************************!*\
  !*** ./src/js/app/services/helper.js ***!
  \***************************************/
/*! exports provided: adobeTestAndTargetIsPresent, getAdobeTestAndTargetInfo, optimizelyClassicIsPresent, googleOptimizeIsPresent, getOptimizelyClassicInfo, optimizelyXIsPresent, log, logBold, getActiveExperiments, getExperimentInfo, getActiveCampaignName, getActiveCampaigns, getActiveAudiences, getActivePagesName, getActivePages, getCookieValue, getGoogleOptimizeExperimentId, getGoogleOptimizeVariationInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"adobeTestAndTargetIsPresent\", function() { return adobeTestAndTargetIsPresent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAdobeTestAndTargetInfo\", function() { return getAdobeTestAndTargetInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optimizelyClassicIsPresent\", function() { return optimizelyClassicIsPresent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"googleOptimizeIsPresent\", function() { return googleOptimizeIsPresent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOptimizelyClassicInfo\", function() { return getOptimizelyClassicInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optimizelyXIsPresent\", function() { return optimizelyXIsPresent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logBold\", function() { return logBold; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveExperiments\", function() { return getActiveExperiments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getExperimentInfo\", function() { return getExperimentInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveCampaignName\", function() { return getActiveCampaignName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveCampaigns\", function() { return getActiveCampaigns; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActiveAudiences\", function() { return getActiveAudiences; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActivePagesName\", function() { return getActivePagesName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActivePages\", function() { return getActivePages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCookieValue\", function() { return getCookieValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGoogleOptimizeExperimentId\", function() { return getGoogleOptimizeExperimentId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGoogleOptimizeVariationInfo\", function() { return getGoogleOptimizeVariationInfo; });\n// adobe Target\r\nfunction adobeTestAndTargetIsPresent() {\r\n    return (window.adobe && window.adobe.target) || window.TNT;\r\n}\r\n\r\nfunction getAdobeTestAndTargetInfo() {\r\n    // TODO\r\n}\r\n\r\n// optimizely Classic\r\n\r\nfunction optimizelyClassicIsPresent() {\r\n    return window.optimizely && !window.optimizely.hasOwnProperty('get');\r\n}\r\n\r\nfunction googleOptimizeIsPresent(){\r\n    return window.google_optimize && window.google_optimize.hasOwnProperty('get');\r\n}\r\n\r\nfunction getOptimizelyClassicInfo() {\r\n    // TODO\r\n}\r\n\r\n// optimizely X \r\n\r\nfunction optimizelyXIsPresent() {\r\n    return window.optimizely && window.optimizely.hasOwnProperty('get');\r\n}\r\n\r\nfunction log(msg,option='') {\r\n    console.info('TestSpy:', msg, option);\r\n}\r\nfunction logBold(msg) {\r\n    console.info(\r\n        '%cTestSpy:' + `%c ${msg}`,\r\n        'font-weight: normal',\r\n        'font-weight: 900',\r\n    );\r\n  }\r\n\r\n// function related to optimizelyX\r\n\r\nfunction getActiveExperiments() {\r\n    let activeExperiments = optimizely.get('state').getActiveExperimentIds();\r\n    if (activeExperiments.length) {\r\n\r\n        window.TestSpy.optimizelyX['activeExperiments'] = [];\r\n        log('  Active Experiments:');\r\n        // getting Experiment States of only Active experiments\r\n        let states = optimizely\r\n            .get('state')\r\n            .getExperimentStates({\r\n                isActive: true\r\n            });\r\n        activeExperiments.forEach(function(experimentID) {\r\n            getExperimentInfo(experimentID, states)\r\n        });\r\n\r\n    } else {\r\n        log('--No active experiments');\r\n        window.TestSpy.optimizelyX['activeExperiments'] = null;\r\n    }\r\n}\r\n\r\n\r\nfunction getExperimentInfo(experimentID, states) {\r\n    let experimentObj = {};\r\n    if (states[experimentID] !== undefined) {\r\n        experimentObj['experimentName'] =\r\n            states[experimentID].experimentName;\r\n        experimentObj['experimentID'] = experimentID;\r\n        experimentObj['variation'] = states[experimentID].variation;\r\n        window.TestSpy.optimizelyX['activeExperiments'].push(experimentObj);\r\n        logBold(`    ${experimentObj['experimentName']}`);\r\n        log(`      ${JSON.stringify(experimentObj['variation']['name'])}`);\r\n    }\r\n}\r\n\r\n\r\nfunction getActiveCampaignName(campaignId, activeCampaigns) {\r\n    return activeCampaigns[campaignId]['campaignName'];\r\n}\r\n\r\nfunction getActiveCampaigns() {\r\n    let activeCampaignsName = [];\r\n    let activeCampaigns = optimizely.get('state').getCampaignStates({\r\n        isActive: true,\r\n    });\r\n    // converting obj keys into an array of activeCampaignIds to getActiveCampaignName\r\n    let activeCampaignId = Object.keys(activeCampaigns);\r\n\r\n    activeCampaignId.forEach(function(activeCampaign) {\r\n        activeCampaignsName.push(getActiveCampaignName(activeCampaign, activeCampaigns))\r\n    });\r\n\r\n\r\n    log('  Active Campaigns:');\r\n    log(activeCampaignsName);\r\n}\r\n\r\n\r\nfunction getActiveAudiences() {\r\n    let audiences = [];\r\n    let d = window.optimizely.get('data');\r\n    optimizely\r\n        .get('state')\r\n        .getActiveExperimentIds()\r\n        .map(function(exp_id) {\r\n            audiences.push(d.experiments[exp_id].audienceName);\r\n        });\r\n    window.TestSpy.optimizelyX['activeAudiences'] = audiences;\r\n    log('  Active Audiences:');\r\n    log(audiences);\r\n}\r\n\r\nfunction getActivePagesName(pageId, activePages) {\r\n    return activePages[pageId]['name'];\r\n}\r\n\r\nfunction getActivePages() {\r\n    let activePagesArr = [];\r\n    let activePages = window.optimizely.get('state').getPageStates({\r\n        isActive: true,\r\n    });\r\n    let activePagesId = Object.keys(activePages);\r\n    activePagesId.forEach(function(pageId) {\r\n        activePagesArr.push(getActivePagesName(pageId,activePages))\r\n    });\r\n\r\n    window.TestSpy.optimizelyX['activePages'] = activePagesArr;\r\n\r\n    log('  Active Pages:');\r\n    log(activePagesArr);\r\n}\r\n\r\n    function getCookieValue(cookieName) {\r\n        var result = document.cookie.match('(^|;)\\\\s*' + cookieName + '\\\\s*=\\\\s*([^;]+)');\r\n        return result ? result.pop() : '';\r\n    }\r\n\r\nfunction getGoogleOptimizeExperimentId() {\r\n    var cookie = getCookieValue('_gaexp');\r\n    if (cookie == undefined) {\r\n        return \"No expirement is Running\";\r\n    } else {\r\n        var fields = cookie.split('.');\r\n        window.TestSpy.googleOptmize['activeExperiments'] = [];\r\n        window.TestSpy.googleOptmize.activeExperiments.push({experimentName:'Not Found',experimentID:fields[2]})\r\n        return fields[2];\r\n    }\r\n}\r\n\r\nfunction getGoogleOptimizeVariationInfo(experimentID) {\r\n    window.TestSpy.googleOptmize['activeExperiments'][0].variation = {id : JSON.stringify(window.google_optimize && window.google_optimize.get(experimentID)) || 'No variation is running', name:'Not Found'};\r\n    return window.google_optimize && window.google_optimize.get(experimentID) || 'No variation is running';\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwL3NlcnZpY2VzL2hlbHBlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAvc2VydmljZXMvaGVscGVyLmpzPzdiNDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRvYmUgVGFyZ2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBhZG9iZVRlc3RBbmRUYXJnZXRJc1ByZXNlbnQoKSB7XHJcbiAgICByZXR1cm4gKHdpbmRvdy5hZG9iZSAmJiB3aW5kb3cuYWRvYmUudGFyZ2V0KSB8fCB3aW5kb3cuVE5UO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRvYmVUZXN0QW5kVGFyZ2V0SW5mbygpIHtcclxuICAgIC8vIFRPRE9cclxufVxyXG5cclxuLy8gb3B0aW1pemVseSBDbGFzc2ljXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVseUNsYXNzaWNJc1ByZXNlbnQoKSB7XHJcbiAgICByZXR1cm4gd2luZG93Lm9wdGltaXplbHkgJiYgIXdpbmRvdy5vcHRpbWl6ZWx5Lmhhc093blByb3BlcnR5KCdnZXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvb2dsZU9wdGltaXplSXNQcmVzZW50KCl7XHJcbiAgICByZXR1cm4gd2luZG93Lmdvb2dsZV9vcHRpbWl6ZSAmJiB3aW5kb3cuZ29vZ2xlX29wdGltaXplLmhhc093blByb3BlcnR5KCdnZXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGltaXplbHlDbGFzc2ljSW5mbygpIHtcclxuICAgIC8vIFRPRE9cclxufVxyXG5cclxuLy8gb3B0aW1pemVseSBYIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wdGltaXplbHlYSXNQcmVzZW50KCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5vcHRpbWl6ZWx5ICYmIHdpbmRvdy5vcHRpbWl6ZWx5Lmhhc093blByb3BlcnR5KCdnZXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhtc2csb3B0aW9uPScnKSB7XHJcbiAgICBjb25zb2xlLmluZm8oJ1Rlc3RTcHk6JywgbXNnLCBvcHRpb24pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dCb2xkKG1zZykge1xyXG4gICAgY29uc29sZS5pbmZvKFxyXG4gICAgICAgICclY1Rlc3RTcHk6JyArIGAlYyAke21zZ31gLFxyXG4gICAgICAgICdmb250LXdlaWdodDogbm9ybWFsJyxcclxuICAgICAgICAnZm9udC13ZWlnaHQ6IDkwMCcsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHJlbGF0ZWQgdG8gb3B0aW1pemVseVhcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVFeHBlcmltZW50cygpIHtcclxuICAgIGxldCBhY3RpdmVFeHBlcmltZW50cyA9IG9wdGltaXplbHkuZ2V0KCdzdGF0ZScpLmdldEFjdGl2ZUV4cGVyaW1lbnRJZHMoKTtcclxuICAgIGlmIChhY3RpdmVFeHBlcmltZW50cy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgd2luZG93LlRlc3RTcHkub3B0aW1pemVseVhbJ2FjdGl2ZUV4cGVyaW1lbnRzJ10gPSBbXTtcclxuICAgICAgICBsb2coJyAgQWN0aXZlIEV4cGVyaW1lbnRzOicpO1xyXG4gICAgICAgIC8vIGdldHRpbmcgRXhwZXJpbWVudCBTdGF0ZXMgb2Ygb25seSBBY3RpdmUgZXhwZXJpbWVudHNcclxuICAgICAgICBsZXQgc3RhdGVzID0gb3B0aW1pemVseVxyXG4gICAgICAgICAgICAuZ2V0KCdzdGF0ZScpXHJcbiAgICAgICAgICAgIC5nZXRFeHBlcmltZW50U3RhdGVzKHtcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGFjdGl2ZUV4cGVyaW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZXhwZXJpbWVudElEKSB7XHJcbiAgICAgICAgICAgIGdldEV4cGVyaW1lbnRJbmZvKGV4cGVyaW1lbnRJRCwgc3RhdGVzKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9nKCctLU5vIGFjdGl2ZSBleHBlcmltZW50cycpO1xyXG4gICAgICAgIHdpbmRvdy5UZXN0U3B5Lm9wdGltaXplbHlYWydhY3RpdmVFeHBlcmltZW50cyddID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHBlcmltZW50SW5mbyhleHBlcmltZW50SUQsIHN0YXRlcykge1xyXG4gICAgbGV0IGV4cGVyaW1lbnRPYmogPSB7fTtcclxuICAgIGlmIChzdGF0ZXNbZXhwZXJpbWVudElEXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZXhwZXJpbWVudE9ialsnZXhwZXJpbWVudE5hbWUnXSA9XHJcbiAgICAgICAgICAgIHN0YXRlc1tleHBlcmltZW50SURdLmV4cGVyaW1lbnROYW1lO1xyXG4gICAgICAgIGV4cGVyaW1lbnRPYmpbJ2V4cGVyaW1lbnRJRCddID0gZXhwZXJpbWVudElEO1xyXG4gICAgICAgIGV4cGVyaW1lbnRPYmpbJ3ZhcmlhdGlvbiddID0gc3RhdGVzW2V4cGVyaW1lbnRJRF0udmFyaWF0aW9uO1xyXG4gICAgICAgIHdpbmRvdy5UZXN0U3B5Lm9wdGltaXplbHlYWydhY3RpdmVFeHBlcmltZW50cyddLnB1c2goZXhwZXJpbWVudE9iaik7XHJcbiAgICAgICAgbG9nQm9sZChgICAgICR7ZXhwZXJpbWVudE9ialsnZXhwZXJpbWVudE5hbWUnXX1gKTtcclxuICAgICAgICBsb2coYCAgICAgICR7SlNPTi5zdHJpbmdpZnkoZXhwZXJpbWVudE9ialsndmFyaWF0aW9uJ11bJ25hbWUnXSl9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlQ2FtcGFpZ25OYW1lKGNhbXBhaWduSWQsIGFjdGl2ZUNhbXBhaWducykge1xyXG4gICAgcmV0dXJuIGFjdGl2ZUNhbXBhaWduc1tjYW1wYWlnbklkXVsnY2FtcGFpZ25OYW1lJ107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVDYW1wYWlnbnMoKSB7XHJcbiAgICBsZXQgYWN0aXZlQ2FtcGFpZ25zTmFtZSA9IFtdO1xyXG4gICAgbGV0IGFjdGl2ZUNhbXBhaWducyA9IG9wdGltaXplbHkuZ2V0KCdzdGF0ZScpLmdldENhbXBhaWduU3RhdGVzKHtcclxuICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgLy8gY29udmVydGluZyBvYmoga2V5cyBpbnRvIGFuIGFycmF5IG9mIGFjdGl2ZUNhbXBhaWduSWRzIHRvIGdldEFjdGl2ZUNhbXBhaWduTmFtZVxyXG4gICAgbGV0IGFjdGl2ZUNhbXBhaWduSWQgPSBPYmplY3Qua2V5cyhhY3RpdmVDYW1wYWlnbnMpO1xyXG5cclxuICAgIGFjdGl2ZUNhbXBhaWduSWQuZm9yRWFjaChmdW5jdGlvbihhY3RpdmVDYW1wYWlnbikge1xyXG4gICAgICAgIGFjdGl2ZUNhbXBhaWduc05hbWUucHVzaChnZXRBY3RpdmVDYW1wYWlnbk5hbWUoYWN0aXZlQ2FtcGFpZ24sIGFjdGl2ZUNhbXBhaWducykpXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgbG9nKCcgIEFjdGl2ZSBDYW1wYWlnbnM6Jyk7XHJcbiAgICBsb2coYWN0aXZlQ2FtcGFpZ25zTmFtZSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlQXVkaWVuY2VzKCkge1xyXG4gICAgbGV0IGF1ZGllbmNlcyA9IFtdO1xyXG4gICAgbGV0IGQgPSB3aW5kb3cub3B0aW1pemVseS5nZXQoJ2RhdGEnKTtcclxuICAgIG9wdGltaXplbHlcclxuICAgICAgICAuZ2V0KCdzdGF0ZScpXHJcbiAgICAgICAgLmdldEFjdGl2ZUV4cGVyaW1lbnRJZHMoKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oZXhwX2lkKSB7XHJcbiAgICAgICAgICAgIGF1ZGllbmNlcy5wdXNoKGQuZXhwZXJpbWVudHNbZXhwX2lkXS5hdWRpZW5jZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgd2luZG93LlRlc3RTcHkub3B0aW1pemVseVhbJ2FjdGl2ZUF1ZGllbmNlcyddID0gYXVkaWVuY2VzO1xyXG4gICAgbG9nKCcgIEFjdGl2ZSBBdWRpZW5jZXM6Jyk7XHJcbiAgICBsb2coYXVkaWVuY2VzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVBhZ2VzTmFtZShwYWdlSWQsIGFjdGl2ZVBhZ2VzKSB7XHJcbiAgICByZXR1cm4gYWN0aXZlUGFnZXNbcGFnZUlkXVsnbmFtZSddO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlUGFnZXMoKSB7XHJcbiAgICBsZXQgYWN0aXZlUGFnZXNBcnIgPSBbXTtcclxuICAgIGxldCBhY3RpdmVQYWdlcyA9IHdpbmRvdy5vcHRpbWl6ZWx5LmdldCgnc3RhdGUnKS5nZXRQYWdlU3RhdGVzKHtcclxuICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgbGV0IGFjdGl2ZVBhZ2VzSWQgPSBPYmplY3Qua2V5cyhhY3RpdmVQYWdlcyk7XHJcbiAgICBhY3RpdmVQYWdlc0lkLmZvckVhY2goZnVuY3Rpb24ocGFnZUlkKSB7XHJcbiAgICAgICAgYWN0aXZlUGFnZXNBcnIucHVzaChnZXRBY3RpdmVQYWdlc05hbWUocGFnZUlkLGFjdGl2ZVBhZ2VzKSlcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5UZXN0U3B5Lm9wdGltaXplbHlYWydhY3RpdmVQYWdlcyddID0gYWN0aXZlUGFnZXNBcnI7XHJcblxyXG4gICAgbG9nKCcgIEFjdGl2ZSBQYWdlczonKTtcclxuICAgIGxvZyhhY3RpdmVQYWdlc0Fycik7XHJcbn1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llVmFsdWUoY29va2llTmFtZSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBkb2N1bWVudC5jb29raWUubWF0Y2goJyhefDspXFxcXHMqJyArIGNvb2tpZU5hbWUgKyAnXFxcXHMqPVxcXFxzKihbXjtdKyknKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LnBvcCgpIDogJyc7XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R29vZ2xlT3B0aW1pemVFeHBlcmltZW50SWQoKSB7XHJcbiAgICB2YXIgY29va2llID0gZ2V0Q29va2llVmFsdWUoJ19nYWV4cCcpO1xyXG4gICAgaWYgKGNvb2tpZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gXCJObyBleHBpcmVtZW50IGlzIFJ1bm5pbmdcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGZpZWxkcyA9IGNvb2tpZS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHdpbmRvdy5UZXN0U3B5Lmdvb2dsZU9wdG1pemVbJ2FjdGl2ZUV4cGVyaW1lbnRzJ10gPSBbXTtcclxuICAgICAgICB3aW5kb3cuVGVzdFNweS5nb29nbGVPcHRtaXplLmFjdGl2ZUV4cGVyaW1lbnRzLnB1c2goe2V4cGVyaW1lbnROYW1lOidOb3QgRm91bmQnLGV4cGVyaW1lbnRJRDpmaWVsZHNbMl19KVxyXG4gICAgICAgIHJldHVybiBmaWVsZHNbMl07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHb29nbGVPcHRpbWl6ZVZhcmlhdGlvbkluZm8oZXhwZXJpbWVudElEKSB7XHJcbiAgICB3aW5kb3cuVGVzdFNweS5nb29nbGVPcHRtaXplWydhY3RpdmVFeHBlcmltZW50cyddWzBdLnZhcmlhdGlvbiA9IHtpZCA6IEpTT04uc3RyaW5naWZ5KHdpbmRvdy5nb29nbGVfb3B0aW1pemUgJiYgd2luZG93Lmdvb2dsZV9vcHRpbWl6ZS5nZXQoZXhwZXJpbWVudElEKSkgfHwgJ05vIHZhcmlhdGlvbiBpcyBydW5uaW5nJywgbmFtZTonTm90IEZvdW5kJ307XHJcbiAgICByZXR1cm4gd2luZG93Lmdvb2dsZV9vcHRpbWl6ZSAmJiB3aW5kb3cuZ29vZ2xlX29wdGltaXplLmdldChleHBlcmltZW50SUQpIHx8ICdObyB2YXJpYXRpb24gaXMgcnVubmluZyc7XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app/services/helper.js\n");

/***/ }),

/***/ "./src/js/content-script.js":
/*!**********************************!*\
  !*** ./src/js/content-script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_optimizely_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/optimizely/classic */ \"./src/js/app/optimizely/classic.js\");\n/* harmony import */ var _app_optimizely_optimizelyX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/optimizely/optimizelyX */ \"./src/js/app/optimizely/optimizelyX.js\");\n/* harmony import */ var _app_adobe_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/adobe/target */ \"./src/js/app/adobe/target.js\");\n/* harmony import */ var _app_googleOptimize_optimize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/googleOptimize/optimize */ \"./src/js/app/googleOptimize/optimize.js\");\n/* harmony import */ var _app_services_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/services/constant */ \"./src/js/app/services/constant.js\");\n/* harmony import */ var _app_services_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/services/helper */ \"./src/js/app/services/helper.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * ***************\r\n * Begin execution\r\n * ***************\r\n */\r\n// Store messages and utility functions in a global object\r\nwindow.TestSpy = _app_services_constant__WEBPACK_IMPORTED_MODULE_4__[\"tesSpyObj\"];\r\n\r\nlogGreeting();\r\nObject(_app_optimizely_classic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nObject(_app_optimizely_optimizelyX__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_app_adobe_target__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nObject(_app_googleOptimize_optimize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\r\n// after registering it in chrome  replace it with given by chrome\r\n// https://developer.chrome.com/extensions/messaging\r\n\r\ndocument.cookie = _app_services_constant__WEBPACK_IMPORTED_MODULE_4__[\"cookieName\"]+\"=\"+JSON.stringify(window.TestSpy)\r\n\r\nfunction logGreeting() {\r\n    Object(_app_services_helper__WEBPACK_IMPORTED_MODULE_5__[\"log\"])('TestSpy');\r\n    Object(_app_services_helper__WEBPACK_IMPORTED_MODULE_5__[\"log\"])('--------------------');\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29udGVudC1zY3JpcHQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGVudC1zY3JpcHQuanM/OTJiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlY2tPcHRpbWl6ZWx5Q2xhc3NpYyBmcm9tICcuL2FwcC9vcHRpbWl6ZWx5L2NsYXNzaWMnXHJcbmltcG9ydCBjaGVja09wdGltaXplbHlYIGZyb20gJy4vYXBwL29wdGltaXplbHkvb3B0aW1pemVseVgnXHJcbmltcG9ydCBjaGVja0Fkb2JlVGVzdEFuZFRhcmdldCBmcm9tICcuL2FwcC9hZG9iZS90YXJnZXQnXHJcbmltcG9ydCBjaGVja0dvb2dsZU9wdGltaXplIGZyb20gJy4vYXBwL2dvb2dsZU9wdGltaXplL29wdGltaXplJ1xyXG5pbXBvcnQge3Rlc1NweU9iaixjb29raWVOYW1lfSBmcm9tICcuL2FwcC9zZXJ2aWNlcy9jb25zdGFudCc7XHJcbmltcG9ydCB7XHJcbiAgICBsb2dcclxufSBmcm9tICcuL2FwcC9zZXJ2aWNlcy9oZWxwZXInXHJcblxyXG4vKipcclxuICogKioqKioqKioqKioqKioqXHJcbiAqIEJlZ2luIGV4ZWN1dGlvblxyXG4gKiAqKioqKioqKioqKioqKipcclxuICovXHJcbi8vIFN0b3JlIG1lc3NhZ2VzIGFuZCB1dGlsaXR5IGZ1bmN0aW9ucyBpbiBhIGdsb2JhbCBvYmplY3Rcclxud2luZG93LlRlc3RTcHkgPSB0ZXNTcHlPYmo7XHJcblxyXG5sb2dHcmVldGluZygpO1xyXG5jaGVja09wdGltaXplbHlDbGFzc2ljKCk7XHJcbmNoZWNrT3B0aW1pemVseVgoKTtcclxuY2hlY2tBZG9iZVRlc3RBbmRUYXJnZXQoKTtcclxuY2hlY2tHb29nbGVPcHRpbWl6ZSgpO1xyXG5cclxuXHJcbi8vIGFmdGVyIHJlZ2lzdGVyaW5nIGl0IGluIGNocm9tZSAgcmVwbGFjZSBpdCB3aXRoIGdpdmVuIGJ5IGNocm9tZVxyXG4vLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2V4dGVuc2lvbnMvbWVzc2FnaW5nXHJcblxyXG5kb2N1bWVudC5jb29raWUgPSBjb29raWVOYW1lK1wiPVwiK0pTT04uc3RyaW5naWZ5KHdpbmRvdy5UZXN0U3B5KVxyXG5cclxuZnVuY3Rpb24gbG9nR3JlZXRpbmcoKSB7XHJcbiAgICBsb2coJ1Rlc3RTcHknKTtcclxuICAgIGxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/content-script.js\n");

/***/ })

/******/ });