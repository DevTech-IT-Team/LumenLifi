import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../../public/images/hero/hero.png';
import logoPl from '../../public/brand/logo.png';
import roomBg from '../../public/images/hero/room-bg.jpg';

import {
  ArrowRight, CheckCircle, Zap, Shield, Lock, Wifi, WifiOff,
  Monitor, Gamepad2, Cpu, Home, Building2, Factory, GraduationCap,
  Stethoscope, ChevronRight, Star, Sparkles, Eye, ShieldCheck, Activity, Sliders, Flame
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ctaImg from '../../public/images/hero/cta.png';
import enterpriseImg from '../../public/images/hero/enterprise.png';


// ── CLIENT IMAGES 1 TO 5 (RESIDENTIAL ARCHITECTURE INTEGRATION) ──
import homeAutomationImg from '../../public/images/hero/home-automation.png';
import gamingImg from '../../public/images/hero/gaming.png';
import streamingImg from '../../public/images/hero/streaming.png';
import infiniteDevicesImg from '../../public/images/hero/infinite.png';
import invisibleInfraImg from '../../public/images/hero/invisible.png';

// ── CLIENT IMAGES 6 TO 9 (COMMERCIAL ECOSYSTEM PATHWAYS) ──
import corporateBoardroomImg from '../../public/images/hero/corporate.png';
import manufacturingImg from '../../public/images/hero/manufacturing.png';
import datacenterImg from '../../public/images/hero/data-centers.png';
import schoolImg from '../../public/images/hero/education.png';

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO SHOWCASE (DYNAMIC BRAND GRADIENT BASE)
───────────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO SHOWCASE (OPTIMIZED DEEP BRAND GRADIENT)
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const logoDisplay = {
    imgSrc: logoPl,
    width: "200px",
    height: "50px",
    link: "#",
  };

  useEffect(() => {
    // Note: To fix the state update warning in your original code, 
    // make sure this actually calls a state setter if needed, or remove it.
    const t = setInterval(() => (p => (p + 1) % facts.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[var(--lumen-light)] via-[var(--lumen-bg)] to-[var(--lumen-light)] dark:from-[#070e1b] dark:via-[var(--lumen-bg)] dark:to-[#091222]"
    >
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


        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={logoDisplay.link}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative w-96 h-72 sm:w-80 sm:h-24 flex items-center justify-center"
            >
              <Image
                src={logoDisplay.imgSrc}
                alt="LumenFi Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl text-[var(--lumen-navy)]">
          The Speed of Light.{' '}
          <span className="text-gradient-lumen">
            Now in Your Living Room.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-[var(--lumen-muted)]">
          Lightning Fast. Literally. Lumen LiFi turns your everyday ceiling lights into a super-fast 10 Gbps internet connection. No invisible traffic jams. Just pure optical power.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/products" className="glow-blue inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl w-full sm:w-auto" style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
            Explore Home Kits <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02] w-full sm:w-auto border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-[rgba(26,110,191,0.03)]">
            Order Now
          </Link>
        </motion.div>
      </div>

      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] dark:shadow-none border bg-[#0D2240] border-[var(--lumen-border)]">
          <div className="w-full h-11 bg-[#0A192F] flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
            <div className="mx-auto bg-[#0D2240] text-[11px] font-mono text-[var(--lumen-cyan)] px-4 py-1 rounded-md border border-white/5 tracking-wider">
              Lumen LiFi uses optical wireless technology to deliver significantly faster speeds, lower latency, tighter security, and reduced network congestion.
            </div>
          </div>
          <div className="relative w-full aspect-[16/7.2] min-h-[320px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">
            <Image src={heroImg} alt="Lumen LiFi Ecosystem Matrix Graphic" fill priority className="object-contain w-full h-full p-2" sizes="(max-width: 1280px) 100vw, 1280px" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-dashed border-[var(--lumen-border)] text-center">
          {[
            { val: '10 Gbps', label: 'Peak Speed' },
            { val: '80 sec', label: 'To download 100 GB' },
            { val: 'Zero RF', label: 'No radio waves' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-[var(--lumen-navy)]">{val}</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest mt-1 text-[var(--lumen-muted)]">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — SPEED COMPARISON MATRIX (SURFACE BACKDROP DEPTH)
───────────────────────────────────────────────────────────── */
function SpeedTableSection() {
  const rows = [
    { type: 'Standard Home Wi-Fi', speed: '100 Mbps', time: '2.2 Hours', note: "Grab some popcorn — you're waiting", highlight: false, emoji: '🐢' },
    { type: 'High-Speed Fiber Wi-Fi', speed: '1 Gbps', time: '13 Minutes', note: 'Better, but still a drag', highlight: false, emoji: '🚗' },
    { type: 'Lumen LiFi Systems', speed: '10 Gbps', time: '80 Seconds', note: 'Done before you can blink', highlight: true, emoji: '⚡' },
  ];

  return (
    <section className="py-24 bg-[var(--lumen-surface)]" id="speed">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 section-wash-secondary border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
            <Zap size={12} /> The Need For Speed
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-4 text-[var(--lumen-navy)]">
            Internet So Fast,{' '}
            <span className="text-gradient-lumen">It's Made of Light.</span>
          </h2>
          <p className="text-[var(--lumen-muted)] max-w-xl mx-auto text-base">
            What does 10 Gbps actually mean for your house? Here's how long it takes to download a massive 100 GB 4K Ultra HD movie across different connections.
          </p>
        </motion.div>

        <div className="rounded-3xl overflow-hidden border border-[var(--lumen-border)] shadow-[0_8px_40px_rgba(26,110,191,0.06)]">
          <div className="grid grid-cols-4 px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest bg-[#0D2240] dark:section-wash-secondary text-white/80 dark:text-[var(--lumen-navy)]">
            <div>Connection Type</div>
            <div className="text-center">Speed</div>
            <div className="text-center">Download Time</div>
            <div className="text-center">Verdict</div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="grid grid-cols-4 px-6 py-5 items-center border-t border-[var(--lumen-border)] bg-[var(--lumen-surface)]"
              style={{
                background: row.highlight
                  ? 'linear-gradient(135deg, rgba(0,194,199,0.08) 0%, rgba(15,184,154,0.08) 100%)'
                  : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{row.emoji}</span>
                <div className="text-sm font-bold text-[var(--lumen-navy)]" style={{ color: row.highlight ? 'var(--lumen-cyan)' : undefined }}>
                  {row.type}
                </div>
              </div>
              <div className="text-center font-mono font-bold text-sm text-[var(--lumen-muted)]" style={{ color: row.highlight ? 'var(--lumen-blue)' : undefined }}>
                {row.speed}
              </div>
              <div className="text-center">
                <span className="font-mono font-black text-base text-[var(--lumen-navy)]" style={{ color: row.highlight ? 'var(--lumen-cyan)' : undefined }}>
                  {row.time}
                </span>
              </div>
              <div className="text-center text-xs font-medium" style={{ color: row.highlight ? 'var(--lumen-teal)' : 'var(--lumen-muted)' }}>
                {row.highlight && <span className="font-bold">✓ </span>}{row.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — AMBIENT INTELLIGENCE (SECTION WASH PRIMARY BACKDROP)
───────────────────────────────────────────────────────────── */

// Handled standard asset mapping point


function ConsciousHomeSection() {
  const conceptualPoints = [
    {
      icon: '🌅',
      lucide: Activity,
      title: 'Ambient Intelligence',
      sub: 'The End of the Light Switch',
      desc: "You don't walk into a dark room and fumble for a switch. You don't even issue a voice command. As you move through your house, the environmental AI maps your presence in real-time. The lights gently raise to match your circadian rhythm as you walk into the kitchen. Your biometric ring instantly syncs your sleep data to the home server via an invisible infrared beam, prompting the espresso machine to brew a double shot because it knows you had a restless night. No apps. No buttons. The house just knows.",
    },
    {
      icon: '🥽',
      lucide: Eye,
      title: 'The Holographic Living Room',
      sub: 'The TV is a Relic',
      desc: "The TV is a relic. You slip on your spatial computing headset, and because your ceiling is beaming a dedicated 10 Gbps optical link directly to your eyes, the boundaries of your living room dissolve entirely. There is zero motion sickness and zero buffering. You aren't watching a basketball game on a screen; the players are holographically projected in 3D across your living room floor. You are sitting courtside on your own couch.",
    },
    {
      icon: '🔒',
      lucide: ShieldCheck,
      title: 'The Absolute Privacy Fortress',
      sub: 'Physical Optical Containment',
      desc: "In a world where AI knows your daily habits, your health metrics, and your private conversations, broadcasting that data through your walls on a Wi-Fi radio wave is a massive vulnerability. With Lumen LIFI, your home becomes a digital vault. Light cannot pass through walls, and neither can your data. Your personal AI operates entirely on local, physically contained light beams. The ultimate luxury of the future isn't just speed—it’s absolute, unbreachable privacy.",
    },
    {
      icon: '🎙️',
      lucide: Zap,
      title: 'Conversations, Not Commands',
      sub: 'Instantaneous Feedback Sync',
      desc: 'Say goodbye to the awkward pause after you say "Hey Siri" or "Alexa." Because your voice assistant is connected via a sub-millisecond optical link, it processes complex requests, accesses cloud-based Large Language Models, and executes commands the precise millisecond your sentence ends. It doesn\'t feel like talking to a machine. It feels like talking to a digital concierge standing right next to you.',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const AUTOROTATE_TIME = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % conceptualPoints.length);
    }, AUTOROTATE_TIME);
    return () => clearInterval(timer);
  }, [conceptualPoints.length]);

  return (
    <section
      className="py-24 text-slate-300 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[1000px] flex flex-col justify-between"
      id="conscious-home"
      style={{ backgroundImage: "url('/images/hero/bg3.png')" }}
    >
      {/* Dark background protection scrim overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col justify-between h-full flex-grow">

        {/* --- HEADER CHROME CARD CONTAINER --- */}
        {/* Exact size and layout spacing matching the main top frosted container block of image_7a7991.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto bg-[#0B1224]/70 backdrop-blur-xl border border-slate-800/80 p-8 sm:p-10 rounded-2xl text-center shadow-2xl relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-3 rounded-full text-[10px] font-mono font-bold mb-4 bg-slate-900/60 border border-slate-800/80 text-cyan-400 tracking-wider">
            <Sparkles size={10} className="animate-spin text-cyan-400" style={{ animationDuration: '4s' }} />
            THE CONSCIOUS HOME
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
            Welcome to the <span className="text-cyan-400 bg-clip-text">“Conscious Home”</span> Powered by Lumen LiFi.
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-4">
            When you replace crowded Wi-Fi with the multi-gigabit speed of light, your house stops reacting to you and starts anticipating you. The disappears. The apps vanish. Your home becomes a living, breathing ecosystem with a 10 Gbps nervous system.
          </p>

          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400/90">
            HERE IS WHAT LIVING AT THE SPEED OF LIGHT ACTUALLY FEELS LIKE.
          </p>
        </motion.div>


        {/* --- DYNAMIC INTERACTIVE SPACE MATRIX LAYER --- */}
        {/* Compulsory layout structure: Column Left (1,2) | Open Center Emptiness for background imagery beams | Column Right (3,4) */}
        {/* Increased margins (`mt-16`) create the explicit structural space directly beneath the main header card frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 items-center mt-16 relative w-full">

          {/* LEFT AXIS: CARDS 1 & 2 */}
          {/* `gap-y-6` provides the accurate structural spatial padding separating item 1 from item 2 stacked vertical layout */}
          <div className="lg:col-span-4 flex flex-col gap-y-6">
            {conceptualPoints.slice(0, 2).map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-6 transition-all duration-300 relative overflow-hidden border backdrop-blur-md flex flex-col justify-between min-h-[220px] shadow-xl ${isActive
                    ? 'bg-[#0B1224]/90 border-cyan-500/50 rounded-xl ring-1 ring-cyan-500/20'
                    : 'bg-[#0B1224]/40 border-slate-800/80 rounded-xl opacity-75 hover:opacity-100 hover:bg-[#0B1224]/60'
                    }`}
                >
                  <div className="space-y-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 font-bold tracking-widest uppercase">
                        {item.sub}
                      </span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                      <span className="text-2xl filter drop-shadow-sm">{item.icon}</span>
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-slate-400 leading-relaxed font-light font-sans">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* OPEN CENTRAL ALIGNMENT SYSTEM FOR LIGHT RAY BACKGROUND */}
          {/* Completely empty layout pane to reveal the high-fidelity center background imagery vector safely */}
          <div className="hidden lg:block lg:col-span-4 min-h-[400px] pointer-events-none" />

          {/* RIGHT AXIS: CARDS 3 & 4 */}
          {/* Perfectly symmetrical execution layout matrix containing consistent layout gap properties */}
          <div className="lg:col-span-4 flex flex-col gap-y-6">
            {conceptualPoints.slice(2, 4).map((item, idx) => {
              const globalIdx = idx + 2;
              const isActive = activeIndex === globalIdx;
              return (
                <button
                  key={globalIdx}
                  onClick={() => setActiveIndex(globalIdx)}
                  className={`text-left p-6 transition-all duration-300 relative overflow-hidden border backdrop-blur-md flex flex-col justify-between min-h-[220px] shadow-xl ${isActive
                    ? 'bg-[#0B1224]/90 border-cyan-500/50 rounded-xl ring-1 ring-cyan-500/20'
                    : 'bg-[#0B1224]/40 border-slate-800/80 rounded-xl opacity-75 hover:opacity-100 hover:bg-[#0B1224]/60'
                    }`}
                >
                  <div className="space-y-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 font-bold tracking-widest uppercase">
                        {item.sub}
                      </span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                      <span className="text-2xl filter drop-shadow-sm">{item.icon}</span>
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-slate-400 leading-relaxed font-light font-sans">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* --- CONSOLE LOWER METADATA CHROME --- */}
        <div className="w-full text-center pt-16 pb-4">
          <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            HERE IS WHAT LIVING AT THE SPEED OF LIGHT ACTUALLY FEELS LIKE.
          </p>
        </div>

      </div>
    </section>
  );
}
/* ─────────────────────────────────────────────────────────────
   SECTION 4 — RESIDENTIAL ASSETS SHOWCASE (SECTION WASH SECONDARY)
───────────────────────────────────────────────────────────── */
function HomeFeaturesSection() {
  const premiumShowcase = [
    {
      title: "Zero-Lag Gaming",
      subtitle: "Say goodbye to ping spikes",
      desc: "Traditional Wi-Fi bounces radio waves around the house, causing interference and lag. LiFi’s sub-millisecond, line-of-sight optical connection means your inputs register the exact millisecond you press the button. It is faster than being plugged directly into the wall.",
      img: gamingImg,
      badge: "Pure Optical Link",
      accent: "var(--lumen-blue)"
    },
    {
      title: "Unthrottled 4K & 8K Streaming",
      subtitle: "Buffering is dead",
      desc: "Because every LiFi light casts its own dedicated broadband beam, you can stream an 8K movie in the living room without your bandwidth dropping just because someone else is downloading a massive file upstairs.",
      img: streamingImg,
      badge: "10 Gbps Pipeline",
      accent: "var(--lumen-teal)"
    },
    {
      title: "Infinite Device Connections",
      subtitle: "Infinite Device Connections",
      desc: "The \"Internet of Things\" usually means the \"Internet of Traffic Jams.\" Conscious locks, security cameras, and voice assistants constantly clog standard Wi-Fi channels. With LiFi’s massive optical bandwidth, you can connect hundreds of conscious devices in a single room and your 10 Gbps speeds won’t even flinch.",
      img: infiniteDevicesImg,
      badge: "No Spectrum Overload",
      accent: "var(--lumen-blue)"
    },
    {
      title: "Invisible Infrastructure",
      subtitle: "Invisible Infrastructure",
      desc: "Stop trying to hide ugly routers with spider-web antennas behind your bookshelf. The network is built directly into your ceiling lights. If the room is lit, the room is wired.",
      img: invisibleInfraImg,
      badge: "Aesthetic Core Integration",
      accent: "var(--lumen-cyan)"
    }
  ];

  return (
    <section className="py-24 section-wash-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 bg-[var(--lumen-surface)] border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
            <Star size={12} /> Stop Sharing Wi-Fi. Start Surfing Light.
          </div>
          <h2 className="text-4xl font-black tracking-tight text-[var(--lumen-navy)] leading-tight">
            Wi-Fi was built to connect computers.<br />
            <span className="text-gradient-lumen">
              Lumen LiFi is built to connect your life.
            </span>
          </h2>
          <p className="text-sm md:text-base text-[var(--lumen-muted)] mt-4 font-mono font-bold uppercase tracking-widest text-[var(--lumen-blue)]">
            Step out of the radio age, and live at the speed of light.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {premiumShowcase.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border bg-[#0D2240] border-[var(--lumen-border)] group">
                    <Image src={item.img} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]" />
                    <div className="absolute top-4 left-4 backdrop-blur-md text-[10px] font-mono font-bold px-3 py-1.5 rounded-md text-white bg-[#0D2240]/80 border border-[var(--lumen-cyan)]/30">
                      {item.badge}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase mb-2" style={{ color: item.accent }}>{item.subtitle}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[var(--lumen-navy)] tracking-tight mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)]">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5 — ENTERPRISE INFRASTRUCTURE FORGE (DARK BRAND BREAK)
───────────────────────────────────────────────────────────── */
function EnterpriseSection() {
  return (
    <section className="py-24 bg-[#0D2240] text-white relative overflow-hidden" id="enterprise">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--lumen-cyan)] blur-[140px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[var(--lumen-cyan)] mb-2 block">Enterprise Optimization</span>
          <h2 className="text-4xl font-black tracking-tight mb-6 text-white">The Unbreakable Security Forge</h2>
          <p className="text-slate-300 leading-relaxed mb-6">Because light waves cannot traverse solid office walls, your information path remains entirely within your custom corporate building footprint. Zero RF footprint leaks, no external interception loops, and absolute isolation from external interference vectors.</p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-800/60 px-4 py-2 rounded-xl">
            🔒 Air-Gapped Physical Facility Protection Standard
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A192F] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-2 text-center font-mono text-xs text-cyan-400">
          <div className="relative w-full h-full">
            <Image src={enterpriseImg} alt="Enterprise" fill />
          </div>

          <div className="text-[10px] text-cyan-400/50 mt-1">Core Optical Node Transceiving Matrix Ready</div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 6 — COMMERCIAL ECOSYSTEM SECTORS (SECTION WASH PRIMARY)
───────────────────────────────────────────────────────────── */
function EcosystemSection() {
  const sectors = [
    {
      id: 'corp',
      title: 'Holographic Boardroom',
      subtitle: 'Corporate Office Sectors',
      icon: Building2,
      desc: 'Transform enterprise collaboration zones with multi-cone optical hubs. Conduct low-latency holographic projection presentations, secure financial data syncs, and clear cable clutter entirely from corporate properties.',
      img: corporateBoardroomImg,
      metric: 'Air-Gapped Privacy',
    },
    {
      id: 'factory',
      title: 'Industrial Manufacturing Floors',
      subtitle: 'Heavy Machinery Automation',
      icon: Factory,
      desc: 'Achieve zero network interference in heavy physical hardware plants. Light-wave communications ignore intense arc-welding fields and EMI, feeding telemetry straight into robotic operations blocks.',
      img: manufacturingImg,
      metric: '0% RF Interference',
    },
    {
      id: 'data',
      title: 'Next-Gen Data Centers',
      subtitle: 'Inter-Rack Optical Pipes',
      icon: Cpu,
      desc: 'Replace massive cabling trays with localized high-speed light beams. Simplify server farm maintenance loops and thermal efficiency tracks while maximizing inter-rack throughput matrices.',
      img: datacenterImg,
      metric: '100 Gbps Core Node',
    },
    {
      id: 'school',
      title: 'Smart Schools & Campuses',
      subtitle: 'High-Density Classroom Networks',
      icon: GraduationCap,
      desc: 'Eliminate student device lag on high-density campus floors. Every overhead classroom fixture provides a dedicated, direct network beam down to student devices without regional cross-traffic issues.',
      img: schoolImg,
      metric: 'Safe Radiation-Free Link',
    }
  ];

  const [activeTab, setActiveTab] = useState('corp');
  const current = sectors.find(s => s.id === activeTab) || sectors[0];

  // Automatic 5-second rotation effect loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = sectors.findIndex(s => s.id === prevTab);
        const nextIndex = (currentIndex + 1) % sectors.length;
        return sectors[nextIndex].id;
      });
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(timer);
  }, [sectors.length]);

  return (
    <section className="py-24 section-wash-primary border-t border-b border-[var(--lumen-border)]" id="shop">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 section-wash-secondary border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
            🛒 Commercial Portals
          </div>
          <h2 className="text-4xl font-black tracking-tight text-[var(--lumen-navy)]">B2B Enterprise Ecosystem</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sectors.map(s => {
            const Icon = s.icon;
            const isActive = s.id === activeTab;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all border shadow-sm"
                style={{
                  background: isActive ? '#0D2240' : 'var(--lumen-surface)',
                  color: isActive ? 'var(--lumen-cyan)' : 'var(--lumen-muted)',
                  borderColor: isActive ? '#0D2240' : 'var(--lumen-border)',
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--lumen-cyan)' : 'var(--lumen-blue)' }} />
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="card-surface rounded-3xl p-6 lg:p-10 shadow-xl flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--lumen-blue)] mb-2 block">{current.subtitle}</span>
            <h3 className="text-3xl font-black text-[var(--lumen-navy)] tracking-tight mb-4">Lumen for {current.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)] mb-8">{current.desc}</p>
            <div className="inline-flex self-start px-4 py-2 rounded-xl text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/60">
              ✓ Core Specification: {current.metric}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-video bg-[#0D2240] rounded-2xl overflow-hidden border border-[var(--lumen-border)]">
              <AnimatePresence mode="wait">
                <motion.div key={current.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4 }} className="relative w-full h-full">
                  <Image src={current.img} alt={current.title} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-contain w-full h-full p-2" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="glow-blue inline-flex items-center gap-2 h-12 px-8 rounded-2xl text-white font-bold text-sm transition-all hover:scale-[1.03] hover:shadow-xl" style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
            View Production Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
/* ─────────────────────────────────────────────────────────────
   SECTION 7 — ANALYTICAL TELEMETRY COUNTERS (WHITE/DARK SURFACE BASE)
───────────────────────────────────────────────────────────── */
function useCounter(targetValue, startTrigger, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startTrigger) return;
    let start = 0;
    const end = parseInt(targetValue);
    if (start === end) return;
    let incrementDuration = Math.floor(duration / end);
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementDuration);
    return () => clearInterval(timer);
  }, [targetValue, startTrigger]);
  return count;
}

/* ─────────────────────────────────────────────────────────────
   SECTION 8 — FINAL CALL TO ACTION
───────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
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
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT PAGE GLOBAL SYSTEM MODULE EXPORT
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans transition-colors duration-300 bg-[var(--lumen-bg)] text-[var(--lumen-navy)]">
      <Head>
        <title>Lumen LiFi — Internet at the Speed of Light</title>
        <meta name="description" content="Lumen LiFi turns your everyday ceiling lights into a super-fast 10 Gbps internet connection. No Wi-Fi, no radio waves — just pure light-speed connectivity." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <SpeedTableSection />
        <ConsciousHomeSection />
        <HomeFeaturesSection />
        <EnterpriseSection />
        <EcosystemSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}