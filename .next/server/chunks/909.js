"use strict";
exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 1909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "lucide-react"
var external_lucide_react_ = __webpack_require__(2423);
// EXTERNAL MODULE: ./src/assets/icons/Lumenlogo.png
var Lumenlogo = __webpack_require__(8846);
;// CONCATENATED MODULE: ./src/components/common/Header/header.jsx







/* ---------- Dropdown data mapped with item-specific glowing hover targets ---------- */ const navConfig = [
    {
        label: "Solutions & Products",
        href: "/products",
        icon: external_lucide_react_.Lightbulb,
        // Yellow text color change and yellow drop-shadow glow effect on hover
        hoverClass: "hover:text-yellow-500 hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.75)]",
        iconColor: "group-hover:text-yellow-500",
        dropdown: [
            {
                label: "What is LiFi?",
                desc: "Discover optical wireless physics & architecture",
                href: "/#signal-physics",
                icon: external_lucide_react_.HelpCircle
            },
            {
                label: "All Products Catalog",
                desc: "Browse full optical networking line array",
                href: "/products",
                icon: external_lucide_react_.Box
            },
            {
                label: "Hardware Matrix",
                desc: "Core LiFi ecosystem components",
                href: "/products",
                icon: external_lucide_react_.Zap
            }
        ]
    },
    {
        label: "Resource Engine",
        href: "/insights",
        icon: external_lucide_react_.Cpu,
        // Slate/Silver text color change and silver drop-shadow glow effect on hover
        hoverClass: "hover:text-slate-500 hover:drop-shadow-[0_0_10px_rgba(148,163,184,0.75)]",
        iconColor: "group-hover:text-slate-400",
        dropdown: [
            {
                label: "Technical Registry",
                desc: "Deep-dives, whitepapers & specifications",
                href: "/insights",
                icon: external_lucide_react_.FileText
            },
            {
                label: "Research Lab",
                desc: "Academic validations & optical studies",
                href: "/insights#studies",
                icon: external_lucide_react_.BookOpen
            }
        ]
    },
    {
        label: "Ecosystem & Governance",
        href: "/about",
        icon: external_lucide_react_.Network,
        // Blue text color change and blue drop-shadow glow effect on hover
        hoverClass: "hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.75)]",
        iconColor: "group-hover:text-blue-500",
        dropdown: [
            {
                label: "Core Engineering Team",
                desc: "The architects behind the lightwave layer",
                href: "/about",
                icon: external_lucide_react_.Users
            },
            {
                label: "Operational History",
                desc: "Milestones in IEEE 802.11bb evolution",
                href: "/about#timeline",
                icon: external_lucide_react_.Clock
            },
            {
                label: "Open Positions",
                desc: "Shape next-generation communications infrastructure",
                href: "/about#careers",
                icon: external_lucide_react_.Briefcase
            }
        ]
    }
];
function Header() {
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [activeDropdown, setActiveDropdown] = (0,external_react_.useState)(null);
    const [mobileExpanded, setMobileExpanded] = (0,external_react_.useState)(null);
    const [scrolled, setScrolled] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const navRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 20);
        };
        const handleClickOutside = (event)=>{
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileExpanded(null);
    }, [
        router.asPath
    ]);
    const toggleDropdown = (label)=>{
        if (activeDropdown === label) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(label);
        }
    };
    const toggleMobileExpanded = (label)=>{
        if (mobileExpanded === label) {
            setMobileExpanded(null);
        } else {
            setMobileExpanded(label);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        ref: navRef,
        className: `fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b ${scrolled ? "border-slate-200/80 py-3 shadow-md shadow-slate-200/20" : "border-slate-200/50 py-5"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-7xl mx-auto px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "flex items-center gap-2 group shrink-0",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative w-[180px] h-[50px] md:w-[210px] md:h-[55px]",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: Lumenlogo/* default */.Z,
                                alt: "LumenFi Engineering Matrix",
                                fill: true,
                                priority: true,
                                sizes: "(max-w-768px) 180px, 210px",
                                className: "object-contain filter contrast-125 mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.01]"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("nav", {
                        className: "hidden lg:flex items-center gap-1",
                        children: navConfig.map((item)=>{
                            const isDropdownOpen = activeDropdown === item.label;
                            const NavIcon = item.icon;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: ()=>toggleDropdown(item.label),
                                        className: `group flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 ${isDropdownOpen ? "bg-slate-100/80 text-slate-900" : "text-slate-600 hover:bg-slate-50"} ${item.hoverClass}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(NavIcon, {
                                                className: `w-3.5 h-3.5 transition-colors duration-200 ${isDropdownOpen ? "text-slate-900" : "text-slate-400"} ${item.iconColor}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.label
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ChevronDown, {
                                                className: `w-3 h-3 transition-transform duration-200 text-slate-400 ${isDropdownOpen ? "rotate-180 text-slate-800" : ""}`
                                            })
                                        ]
                                    }),
                                    item.dropdown && isDropdownOpen && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 p-2 grid grid-cols-1 gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150",
                                        children: item.dropdown.map((subItem)=>{
                                            const SubIcon = subItem.icon;
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: subItem.href,
                                                className: "group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mt-0.5 p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-white group-hover:border-emerald-200 group-hover:text-emerald-600 transition-colors shrink-0",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(SubIcon, {
                                                            className: "w-4 h-4"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors",
                                                                children: subItem.label
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "text-[11px] text-slate-400 leading-normal font-sans",
                                                                children: subItem.desc
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, subItem.href);
                                        })
                                    })
                                ]
                            }, item.label);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "hidden lg:flex items-center gap-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: "/contact",
                            className: "flex items-center gap-1.5 h-10 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/10 hover:scale-[1.02]",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Request Demo"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ArrowUpRight, {
                                    className: "w-3.5 h-3.5"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors",
                        "aria-label": "Toggle structural menu",
                        children: isOpen ? /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.X, {
                            className: "w-5 h-5"
                        }) : /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Menu, {
                            className: "w-5 h-5"
                        })
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "lg:hidden fixed inset-0 top-[65px] bg-white border-t border-slate-100 z-40 px-6 py-6 overflow-y-auto animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                        navConfig.map((item)=>{
                            const MobIcon = item.icon;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "border-b border-slate-50 pb-2 last:border-0 last:pb-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: ()=>toggleMobileExpanded(item.label),
                                        className: "flex items-center justify-between w-full py-2.5 text-xs font-bold font-mono uppercase tracking-wider text-slate-700 hover:text-slate-900 text-left",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(MobIcon, {
                                                        className: "w-4 h-4 text-slate-400"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: item.label
                                                    })
                                                ]
                                            }),
                                            item.dropdown && /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ChevronDown, {
                                                className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180 text-emerald-600" : ""}`
                                            })
                                        ]
                                    }),
                                    item.dropdown && mobileExpanded === item.label && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "ml-4 mt-1 space-y-1 border-l border-slate-200 pl-4",
                                        children: item.dropdown.map((sub)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: sub.href,
                                                onClick: ()=>setIsOpen(false),
                                                className: "block px-3 py-2 rounded-lg text-[11px] text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors",
                                                children: sub.label
                                            }, sub.href))
                                    })
                                ]
                            }, item.label);
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pt-4 border-t border-slate-200 mt-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/contact",
                                onClick: ()=>setIsOpen(false),
                                className: "flex justify-center items-center gap-2 w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3.5 rounded-xl font-mono font-bold tracking-wider text-xs uppercase shadow-md shadow-emerald-600/10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Request Demo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ArrowUpRight, {
                                        className: "w-3.5 h-3.5"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/common/Header/index.jsx



/***/ })

};
;