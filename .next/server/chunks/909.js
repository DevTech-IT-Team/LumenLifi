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
// EXTERNAL MODULE: ./src/context/content.jsx
var content = __webpack_require__(7610);
;// CONCATENATED MODULE: ./src/components/common/Header/header.jsx








/* ---------- Nav config ---------- */ const navConfig = [
    {
        label: "Solutions & Products",
        href: "/products",
        icon: external_lucide_react_.Lightbulb,
        hoverClass: "hover:text-[#EAB308]",
        iconColor: "group-hover:text-yellow-500",
        activeIconColor: "text-yellow-500",
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
        hoverClass: "hover:text-[#22C55E]",
        iconColor: "group-hover:text-green-500",
        activeIconColor: "text-green-500",
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
        icon: external_lucide_react_.Cpu,
        hoverClass: "hover:text-[#0FB89A]",
        iconColor: "group-hover:text-[#0FB89A]",
        activeIconColor: "text-[#0FB89A]",
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
    const { theme , toggleTheme  } = (0,content/* useApp */.q)();
    const router = (0,router_.useRouter)();
    const navRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>setScrolled(window.scrollY > 20);
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
    const toggleDropdown = (label)=>setActiveDropdown(activeDropdown === label ? null : label);
    const toggleMobileExpanded = (label)=>setMobileExpanded(mobileExpanded === label ? null : label);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        ref: navRef,
        className: `fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md transition-all duration-300 border-b ${scrolled ? "border-[rgba(26,110,191,0.15)] dark:border-slate-800/80 py-2 shadow-lg shadow-[rgba(0,194,199,0.08)] dark:shadow-[rgba(0,194,199,0.02)]" : "border-[rgba(26,110,191,0.08)] dark:border-slate-900 py-3"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-7xl mx-auto px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "flex items-center gap-2 group shrink-0",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative w-[200px] h-[62px] md:w-[240px] md:h-[72px]",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: Lumenlogo/* default */.Z,
                                alt: "LumenFi — Light Connectivity",
                                fill: true,
                                priority: true,
                                sizes: "(max-width: 768px) 200px, 240px",
                                className: "object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("nav", {
                        className: "hidden lg:flex items-center gap-1",
                        children: navConfig.map((item)=>{
                            const isOpen_ = activeDropdown === item.label;
                            const NavIcon = item.icon;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: ()=>toggleDropdown(item.label),
                                        className: `group flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 ${isOpen_ ? "bg-[rgba(0,194,199,0.08)] dark:bg-[rgba(0,194,199,0.15)] text-[#0D2240] dark:text-slate-100" : "text-[#4A6080] dark:text-slate-400 hover:bg-[rgba(26,110,191,0.06)] dark:hover:bg-slate-900"} ${item.hoverClass}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(NavIcon, {
                                                className: `w-3.5 h-3.5 transition-colors duration-200 ${isOpen_ ? item.activeIconColor : "text-[#2AABDB]/60"} ${item.iconColor}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.label
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ChevronDown, {
                                                className: `w-3 h-3 transition-transform duration-200 text-[#2AABDB]/60 ${isOpen_ ? "rotate-180" : ""}`
                                            })
                                        ]
                                    }),
                                    item.dropdown && isOpen_ && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-[rgba(26,110,191,0.12)] dark:border-slate-800 rounded-2xl shadow-xl shadow-[rgba(0,194,199,0.10)] dark:shadow-none p-2 grid grid-cols-1 gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150",
                                        children: item.dropdown.map((subItem)=>{
                                            const SubIcon = subItem.icon;
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: subItem.href,
                                                className: "group flex items-start gap-3.5 p-3 rounded-xl hover:bg-[rgba(0,194,199,0.06)] dark:hover:bg-slate-800/50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mt-0.5 p-1.5 rounded-lg bg-[rgba(26,110,191,0.06)] dark:bg-slate-800 border border-[rgba(26,110,191,0.10)] dark:border-slate-700 text-[#2AABDB] group-hover:bg-[rgba(0,194,199,0.10)] group-hover:border-[rgba(0,194,199,0.25)] group-hover:text-[#00C2C7] transition-colors shrink-0",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(SubIcon, {
                                                            className: "w-4 h-4"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "text-xs font-bold text-[#0D2240] dark:text-slate-100 group-hover:text-[#1A6EBF] dark:group-hover:text-[#38BDF8] transition-colors",
                                                                children: subItem.label
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "text-[11px] text-[#4A6080] dark:text-slate-400 leading-normal font-sans",
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "hidden lg:flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: toggleTheme,
                                className: "p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors",
                                "aria-label": "Toggle Theme",
                                children: theme === "dark" ? /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Sun, {
                                    className: "w-4 h-4 text-amber-400"
                                }) : /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Moon, {
                                    className: "w-4 h-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/contact",
                                className: "flex items-center gap-1.5 h-10 px-5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white transition-all hover:scale-[1.03] shadow-md",
                                style: {
                                    background: "linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)",
                                    boxShadow: "0 4px 20px rgba(0,194,199,0.25)"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Get Started"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ArrowUpRight, {
                                        className: "w-3.5 h-3.5"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2 lg:hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: toggleTheme,
                                className: "p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors",
                                "aria-label": "Toggle Theme",
                                children: theme === "dark" ? /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Sun, {
                                    className: "w-4 h-4 text-amber-400"
                                }) : /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Moon, {
                                    className: "w-4 h-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "p-2 rounded-xl text-[#1A6EBF] hover:bg-[rgba(26,110,191,0.08)] transition-colors",
                                "aria-label": "Toggle menu",
                                children: isOpen ? /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.X, {
                                    className: "w-5 h-5"
                                }) : /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.Menu, {
                                    className: "w-5 h-5"
                                })
                            })
                        ]
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "lg:hidden fixed inset-0 top-[70px] bg-white dark:bg-slate-950 border-t border-[rgba(26,110,191,0.10)] dark:border-slate-800 z-40 px-6 py-6 overflow-y-auto animate-in fade-in duration-200",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                        navConfig.map((item)=>{
                            const MobIcon = item.icon;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "border-b border-[rgba(26,110,191,0.08)] dark:border-slate-800 pb-2 last:border-0 last:pb-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: ()=>toggleMobileExpanded(item.label),
                                        className: "flex items-center justify-between w-full py-2.5 text-xs font-bold font-mono uppercase tracking-wider text-[#0D2240] dark:text-slate-200 hover:text-[#1A6EBF] dark:hover:text-[#38BDF8] text-left",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(MobIcon, {
                                                        className: `w-4 h-4 ${item.activeIconColor}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: item.label
                                                    })
                                                ]
                                            }),
                                            item.dropdown && /*#__PURE__*/ jsx_runtime.jsx(external_lucide_react_.ChevronDown, {
                                                className: `w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === item.label ? `rotate-180 ${item.activeIconColor}` : "text-[#4A6080] dark:text-slate-450"}`
                                            })
                                        ]
                                    }),
                                    item.dropdown && mobileExpanded === item.label && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "ml-4 mt-1 space-y-1 border-l-2 border-[rgba(0,194,199,0.25)] pl-4",
                                        children: item.dropdown.map((sub)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: sub.href,
                                                onClick: ()=>setIsOpen(false),
                                                className: "block px-3 py-2 rounded-lg text-[11px] text-[#4A6080] dark:text-slate-400 hover:text-[#1A6EBF] dark:hover:text-[#38BDF8] hover:bg-[rgba(26,110,191,0.06)] dark:hover:bg-slate-900 transition-colors",
                                                children: sub.label
                                            }, sub.href))
                                    })
                                ]
                            }, item.label);
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pt-4 border-t border-[rgba(26,110,191,0.10)] mt-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/contact",
                                onClick: ()=>setIsOpen(false),
                                className: "flex justify-center items-center gap-2 w-full text-center text-white py-3.5 rounded-xl font-mono font-bold tracking-wider text-xs uppercase",
                                style: {
                                    background: "linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Get Started"
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