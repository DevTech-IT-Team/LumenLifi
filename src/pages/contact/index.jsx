import { Mail, ShieldCheck, Terminal, ArrowUpRight } from 'lucide-react';
import Footer from '../../components/common/Footer';
import { ContactFormBlock } from '../../components/sections/contact';
import { Button } from '../../components/ui';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden flex flex-col">

      {/* Techie Background Layer: Subtle Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 flex-grow z-10 w-full">

        {/* Left Column: Context & Tech Badges (Spans 5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 w-fit">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              SYSTEMS ONLINE // SECURE GATEWAY
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              Initialize <br />
              <span className="text-cyan-400 font-mono text-3xl sm:text-4xl font-bold">&lt;Connection /&gt;</span>
            </h1>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-md">
              Have programmatic questions regarding structural device compatibility, military integration requirements, or system evaluations? Access our engineering protocol.
            </p>
          </div>

          {/* Quick Specs / Trust Anchors */}
          <div className="border-t border-slate-900 pt-8 space-y-4 font-mono text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-cyan-500" />
              <span>Response SLA: &lt; 12 Hours</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Encrypted End-to-End Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Column: The Form Card (Spans 7 cols) */}
        <div className="lg:col-span-7 flex items-center">
          <div className="w-full relative group">
            {/* Subtle glow border effect behind the form */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 opacity-50 group-hover:from-cyan-500/30 group-hover:to-transparent transition duration-500" />

            <div className="relative rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-8 sm:p-10 shadow-2xl">
              <ContactFormBlock />
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}