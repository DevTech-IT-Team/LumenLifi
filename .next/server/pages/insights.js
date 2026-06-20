"use strict";
(() => {
var exports = {};
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 1537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_insights_index_jsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_insights_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_insights_index_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_insights_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResourceEnginePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1909);
/* harmony import */ var _components_common_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1274);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







/* ── Technical Documents repository ── */ const techDocs = [
    {
        title: "IEEE 802.11bb LiFi Standard — Overview",
        type: "Standard",
        date: "Jun 2023",
        badge: "IEEE",
        size: "2.4 MB"
    },
    {
        title: "Lumen LIFI — Engineering Design Map",
        type: "Design Asset",
        date: "Mar 2026",
        badge: "Internal",
        size: "1.1 MB"
    },
    {
        title: "Optical Spectrum vs RF Spectrum — Comparative Analysis",
        type: "Whitepaper",
        date: "Jan 2026",
        badge: "Research",
        size: "800 KB"
    },
    {
        title: "LiFi Deployment Guide — Enterprise Environments",
        type: "Guide",
        date: "Apr 2026",
        badge: "Deployment",
        size: "3.2 MB"
    },
    {
        title: "Signal Containment Protocols — Physical Layer Security",
        type: "Technical Note",
        date: "Feb 2026",
        badge: "Security",
        size: "560 KB"
    }
];
/* ── Validated studies / reviews ── */ const allStudies = [
    {
        org: "Lumen LIFI \xd7 Fraunhofer Institute",
        title: "Validated 10 Gbps Peak Throughput in Dense Office Deployment",
        category: "Performance",
        date: "May 2026",
        stars: 5,
        excerpt: "Independent lab validation achieved consistent 10 Gbps symmetric throughput across 40 luminaire nodes in a 1,200 m\xb2 open-plan office environment with zero packet degradation."
    },
    {
        org: "UK Ministry of Defence",
        title: "LiFi Signal Containment Verification — Classified Zone Trials",
        category: "Security",
        date: "Apr 2026",
        stars: 5,
        excerpt: "Empirical containment tests confirmed zero RF signal propagation beyond designated perimeter in 100% of trials across 12 test configurations."
    },
    {
        org: "NHS Digital Innovation Hub",
        title: "LiFi Interference Assessment in Surgical Environments",
        category: "Healthcare",
        date: "Mar 2026",
        stars: 5,
        excerpt: "Zero electromagnetic interference detected across 34 connected medical devices during simultaneous 1 Gbps data transfer in active operating theatre."
    },
    {
        org: "Singapore Smart Infrastructure",
        title: "Urban LiFi Mesh Deployment — 200-Node Performance Audit",
        category: "Industrial",
        date: "Feb 2026",
        stars: 5,
        excerpt: "Sub-1 ms handoff latency achieved across 200 luminaire nodes in a transit authority smart infrastructure pilot covering 15,000 m\xb2."
    },
    {
        org: "Goldman Sachs Technology",
        title: "HFT Latency Benchmarks — LiFi vs Fibre Optical",
        category: "Finance",
        date: "Jan 2026",
        stars: 4,
        excerpt: "LiFi demonstrated sub-0.8 ms deterministic latency, surpassing Wi-Fi 6E by 94% in dense trading floor conditions with 300+ concurrent sessions."
    },
    {
        org: "MIT Media Lab",
        title: "Optical Wireless Spectrum Utilization Study",
        category: "Research",
        date: "Dec 2025",
        stars: 5,
        excerpt: "Demonstrated effective use of 400 THz bandwidth headroom compared to 300 GHz ceiling on radio spectrum — confirming 1,000\xd7 advantage of optical wireless."
    }
];
const INITIAL_SHOW = 3;
const badgeColors = {
    IEEE: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Internal: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    Research: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Deployment: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    Security: "bg-rose-500/20 text-rose-300 border-rose-500/30"
};
const categoryColors = {
    Performance: "text-emerald-400 bg-emerald-500/10",
    Security: "text-rose-400 bg-rose-500/10",
    Healthcare: "text-blue-400 bg-blue-500/10",
    Industrial: "text-amber-400 bg-amber-500/10",
    Finance: "text-violet-400 bg-violet-500/10",
    Research: "text-teal-400 bg-teal-500/10"
};
function ResourceEnginePage() {
    const [showAll, setShowAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All");
    const filters = [
        "All",
        "Performance",
        "Security",
        "Healthcare",
        "Industrial",
        "Finance",
        "Research"
    ];
    const filtered = activeFilter === "All" ? allStudies : allStudies.filter((s)=>s.category === activeFilter);
    const visible = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col min-h-screen font-sans antialiased bg-[#020D08] text-slate-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Insights | Lumen LIFI"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Access IEEE 802.11bb documentation, validated deployment studies, and technical design assets for LiFi optical wireless systems."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "relative pt-36 pb-16 border-b border-emerald-900/20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(16,185,129,0.07),transparent)]"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "max-w-5xl mx-auto px-6 text-center relative z-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-6",
                                        children: "Resource Engine"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-4xl sm:text-6xl font-black tracking-tight text-white mb-5",
                                        children: "Knowledge Portal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-slate-400 text-lg max-w-xl mx-auto leading-relaxed",
                                        children: "IEEE documentation, validated performance studies, and technical design assets — consolidated in one place."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-5xl mx-auto px-6 py-20 space-y-24",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                id: "technical",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-3 mb-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.FileText, {
                                                        className: "w-4 h-4 text-blue-400"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "text-xl font-black text-white",
                                                            children: "Technical Repository"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: "IEEE 802.11bb documentation and design asset maps"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "rounded-3xl border border-slate-800 overflow-hidden bg-slate-900/30",
                                            children: techDocs.map((doc, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: -10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        delay: i * 0.07
                                                    },
                                                    className: "flex items-center justify-between px-6 py-4 border-b border-slate-800/60 last:border-0 hover:bg-white/3 transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-4 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.FileText, {
                                                                        className: "w-3.5 h-3.5 text-slate-400"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-sm font-semibold text-slate-200 truncate group-hover:text-white transition-colors",
                                                                            children: doc.title
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center gap-2 mt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: `text-[9px] font-bold px-1.5 py-0.5 rounded border ${badgeColors[doc.badge] || "bg-slate-700 text-slate-300 border-slate-600"}`,
                                                                                    children: doc.badge
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "text-[10px] text-slate-600",
                                                                                    children: [
                                                                                        doc.type,
                                                                                        " \xb7 ",
                                                                                        doc.date,
                                                                                        " \xb7 ",
                                                                                        doc.size
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-2 shrink-0 ml-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-emerald-400 transition-colors",
                                                                    "aria-label": "Download",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Download, {
                                                                        className: "w-3.5 h-3.5"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-blue-400 transition-colors",
                                                                    "aria-label": "Open",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ExternalLink, {
                                                                        className: "w-3.5 h-3.5"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, doc.title))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                id: "studies",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-3 mb-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.BookOpen, {
                                                        className: "w-4 h-4 text-emerald-400"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "text-xl font-black text-white",
                                                            children: "Validation Study Hub"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: "Progressive disclosure — user-validated performance studies"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-wrap gap-2 mb-8",
                                            children: filters.map((f)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>{
                                                        setActiveFilter(f);
                                                        setShowAll(false);
                                                    },
                                                    id: `filter-${f.toLowerCase()}`,
                                                    className: `px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${activeFilter === f ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/30" : "bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"}`,
                                                    children: f
                                                }, f))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "space-y-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                                                children: visible.map((study, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
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
                                                            y: -10
                                                        },
                                                        transition: {
                                                            delay: i * 0.05,
                                                            duration: 0.4
                                                        },
                                                        className: "bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-start justify-between gap-4 mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex items-center gap-2 flex-wrap",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: `text-[9px] font-bold px-2 py-1 rounded-lg ${categoryColors[study.category]}`,
                                                                                children: study.category
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: "text-[10px] text-slate-600",
                                                                                children: [
                                                                                    study.org,
                                                                                    " \xb7 ",
                                                                                    study.date
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center gap-0.5 shrink-0",
                                                                        children: [
                                                                            ...Array(study.stars)
                                                                        ].map((_, j)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Star, {
                                                                                className: "w-3 h-3 text-amber-400 fill-amber-400"
                                                                            }, j))
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "text-sm font-bold text-slate-200 mb-2 group-hover:text-white transition-colors",
                                                                children: study.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-xs text-slate-500 leading-relaxed",
                                                                children: study.excerpt
                                                            })
                                                        ]
                                                    }, study.title))
                                            })
                                        }),
                                        filtered.length > INITIAL_SHOW && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center mt-8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>setShowAll(!showAll),
                                                id: "show-more-studies",
                                                className: "inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold text-sm hover:bg-white/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200",
                                                children: [
                                                    showAll ? "Show Less" : `Show ${filtered.length - INITIAL_SHOW} More Studies`,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ChevronDown, {
                                                        className: `w-4 h-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,274,610,909], () => (__webpack_exec__(1537)));
module.exports = __webpack_exports__;

})();