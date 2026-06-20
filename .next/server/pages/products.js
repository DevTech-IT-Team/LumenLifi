"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 1513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_products_index_jsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_products_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_products_index_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_products_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductsPage)
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








/* ==========================================================================\
   6-PRODUCT ADVANCED RESIDENTIAL ECOSYSTEM MATRIX (PHOTONICS CYAN THEME)
   ========================================================================== */ const productsData = [
    {
        slug: "phi-core-router",
        name: "Lumen Core Hub",
        price: "$299",
        badge: "Infrastructure",
        tagline: "The ceiling light that powers your entire home.",
        desc: "Stop hiding ugly routers. The Lumen Core replaces your standard ceiling lights with an elegant LED array that casts an invisible, 10 Gbps Li-Fi data cone over the entire room. If the room is lit, the room is wired.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu,
        accent: "from-cyan-500 to-blue-600",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        size: "lg:col-span-4",
        specs: [
            "10 Gbps Throughput",
            "Zero RF Radiation",
            "Adjustable Color Temp"
        ]
    },
    {
        slug: "photon-antenna-one",
        name: "Lumen Matrix TV",
        price: "$1,899",
        badge: "Entertainment",
        tagline: "8K streaming with absolutely zero buffering.",
        desc: "Smart TVs choke when they share Wi-Fi. The Lumen Matrix syncs directly with the Core Hub’s light beam, guaranteeing an unthrottled, dedicated pipeline for flawless 8K holographic entertainment and zero-lag spatial gaming.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Sun,
        accent: "from-blue-500 to-indigo-600",
        imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600",
        size: "lg:col-span-4",
        specs: [
            "Micro-LED Display",
            "Sub-millisecond Latency",
            "Built-in Li-Fi Receiver"
        ]
    },
    {
        slug: "lightwave-usb-dongle",
        name: "Lumen Sentinel",
        price: "$249",
        badge: "Security",
        tagline: "Security that thinks before you blink.",
        desc: "Standard video doorbells buffer right when you need to see who is outside. The Sentinel uses an infrared Li-Fi link to transmit unjammable, real-time 4K video instantly. Hackers can’t intercept it, and Wi-Fi dead zones can’t stop it.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Laptop,
        accent: "from-cyan-600 to-cyan-400",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        size: "lg:col-span-4",
        specs: [
            "Unjammable Signal",
            "Instant 4K Feed",
            "Facial Recognition AI"
        ]
    },
    {
        slug: "lumen-command-fridge",
        name: "Lumen Command Fridge",
        price: "$3,299",
        badge: "Appliances",
        tagline: "A supercomputer in your kitchen.",
        desc: "Stop waiting for your fridge screen to load. The Command Fridge uses its Li-Fi link to instantly track inventory via interior micro-cameras, order groceries in real-time, and display 4K cooking tutorials without a single stutter.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Activity,
        accent: "from-blue-600 to-cyan-500",
        imageUrl: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
        size: "lg:col-span-4",
        specs: [
            "Zero-Lag UI",
            "Inventory AI",
            "Seamless Integration"
        ]
    },
    {
        slug: "the-ai-mesh-cube",
        name: "Lumen Precision Vac",
        price: "$699",
        badge: "Appliances",
        tagline: "No more bouncing off walls.",
        desc: "Wi-Fi robot vacuums get lost under the couch. The Precision Vac uses the overhead Li-Fi optical grid to map your room down to the millimeter in real-time. It doesn’t bump into things; it glides with surgical precision.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap,
        accent: "from-cyan-500 to-indigo-500",
        imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        size: "lg:col-span-4",
        specs: [
            "Optical Grid Mapping",
            "Instant Re-routing",
            "Li-Fi Edge AI"
        ]
    },
    {
        slug: "lumen-overhead-driver",
        name: "Lumen Whisper Shades",
        price: "$399 / window",
        badge: "Environment",
        tagline: "Respond to the sun, instantly.",
        desc: "Ditch the clunky smart-home bridges. Whisper Shades have optical sensors woven into the fabric. They catch the Li-Fi signal directly from your ceiling, allowing them to adjust to glare and temperature instantly and silently.",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield,
        accent: "from-cyan-600 to-blue-400",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        size: "lg:col-span-4",
        specs: [
            "No Smart Hub Required",
            "Solar-Sync AI",
            "Silent Motors"
        ]
    }
];
function ProductsPage() {
    const [selectedProductSlug, setSelectedProductSlug] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [activeFaq, setActiveFaq] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const activeProduct = productsData.find((p)=>p.slug === selectedProductSlug) || null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen font-sans bg-[#0B111E] text-slate-200 antialiased selection:bg-cyan-950/50 selection:text-cyan-400 transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Lumen LIFI | The Conscious Home Collection"
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
                        className: "bg-[#090D1A] border-b border-slate-800/60 py-3 px-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
                                            className: "w-4 h-4 text-[#00D2FF] animate-pulse"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "10 Gbps Unthrottled Speed"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Shield, {
                                            className: "w-4 h-4 text-[#00D2FF]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Absolute Signal Privacy"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck, {
                                            className: "w-4 h-4 text-[#00D2FF]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Zero Radio Frequency (RF)"
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
                            className: "space-y-16 py-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-7xl mx-auto px-6 lg:px-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-4 max-w-3xl",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-4xl sm:text-5xl font-black text-white tracking-tight leading-none",
                                                children: "The Conscious Home Collection"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-slate-400 text-lg max-w-2xl font-medium leading-relaxed",
                                                children: "Every device in this lineup is equipped with a Lumen optical receiver, guaranteeing zero latency, absolute privacy, and instant AI processing."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-7xl mx-auto px-6 lg:px-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",
                                        children: productsData.map((product, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 30
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                viewport: {
                                                    once: true,
                                                    margin: "-80px"
                                                },
                                                transition: {
                                                    duration: 0.65,
                                                    delay: index * 0.05,
                                                    ease: [
                                                        0.16,
                                                        1,
                                                        0.3,
                                                        1
                                                    ]
                                                },
                                                className: `${product.size} flex flex-col`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-full group relative flex flex-col h-full rounded-3xl border border-slate-800 bg-[#0F172A]/40 overflow-hidden transition-all duration-300 hover:border-[#00D2FF]/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: product.imageUrl,
                                                                    alt: product.name,
                                                                    className: "w-full h-full object-cover transform scale-105 group-hover:scale-100 opacity-70 group-hover:opacity-90 transition-all duration-700 ease-out"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase px-3 py-1 rounded-full",
                                                                    children: product.badge
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-baseline justify-between gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "text-2xl font-extrabold text-white tracking-tight",
                                                                                    children: product.name
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-xl font-mono font-bold text-white",
                                                                                    children: product.price
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm text-[#00D2FF] font-medium tracking-wide",
                                                                            children: product.tagline
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-slate-400 text-xs leading-relaxed font-normal",
                                                                            children: product.desc
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "space-y-4 pt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "space-y-2",
                                                                            children: product.specs.map((spec)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "flex items-center gap-2.5 text-xs text-slate-300 font-medium",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "text-[#00D2FF] text-sm",
                                                                                            children: "›"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: spec
                                                                                        })
                                                                                    ]
                                                                                }, spec))
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            onClick: ()=>setSelectedProductSlug(product.slug),
                                                                            className: "w-full h-11 border border-slate-700 hover:border-[#00D2FF] bg-slate-900/60 hover:bg-[#00D2FF]/10 text-white font-bold text-xs rounded-xl tracking-wider uppercase transition-all duration-300 shadow-inner",
                                                                            children: "Add to Cart"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, product.slug);
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.FileText, {
                                                            className: "w-4 h-4 text-[#00D2FF]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-xs font-mono font-bold uppercase tracking-wider",
                                                            children: "Required Documentation Links"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-slate-400 leading-relaxed",
                                                    children: "Review our residential network configurations, transparent user guidelines, and operational deployment rules."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-2 pt-2 font-mono text-xs font-bold",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/privacy",
                                                            className: "block text-[#00D2FF] hover:underline",
                                                            children: "→ Infrastructure Privacy Policy"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/terms",
                                                            className: "block text-[#00D2FF] hover:underline",
                                                            children: "→ System Terms & Conditions"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
                                                            className: "w-4 h-4 text-[#00D2FF]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-xs font-mono font-bold uppercase tracking-wider",
                                                            children: "Corporate Identification Desk"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-slate-400 leading-relaxed",
                                                    children: "Official commercial deployment requests or compliance verification checks can communicate directly with our centralized desk:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-1.5 pt-1 text-xs font-mono text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Phone, {
                                                                    className: "w-3.5 h-3.5 text-slate-500"
                                                                }),
                                                                " +91 (Commercial Support Hub)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
                                                                    className: "w-3.5 h-3.5 text-slate-500"
                                                                }),
                                                                " engineering@lumenfi.com"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.MapPin, {
                                                                    className: "w-3.5 h-3.5 text-slate-500"
                                                                }),
                                                                " Residential Operations Core, India Hub"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ShieldCheck, {
                                                            className: "w-4 h-4 text-[#00D2FF]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-xs font-mono font-bold uppercase tracking-wider",
                                                            children: "Logistical Parameter Matrix"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-start gap-2 text-xs text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                    className: "w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            children: "Deployment Windows"
                                                                        }),
                                                                        ": Home hardware kits step into configuration cycles within 3–5 structural business days."
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-start gap-2 text-xs text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                    className: "w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            children: "Transparent Invoicing"
                                                                        }),
                                                                        ": No localized frequency surcharges or surprise equipment taxes added later."
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
                                    className: "max-w-4xl mx-auto px-6 pt-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center space-y-2 mb-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-2xl sm:text-3xl font-black tracking-tight text-white",
                                                    children: "Frequently Evaluated Physics"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[#00D2FF] text-xs font-mono uppercase tracking-widest font-bold",
                                                    children: "Unpacking The Signal Transmission Paradigm:"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "space-y-4",
                                            children: [
                                                {
                                                    q: "How does this scale beyond my standard Jio or Airtel Fiber setup?",
                                                    a: "Traditional fiber providers do an excellent job bringing high-speed data lines to your home boundary, but they bottleneck inside your rooms by handing that traffic over to standard radio wave Wi-Fi routers. Lumen LIFI takes your fiber line and routes it straight through clean overhead visible light waves, preventing your speeds from suffering wireless degradation across walls."
                                                },
                                                {
                                                    q: "Why is optical wireless internet highly optimized for next-generation AI platforms?",
                                                    a: "Modern AI network arrays require persistent, un-throttled data pipes with zero packet delay. Because light waves operate on an entirely separate, massive un-congested spectrum bands, it eliminates typical micro-stuttering or drops in tracking speed, giving local AI processing environments instantaneous data access metrics."
                                                }
                                            ].map((faq, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "border border-slate-800 rounded-xl p-5 bg-[#0F172A]/40 cursor-pointer hover:border-slate-700 transition-colors",
                                                    onClick: ()=>setActiveFaq(activeFaq === index ? -1 : index),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex justify-between items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-sm font-bold text-white font-mono",
                                                                    children: faq.q
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.HelpCircle, {
                                                                    className: `w-4 h-4 text-slate-500 shrink-0 transition-transform ${activeFaq === index ? "rotate-180 text-[#00D2FF]" : ""}`
                                                                })
                                                            ]
                                                        }),
                                                        activeFaq === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-slate-400 mt-3 leading-relaxed border-t border-slate-800 pt-3 font-sans",
                                                            children: faq.a
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                })
                            ]
                        }, "catalog-view") : /* Sub-Page Detail Specification Block */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
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
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut"
                            },
                            className: "max-w-6xl mx-auto px-6 py-12 pb-24",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: ()=>setSelectedProductSlug(null),
                                    className: "inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#00D2FF] transition-colors mb-12 group font-bold",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowLeft, {
                                            className: "w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform"
                                        }),
                                        "RETURN TO HARDWARE ECOSYSTEM"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lg:col-span-5 relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-[50px_20px_80px_40px] transform rotate-2 scale-[1.02] opacity-15 blur-sm`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full aspect-[4/5] rounded-[50px_20px_80px_40px] overflow-hidden border-4 border-slate-900 shadow-xl relative bg-slate-900",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: activeProduct.imageUrl,
                                                        alt: activeProduct.name,
                                                        className: "w-full h-full object-cover opacity-80 mix-blend-screen"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "lg:col-span-7 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[10px] font-bold uppercase",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu, {
                                                            className: "w-3.5 h-3.5 text-[#00D2FF]"
                                                        }),
                                                        " CORE HARDWARE // ",
                                                        activeProduct.badge
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-4xl sm:text-5xl font-black text-white tracking-tight leading-none",
                                                    children: activeProduct.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-base text-[#00D2FF] font-semibold font-mono leading-relaxed",
                                                    children: activeProduct.tagline
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-6 bg-slate-900/60 border border-slate-800 rounded-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                            className: "font-mono text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cpu, {
                                                                    className: "w-3.5 h-3.5 text-[#00D2FF]"
                                                                }),
                                                                " Architectural Statement"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-slate-400 leading-relaxed font-normal",
                                                            children: activeProduct.desc
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "font-mono text-[11px] font-bold text-slate-500 uppercase tracking-widest",
                                                            children: "VERIFIED PROTOCOL SPECIFICATIONS"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                                            children: activeProduct.specs.concat([
                                                                "Microsecond packet translation layer",
                                                                "100% optical physical containment boundary"
                                                            ]).map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-start gap-2 text-xs font-medium text-slate-300",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                                                                            className: "w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: item
                                                                        })
                                                                    ]
                                                                }, item))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "pt-6 border-t border-slate-800 flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: "h-12 px-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#00D2FF] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Download, {
                                                                    className: "w-4 h-4"
                                                                }),
                                                                " Download Tech Blueprint"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/contact",
                                                            className: "h-12 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center shadow-lg shadow-cyan-500/10",
                                                            children: "Request Deployment Review"
                                                        })
                                                    ]
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,274,610,909], () => (__webpack_exec__(1513)));
module.exports = __webpack_exports__;

})();