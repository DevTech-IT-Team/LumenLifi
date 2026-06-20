"use strict";
(() => {
var exports = {};
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 7299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_products_residential_jsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_products_residential_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_products_residential_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_products_residential_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LumenPhiProductsSuite)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1909);
/* harmony import */ var _components_common_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1274);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const productsData = [
    {
        slug: "lumen-core-router",
        name: "Lumen LIFI",
        badge: "Central Gateway Unit",
        tagline: "The optical heart of your residential lightwave network.",
        desc: "Translates incoming fiber gigabit data lines directly into high-frequency optical signals. Plugs right into your home connection and powers the ceiling light array without emitting radio clutter.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu,
        accent: "from-emerald-500 to-teal-500",
        bg: "bg-emerald-50/30",
        border: "border-emerald-100",
        imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        specs: [
            "Fiber-to-Light Processing Unit",
            "Zero Radio Frequency Clutter",
            "Multi-room Driver Array"
        ]
    },
    {
        slug: "photon-antenna-light",
        name: "Lumen LIFI",
        badge: "Optical Transmitter Node",
        tagline: "High-speed broadband beams hidden inside architectural lighting.",
        desc: "Replaces traditional radio antennas with premium, flicker-free ceiling transceivers. Floods your workspace or living room with warm illumination and multi-gigabit data simultaneously.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Sun,
        accent: "from-amber-500 to-orange-500",
        bg: "bg-amber-50/30",
        border: "border-amber-100",
        imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600",
        specs: [
            "Dual-Function LED Engineering",
            "Symmetric Gigabit Downlink",
            "Complete Wall-Contained Signal"
        ]
    },
    {
        slug: "lumen-usb-dongle",
        name: "Lumen LIFI",
        badge: "Client Device Adapter",
        tagline: "Instant LiFi capability for your laptops and computers.",
        desc: "An ultra-lightweight high-tech adapter that snaps into any standard USB-C port. Houses microscopic optical sensors that capture the data beam from your lighting layout seamlessly.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Laptop,
        accent: "from-cyan-500 to-blue-500",
        bg: "bg-cyan-50/30",
        border: "border-cyan-100",
        imageUrl: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
        specs: [
            "Plug-and-Play Configuration",
            "Microscopic Optical Array",
            "Low Power Consumption Rate"
        ]
    }
];
function LumenPhiProductsSuite() {
    const [selectedProductSlug, setSelectedProductSlug] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [activeFaq, setActiveFaq] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const activeProduct = productsData.find((p)=>p.slug === selectedProductSlug) || null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen font-sans bg-white text-slate-800 antialiased selection:bg-emerald-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Lumen LIFI"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Lumen LIFI — residential optical wireless internet plans and hardware."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "pt-24 select-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-slate-900 text-slate-200 text-xs py-2.5 px-4 border-b border-slate-800",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "flex items-center gap-2 font-mono",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck, {
                                            className: "w-4 h-4 text-emerald-400 shrink-0"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Verified Merchant Processing Compliance Layer Active"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-4 font-mono text-[11px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-slate-400",
                                            children: "100% Secure Checkout"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-slate-400",
                                            children: "30-Day Money-Back Guarantee"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                        mode: "wait",
                        children: !activeProduct ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "py-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-7xl mx-auto px-6 mb-20",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-950 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "lg:col-span-7 space-y-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950 border border-emerald-800/60 px-3 py-1 rounded-full w-max block",
                                                        children: "The Next Leap in Home Internet"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        className: "text-4xl sm:text-5xl font-black tracking-tight leading-tight",
                                                        children: [
                                                            "Internet Delivered at the ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent",
                                                                children: "Speed of Light."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-slate-400 text-sm leading-relaxed max-w-xl",
                                                        children: "Lumen LIFI replaces congested, traditional home broadband with lightning-fast optical wireless technology. Experience pristine, dedicated connectivity built for modern streaming, professional home workspaces, and advanced AI application tracking."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-wrap gap-4 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-slate-300",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                        className: "w-4 h-4 text-emerald-400"
                                                                    }),
                                                                    " Outperforms Traditional WiFi"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-slate-300",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                        className: "w-4 h-4 text-emerald-400"
                                                                    }),
                                                                    " No Signal Dead Zones"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "lg:col-span-5 bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center gap-2 text-amber-400",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Info, {
                                                                className: "w-4 h-4 shrink-0"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "text-xs font-mono font-bold uppercase tracking-wider",
                                                                children: "Crucial Science Parameter"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "text-base font-bold text-white tracking-tight",
                                                        children: "How is LiFi different from WiFi?"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-xs text-slate-400 leading-relaxed",
                                                        children: [
                                                            "Traditional ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                children: "WiFi uses congested radio waves"
                                                            }),
                                                            " to pass data, which easily drops speeds due to neighboring router interference."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-xs text-slate-400 leading-relaxed",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                children: "Lumen LIFI transmits data through pristine light waves"
                                                            }),
                                                            " emitted from advanced LED components. This provides dedicated high-bandwidth beams that cannot be choked or intercepted from outside your walls."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-7xl mx-auto px-6 mb-24",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "max-w-3xl mb-12 space-y-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-2xl sm:text-3xl font-black text-slate-900 tracking-tight",
                                                    children: "Futuristic Component Architecture"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-slate-500 text-xs font-medium font-mono",
                                                    children: "EXPLORE THE INDIVIDUAL CONCEPT DESIGNS DRIVING THE LUMEN PHI BROADBAND ECOSYSTEM:"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                            children: productsData.map((product)=>{
                                                const IconComp = product.icon;
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "relative w-full aspect-video bg-slate-950 overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: product.imageUrl,
                                                                    alt: product.name,
                                                                    className: "w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest border border-slate-700",
                                                                    children: "Concept Visualization"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "p-6 flex-grow flex flex-col justify-between space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "p-1.5 bg-slate-50 border border-slate-100 rounded-md text-slate-600",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconComp, {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase",
                                                                                    children: product.badge
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                            className: "text-lg font-black text-slate-900 tracking-tight",
                                                                            children: product.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-xs text-slate-500 leading-relaxed font-normal",
                                                                            children: product.desc
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "space-y-4 pt-4 border-t border-slate-100",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "space-y-1.5",
                                                                            children: product.specs.map((s, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                    className: "text-[11px] font-mono text-slate-600 flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "w-1 h-1 rounded-full bg-emerald-500"
                                                                                        }),
                                                                                        " ",
                                                                                        s
                                                                                    ]
                                                                                }, idx))
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                            onClick: ()=>{
                                                                                setSelectedProductSlug(product.slug);
                                                                                if (false) {}
                                                                            },
                                                                            className: "w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-700 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2",
                                                                            children: [
                                                                                "View Specification Sheet ",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                                                                                    className: "w-3.5 h-3.5"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, product.slug);
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-slate-900",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.FileText, {
                                                            className: "w-4 h-4 text-emerald-600"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-sm font-mono font-bold uppercase tracking-wider",
                                                            children: "Required Documentation"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-slate-500 leading-relaxed",
                                                    children: "Review our operational rules, consumer data protections, and terms of service guidelines for legal merchant transparency."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-2 pt-2 font-mono text-xs font-bold",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/privacy",
                                                            className: "block text-emerald-600 hover:underline",
                                                            children: "→ Privacy Policy Blueprint"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/terms",
                                                            className: "block text-emerald-600 hover:underline",
                                                            children: "→ Terms & Conditions Template"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-slate-900",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
                                                            className: "w-4 h-4 text-emerald-600"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-sm font-mono font-bold uppercase tracking-wider",
                                                            children: "Corporate Identification"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-slate-500 leading-relaxed",
                                                    children: "Official deployment inquiries or merchant processing clearance verifications can communicate directly with our centralized desk:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-2 pt-1 text-xs font-mono text-slate-600",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Phone, {
                                                                    className: "w-3.5 h-3.5 text-slate-400"
                                                                }),
                                                                " +91 (Commercial Support Line)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
                                                                    className: "w-3.5 h-3.5 text-slate-400"
                                                                }),
                                                                " operations@lumenlifi.com"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.MapPin, {
                                                                    className: "w-3.5 h-3.5 text-slate-400"
                                                                }),
                                                                " Residential Node Core, India Hub"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-slate-900",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck, {
                                                            className: "w-4 h-4 text-emerald-600"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-sm font-mono font-bold uppercase tracking-wider",
                                                            children: "Merchant Checklist Clearance"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-start gap-2 text-xs text-slate-600",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                    className: "w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            children: "Delivery Timeframes"
                                                                        }),
                                                                        ": Hardware kits ship within 3–5 operational days across domestic hub registries."
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-start gap-2 text-xs text-slate-600",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                    className: "w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            children: "Transparent Invoicing"
                                                                        }),
                                                                        ": No hidden spectrum taxations or regional equipment surcharges."
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-4xl mx-auto px-6 mb-12",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center space-y-2 mb-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-2xl sm:text-3xl font-black tracking-tight text-slate-900",
                                                    children: "Frequently Answered Science"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-slate-500 text-xs font-mono",
                                                    children: "HOW LUMEN PHI REDEFINES INDIAN HOME BROADBAND EXPECTATIONS:"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "space-y-4",
                                            children: [
                                                {
                                                    q: "How does this replace my standard Jio or Airtel fiber network setup?",
                                                    a: "Lumen LIFI functions similarly to standard premium home ISPs, except for the internal room distribution method. Instead of projecting a messy WiFi radio wave signal that slows down across walls, our technology patches data cleanly via ceiling light illumination arrays."
                                                },
                                                {
                                                    q: "What is the return and transaction cancellation policy structure?",
                                                    a: "To ensure full clearance transparency for our merchant processors, Lumen LIFI offers a comprehensive 30-day structural testing window. If the equipment configuration fails to achieve parameters, a full resource refund is issued immediately."
                                                }
                                            ].map((faq, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "border border-slate-200 rounded-xl p-5 bg-white cursor-pointer",
                                                    onClick: ()=>setActiveFaq(activeFaq === index ? -1 : index),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-between items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-sm font-bold text-slate-900 font-mono",
                                                                    children: faq.q
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.HelpCircle, {
                                                                    className: `w-4 h-4 text-slate-400 shrink-0 transition-transform ${activeFaq === index ? "rotate-180 text-emerald-600" : ""}`
                                                                })
                                                            ]
                                                        }),
                                                        activeFaq === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-3",
                                                            children: faq.a
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                })
                            ]
                        }, "catalog-view") : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 15
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -15
                            },
                            className: "max-w-6xl mx-auto px-6 py-12 pb-24",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedProductSlug(null),
                                    className: "inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-emerald-600 transition-colors mb-12 group font-bold",
                                    children: "← BACK TO HARDWARE OVERVIEW"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lg:col-span-5 relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-2xl transform rotate-2 scale-[1.02] opacity-10 blur-sm`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: activeProduct.imageUrl,
                                                        alt: activeProduct.name,
                                                        className: "w-full h-full object-cover opacity-90"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lg:col-span-7 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] font-bold uppercase",
                                                    children: [
                                                        "PRODUCT IDENTITY CONFIG: ",
                                                        activeProduct.badge
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-3xl font-black text-slate-900 tracking-tight",
                                                    children: activeProduct.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-slate-500 font-mono font-medium leading-relaxed",
                                                    children: activeProduct.tagline
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "p-5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 leading-relaxed",
                                                    children: activeProduct.desc
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase",
                                                            children: "Architecture Checklist Attributes:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                                            children: activeProduct.specs.concat([
                                                                "Certified Encryption Protocol Layer",
                                                                "Residential Installation Blueprint Included"
                                                            ]).map((spec, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center gap-2 text-xs font-mono text-slate-600",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                            className: "w-3.5 h-3.5 text-emerald-500 shrink-0"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: spec
                                                                        })
                                                                    ]
                                                                }, i))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "pt-6 border-t border-slate-100 flex flex-wrap gap-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: "/contact",
                                                        className: "h-11 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center",
                                                        children: "Pre-Order Evaluation Unit"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, "detail-view")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,274,610,909], () => (__webpack_exec__(7299)));
module.exports = __webpack_exports__;

})();