import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Zap,
  Lock,
  Activity,
  Users,
  BarChart2,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Laptop,
  ArrowDown,
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─────────────────────────────────────────────────────────────
   ANIMATED LIGHT BEAM CONE (inline SVG)
───────────────────────────────────────────────────────────── */
function LightBeamCone({ color = '#10b981', opacity = 0.18, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.6 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}
      style={{ transformOrigin: 'top center' }}
    >
      <svg viewBox="0 0 120 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`beamGrad${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="40" y="0" width="40" height="10" rx="3" fill={color} opacity="0.9" />
        <rect x="44" y="3" width="32" height="4" rx="2" fill="white" opacity="0.4" />
        <polygon points="60,10 10,160 110,160" fill={`url(#beamGrad${delay})`} opacity={opacity} />
        <polygon points="60,10 40,160 80,160" fill={color} opacity="0.08" />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   BINARY PARTICLES
───────────────────────────────────────────────────────────── */
function BinaryParticles() {
  const bits = ['1', '0', '1', '1', '0', '1', '0', '0', '1', '0', '1', '0'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bits.map((b, i) => (
        <motion.span
          key={i}
          className="absolute text-[9px] font-mono font-bold text-emerald-400/60"
          style={{ left: `${42 + (i % 5) * 4}%` }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 180, opacity: [0, 0.8, 0] }}
          transition={{
            duration: 2.8 + (i * 0.3),
            delay: i * 0.4,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {b}
        </motion.span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-slate-950"
      id="hero"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-emerald-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <div className="lg:col-span-5 text-left space-y-7">
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.02]"
          >
            <span className="text-white">Internet at the<br />Speed of</span>{' '}
            <span
              className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Visible Light.
            </span>
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-slate-400 text-base leading-relaxed max-w-md"
          >
            Replace overcrowded radio waves with multi-gigabit optical wireless. Zero electromagnetic leakage — pure, physically contained broadband through your ceiling lights.
          </motion.p>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/products"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 text-xs uppercase tracking-widest font-mono"
            >
              Explore Hardware <ArrowRight size={13} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center h-12 px-7 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all text-xs uppercase tracking-widest font-mono"
            >
              Request a Demo
            </Link>
          </motion.div>

          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="pt-6 border-t border-white/8 grid grid-cols-3 gap-6"
          >
            {[
              { val: '10 Gbps', label: 'Peak Throughput' },
              { val: 'Zero RF', label: 'EM Signature' },
              { val: '100%', label: 'Physical Containment' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="text-2xl font-black text-white">{val}</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-mono mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="lg:col-span-7 relative w-full h-[480px] sm:h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
        >
          <Image
            src="/images/hero/Homebg.png"
            alt="LumenFi Hardware Architecture"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — LIVE SCHEMATIC (Updated with your path)
───────────────────────────────────────────────────────────── */
function SchematicSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveStep(p => (p + 1) % 4), 2800);
    return () => clearInterval(t);
  }, []);

  const steps = [
    { title: '1. Fiber Ingress', desc: 'High-speed fiber feeds data into the optical driver controller.' },
    { title: '2. LED Modulation', desc: 'Driver modulates LED at MHz frequencies — imperceptible to the eye.' },
    { title: '3. Photon Beam Transmission', desc: 'A focused light cone carries gigabits per second downward.' },
    { title: '4. Photodetector Decode', desc: 'USB dongle or embedded sensor reconstructs the data stream.' },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden border-t border-white/5" id="live-schematic">
      {/* Updated Background Address Strategy to map products/schematic-bg.jpg */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-lighten pointer-events-none">
        <Image
          src="/images/products/schematic-bg.jpg"
          alt="Optical Mesh Background Architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 backdrop-blur-md border border-white/8 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md text-[10px] font-mono text-emerald-400 font-bold">
            <Activity className="w-3 h-3 animate-pulse" /> LIVE SCHEMATIC
          </div>

          <h3 className="text-[11px] font-bold text-slate-400 uppercase font-mono tracking-widest mb-6 pb-2 border-b border-white/8">
            Optical Data Transfer Flow — How LiFi Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative flex flex-col items-center bg-slate-950/60 rounded-2xl border border-white/6 overflow-hidden h-80">
              <BinaryParticles />

              <div className={`mt-5 p-2.5 rounded-xl transition-all duration-400 z-10 ${activeStep === 0 ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 scale-110' : 'bg-slate-800 text-slate-400'}`}>
                <Activity className="w-5 h-5" />
              </div>

              <ArrowDown className={`w-4 h-4 mt-1 mb-1 transition-colors z-10 ${activeStep === 0 ? 'text-emerald-400' : 'text-slate-700'}`} />

              <div className="relative flex flex-col items-center z-10">
                <div className={`p-3 rounded-full transition-all duration-400 ${(activeStep === 1 || activeStep === 2) ? 'bg-amber-400/20 border border-amber-400/40 scale-110' : 'bg-slate-800 border border-transparent'}`}>
                  <Lightbulb className={`w-7 h-7 transition-colors ${(activeStep === 1 || activeStep === 2) ? 'text-amber-300' : 'text-slate-500'}`} />
                </div>

                <div className="relative w-28 mt-1">
                  <motion.div animate={{ opacity: (activeStep === 2 || activeStep === 3) ? 1 : 0 }} transition={{ duration: 0.5 }}>
                    <LightBeamCone color="#10b981" opacity={0.22} delay={0} />
                  </motion.div>
                </div>
              </div>

              <div className={`absolute bottom-5 p-2.5 rounded-xl transition-all duration-400 z-10 ${activeStep === 3 ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 scale-110' : 'bg-slate-800 text-slate-400'}`}>
                <Laptop className="w-5 h-5" />
              </div>

              <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold px-2 py-0.5 rounded transition-all ${activeStep === 3 ? 'text-emerald-400 opacity-100' : 'opacity-0'}`}>
                DATA RECEIVED
              </div>
            </div>

            <div className="md:col-span-7 space-y-2">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${activeStep === idx ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-transparent border-transparent hover:bg-white/4'}`}
                >
                  <h4 className={`text-xs font-bold font-mono tracking-wide ${activeStep === idx ? 'text-emerald-300' : 'text-slate-400'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — LiFi IN ACTION
───────────────────────────────────────────────────────────── */
function LiFiInActionSection() {
  const scenarios = [
    {
      id: 'office',
      icon: '🏢',
      label: 'Smart Office',
      tagline: 'LED ceilings beam gigabits to every desk',
      desc: 'Ceiling luminaires transmit dedicated data cones to each workstation. No shared radio channel — every seat gets a private optical link.',
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/20',
    },
    {
      id: 'home',
      icon: '🏠',
      label: 'Residential',
      tagline: 'Home lights become your broadband router',
      desc: 'Replace a congested router with smart LED luminaires. Your ceiling light IS your internet — no radio leakage through walls.',
      color: 'from-teal-500/20 to-cyan-500/10',
      border: 'border-teal-500/20',
    },
    {
      id: 'street',
      icon: '🌆',
      label: 'Urban / Street',
      tagline: 'Public street lamps double as hotspots',
      desc: 'Municipal LED street lights deliver secure, high-bandwidth zones for pedestrians and outdoor workspaces — no tower infrastructure needed.',
      color: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/20',
    },
    {
      id: 'medical',
      icon: '🏥',
      label: 'Medical / EMI-Free',
      tagline: 'Zero RF near critical care equipment',
      desc: 'Operating suites and MRI rooms run high-speed data networks with zero electromagnetic interference — impossible with traditional WiFi.',
      color: 'from-purple-500/20 to-indigo-500/10',
      border: 'border-purple-500/20',
    },
  ];

  const [active, setActive] = useState('office');
  const cur = scenarios.find(s => s.id === active);

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="scenarios">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-14"
        >
          <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-600 uppercase mb-3 block">
            Real-World Deployment
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
            LiFi in Every Environment
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl">
            From home ceilings to operating theatres — wherever there is light, there is internet.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {scenarios.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono tracking-wide border transition-all duration-200 ${active === s.id
                ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'}`}
            >
              <span>{s.icon}</span> {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl border ${cur.border} overflow-hidden shadow-sm`}
          >
            <div className={`lg:col-span-5 bg-gradient-to-br ${cur.color} p-8 md:p-12 flex flex-col justify-center space-y-5`}>
              <div className="text-5xl">{cur.icon}</div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block mb-1">{cur.label}</span>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">{cur.tagline}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{cur.desc}</p>
              <Link href="/products"
                className="inline-flex items-center gap-2 w-max px-5 py-2.5 bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors"
              >
                Hardware Solutions <ArrowRight size={12} />
              </Link>
            </div>

            <div className="lg:col-span-7 bg-slate-950 p-8 md:p-12 relative overflow-hidden flex items-center justify-center min-h-[320px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

              <div className="relative w-full max-w-md">
                <div className="relative bg-slate-800/60 border border-slate-600/40 rounded-2xl p-6 overflow-hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-500 tracking-widest uppercase">Ceiling</div>

                  <div className="flex justify-around mb-0 pt-3">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="relative flex flex-col items-center">
                        <motion.div
                          animate={{ boxShadow: ['0 0 8px #10b981aa', '0 0 20px #10b981cc', '0 0 8px #10b981aa'] }}
                          transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
                          className="w-8 h-2.5 bg-emerald-400 rounded-b-sm"
                        />
                        <svg viewBox="0 0 80 100" className="w-20 h-24 -mt-0.5" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`g${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <polygon points="40,0 5,100 75,100" fill={`url(#g${i})`} />
                          <polygon points="40,0 28,100 52,100" fill="#10b981" opacity="0.08" />
                          {[20, 45, 70].map((y, j) => (
                            <motion.text
                              key={j} x={38 + j} y={y}
                              fontSize="7" fill="#10b981" opacity="0.7" fontFamily="monospace"
                              initial={{ y: 5 }} animate={{ y: [5, y + 20, 5] }}
                              transition={{ duration: 2, delay: j * 0.5 + i * 0.3, repeat: Infinity }}
                            >
                              {j % 2 === 0 ? '1' : '0'}
                            </motion.text>
                          ))}
                        </svg>
                        <div className="flex items-end gap-1 mt-1">
                          <div className="w-12 h-1 bg-slate-600 rounded" />
                        </div>
                        <div className={`mt-1 p-1.5 rounded ${i === 1 ? 'bg-emerald-900/50 border border-emerald-500/30' : 'bg-slate-700/60'}`}>
                          <Laptop className={`w-4 h-4 ${i === 1 ? 'text-emerald-400' : 'text-slate-500'}`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 text-center text-[9px] font-mono text-slate-600 tracking-widest uppercase">Floor Level — Connected Devices</div>
                </div>

                <div className="absolute top-3 right-3 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                  {cur.label}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4 — ROOM COMPARISON (Updated with your path)
───────────────────────────────────────────────────────────── */
function RoomComparisonSection() {
  const [showLifi, setShowLifi] = useState(true);

  return (
    <section className="relative py-24 bg-slate-950 border-t border-white/5 overflow-hidden" id="comparison-room">
      {/* Updated Background Address Strategy to map hero/room-bg.jpg */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-color-dodge">
        <Image
          src="/images/hero/room-bg.jpg"
          alt="High tech server and data infrastructure background room"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-12"
        >
          <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-400 uppercase mb-3 block">
            Signal Physics · Room-Level Comparison
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            See the Difference Inside a Room
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            Toggle between WiFi and LiFi to see how signal propagation differs at the architectural level.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1">
            <button
              onClick={() => setShowLifi(true)}
              className={`px-8 py-2.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${showLifi ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              ◉ LiFi (Light)
            </button>
            <button
              onClick={() => setShowLifi(false)}
              className={`px-8 py-2.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${!showLifi ? 'bg-amber-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              ◎ WiFi (RF)
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={showLifi ? 'lifi' : 'wifi'}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="bg-slate-900/80 backdrop-blur-sm border border-white/8 rounded-3xl p-8 flex items-center justify-center min-h-[360px]">
              <svg viewBox="0 0 280 280" className="w-full max-w-xs" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="260" height="260" rx="16" fill={showLifi ? '#0a1a12' : '#1a1210'} stroke={showLifi ? '#10b981' : '#f59e0b'} strokeWidth="2.5" />
                <rect x="110" y="10" width="40" height="5" rx="1" fill={showLifi ? '#1a2e22' : '#2e2010'} stroke={showLifi ? '#10b981' : '#f59e0b'} strokeWidth="1.5" />

                {showLifi ? (
                  <>
                    {[[90, 80], [190, 80], [90, 180], [190, 180]].map(([cx, cy], i) => (
                      <g key={i}>
                        <motion.circle
                          cx={cx} cy={cy} r={55}
                          fill="none" stroke="#10b981" strokeOpacity="0.12" strokeWidth="1"
                          initial={{ r: 40 }} animate={{ r: [50, 58, 50] }}
                          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                        />
                        <circle cx={cx} cy={cy} r={38} fill="#10b981" fillOpacity="0.07" />
                        <circle cx={cx} cy={cy} r={18} fill="#10b981" fillOpacity="0.14" />
                        <rect x={cx - 7} y={cy - 7} width={14} height={14} rx="3" fill="#10b981" opacity="0.9" />
                        <rect x={cx - 4} y={cy - 4} width={8} height={8} rx="2" fill="white" opacity="0.5" />
                      </g>
                    ))}
                    <rect x="30" y="120" width="50" height="35" rx="4" fill="#0f2d1e" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1" />
                    <rect x="200" y="120" width="50" height="35" rx="4" fill="#0f2d1e" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1" />
                    <rect x="110" y="210" width="60" height="30" rx="4" fill="#0f2d1e" stroke="#10b981" strokeOpacity="0.2" strokeWidth="1" />
                    <circle cx="55" cy="137" r="6" fill="#10b981" opacity="0.7" />
                    <circle cx="225" cy="137" r="6" fill="#10b981" opacity="0.7" />
                    <circle cx="140" cy="225" r="6" fill="#10b981" opacity="0.5" />
                    <text x="140" y="268" textAnchor="middle" fontSize="9" fill="#10b981" fontFamily="monospace" opacity="0.8" fontWeight="bold">LiFi — CONTAINED BEAMS</text>
                  </>
                ) : (
                  <>
                    {[30, 55, 80, 105, 130].map((r, i) => (
                      <motion.circle
                        key={i} cx={140} cy={140} r={r}
                        fill="none" stroke="#f59e0b"
                        strokeOpacity={0.35 - i * 0.05} strokeWidth="1.5"
                        strokeDasharray={i % 2 === 0 ? '0' : '4 3'}
                        animate={{ r: [r, r + 8, r] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                      />
                    ))}
                    <rect x="128" y="128" width="24" height="24" rx="5" fill="#f59e0b" opacity="0.8" />
                    <text x="140" y="144" textAnchor="middle" fontSize="10" fill="white" fontFamily="monospace" fontWeight="bold">AP</text>
                    <text x="255" y="60" fontSize="7" fill="#f59e0b" opacity="0.7" fontFamily="monospace">Leaking</text>
                    <text x="255" y="70" fontSize="7" fill="#f59e0b" opacity="0.7" fontFamily="monospace">→</text>
                    <text x="5" y="200" fontSize="7" fill="#f59e0b" opacity="0.7" fontFamily="monospace">←</text>
                    <rect x="30" y="120" width="50" height="35" rx="4" fill="#2e1a08" stroke="#f59e0b" strokeOpacity="0.2" strokeWidth="1" />
                    <rect x="200" y="120" width="50" height="35" rx="4" fill="#2e1a08" stroke="#f59e0b" strokeOpacity="0.2" strokeWidth="1" />
                    <text x="140" y="268" textAnchor="middle" fontSize="9" fill="#f59e0b" fontFamily="monospace" opacity="0.8" fontWeight="bold">WiFi — SIGNAL LEAKS OUT</text>
                  </>
                )}
              </svg>
            </div>

            <div className="space-y-3 z-10">
              <h3 className={`text-2xl font-black ${showLifi ? 'text-emerald-400' : 'text-amber-400'}`}>
                {showLifi ? 'LiFi: Optical Wireless' : 'WiFi: Radio Frequency'}
              </h3>
              <div className="space-y-2">
                {(showLifi ? [
                  { label: 'Signal Boundary', val: 'Strictly contained within walls', ok: true },
                  { label: 'Spectrum', val: 'Visible & IR — unlicensed, uncongested', ok: true },
                  { label: 'Interference', val: 'Zero co-channel noise', ok: true },
                  { label: 'Security', val: 'Physical layer prevents eavesdropping', ok: true },
                  { label: 'Speed', val: 'Up to 10 Gbps per beam', ok: true },
                ] : [
                  { label: 'Signal Boundary', val: 'Leaks through walls & windows', ok: false },
                  { label: 'Spectrum', val: 'Congested 2.4 / 5 / 6 GHz bands', ok: false },
                  { label: 'Interference', val: 'High noise from neighboring APs', ok: false },
                  { label: 'Security', val: 'Susceptible to long-range interception', ok: false },
                  { label: 'Speed', val: 'Up to 9.6 Gbps (shared, degrades)', ok: false },
                ]).map(({ label, val, ok }) => (
                  <div key={label} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/6 backdrop-blur-xs">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${ok ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${ok ? 'bg-emerald-400' : 'bg-red-400'}`} />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-mono text-white/70 block">{label}</span>
                      <span className="text-xs text-slate-400">{val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5 — TECH SPEC COMPARISON TABLE
───────────────────────────────────────────────────────────── */
const compRows = [
  { feature: 'Data Rate', lifi: '≤ 10 Gbps per beam', wifi: '≤ 9.6 Gbps (shared, Wi-Fi 6E)', winner: 'lifi' },
  { feature: 'Security', lifi: 'Physical boundary, no external intercept', wifi: 'Broadcasts — packet sniffing possible', winner: 'lifi' },
  { feature: 'EM Jamming', lifi: '100% immune — uses light, not RF', wifi: 'Highly susceptible in dense areas', winner: 'lifi' },
  { feature: 'Bandwidth Pool', lifi: '1,000× larger unlicensed spectrum', wifi: 'Congested, heavily regulated bands', winner: 'lifi' },
  { feature: 'Coverage', lifi: 'Room-focused targeted beams', wifi: 'Facility-wide broad range', winner: 'wifi' },
  { feature: 'Installation', lifi: 'Replaces/augments existing LED fixtures', wifi: 'Requires separate radio hardware', winner: 'lifi' },
];

function ComparisonTable() {
  return (
    <section className="py-24 bg-white border-t border-slate-100" id="comparison">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-600 uppercase mb-3 block">Performance Benchmarks</span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Direct Architectural Metrics</h2>
        </motion.div>

        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 px-6 py-4 font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <div>Attribute</div>
            <div className="text-center text-emerald-600">LiFi · Optical</div>
            <div className="text-center text-slate-500">WiFi · Radio</div>
          </div>
          {compRows.map(({ feature, lifi, wifi, winner }, i) => (
            <div key={feature} className={`grid grid-cols-3 px-6 py-4 border-b border-slate-100 last:border-0 items-start hover:bg-slate-50/60 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
              <div className="text-xs font-bold text-slate-800 font-mono">{feature}</div>
              <div className={`text-xs text-center px-2 flex items-center justify-center gap-1.5 ${winner === 'lifi' ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                {winner === 'lifi' && <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                {lifi}
              </div>
              <div className={`text-xs text-center px-2 flex items-center justify-center gap-1.5 ${winner === 'wifi' ? 'text-emerald-600 font-semibold' : 'text-slate-400'}`}>
                {winner === 'wifi' && <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                {wifi}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 6 — SPECTRUM VISUALIZER
───────────────────────────────────────────────────────────── */
const bands = [
  { label: 'Radio', range: '3 Hz – 300 GHz', width: 13, color: 'bg-slate-300', text: 'text-slate-700', desc: 'Congested' },
  { label: 'Microwave', range: '300 MHz – 300 GHz', width: 14, color: 'bg-slate-400', text: 'text-white', desc: 'Regulated' },
  { label: 'Infrared', range: '300 GHz – 400 THz', width: 24, color: 'bg-emerald-200', text: 'text-emerald-900', desc: 'Invisible LiFi' },
  { label: 'Visible ✦ LiFi Core', range: '400 THz – 700 THz', width: 49, color: 'bg-gradient-to-r from-emerald-500 to-teal-400', text: 'text-white', desc: '1000× Wider' },
];

function SpectrumSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="spectrum">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-600 uppercase mb-3 block">Frequency Scalability</span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Light Unlocks a 1,000× Wider Channel</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">The visible light spectrum gives LiFi thousands of times more transmission space than the entire radio dial combined.</p>
        </motion.div>

        <div className="flex justify-center mb-14">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl" />
            <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="radBg" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="95" fill="url(#radBg)" />
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * 360;
                const rad = (angle * Math.PI) / 180;
                const x1 = 100 + Math.cos(rad) * 18;
                const y1 = 100 + Math.sin(rad) * 18;
                const x2 = 100 + Math.cos(rad) * 90;
                const y2 = 100 + Math.sin(rad) * 90;
                return (
                  <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#10b981" strokeOpacity={i % 3 === 0 ? 0.7 : 0.25} strokeWidth={i % 3 === 0 ? 1.5 : 0.8}
                    animate={{ opacity: [0.2, i % 3 === 0 ? 0.9 : 0.35, 0.2] }}
                    transition={{ duration: 2.5, delay: i * 0.08, repeat: Infinity }}
                  />
                );
              })}
              <path d="M 100 100 m -60 0 a 60 60 0 0 1 120 0" fill="none" stroke="#10b981" strokeWidth="3" strokeOpacity="0.6" strokeLinecap="round" />
              <path d="M 100 100 m -40 0 a 40 40 0 0 1 80 0" fill="none" stroke="#10b981" strokeWidth="3" strokeOpacity="0.8" strokeLinecap="round" />
              <path d="M 100 100 m -20 0 a 20 20 0 0 1 40 0" fill="none" stroke="#10b981" strokeWidth="3" strokeOpacity="1" strokeLinecap="round" />
              <circle cx="100" cy="100" r="5" fill="#10b981" />
              <text x="100" y="125" textAnchor="middle" fontSize="7" fill="#10b981" fontFamily="monospace" fontWeight="bold" opacity="0.8">LiFi CORE</text>
            </svg>
          </div>
        </div>

        <div className="flex h-14 rounded-xl overflow-hidden border border-slate-200 bg-white p-1 mb-6 shadow-sm gap-0.5">
          {bands.map((band) => (
            <motion.div
              key={band.label} style={{ width: `${band.width}%` }}
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`${band.color} ${band.text} flex items-center justify-center relative group cursor-default rounded-lg transition-all hover:brightness-110`}
            >
              <span className="text-[9px] font-mono font-bold tracking-wide truncate px-2">{band.label}</span>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-lg px-3 py-2 text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap shadow-lg">
                <p className="font-bold">{band.label}</p>
                <p className="text-slate-300">{band.range}</p>
                <p className="text-emerald-400">{band.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between text-[9px] font-mono text-slate-400 px-1 mb-14">
          <span>← Narrow, Congested</span>
          <span>Massive Unlicensed Bandwidth →</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { val: '1,000×', label: 'More Spectrum than Radio', icon: BarChart2, color: 'text-emerald-600' },
            { val: 'Sub-ms', label: 'Deterministic Latency', icon: Zap, color: 'text-teal-600' },
            { val: 'License-Free', label: 'Zero Spectrum Tariffs', icon: Lock, color: 'text-emerald-700' },
          ].map(({ val, label, icon: Icon, color }) => (
            <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon className={`w-6 h-6 ${color} mx-auto mb-3`} />
              <div className="text-2xl font-black text-slate-900 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{val}</div>
              <div className="text-xs text-slate-500 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 7 — STATS & DEPLOYMENTS
───────────────────────────────────────────────────────────── */
function useCounter(target, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView.current) {
        inView.current = true;
        const start = Date.now();
        const step = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.round(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}

function Stat({ target, suffix = '', label, icon: Icon }) {
  const { ref, count } = useCounter(target);
  return (
    <div ref={ref} className="text-center p-7 bg-slate-900/60 backdrop-blur-md border border-white/8 rounded-2xl">
      <Icon className="w-5 h-5 text-emerald-400 mx-auto mb-3 opacity-80" />
      <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">{label}</div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="relative py-24 bg-slate-950 border-t border-white/5 overflow-hidden" id="deployments">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-400 uppercase mb-3 block">Operational Metrics</span>
          <h2 className="text-4xl font-black text-white tracking-tight">Validated Optical Deployments</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Stat target={500} suffix="+" label="Global Node Points" icon={Activity} />
          <Stat target={40} suffix="+" label="Regions Active" icon={Users} />
          <Stat target={10} suffix=" Gbps" label="Max Throughput" icon={Zap} />
          <Stat target={100} suffix="%" label="Physical Isolation" icon={Shield} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { title: 'Containment Validation', desc: 'Verify absolute signal boundary at the physical layer. Zero spillage beyond walls.', badge: 'Physical Security', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', href: '/products#security' },
            { title: 'EMI-Free Zone Maps', desc: 'Installation blueprints for heavy-machinery, hospitals, and sensitive equipment spaces.', badge: 'Industrial Blueprint', color: 'text-teal-400 bg-teal-500/10 border-teal-500/20', href: '/products#environments' },
            { title: 'Telemetry Logs', desc: 'Authenticated throughput benchmarks and link-quality registries across all deployments.', badge: 'Analytics', color: 'text-slate-300 bg-slate-500/10 border-slate-500/20', href: '/insights#studies' },
          ].map(card => (
            <Link key={card.title} href={card.href} className="group block bg-slate-900/40 backdrop-blur-md border border-white/8 rounded-2xl p-6 hover:bg-white/6 hover:-translate-y-0.5 transition-all duration-200">
              <span className={`inline-block text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-md mb-4 uppercase tracking-widest border ${card.color}`}>{card.badge}</span>
              <h4 className="text-sm font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">{card.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-emerald-500 font-bold font-mono uppercase tracking-widest">View <ArrowRight size={11} /></div>
            </Link>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-emerald-900/40 via-slate-900/80 to-slate-950/90 backdrop-blur-md border border-emerald-500/20 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-emerald-400" />
            </motion.div>
            <h3 className="text-3xl font-black text-white">Begin Designing Your Optical Network</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Consult with our integration specialists to calculate coverage profiles, lux levels, and system parameters for your deployment.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-mono font-bold rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/20 transition-all">
                <Zap className="w-4 h-4" /> Request Engineering Review
              </Link>
              <Link href="/insights" className="inline-flex items-center justify-center h-12 px-7 bg-white/6 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-colors">Browse Specs</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT PAGE EXPORT
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-white selection:bg-emerald-200/60 text-slate-800">
      <Head>
        <title>LiFi Next-Gen Optical Wireless Systems | LumenFi</title>
        <meta name="description" content="LumenFi designs high-capacity optical wireless arrays — secure, multi-gigabit visible light transmission networks free of electromagnetic interference." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <SchematicSection />
        <LiFiInActionSection />
        <RoomComparisonSection />
        <ComparisonTable />
        <SpectrumSection />
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
}