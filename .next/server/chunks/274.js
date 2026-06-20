"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 8846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Lumenlogo.b963b744.png","height":369,"width":677,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAWklEQVR42mMAAdWtvxhBNO/GN8J2V79Kg9iclz8BxWBg430mECWx/keo1pMnZQzYgIZvgaxy8bo40YlzYtVP31QEiSku3oswxcwrRcgTaIgvQ6C03arTAjBxAAHFGRfRI6nrAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 1274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "lucide-react"
var external_lucide_react_ = __webpack_require__(2423);
// EXTERNAL MODULE: ./src/assets/icons/Lumenlogo.png
var Lumenlogo = __webpack_require__(8846);
;// CONCATENATED MODULE: ./src/components/common/Footer/footer.jsx





function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "relative pt-20 pb-12 overflow-hidden",
        style: {
            background: "linear-gradient(160deg, #F0F8FF 0%, #EAF9F9 100%)",
            borderTop: "1px solid rgba(26,110,191,0.10)"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute bottom-0 right-1/4 w-[500px] h-[200px] rounded-full blur-[100px] pointer-events-none",
                style: {
                    background: "rgba(0,194,199,0.08)"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 z-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "md:col-span-4 space-y-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative w-[200px] h-[62px]",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: Lumenlogo/* default */.Z,
                                    alt: "LumenFi Logo",
                                    fill: true,
                                    className: "object-contain"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "text-sm leading-relaxed max-w-sm",
                                style: {
                                    color: "#4A6080"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        className: "text-[#0D2240] text-base",
                                        children: "Light becomes Data."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    "Connectivity is Better with LiFi. Wireless communications that pushes connectivity to new limits with light."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2 text-xs font-mono font-bold px-3 py-1.5 rounded-lg w-max",
                                style: {
                                    background: "rgba(0,194,199,0.10)",
                                    border: "1px solid rgba(0,194,199,0.20)",
                                    color: "#1A6EBF"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ShieldCheck, {
                                        className: "w-4 h-4",
                                        style: {
                                            color: "#00C2C7"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "IEEE 802.11bb Architecture Compliant"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "md:col-span-2 space-y-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "text-xs font-bold font-mono tracking-wider uppercase pb-2",
                                style: {
                                    color: "#0D2240",
                                    borderBottom: "1px solid rgba(26,110,191,0.12)"
                                },
                                children: "Ecosystem"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "space-y-2.5 text-xs font-medium",
                                style: {
                                    color: "#4A6080"
                                },
                                children: [
                                    {
                                        label: "Home Kits",
                                        href: "/products"
                                    },
                                    {
                                        label: "Enterprise",
                                        href: "/#enterprise"
                                    },
                                    {
                                        label: "Hardware Core",
                                        href: "/products"
                                    },
                                    {
                                        label: "Desktop Receivers",
                                        href: "/products"
                                    }
                                ].map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: item.href,
                                            className: "flex items-center gap-1 group transition-colors hover:text-[#1A6EBF]",
                                            children: [
                                                item.label,
                                                /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ArrowUpRight, {
                                                    className: "w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                                })
                                            ]
                                        })
                                    }, item.label))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "md:col-span-2 space-y-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "text-xs font-bold font-mono tracking-wider uppercase pb-2",
                                style: {
                                    color: "#0D2240",
                                    borderBottom: "1px solid rgba(26,110,191,0.12)"
                                },
                                children: "Resources"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "space-y-2.5 text-xs font-medium",
                                style: {
                                    color: "#4A6080"
                                },
                                children: [
                                    {
                                        label: "Technical Registry",
                                        href: "/insights"
                                    },
                                    {
                                        label: "Validation Specs",
                                        href: "/insights#studies"
                                    },
                                    {
                                        label: "Signal Physics",
                                        href: "/what-is-lifi"
                                    },
                                    {
                                        label: "About Us",
                                        href: "/about"
                                    }
                                ].map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: item.href,
                                            className: "flex items-center gap-1 group transition-colors hover:text-[#1A6EBF]",
                                            children: [
                                                item.label,
                                                /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ArrowUpRight, {
                                                    className: "w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                                })
                                            ]
                                        })
                                    }, item.label))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "md:col-span-4 space-y-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "text-xs font-bold font-mono tracking-wider uppercase pb-2",
                                style: {
                                    color: "#0D2240",
                                    borderBottom: "1px solid rgba(26,110,191,0.12)"
                                },
                                children: "Engineering Digest"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-xs leading-relaxed",
                                style: {
                                    color: "#4A6080"
                                },
                                children: "Receive deployment logs, specification revisions, and operational hardware notifications."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                className: "relative flex items-center mt-2 rounded-xl p-1 transition-all duration-200",
                                style: {
                                    border: "1px solid rgba(26,110,191,0.15)",
                                    background: "white"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "email",
                                        placeholder: "Enter your email...",
                                        required: true,
                                        className: "bg-transparent placeholder:text-[#94A3B8] font-mono text-xs px-3 py-2 w-full focus:outline-none pr-12",
                                        style: {
                                            color: "#0D2240"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "submit",
                                        className: "absolute right-1 p-2 text-white rounded-lg transition-all duration-200 flex items-center justify-center",
                                        style: {
                                            background: "linear-gradient(135deg, #1A6EBF, #00C2C7)"
                                        },
                                        "aria-label": "Subscribe",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Send, {
                                            className: "w-3.5 h-3.5"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-7xl mx-auto px-6 mt-16 pt-6 text-[11px] font-mono flex flex-col md:flex-row justify-between items-center gap-4",
                style: {
                    borderTop: "1px solid rgba(26,110,191,0.10)",
                    color: "#94A3B8"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " LumenFi Global Systems. All rights reserved."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/privacy",
                                className: "px-3 py-1.5 rounded-lg border border-[#1A6EBF]/20 hover:border-[#1A6EBF] hover:text-[#1A6EBF] transition-all duration-200",
                                children: "Privacy Policy"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/terms",
                                className: "px-3 py-1.5 rounded-lg border border-[#1A6EBF]/20 hover:border-[#1A6EBF] hover:text-[#1A6EBF] transition-all duration-200",
                                children: "Terms & Conditions"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/common/Footer/index.jsx



/***/ })

};
;