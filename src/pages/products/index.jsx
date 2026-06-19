import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowLeft,
  Cpu,
  Download,
  Check,
  Zap,
  Shield,
  Activity,
  Laptop,
  Sun,
  ShieldCheck,
  HelpCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Info
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

/* ==========================================================================\
   6-PRODUCT ADVANCED RESIDENTIAL ECOSYSTEM MATRIX (PHOTONICS CYAN THEME)
   ========================================================================== */
const productsData = [
  {
    slug: 'phi-core-router',
    name: 'Lumen Core Hub',
    price: '$299',
    badge: 'Infrastructure',
    tagline: 'The ceiling light that powers your entire home.',
    desc: 'Stop hiding ugly routers. The Lumen Core replaces your standard ceiling lights with an elegant LED array that casts an invisible, 10 Gbps Li-Fi data cone over the entire room. If the room is lit, the room is wired.',
    icon: Cpu,
    accent: 'from-cyan-500 to-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['10 Gbps Throughput', 'Zero RF Radiation', 'Adjustable Color Temp']
  },
  {
    slug: 'photon-antenna-one',
    name: 'Lumen Matrix TV',
    price: '$1,899',
    badge: 'Entertainment',
    tagline: '8K streaming with absolutely zero buffering.',
    desc: 'Smart TVs choke when they share Wi-Fi. The Lumen Matrix syncs directly with the Core Hub’s light beam, guaranteeing an unthrottled, dedicated pipeline for flawless 8K holographic entertainment and zero-lag spatial gaming.',
    icon: Sun,
    accent: 'from-blue-500 to-indigo-600',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Micro-LED Display', 'Sub-millisecond Latency', 'Built-in Li-Fi Receiver']
  },
  {
    slug: 'lightwave-usb-dongle',
    name: 'Lumen Sentinel',
    price: '$249',
    badge: 'Security',
    tagline: 'Security that thinks before you blink.',
    desc: 'Standard video doorbells buffer right when you need to see who is outside. The Sentinel uses an infrared Li-Fi link to transmit unjammable, real-time 4K video instantly. Hackers can’t intercept it, and Wi-Fi dead zones can’t stop it.',
    icon: Laptop,
    accent: 'from-cyan-600 to-cyan-400',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Unjammable Signal', 'Instant 4K Feed', 'Facial Recognition AI']
  },
  {
    slug: 'lumen-command-fridge',
    name: 'Lumen Command Fridge',
    price: '$3,299',
    badge: 'Appliances',
    tagline: 'A supercomputer in your kitchen.',
    desc: 'Stop waiting for your fridge screen to load. The Command Fridge uses its Li-Fi link to instantly track inventory via interior micro-cameras, order groceries in real-time, and display 4K cooking tutorials without a single stutter.',
    icon: Activity,
    accent: 'from-blue-600 to-cyan-500',
    imageUrl: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Zero-Lag UI', 'Inventory AI', 'Seamless Integration']
  },
  {
    slug: 'the-ai-mesh-cube',
    name: 'Lumen Precision Vac',
    price: '$699',
    badge: 'Appliances',
    tagline: 'No more bouncing off walls.',
    desc: 'Wi-Fi robot vacuums get lost under the couch. The Precision Vac uses the overhead Li-Fi optical grid to map your room down to the millimeter in real-time. It doesn’t bump into things; it glides with surgical precision.',
    icon: Zap,
    accent: 'from-cyan-500 to-indigo-500',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Optical Grid Mapping', 'Instant Re-routing', 'Li-Fi Edge AI']
  },
  {
    slug: 'lumen-overhead-driver',
    name: 'Lumen Whisper Shades',
    price: '$399 / window',
    badge: 'Environment',
    tagline: 'Respond to the sun, instantly.',
    desc: 'Ditch the clunky smart-home bridges. Whisper Shades have optical sensors woven into the fabric. They catch the Li-Fi signal directly from your ceiling, allowing them to adjust to glare and temperature instantly and silently.',
    icon: Shield,
    accent: 'from-cyan-600 to-blue-400',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['No Smart Hub Required', 'Solar-Sync AI', 'Silent Motors']
  }
];

export default function ProductsPage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;

  return (
    <div className="min-h-screen font-sans bg-[#0B111E] text-slate-200 antialiased selection:bg-cyan-950/50 selection:text-cyan-400 transition-colors duration-300">
      <Head>
        <title>Lumen LIFI | The Conscious Home Collection</title>
        <meta name="description" content="Lumen LIFI — residential optical wireless internet plans and hardware." />
      </Head>

      <Header />

      <main className="pt-24 select-none">
        {/* Merchant Layer Compliance Status Bar */}
        <div className="bg-[#090D1A] border-b border-slate-800/60 py-3 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide">
              <Zap className="w-4 h-4 text-[#00D2FF] animate-pulse" />
              <span>10 Gbps Unthrottled Speed</span>
            </div>
            <div className="flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide">
              <Shield className="w-4 h-4 text-[#00D2FF]" />
              <span>Absolute Signal Privacy</span>
            </div>
            <div className="flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
              <span>Zero Radio Frequency (RF)</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!activeProduct ? (
            <motion.div
              key="catalog-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16 py-16"
            >
              {/* Concept Framework Text Block */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="space-y-4 max-w-3xl">
                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                    The Conscious Home Collection
                  </h2>
                  <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
                    Every device in this lineup is equipped with a Lumen optical receiver, guaranteeing zero latency, absolute privacy, and instant AI processing.
                  </p>
                </div>
              </div>

              {/* 6-Product Layout Grid */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {productsData.map((product, index) => {
                    return (
                      <motion.div
                        key={product.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className={`${product.size} flex flex-col`}
                      >
                        <div
                          className="w-full group relative flex flex-col h-full rounded-3xl border border-slate-800 bg-[#0F172A]/40 overflow-hidden transition-all duration-300 hover:border-[#00D2FF]/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]"
                        >
                          {/* Image Header with Badge Overlay */}
                          <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-full h-full object-cover transform scale-105 group-hover:scale-100 opacity-70 group-hover:opacity-90 transition-all duration-700 ease-out"
                            />
                            <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase px-3 py-1 rounded-full">
                              {product.badge}
                            </span>
                          </div>

                          {/* Content Body */}
                          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                              <div className="flex items-baseline justify-between gap-4">
                                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                                  {product.name}
                                </h3>
                                <span className="text-xl font-mono font-bold text-white">
                                  {product.price}
                                </span>
                              </div>
                              <p className="text-sm text-[#00D2FF] font-medium tracking-wide">
                                {product.tagline}
                              </p>
                              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                                {product.desc}
                              </p>
                            </div>

                            {/* Specification Checklist Row */}
                            <div className="space-y-4 pt-2">
                              <div className="space-y-2">
                                {product.specs.map((spec) => (
                                  <div key={spec} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                                    <span className="text-[#00D2FF] text-sm">›</span>
                                    <span>{spec}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Action Call-To-Action Button */}
                              <button
                                onClick={() => setSelectedProductSlug(product.slug)}
                                className="w-full h-11 border border-slate-700 hover:border-[#00D2FF] bg-slate-900/60 hover:bg-[#00D2FF]/10 text-white font-bold text-xs rounded-xl tracking-wider uppercase transition-all duration-300 shadow-inner"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Regulatory Transparency & Norms Framework Layout */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                <div className="bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <FileText className="w-4 h-4 text-[#00D2FF]" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Required Documentation Links</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Review our residential network configurations, transparent user guidelines, and operational deployment rules.</p>
                  <div className="space-y-2 pt-2 font-mono text-xs font-bold">
                    <Link href="/privacy" className="block text-[#00D2FF] hover:underline">→ Infrastructure Privacy Policy</Link>
                    <Link href="/terms" className="block text-[#00D2FF] hover:underline">→ System Terms & Conditions</Link>
                  </div>
                </div>

                <div className="bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <Mail className="w-4 h-4 text-[#00D2FF]" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Corporate Identification Desk</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Official commercial deployment requests or compliance verification checks can communicate directly with our centralized desk:</p>
                  <div className="space-y-1.5 pt-1 text-xs font-mono text-slate-400">
                    <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-500" /> +91 (Commercial Support Hub)</p>
                    <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-500" /> engineering@lumenfi.com</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-slate-500" /> Residential Operations Core, India Hub</p>
                  </div>
                </div>

                <div className="bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Logistical Parameter Matrix</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span><strong>Deployment Windows</strong>: Home hardware kits step into configuration cycles within 3–5 structural business days.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span><strong>Transparent Invoicing</strong>: No localized frequency surcharges or surprise equipment taxes added later.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Science Clarification FAQ Block */}
              <div className="max-w-4xl mx-auto px-6 pt-8">
                <div className="text-center space-y-2 mb-12">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Frequently Evaluated Physics</h2>
                  <p className="text-[#00D2FF] text-xs font-mono uppercase tracking-widest font-bold">Unpacking The Signal Transmission Paradigm:</p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "How does this scale beyond my standard Jio or Airtel Fiber setup?",
                      a: "Traditional fiber providers do an excellent job bringing high-speed data lines to your home boundary, but they bottleneck inside your rooms by handing that traffic over to standard radio wave Wi-Fi routers. Lumen LIFI takes your fiber line and routes it straight through clean overhead visible light waves, preventing your speeds from suffering wireless degradation across walls."
                    },
                    {
                      q: "Why is optical wireless internet highly optimized for next-generation AI platforms?",
                      a: "Modern AI network arrays require persistent, un-throttled data pipes with zero packet delay. Because light waves operate on an entirely separate, massive un-congested spectrum bands, it eliminates typical micro-stuttering or drops in tracking speed, giving local AI processing environments instantaneous data access metrics."
                    }
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border border-slate-800 rounded-xl p-5 bg-[#0F172A]/40 cursor-pointer hover:border-slate-700 transition-colors"
                      onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h4 className="text-sm font-bold text-white font-mono">{faq.q}</h4>
                        <HelpCircle className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-[#00D2FF]' : ''}`} />
                      </div>
                      {activeFaq === index && (
                        <p className="text-xs text-slate-400 mt-3 leading-relaxed border-t border-slate-800 pt-3 font-sans">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Sub-Page Detail Specification Block */
            <motion.section
              key="detail-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="max-w-6xl mx-auto px-6 py-12 pb-24"
            >
              <button
                onClick={() => setSelectedProductSlug(null)}
                className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#00D2FF] transition-colors mb-12 group font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                RETURN TO HARDWARE ECOSYSTEM
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-[50px_20px_80px_40px] transform rotate-2 scale-[1.02] opacity-15 blur-sm`} />
                  <div className="w-full aspect-[4/5] rounded-[50px_20px_80px_40px] overflow-hidden border-4 border-slate-900 shadow-xl relative bg-slate-900">
                    <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[10px] font-bold uppercase">
                    <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" /> CORE HARDWARE // {activeProduct.badge}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">{activeProduct.name}</h1>
                  <p className="text-base text-[#00D2FF] font-semibold font-mono leading-relaxed">{activeProduct.tagline}</p>

                  <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
                    <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" /> Architectural Statement
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{activeProduct.desc}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-widest">VERIFIED PROTOCOL SPECIFICATIONS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProduct.specs.concat(['Microsecond packet translation layer', '100% optical physical containment boundary']).map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                          <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4">
                    <button className="h-12 px-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#00D2FF] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download Tech Blueprint
                    </button>
                    <Link href="/contact" className="h-12 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center shadow-lg shadow-cyan-500/10">
                      Request Deployment Review
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}