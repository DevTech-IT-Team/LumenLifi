"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 5967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ WhatIsLiFiPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/common/Header/index.jsx + 1 modules
var Header = __webpack_require__(1909);
// EXTERNAL MODULE: ./src/components/common/Footer/index.jsx + 1 modules
var Footer = __webpack_require__(1274);
// EXTERNAL MODULE: ./src/components/ui/index.jsx
var ui = __webpack_require__(9564);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/assets/icons/index.jsx


const LightBeamIcon = ({ className ="w-6 h-6"  })=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 3v1.5M12 18.75V21M16.95 5.05l-1.06 1.06M7.11 16.89l-1.06 1.06M21 12h-1.5M5.25 12H3m13.95 6.95l-1.06-1.06M7.11 7.11l-1.06-1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
        })
    });
const ShieldIcon = ({ className ="w-6 h-6"  })=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z"
        })
    });

;// CONCATENATED MODULE: ./src/components/sections/technology/tech.jsx



function TechBenefits() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "py-24 max-w-7xl mx-auto px-6",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "text-3xl font-bold text-center mb-12",
                children: "Why Choose Optical LiFi Technology?"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui/* Card */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(LightBeamIcon, {
                                className: "w-12 h-12 text-[#E35325] mb-4"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold mb-2",
                                children: "1,000x More Bandwidth"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "The light spectrum offers exponentially greater deployment capacity than hyper-congested Radio Frequency channels."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui/* Card */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ShieldIcon, {
                                className: "w-12 h-12 text-[#E35325] mb-4"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold mb-2",
                                children: "Inherent Physical Security"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: "Light cannot pass through structural walls, restricting dynamic interception capabilities to absolute line-of-sight spaces."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/sections/technology/index.jsx


;// CONCATENATED MODULE: ./src/pages/what-is-lifi/index.jsx

 // Presuming structural layouts handle imports


function WhatIsLiFiPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pt-32 text-center flex-grow",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-5xl font-black",
                        children: "WHAT IS LIFI?"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-400 max-w-xl mx-auto mt-4",
                        children: "Discover data transmission via light waves instead of traditional radio frequencies."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(TechBenefits, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fwhat-is-lifi&absolutePagePath=private-next-pages%2Fwhat-is-lifi%2Findex.jsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 9564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card),
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ variant ="primary" , children , className ="" , ...props })=>{
    const baseStyle = "px-6 py-3 rounded-sm font-bold tracking-wider text-xs uppercase transition-all duration-300";
    const variants = {
        primary: "bg-[#E35325] text-white hover:bg-[#C24114] glow-effect",
        secondary: "bg-[#151D30] text-white hover:bg-opacity-80 border border-gray-800",
        outline: "border border-white text-white hover:bg-white hover:text-black"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${baseStyle} ${variants[variant]} ${className}`,
        ...props,
        children: children
    });
};
const Card = ({ children , className =""  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `bg-[#151D30] border border-gray-800/60 p-6 rounded-sm hover:border-gray-700 transition-all ${className}`,
        children: children
    });


/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("lucide-react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,274,610,909], () => (__webpack_exec__(5967)));
module.exports = __webpack_exports__;

})();