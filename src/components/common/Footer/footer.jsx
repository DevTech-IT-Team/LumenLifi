import Link from 'next/link';
import Image from 'next/image';
import { Send, ShieldCheck, ArrowUpRight } from 'lucide-react';
import logoPl from '../../../assets/icons/Lumenlogo.png';

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200 pt-20 pb-12 overflow-hidden">
      {/* Structural bottom light ambient glow reflecting optical technology */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[150px] bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 z-10">

        {/* Brand Column */}
        <div className="md:col-span-4 space-y-5">
          <Image
            src={logoPl}
            alt="Lumen LIFI Logo"
            width={220}
            height={120}
            className="filter contrast-125 mix-blend-multiply"
          />
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-sans">
            <strong className="text-lg text-black">Lumen LIFI</strong>
            <br />
            Light becomes Data. Secure optical wireless connectivity.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50/80 border border-emerald-100 px-3 py-1.5 rounded-lg w-max">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>IEEE 802.11bb Architecture Compliant</span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold font-mono tracking-wider text-slate-800 uppercase pb-2 border-b border-slate-100">
            Lumen LIFI
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-500">
            <li>
              <Link href="/products" className="hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                Products <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                About <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                Contact <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold font-mono tracking-wider text-slate-800 uppercase pb-2 border-b border-slate-100">
            Technical Registry
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-500">
            <li>
              <Link href="/insights#technical" className="hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                Repository Logs <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/insights#studies" className="hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                Validation Specs <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
            <li>
              <Link href="/what-is-lifi" className="hover:text-emerald-600 transition-colors flex items-center gap-1 group">
                Signal Physics <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscription Engine Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold font-mono tracking-wider text-slate-800 uppercase pb-2 border-b border-slate-100">
            Engineering Digest
          </h4>
          <p className="text-slate-500 text-xs leading-relaxed">
            Receive automated deployment logs, standard specifications revisions, and operational hardware notifications.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex items-center mt-2 group border border-slate-200 bg-slate-50 rounded-xl p-1 focus-within:border-emerald-500/50 focus-within:bg-white transition-all duration-200"
          >
            <input
              type="email"
              placeholder="Enter architectural email..."
              required
              className="bg-transparent placeholder:text-slate-400 font-mono text-xs px-3 py-2 w-full focus:outline-none text-slate-800 pr-12"
            />
            <button
              type="submit"
              className="absolute right-1 bg-emerald-600 hover:bg-emerald-700 p-2 text-white rounded-lg transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Submit engineering subscription"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Meta / Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-200 mt-16 pt-6 text-[11px] font-mono text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Lumen LIFI. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}