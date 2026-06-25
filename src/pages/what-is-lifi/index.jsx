import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ctaImg from '../../../public/images/hero/cta.png';
import {
  Zap,
  ShieldCheck,
  Layers,
  Activity,
  WifiOff,
  Cpu,
  Tv,
  Smartphone,
  Eye,
  ArrowRight,
  HelpCircle,
  Network,
  Lock,
  Radio,
  Clock,
  Gauge,
  Sparkles,
  Sliders,
  Star,
  Globe,
  GitBranch,
  Beaker,
  Lightbulb,
  Info
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS (Identical to Homepage)
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function WhatIsLiFiPage() {
  const [tick, setTick] = useState(0);
  const quickFacts = [
    '💡 Radio Frequencies are congested.',
    '⚡ Light offers 1,000x data density.',
    '🔒 Photons do not penetrate solid walls.',
    '🚀 Fully integrated multi-gigabit ecosystem.',
  ];

  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % quickFacts.length), 2500);
    return () => clearInterval(t);
  }, [quickFacts.length]);

  return (
    <div className="flex flex-col min-h-screen antialiased font-sans transition-colors duration-300 bg-[var(--lumen-bg)] text-[var(--lumen-navy)] selection:bg-cyan-500/20">
      <Head>
        <title>What is LiFi? Technology & Applications — Lumen LiFi</title>
        <meta name="description" content="Discover LiFi technology: a fast, reliable, and secure mobile wireless communications technology that uses light waves rather than radio frequencies to transmit data." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <main className="flex-grow">

        {/* 1. HERO SHOWCASE SECTION (Matches Homepage Gradient & Matrix) */}
        <section className="relative w-full pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[var(--lumen-light)] via-[var(--lumen-bg)] to-[var(--lumen-light)] dark:from-[#070e1b] dark:via-[var(--lumen-bg)] dark:to-[#091222]">
          {/* Dynamic Luminous Ambient Layer */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] opacity-60 dark:opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 75%)' }} />
            <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50 dark:opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.15) 0%, transparent 70%)' }} />
          </div>

          {/* Grid Overlay Vector Matrix */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-50 dark:opacity-30"
            style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-mono font-bold shadow-sm bg-[rgba(26,110,191,0.06)] dark:bg-[rgba(6,182,212,0.06)] border border-[var(--lumen-border)] text-[var(--lumen-blue)] dark:text-[var(--lumen-cyan)]">
              <span className="w-2 h-2 rounded-full animate-pulse inline-block bg-[var(--lumen-cyan)]" />
              <AnimatePresence mode="wait">
                <motion.span key={tick} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}>
                  {quickFacts[tick]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl text-[var(--lumen-navy)]">
              Wireless Data at the{' '}
              <span className="text-gradient-lumen bg-clip-text text-transparent bg-gradient-to-r from-[#1A6EBF] to-[#00C2C7]">
                Speed of Light
              </span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-[var(--lumen-muted)]">
              LiFi holds the key to solving challenges faced by WiFi and 5G networks. It is fast, highly reliable, virtually interference-free, and uniquely secure.
            </motion.p>
          </div>

          {/* Asset Window Representation Chrome container */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] border bg-[#0D2240] border-[var(--lumen-border)] p-2">
              <div className="w-full h-11 bg-[#0A192F] flex items-center px-4 gap-2 border-b border-white/5 rounded-t-2xl">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                <div className="mx-auto bg-[#0D2240] text-[11px] font-mono text-[var(--lumen-cyan)] px-4 py-1 rounded-md border border-white/5 tracking-wider">
                  Lumen LiFi Architecture Topology Diagram
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-b-2xl group bg-slate-900">
                <Image
                  src="/images/lifi/what-is-lifi.png"
                  alt="Lumen LiFi Architecture Topology Diagram"
                  width={1200}
                  height={650}
                  className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>


        {/* 2. OPERATIONAL OVERVIEW SECTION (Matches Homepage Surface Backdrop Depth) */}
        <section className="py-24 bg-[]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold section-wash-secondary border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
                  <Zap size={12} /> Operational Overview
                </div>
                <h2 className="text-4xl font-black tracking-tight text-[var(--lumen-navy)]">
                  What is LiFi & <br />
                  <span className="text-gradient-lumen">How Does it Work?</span>
                </h2>
                <p className="text-[var(--lumen-muted)] text-base leading-relaxed">
                  LiFi is a fully networked mobile wireless communications technology that uses light rather than radio frequencies to transmit data. The experience of using LiFi mirrors standard WiFi but offers unprecedented physical layer speed and scaling vectors.
                </p>
                <p className="text-[var(--lumen-muted)] text-base leading-relaxed">
                  It introduces immediate connectivity optimization targets for high-density settings, secure office complexes, immersive spatial rendering setups, and zero-RF hazardous configurations.
                </p>
                <div className="pt-2">
                  <Link href="/faqs" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl font-bold text-sm tracking-wide border-2 border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-[rgba(26,110,191,0.03)] hover:scale-[1.02] transition-all">
                    <HelpCircle size={14} /> View LiFi FAQs
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white border border-[var(--lumen-border)] shadow-sm group hover:shadow-md transition-shadow">
                  <div className="p-3 bg-red-50 text-red-500 rounded-2xl w-fit mb-4"><WifiOff size={20} /></div>
                  <h3 className="text-lg font-bold mb-2 text-[var(--lumen-navy)]">Radio Wave Bottlenecks</h3>
                  <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">
                    Traditional Wi-Fi signals penetrate walls seamlessly, expanding your threat perimeter and leading to severe cross-channel congestion and packet interference.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white border border-cyan-500/20 shadow-md bg-gradient-to-br from-cyan-500/[0.02] to-transparent">
                  <div className="p-3 bg-cyan-50 text-[var(--lumen-cyan)] rounded-2xl w-fit mb-4"><Eye size={20} /></div>
                  <h3 className="text-lg font-bold mb-2 text-[var(--lumen-navy)]">The Optical Paradigm</h3>
                  <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">
                    Light waves are perfectly localized within a specific physical cone, unlocking isolated multi-gigabit user pipelines effortlessly without cross-room bleeding.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 3. CORE MATRIX SHOWCASE (Matches Section Wash Primary / Secondary Alternation Layout) */}
        <section className="py-24 section-wash-primary">
          <div className="max-w-6xl mx-auto px-6 space-y-24">

            {/* Row A: Military-Grade Security */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border bg-[#0D2240] border-[var(--lumen-border)] group">
                  <Image
                    src="/images/lifi/security.png"
                    alt="Physical Boundary Containment Mapping Network Data Cones"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md text-[10px] font-mono font-bold px-3 py-1.5 rounded-md text-white bg-[#0D2240]/80 border border-emerald-500/30">
                    Physical Containment
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col space-y-4 order-1 lg:order-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--lumen-blue)]">Digital Privacy Vault</span>
                <h3 className="text-3xl font-black text-[var(--lumen-navy)] tracking-tight">Military Grade Security</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)]">
                  LiFi wireless communications provide native physical isolation by default. Light does not penetrate walls or leak through materials like canvas or curtains. This effectively eliminates interception loops and man-in-the-middle exploits completely outside the room footprint.
                </p>
                <div className="inline-flex self-start px-4 py-2 rounded-xl text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/60">
                  ✓ Core Protection: Air-Gapped Physical Shielding
                </div>
              </div>
            </div>

            {/* Row B: Real World Performance */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border bg-[#0D2240] border-[var(--lumen-border)] group">
                  <Image
                    src="/images/lifi/how-it-work.png"
                    alt="LiFi Real-World High Throughput Performance Tracking Chart"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md text-[10px] font-mono font-bold px-3 py-1.5 rounded-md text-white bg-[#0D2240]/80 border border-[var(--lumen-cyan)]/30">
                    Spectrum Analysis
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--lumen-cyan)]">Unthrottled Throughput</span>
                <h3 className="text-3xl font-black text-[var(--lumen-navy)] tracking-tight">Real World Performance</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)]">
                  Radio frequency (RF) paths suffer from localized degradation, signal absorption, and multi-user throttling. LiFi overcomes these constraints completely by delivering consistent high-bandwidth streams that remain entirely unaffected by surrounding electronic ambient noise.
                </p>
                <div className="inline-flex self-start px-4 py-2 rounded-xl text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/60">
                  ✓ Core Capability: Consistent Multi-User Density Matrix
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 4. PERFORMANCE PILLARS GRID (Matches Home Feature Benefits Style) */}
        <section
          className="relative py-24 bg-[#EAF2F8] overflow-hidden border-t border-b border-slate-300 bg-cover bg-center bg-no-repeat transition-all duration-300"
          id="technology-benefits"
          style={{ backgroundImage: "url('/images/lifi/benefits.png')" }}
        >
          {/* Decorative subtle vector network paths */}
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-5 hidden md:block z-10">
            <svg className="w-full h-full stroke-amber-600" fill="none" strokeWidth="1.5">
              <path d="M 0,150 L 120,250 L 300,220 L 320,400" />
              <path d="M 50,600 L 220,520 L 320,580 L 450,750" />
              <circle cx="320" cy="220" r="4" className="fill-amber-500" />
              <circle cx="320" cy="580" r="4" className="fill-amber-500" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col items-center">

            {/* Floating Badges - Symmetrical Left & Right layouts */}
            <div className="absolute left-6 top-6 hidden xl:flex bg-white/40 backdrop-blur-sm px-4 py-2 rounded-xl flex-col border border-slate-300/50 z-20 max-w-xs">
              <span className="text-[11px] font-sans text-slate-900 font-extrabold leading-tight whitespace-nowrap">LiFi sends giant blocks of data instantly</span>
              <div className="w-full h-[1px] bg-slate-300 my-1.5" />
              <div className="flex gap-1 items-center text-[9px] font-mono text-slate-700 font-bold whitespace-nowrap">
                <Info size={10} className="text-slate-900 stroke-[2.5]" /> FAST_LIGHT_SPEED
              </div>
            </div>

            <div className="absolute right-6 top-6 hidden xl:flex bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-xl flex-col border border-slate-300/50 z-20 text-center max-w-xs">
              <span className="text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">1,000x</span>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-700 mt-0.5 whitespace-nowrap">More Room For Data</span>
            </div>

            {/* Header Block */}
            <div className="text-center max-w-4xl mx-auto mb-16 relative z-20 w-full">
              <div className="px-8 py-3 inline-block max-w-full bg-white/40 backdrop-blur-md border border-slate-300/30 rounded-md shadow-xs">
                {/* Applied matching image text gradient here */}
                <h2 className="text-4xl md:text-6xl font-black tracking-tight font-sans bg-gradient-to-r from-[var(--lumen-navy)] to-[var(--lumen-cyan)] bg-clip-text text-transparent drop-shadow-sm">
                  Why LiFi Is Awesome
                </h2>
              </div>
            </div>
            {/* PERFECTLY SYMMETRICAL 2x2 / 1x1 MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-20">

              {/* Card 1: Speed */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-amber-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-500/20 text-amber-600">
                      <Gauge size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">Super Fast Stream</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">Crazy High Speeds</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">This tech blasts super fast internet straight to your devices using light. It easily beats old limits to give you amazing downloading power.</p>
                </div>

              </div>

              {/* Card 2: No Congestion */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-cyan-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-500/20 text-cyan-600">
                      <Layers size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">No Traffic Jams</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">No Slowdowns</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">Regular Wi-Fi gets crowded when too many people use it. LiFi gets around this problem by using light waves, completely ignoring everyone else's wireless signals.</p>
                </div>
              </div>

              {/* Card 3: Reliability */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-emerald-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-500/20 text-emerald-600">
                      <Activity size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">Super Strong Setup</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">Always Reliable</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">Because light has 1,000 times more room to hold data than radio waves do, your internet stays completely steady and never drops out unexpectedly.</p>
                </div>
              </div>

              {/* Card 4: Low Latency */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-indigo-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-500/20 text-indigo-600">
                      <Clock size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">Instant Response</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">Zero Lag Time</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">LiFi reacts up to three times faster than standard Wi-Fi. This means zero lag time, making web games, streaming, and videos react smoothly without freezing.</p>
                </div>

              </div>

            </div>
          </div>
        </section>




        {/* 5. GLOBAL STANDARDS ALLIANCE SECTOR (Tabbed Card Surface Design Match) */}
        <section className="py-24 bg-[#EBF3FA] dark:bg-[#070D19] border-t border-b border-[var(--lumen-border)] overflow-hidden relative">
          {/* Soft Blueprint Micro-Radial Vignette Layer matching image_d582c6.jpg */}
          <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
            style={{ background: 'radial-gradient(circle at 50% 60%, rgba(26,110,191,0.12) 0%, transparent 70%)' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold mb-4 bg-[#0D2240] text-white border border-[#1E293B] uppercase tracking-wider">
                <Globe size={11} className="text-cyan-400" /> Alliance Parameters
              </div>
              <h2 className="text-4xl font-black tracking-tight text-[#0D2240] dark:text-white mb-3">
                The LiFi Ecosystem
              </h2>
              <p className="text-sm text-[#475569] dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
                Developing global connectivity paths and industry-wide standard integration matrices.
              </p>
            </div>

            {/* Dynamic Schematic Map Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-6">

              {/* Left Wing Component: Global Standard 802.11bb */}
              <div className="lg:col-span-4 space-y-4 text-left lg:text-right flex flex-col lg:items-end order-1">
                <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-white dark:bg-slate-900 text-[#475569] dark:text-slate-400 w-fit border border-[#CBD5E1] dark:border-[#334155] shadow-sm">
                  IEEE 802.11bb Task Group
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0D2240] dark:text-white">
                  Global Standard 802.11bb
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 leading-relaxed font-medium">
                  Spearheading updates to expand standard 802.11 definitions to natively govern optical mediums. Officially ratified as a fully standardized global framework for light communications.
                </p>
                <div className="pt-2">
                  <Link href="/updates" className="text-xs font-mono font-bold uppercase text-[#1A6EBF] dark:text-cyan-400 hover:text-cyan-500 transition-colors inline-flex items-center gap-1.5 group">
                    <span>View Updates</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1 lg:group-hover:-translate-x-1 lg:rotate-180" />
                  </Link>
                </div>
              </div>

              {/* Center Blueprint Diagram Column */}
              <div className="lg:col-span-4 relative flex items-center justify-center py-8 lg:py-4 order-2">
                <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">

                  {/* Circuit Vector Track Traces */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none scale-[1.02] text-[#0D2240]/15 dark:text-cyan-500/10" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {/* Horizontal Core Link */}
                    <path d="M45,100 L155,100" strokeWidth="2.5" />
                    <path d="M45,96 L155,96" strokeWidth="1" />
                    <path d="M45,104 L155,104" strokeWidth="1" />
                    {/* Peripheral Topology Paths */}
                    <path d="M72,100 L45,55 L100,25 L155,55 L128,100" />
                    <path d="M72,100 L45,145 L100,175 L155,145 L128,100" />
                    {/* Outward Infrastructure Nodes */}
                    <path d="M100,25 L100,10" />
                    <path d="M100,175 L100,190" />
                    <path d="M45,55 L25,45" />
                    <path d="M155,55 L175,45" />
                  </svg>

                  {/* Node A: Global Standard Isometric Rhombus Block */}
                  <div className="absolute left-1 sm:left-2 w-28 h-28 bg-white dark:bg-[#10192E] border-[3px] border-[#0D2240] dark:border-cyan-500/80 rounded-2xl rotate-45 flex items-center justify-center shadow-[8px_16px_32px_rgba(13,34,64,0.15)] hover:scale-105 transition-transform duration-300 group">
                    <div className="-rotate-45 text-center p-2 flex flex-col items-center">
                      <Cpu className="text-[#0D2240] dark:text-cyan-400 mb-1.5" size={20} />
                      <span className="text-[10px] font-mono font-black leading-tight text-[#0D2240] dark:text-white uppercase tracking-tight">
                        Global Standard<br />802.11bb
                      </span>
                    </div>
                  </div>

                  {/* Node B: Collaborative Center Isometric Rhombus Block */}
                  <div className="absolute right-1 sm:right-2 w-28 h-28 bg-[#0D2240] dark:bg-[#1A365D] border-[3px] border-[#1A6EBF] dark:border-slate-600 rounded-2xl rotate-45 flex items-center justify-center shadow-[8px_16px_32px_rgba(13,34,64,0.25)] hover:scale-105 transition-transform duration-300 group">
                    <div className="-rotate-45 text-center p-2 flex flex-col items-center text-white">
                      <GitBranch className="text-cyan-400 mb-1.5 animate-pulse text-cyan-400 mb-1.5" size={20} />
                      <span className="text-[10px] font-mono font-black leading-tight uppercase tracking-tight">
                        Collaborative<br />Center
                      </span>
                    </div>
                  </div>

                  {/* Satellite Peripheral Badges Mapping */}
                  {/* Top: Research Node */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <Beaker size={13} className="text-[#0D2240] dark:text-cyan-400" />
                    </div>
                    <span className="text-[8px] font-mono font-bold text-slate-500 dark:text-slate-400 mt-1 tracking-wider">RESEARCH</span>
                  </div>

                  {/* Bottom: Infrastructure Node */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <Network size={13} className="text-[#0D2240] dark:text-cyan-400" />
                    </div>
                    <span className="text-[8px] font-mono font-bold text-slate-500 dark:text-slate-400 mt-1 tracking-wider">INFRASTRUCTURE</span>
                  </div>

                  {/* Top Left: Innovation Node */}
                  <div className="absolute top-10 left-6 flex flex-col items-center">
                    <Lightbulb size={12} className="text-slate-400 dark:text-slate-500" />
                  </div>

                  {/* Top Right: Innovation Node */}
                  <div className="absolute top-10 right-6 flex flex-col items-center">
                    <Sparkles size={12} className="text-slate-400 dark:text-slate-500" />
                  </div>

                </div>
              </div>

              {/* Right Wing Component: Light Communications Alliance */}
              <div className="lg:col-span-4 space-y-4 text-left flex flex-col items-start order-3">
                <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-white dark:bg-slate-900 text-[#475569] dark:text-slate-400 w-fit border border-[#CBD5E1] dark:border-[#334155] shadow-sm">
                  Founding Member Paradigm
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0D2240] dark:text-white">
                  Light Communications Alliance
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 leading-relaxed font-medium">
                  Uniting research collectives, infrastructure teams, and industry innovators to fast-track production pathways for light-wave networks internationally.
                </p>
                <div className="pt-2">
                  <Link href="/updates" className="text-xs font-mono font-bold uppercase text-[#1A6EBF] dark:text-cyan-400 hover:text-cyan-500 transition-colors inline-flex items-center gap-1.5 group">
                    <span>View Updates</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* 6. CALL TO ACTION: PREMIUM NEWSLETTER UPGRADE (Matches FinalCTASection Premium Dark Theme Accent Card) */}
        <section className="py-28 relative overflow-hidden section-wash-primary" id="cta-final">
          {/* Dynamic Ambient Background Light Cones */}
          <div className="absolute inset-0 pointer-events-none z-0"><Image src={ctaImg} alt="cta" fill />
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-40"
              style={{ background: 'radial-gradient(circle, var(--lumen-cyan) 0%, transparent 75%)' }}
            />
            <div
              className="absolute -bottom-36 left-1/3 w-[500px] h-[350px] rounded-full blur-[120px] opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.2) 0%, transparent 75%)' }}
            />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* High-Contrast Premium Dark Accent Terminal Card */}
              <div className="rounded-[2.5rem] p-10 sm:p-14 md:p-20 relative overflow-hidden bg-[#0D2240] text-white shadow-[0_32px_80px_rgba(13,34,64,0.3)] border border-white/5 group">

                {/* Architectural Decorative Grid Matrix Mapping */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0,194,199,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,199,0.15) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Cybernetic Subtle Inner Glow */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: 'radial-gradient(circle at 50% 10%, rgba(0,194,199,0.18) 0%, transparent 50%)' }}
                />

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                  {/* High-Impact Trendy Typography Header */}
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
                    Step out of the radio age.<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2C7] via-[#0FB89A] to-[#00C2C7] bg-[size:200%_auto] animate-pulse" style={{ animationDuration: '4s' }}>
                      Live at the speed of light.
                    </span>
                  </h2>

                  {/* Premium Medium Readability Paragraph */}
                  <p className="text-blue-100/80 text-sm sm:text-base md:text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                    Upgrade your environment's footprint to the ultimate benchmark in light wave hardware wireless throughput. Secure, radiant, instantaneous.
                  </p>

                  {/* Action Trigger Sandbox Hub */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
                    <Link
                      href="/products"
                      className="glow-cyan inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-2xl text-[#0D2240] font-black text-sm tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(0,194,199,0.4)] w-full sm:w-auto"
                      style={{ background: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)' }}
                    >
                      Explore Home Kits
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                        <ArrowRight size={16} />
                      </motion.span>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl font-bold text-sm tracking-wider border-2 border-white/10 text-white hover:border-white/40 hover:bg-white/5 bg-transparent transition-all duration-300 w-full sm:w-auto"
                    >
                      Request a Demo
                    </Link>
                  </div>

                  {/* Mini Social/Feature Proof Metrics Grid to accelerate conversion */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-2xl mx-auto text-left sm:text-center">
                    {[
                      { icon: Sparkles, label: '10 Gbps Active Ready' },
                      { icon: ShieldCheck, label: 'Military-Grade Security' },
                      { icon: Sliders, label: 'Zero Router Congestion' },
                    ].map((feat, fIdx) => {
                      const FeatIcon = feat.icon;
                      return (
                        <div key={fIdx} className="flex sm:flex-col items-center gap-3 sm:gap-1.5 justify-start sm:justify-center">
                          <FeatIcon size={14} className="text-[var(--lumen-cyan)] shrink-0" />
                          <span className="text-xs font-mono font-medium tracking-wide text-blue-200/60 uppercase">{feat.label}</span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}