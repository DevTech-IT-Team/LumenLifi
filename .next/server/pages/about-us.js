"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 3239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_about_us_index_jsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_about_us_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9551);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_about_us_index_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_about_us_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AboutUsPage)
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







/* ── Interactive History Timeline ── */ const historyItems = [
    {
        year: "2012",
        title: "Founded",
        desc: "Co-founded by Professor Harald Haas — the inventor of LiFi — at the University of Edinburgh."
    },
    {
        year: "2016",
        title: "First Commercial Product",
        desc: "Launched the LiFiMAX — the world's first commercial LiFi system, proving viability at enterprise scale."
    },
    {
        year: "2018",
        title: "Defense Sector Entry",
        desc: "Secured first classified defense deployment contracts with NATO-member government agencies."
    },
    {
        year: "2020",
        title: "LiFi Module Chip",
        desc: "Released the world's first LiFi integrated circuit module enabling OEM integration into laptops and smartphones."
    },
    {
        year: "2023",
        title: "IEEE 802.11bb Standard Ratified",
        desc: "Our technology became the basis for the global LiFi standard IEEE 802.11bb, cementing industry leadership."
    },
    {
        year: "2025",
        title: "Lumen LIFI Launch",
        desc: "Released next-generation Lumen LIFI hardware for residential and enterprise optical wireless connectivity."
    },
    {
        year: "2026",
        title: "Global Scale — 40+ Countries",
        desc: "Active deployments in 40+ countries across defense, healthcare, finance, and industrial sectors."
    }
];
function HistoryTimeline() {
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        id: "history",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "space-y-2",
                children: historyItems.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        initial: {
                            opacity: 0,
                            x: -15
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: i * 0.06,
                            duration: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>setExpanded(expanded === item.year ? null : item.year),
                                id: `history-${item.year}`,
                                className: "w-full flex items-center gap-5 text-left group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 border transition-all duration-200 ${expanded === item.year ? "bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/30" : "bg-slate-900 border-slate-800 group-hover:border-emerald-500/40"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `text-xs font-black ${expanded === item.year ? "text-white" : "text-emerald-400"}`,
                                            children: item.year
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1 flex items-center justify-between py-4 border-b border-slate-800/60",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: `text-sm font-bold transition-colors duration-200 ${expanded === item.year ? "text-emerald-400" : "text-slate-300 group-hover:text-white"}`,
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ChevronDown, {
                                                className: `w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 mr-2 ${expanded === item.year ? "rotate-180 text-emerald-400" : "group-hover:text-slate-300"}`
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                                children: expanded === item.year && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.25
                                    },
                                    className: "overflow-hidden ml-21 pl-5",
                                    style: {
                                        marginLeft: "84px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm text-slate-400 leading-relaxed pb-4 pr-6",
                                        children: item.desc
                                    })
                                })
                            })
                        ]
                    }, item.year))
            })
        ]
    });
}
/* ── Careers section ── */ const openRoles = [
    {
        title: "Senior RF & Photonics Engineer",
        location: "Edinburgh, UK",
        type: "Full-time",
        dept: "Engineering"
    },
    {
        title: "Embedded Firmware Developer",
        location: "Remote / Edinburgh",
        type: "Full-time",
        dept: "Engineering"
    },
    {
        title: "Defense Sector Business Development",
        location: "London, UK",
        type: "Full-time",
        dept: "Sales"
    },
    {
        title: "Signal Processing Research Scientist",
        location: "Edinburgh, UK",
        type: "Full-time",
        dept: "Research"
    }
];
function AboutUsPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col min-h-screen font-sans antialiased bg-[#020D08] text-slate-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "About | Lumen LIFI"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "About Lumen LIFI — pioneers of optical wireless LiFi technology."
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
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_-10%,rgba(16,185,129,0.07),transparent)]"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "max-w-4xl mx-auto px-6 relative z-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        className: "text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase block mb-5",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight",
                                        children: [
                                            "Inventing the Future",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent",
                                                children: "of Wireless"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {
                                        initial: {
                                            opacity: 0,
                                            y: 15
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        className: "text-slate-400 text-lg max-w-2xl leading-relaxed",
                                        children: "Co-founded by Professor Harald Haas in 2012 — the inventor of LiFi. We build the hardware and standards that deliver data through light, globally."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 15
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        className: "grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5",
                                        children: [
                                            {
                                                val: "2012",
                                                label: "Founded",
                                                icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Lightbulb
                                            },
                                            {
                                                val: "40+",
                                                label: "Countries",
                                                icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Globe
                                            },
                                            {
                                                val: "500+",
                                                label: "Deployments",
                                                icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__.Cpu
                                            }
                                        ].map(({ val , label , icon: Icon  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                                        className: "w-5 h-5 text-emerald-400 shrink-0"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-xl font-black text-white",
                                                                children: val
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-[10px] text-slate-500 uppercase tracking-widest",
                                                                children: label
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, label))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "py-20 max-w-4xl mx-auto px-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-3 mb-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Award, {
                                            className: "w-4 h-4 text-emerald-400"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-2xl font-black text-white",
                                                children: "Our History"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xs text-slate-500",
                                                children: "Click any milestone to expand"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HistoryTimeline, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "py-20 border-t border-slate-800/60 max-w-4xl mx-auto px-6",
                        id: "team",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-2xl font-black text-white mb-10",
                                children: "Leadership"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    {
                                        name: "Prof. Harald Haas",
                                        role: "Founder & Chief Scientific Officer",
                                        note: "Inventor of LiFi \xb7 TED Talk \xb7 600+ papers"
                                    },
                                    {
                                        name: "Alistair Banham",
                                        role: "Chief Executive Officer",
                                        note: "Serial deep-tech entrepreneur"
                                    },
                                    {
                                        name: "Dr. Wasiu O. Popoola",
                                        role: "VP Engineering",
                                        note: "Optical wireless communications PhD"
                                    }
                                ].map((member, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 15
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: i * 0.1
                                        },
                                        className: "bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-4 flex items-center justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Users, {
                                                    className: "w-6 h-6 text-white"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "text-sm font-black text-white mb-1",
                                                children: member.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xs text-emerald-400 font-bold mb-2",
                                                children: member.role
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-xs text-slate-500",
                                                children: member.note
                                            })
                                        ]
                                    }, member.name))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "py-20 border-t border-slate-800/60",
                        id: "careers",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-4xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-start justify-between gap-6 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-2xl font-black text-white mb-2",
                                                    children: "Purpose-Driven Careers"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-slate-500 text-sm max-w-md",
                                                    children: "Help build technology that will connect billions of people through light. We hire world-class engineers, scientists, and operators."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "shrink-0 text-[9px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-widest",
                                            children: "Hiring Now"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-3 gap-4 mb-12",
                                    children: [
                                        {
                                            label: "Deep Technical Ownership",
                                            desc: "Ship real products at the frontier of physics."
                                        },
                                        {
                                            label: "Mission-Driven Culture",
                                            desc: "Every hire moves a global standard forward."
                                        },
                                        {
                                            label: "Flexible & Remote",
                                            desc: "Edinburgh HQ + full distributed team support."
                                        }
                                    ].map((v)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-slate-900/30 border border-slate-800 rounded-xl p-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs font-black text-white mb-1.5",
                                                    children: v.label
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[11px] text-slate-500",
                                                    children: v.desc
                                                })
                                            ]
                                        }, v.label))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "space-y-3",
                                    children: openRoles.map((role, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
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
                                            className: "flex items-center justify-between px-6 py-4 bg-slate-900/30 border border-slate-800 rounded-2xl hover:border-emerald-500/30 hover:bg-slate-900/50 transition-all group",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-sm font-bold text-slate-200 group-hover:text-white transition-colors",
                                                            children: role.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "text-xs text-slate-500 mt-0.5",
                                                            children: [
                                                                role.dept,
                                                                " \xb7 ",
                                                                role.location,
                                                                " \xb7 ",
                                                                role.type
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-4",
                                                    children: [
                                                        "Apply ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ArrowRight, {
                                                            size: 12
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, role.title))
                                })
                            ]
                        })
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
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,274,610,909], () => (__webpack_exec__(3239)));
module.exports = __webpack_exports__;

})();