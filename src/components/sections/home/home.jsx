import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  // Parallax smooth scroll effects for the fluid imagery and floating card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Framer Motion staggered orchestration setup
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F7FC] via-[#FAFCFF] to-white pt-24 pb-20 lg:pt-36 lg:pb-32"
    >
      {/* Decorative premium vector path mimicking abstract lightwaves/optical curves */}
      <svg className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none hidden lg:block" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M100,0 C70,20 60,60 100,100 Z" fill="url(#hero-liquid-grad)" />
        <defs>
          <linearGradient id="hero-liquid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-tr from-blue-300/20 to-indigo-200/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* LEFT COLUMN: Deep Content Focus Matrix (Spans 7 Columns to comfortably anchor massive text sizes) */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Minimal Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full border border-blue-100/80 shadow-sm shadow-blue-100/10">
              <span className="flex items-center gap-0.5 bg-emerald-50 px-2 py-0.5 rounded-md text-[10px] font-black text-emerald-600 tracking-wider uppercase">Trustpilot ★★★★★</span>
              <span className="text-xs font-medium text-slate-600 tracking-tight">Trusted by 500+ British families</span>
            </motion.div>

            {/* Asymmetric Massive Typography Block */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-[84px] font-black tracking-tight leading-[0.95] text-slate-900">
                Plan today.<br />
                <span className="relative inline-block bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                  Protect forever.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl font-medium pt-1">
                Professional estate planning handled entirely remotely. In plain, stress-free English. Pure peace of mind constructed carefully for your loved ones.
              </p>
            </motion.div>

            {/* Premium Magnetic Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 h-14 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm tracking-wide"
              >
                Book a Consultation
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center h-14 px-8 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm transition-all duration-300 text-sm tracking-wide"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Flat Minimalist Trust Matrix Footer */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-lg">
              {[
                { label: 'Legally Binding', sub: '100% valid under UK law' },
                { label: 'Secure & Private', sub: 'Bank-grade protection' },
                { label: 'Expert Guidance', sub: 'Full solicitor review' },
              ].map(({ label, sub }) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <p className="text-xs font-bold text-slate-800 tracking-tight">{label}</p>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal pl-5">{sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Asymmetric Fluid Structural Canvas (Spans 5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end pt-12 lg:pt-0">

            {/* The Standout Image Fluid Frame Wrapper */}
            <motion.div
              style={{ y: yImage }}
              className="relative w-full max-w-[420px] aspect-[4/5] z-10"
            >
              {/* Outer Layer Subtle Canvas Backlighting Shadow Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[60px_30px_100px_40px] transform rotate-2 scale-[1.02] opacity-10 blur-sm" />

              <div className="w-full h-full rounded-[60px_30px_100px_40px] overflow-hidden shadow-2xl shadow-blue-950/10 border-4 border-white relative group">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=900"
                  alt="Peaceful mountain lake – estate planning peace of mind"
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent mix-blend-multiply" />
              </div>

              {/* Grid matrix pattern layer behind the main shape frame */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-30 -z-10" />
            </motion.div>

            {/* Micro-Glassmorphic Floating Legacy Information Card */}
            <motion.div
              style={{ y: yCard }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-6 left-[-12px] lg:left-[-40px] bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl shadow-slate-900/10 border border-white/60 w-56 z-20 group hover:border-blue-200 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm transition-transform group-hover:scale-110 duration-300">
                  <Shield size={15} />
                </div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-wider">Secure Legacy</p>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-tight mb-1">Your assets protected.</p>
              <p className="text-[11px] text-slate-400 leading-normal">
                Wills, protective trusts, and LPAs structured neatly around your family variables.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;