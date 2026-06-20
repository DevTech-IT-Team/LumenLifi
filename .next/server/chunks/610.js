"use strict";
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 7610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useApp),
/* harmony export */   "w": () => (/* binding */ AppProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function AppProvider({ children  }) {
    const [region, setRegion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Global");
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
        if (initialTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);
    const toggleTheme = ()=>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            region,
            setRegion,
            theme,
            toggleTheme
        },
        children: children
    });
}
const useApp = ()=>{
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
    if (!ctx) throw new Error("useApp must be used inside an AppProvider");
    return ctx;
};


/***/ })

};
;