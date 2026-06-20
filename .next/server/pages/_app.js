(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/assets/styles/global.css
var global = __webpack_require__(6033);
// EXTERNAL MODULE: ./src/context/content.jsx
var content = __webpack_require__(7610);
;// CONCATENATED MODULE: ./src/pages/_app.jsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(content/* AppProvider */.w, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 6033:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,610], () => (__webpack_exec__(6683)));
module.exports = __webpack_exports__;

})();