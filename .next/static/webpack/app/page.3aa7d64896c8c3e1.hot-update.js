"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [stockInfo, setStockInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getInfo() {\n            try {\n                const APIKEY = \"MRcvITTGFqPJ_kTd_Mr28pizHcamN_on\";\n                const data = await fetch(\"https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=\" + APIKEY);\n                const jsonData = await data.json();\n                console.log(jsonData.results);\n            } catch (error) {\n                console.error(error);\n            }\n        }\n        getInfo();\n    }, []);\n    //\n    //  code\n    //\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello World!\"\n            }, void 0, false, {\n                fileName: \"A:\\\\Programming\\\\Self paced\\\\Major League Hacking\\\\React\\\\real-time-currencies\\\\src\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            pokemonImage && pokeData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: pokemonImage,\n                        style: {\n                            height: \"400px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Programming\\\\Self paced\\\\Major League Hacking\\\\React\\\\real-time-currencies\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: pokeData.name\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Programming\\\\Self paced\\\\Major League Hacking\\\\React\\\\real-time-currencies\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"A:\\\\Programming\\\\Self paced\\\\Major League Hacking\\\\React\\\\real-time-currencies\\\\src\\\\app\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"A:\\\\Programming\\\\Self paced\\\\Major League Hacking\\\\React\\\\real-time-currencies\\\\src\\\\app\\\\page.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"WWClU6PeTVhQ407Nk/l7OgE6Btk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ1E7QUFDSztBQUc1QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLENBQUM7SUFDNUNDLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZUk7WUFDYixJQUFJO2dCQUNGLE1BQU1DLFNBQVM7Z0JBQ2YsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLHlGQUF5RkY7Z0JBQ2xILE1BQU1HLFdBQVcsTUFBTUYsS0FBS0csSUFBSTtnQkFDaENDLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ksT0FBTztZQUM5QixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RILFFBQVFHLEtBQUssQ0FBQ0E7WUFDaEI7UUFDRjtRQUNBVDtJQUNGLEdBQUcsRUFBRTtJQUdMLEVBQUU7SUFDRixRQUFRO0lBQ1IsRUFBRTtJQUNGLHFCQUNFLDhEQUFDVTtRQUFLQyxXQUFXakIsOERBQVc7OzBCQUMxQiw4REFBQ2tCOzBCQUFHOzs7Ozs7WUFDSEMsZ0JBQWdCQyx5QkFDZjs7a0NBQ0UsOERBQUNDO3dCQUFJQyxLQUFLSDt3QkFBY0ksT0FBTzs0QkFBQ0MsUUFBTzt3QkFBTzs7Ozs7O2tDQUM5Qyw4REFBQ0M7a0NBQUdMLFNBQVNNLElBQUk7Ozs7Ozs7NkNBR25CLDhEQUFDRDs7Ozs7Ozs7Ozs7QUFLVDtHQWxDd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdG9ja0luZm8sIHNldFN0b2NrSW5mb10gPSB1c2VTdGF0ZSh7fSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJbmZvKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgQVBJS0VZID0gJ01SY3ZJVFRHRnFQSl9rVGRfTXIyOHBpekhjYW1OX29uJ1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnBvbHlnb24uaW8vdjIvYWdncy90aWNrZXIvQUFQTC9yYW5nZS8xL2RheS8yMDIzLTAxLTA5LzIwMjMtMDEtMDk/YXBpS2V5PScgKyBBUElLRVkpXG4gICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZGF0YS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2coanNvbkRhdGEucmVzdWx0cylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfVxuICAgIGdldEluZm8oKVxuICB9LCBbXSlcblxuXG4gIC8vXG4gIC8vICBjb2RlXG4gIC8vXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8aDE+SGVsbG8gV29ybGQhPC9oMT5cbiAgICAgIHtwb2tlbW9uSW1hZ2UgJiYgcG9rZURhdGEgP1xuICAgICAgICA8PlxuICAgICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uSW1hZ2V9IHN0eWxlPXt7aGVpZ2h0Oic0MDBweCd9fS8+XG4gICAgICAgICAgPHA+e3Bva2VEYXRhLm5hbWV9PC9wPlxuICAgICAgICA8Lz5cbiAgICAgICAgOlxuICAgICAgICA8cD48L3A+XG4gICAgICB9XG5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInN0b2NrSW5mbyIsInNldFN0b2NrSW5mbyIsImdldEluZm8iLCJBUElLRVkiLCJkYXRhIiwiZmV0Y2giLCJqc29uRGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsImVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwicG9rZW1vbkltYWdlIiwicG9rZURhdGEiLCJpbWciLCJzcmMiLCJzdHlsZSIsImhlaWdodCIsInAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});