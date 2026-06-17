import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Zap,
  BookOpen,
  FileText,
  Users,
  Clock,
  Briefcase,
  Lightbulb,
  Cpu,
  Network,
  Box,
  HelpCircle
} from 'lucide-react';
import logoPl from '../../../assets/icons/Lumenlogo.png';

/* ---------- Dropdown data mapped with item-specific glowing hover targets ---------- */
const navConfig = [
  {
    label: 'Solutions & Products',
    href: '/products',
    icon: Lightbulb,
    // Yellow text color change and yellow drop-shadow glow effect on hover
    hoverClass: 'hover:text-yellow-500 hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.75)]',
    iconColor: 'group-hover:text-yellow-500',
    dropdown: [
      { label: 'What is LiFi?', desc: 'Discover optical wireless physics & architecture', href: '/#signal-physics', icon: HelpCircle },
      { label: 'All Products Catalog', desc: 'Browse full optical networking line array', href: '/products', icon: Box },
      { label: 'Hardware Matrix', desc: 'Core LiFi ecosystem components', href: '/products', icon: Zap },
    ],
  },
  {
    label: 'Resource Engine',
    href: '/insights',
    icon: Cpu,
    // Slate/Silver text color change and silver drop-shadow glow effect on hover
    hoverClass: 'hover:text-slate-500 hover:drop-shadow-[0_0_10px_rgba(148,163,184,0.75)]',
    iconColor: 'group-hover:text-slate-400',
    dropdown: [
      { label: 'Technical Registry', desc: 'Deep-dives, whitepapers & specifications', href: '/insights', icon: FileText },
      { label: 'Research Lab', desc: 'Academic validations & optical studies', href: '/insights#studies', icon: BookOpen },
    ],
  },
  {
    label: 'Ecosystem & Governance',
    href: '/about',
    icon: Network,
    // Blue text color change and blue drop-shadow glow effect on hover
    hoverClass: 'hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.75)]',
    iconColor: 'group-hover:text-blue-500',
    dropdown: [
      { label: 'Core Engineering Team', desc: 'The architects behind the lightwave layer', href: '/about', icon: Users },
      { label: 'Operational History', desc: 'Milestones in IEEE 802.11bb evolution', href: '/about#timeline', icon: Clock },
      { label: 'Open Positions', desc: 'Shape next-generation communications infrastructure', href: '/about#careers', icon: Briefcase },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [router.asPath]);

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const toggleMobileExpanded = (label) => {
    if (mobileExpanded === label) {
      setMobileExpanded(null);
    } else {
      setMobileExpanded(label);
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b ${scrolled
          ? 'border-slate-200/80 py-3 shadow-md shadow-slate-200/20'
          : 'border-slate-200/50 py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Brand Core Vector Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-[180px] h-[50px] md:w-[210px] md:h-[55px]">
            <Image
              src={logoPl}
              alt="LumenFi Engineering Matrix"
              fill
              priority
              sizes="(max-w-768px) 180px, 210px"
              className="object-contain filter contrast-125 mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.01]"
            />
          </div>
        </Link>

        {/* Desktop Interface Nodes */}
        <nav className="hidden lg:flex items-center gap-1">
          {navConfig.map((item) => {
            const isDropdownOpen = activeDropdown === item.label;
            const NavIcon = item.icon;

            return (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`group flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 ${isDropdownOpen
                      ? 'bg-slate-100/80 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50'
                    } ${item.hoverClass}`}
                >
                  <NavIcon className={`w-3.5 h-3.5 transition-colors duration-200 ${isDropdownOpen ? 'text-slate-900' : 'text-slate-400'} ${item.iconColor}`} />
                  <span>{item.label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 text-slate-400 ${isDropdownOpen ? 'rotate-180 text-slate-800' : ''}`} />
                </button>

                {/* Dropdown System Matrix */}
                {item.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 p-2 grid grid-cols-1 gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.dropdown.map((subItem) => {
                      const SubIcon = subItem.icon;
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="mt-0.5 p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-white group-hover:border-emerald-200 group-hover:text-emerald-600 transition-colors shrink-0">
                            <SubIcon className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                              {subItem.label}
                            </div>
                            <div className="text-[11px] text-slate-400 leading-normal font-sans">
                              {subItem.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Ingress Gate */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 h-10 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/10 hover:scale-[1.02]"
          >
            <span>Request Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Subsystem Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle structural menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Array */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-white border-t border-slate-100 z-40 px-6 py-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-2">
            {navConfig.map((item) => {
              const MobIcon = item.icon;
              return (
                <div key={item.label} className="border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                  <button
                    onClick={() => toggleMobileExpanded(item.label)}
                    className="flex items-center justify-between w-full py-2.5 text-xs font-bold font-mono uppercase tracking-wider text-slate-700 hover:text-slate-900 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <MobIcon className="w-4 h-4 text-slate-400" />
                      <span>{item.label}</span>
                    </div>
                    {item.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180 text-emerald-600' : ''}`} />
                    )}
                  </button>
                  {item.dropdown && mobileExpanded === item.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-lg text-[11px] text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 border-t border-slate-200 mt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center gap-2 w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3.5 rounded-xl font-mono font-bold tracking-wider text-xs uppercase shadow-md shadow-emerald-600/10"
              >
                <span>Request Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}