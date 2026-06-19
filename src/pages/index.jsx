import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../../public/images/hero/hero.png';
import roomBg from '../../public/images/hero/room-bg.jpg';
import {
  ArrowRight, CheckCircle, Zap, Shield, Lock, Wifi, WifiOff,
  Monitor, Gamepad2, Cpu, Home, Building2, Factory, GraduationCap,
  Stethoscope, ChevronRight, Star, Sparkles
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

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
  const [tick, setTick] = useState(0);
  const facts = [
    '🐆 Cheetah — 120 km/h',
    '🦅 Peregrine Falcon — 390 km/h',
    '🚄 Maglev Train — 600 km/h',
    '💡 Light — 1,080,000,000 km/h',
  ];

  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % facts.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[var(--lumen-light)] via-[var(--lumen-bg)] to-[var(--lumen-light)] dark:from-[#070e1b] dark:via-[var(--lumen-bg)] dark:to-[#091222]"
    >
      {/* Dynamic Luminous Ambient Layer to kill flat backgrounds */}
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
              {facts[tick]}
            </motion.span>
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
function ConsciousHomeSection() {
  const conceptualPoints = [
    { icon: '🌅', title: 'Ambient Intelligence', sub: 'The End of the Switch', desc: 'Environmental AI maps your presence in real-time. Biometric signals route smoothly over light vectors to prepare spaces seamlessly without mechanical commands.' },
    { icon: '🥽', title: 'Spatial Computing Links', sub: 'The TV is a Relic', desc: 'Dedicated 10 Gbps optical pipes beam high-fidelity environments straight to your spatial arrays. Zero spatial lag, zero dropped wireless vectors.' },
    { icon: '🔒', title: 'Absolute Privacy Fortress', sub: 'Physical Optical Containment', desc: 'Because photon streams are contained by physical walls, your operations remain entirely air-gapped from neighborhood network snooping vectors.' },
    { icon: '🎙️', title: 'Conversations, Not Commands', sub: 'Instantaneous Feedback Sync', desc: 'Sub-millisecond transmission architectures mean hardware responds precisely as your intent registers, eliminating central router waiting queues.' }
  ];

  return (
    <section className="py-24 section-wash-primary" id="conscious-home">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 section-wash-secondary border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
            <Sparkles size={12} /> The Conscious Home
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-4 text-[var(--lumen-navy)]">
            Stop Calling It a{' '}
            <span className="text-gradient-lumen">"Smart Home"</span>
          </h2>
          <p className="text-[var(--lumen-muted)]">When you replace crowded Wi-Fi with multi-gigabit light, your house stops reacting to you and starts anticipating you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            {conceptualPoints.slice(0, 2).map((item, idx) => (
              <div key={idx} className="card-surface p-6 rounded-2xl shadow-sm">
                <div className="text-3xl mb-2">{item.icon}</div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--lumen-cyan)] block mb-1 uppercase">{item.sub}</span>
                <h4 className="text-lg font-black text-[var(--lumen-navy)] mb-2">{item.title}</h4>
                <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 relative aspect-square lg:aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-xl border border-[var(--lumen-border)] bg-[#0A192F]">
            <Image src={roomBg} alt="Smart home networking blueprint view" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60" />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {conceptualPoints.slice(2, 4).map((item, idx) => (
              <div key={idx} className="card-surface p-6 rounded-2xl shadow-sm">
                <div className="text-3xl mb-2">{item.icon}</div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--lumen-blue)] block mb-1 uppercase">{item.sub}</span>
                <h4 className="text-lg font-black text-[var(--lumen-navy)] mb-2">{item.title}</h4>
                <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
      title: "Ambient Intelligence & Automation",
      subtitle: "The Conscious Home Ecosystem",
      desc: "Experience a habitat that naturally synchronizes with your daily routines. LiFi enabled ceiling downlights stream contextual network directives instantly down to localized hardware arrays with absolute signal isolation.",
      img: homeAutomationImg,
      badge: "Zero-Latency Smart Home",
      accent: "var(--lumen-cyan)"
    },
    {
      title: "Competitive Gaming & Esports Engine",
      subtitle: "Sub-Millisecond Execution Profile",
      desc: "Eliminate radio frequency congestion jitter entirely. Achieve a permanent structural advantage with dedicated wireless bandwidth vectors feeding directly into your configuration without shared wireless packet drops.",
      img: gamingImg,
      badge: "Pure Optical Link",
      accent: "var(--lumen-blue)"
    },
    {
      title: "Next-Generation 8K Media Streaming",
      subtitle: "Uncompressed Unthrottled Data Pipelines",
      desc: "Unlock true high-fidelity entertainment streams without pixelated buffering delays. Light waves transport large raw files effortlessly, delivering pristine 8K spatial environments across multiple screens simultaneously.",
      img: streamingImg,
      badge: "10 Gbps Pipeline",
      accent: "var(--lumen-teal)"
    },
    {
      title: "Infinite Device Connection Density",
      subtitle: "Massive Multi-User Scalability",
      desc: "Say goodbye to traditional Wi-Fi dropouts when everyone connects at once. Lumen's wide light spectrum allows dozens of high-bandwidth smart home accessories, smartphones, and laptops to pull maximum speed from the same ceiling light array without cross-talk.",
      img: infiniteDevicesImg,
      badge: "No Spectrum Overload",
      accent: "var(--lumen-blue)"
    },
    {
      title: "Invisible Architecture Infrastructure",
      subtitle: "Seamless Technical Aesthetic Integration",
      desc: "A completely clean living space with zero ugly router boxes, external antennas, or trailing cable assemblies. Your high-speed network components are completely integrated inside architectural downlights, delivering minimalist design.",
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
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A192F] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 text-center font-mono text-xs text-cyan-400">
          <div className="w-12 h-12 rounded-full border border-dashed border-cyan-400 animate-spin mb-4 flex items-center justify-center">
            <Cpu size={18} />
          </div>
          <div>[ 📊 SECURE LOG INTEGRATION ACTIVE ]</div>
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

function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const speedCount = useCounter(10, visible);
  const timeCount = useCounter(80, visible);

  return (
    <section ref={ref} className="py-20 bg-[var(--lumen-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl font-black text-[var(--lumen-navy)]">Validated at Scale</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { val: visible ? `${speedCount} Gbps` : '0 Gbps', label: 'Sustained Peak Air Velocity' },
            { val: visible ? `${timeCount} Sec` : '0 Sec', label: '100 GB Asset Sync Matrix' },
            { val: '100%', label: 'Physical Wall Isolation' }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-3xl section-wash-primary border border-[var(--lumen-border)] shadow-sm">
              <div className="text-4xl font-black mb-2 font-mono text-gradient-lumen">
                {stat.val}
              </div>
              <div className="text-[10px] sm:text-xs text-[var(--lumen-muted)] uppercase tracking-widest font-mono font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 8 — FINAL CALL TO ACTION
───────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="py-24 section-wash-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden bg-[#0D2240] text-white shadow-2xl">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,194,199,0.2) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(0,194,199,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,199,0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6 bg-cyan-500/10 text-[var(--lumen-cyan)] border border-[var(--lumen-cyan)]/20">
                <Zap size={12} /> Limited Early Access
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                Step out of the radio age.<br />
                <span style={{ background: 'linear-gradient(135deg, #00C2C7, #0FB89A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Live at the speed of light.
                </span>
              </h2>
              <p className="text-blue-200 text-base mb-10 max-w-lg mx-auto">Upgrade your environment's deployment footprint to the ultimate benchmark in light wave hardware throughput.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="glow-cyan inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-[#0D2240] font-bold text-sm tracking-wide transition-all hover:scale-[1.03]" style={{ background: 'linear-gradient(135deg, #00C2C7, #0FB89A)' }}>
                  Explore Home Kits <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 border-white/20 text-white hover:bg-white/10 transition-all">
                  Request a Demo
                </Link>
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
        <StatsSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}