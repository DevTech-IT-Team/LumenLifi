import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
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
  Layers3,
  ExternalLink
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const productsData = [
  {
    slug: 'lumen-core-downlighters',
    name: 'Lumen Core Downlighters',
    price: '$349',
    category: 'Network Foundation',
    badge: 'NETWORK TRANSMITTERS',
    tagline: 'The heart of your home light network.',
    desc: 'These ceiling lights act like invisible internet routers. They beam super fast internet to every room while giving you beautiful light that you can adjust easily.',
    icon: Cpu,
    accent: 'from-amber-500/20 to-amber-600/10 border-amber-500/40',
    textAccent: 'text-amber-400',
    imageUrl: '/images/products/Lumen Core Downlighters.png',
    specs: ['Super Fast Internet Beams', 'Adjustable Room Lighting', 'No Radio Wave Mess']
  },
  {
    slug: 'lumen-photon-dongle',
    name: 'Lumen Photon Dongle (USB-C)',
    price: '$129',
    category: 'Network Foundation',
    badge: 'NETWORK TRANSCEIVERS',
    tagline: 'Gives your current devices instant light-speed internet.',
    desc: 'Plug this tiny receiver into any laptop, computer, or tablet. It instantly switches your device from slow, crowded Wi-Fi to a super fast light connection.',
    icon: Laptop,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen Photon Dongle.png',
    specs: ['Tiny Light Receiver', 'Easy Plug-and-Play Setup', 'Private Fast Internet Beam']
  },
  {
    slug: 'lumen-matrix-8k-tv',
    name: 'Lumen Matrix 8K TV',
    price: '$1,999',
    category: 'Entertainment & Computing',
    badge: 'ENTERTAINMENT & COMPUTING',
    tagline: "The first TV that plays perfect, crystal-clear videos without slowing down.",
    desc: 'Powered by a direct light connection from your ceiling. It streams perfect 8K videos and video games smoothly, without ever slowing down when other people use the internet.',
    icon: Sun,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen 8k TV.png',
    specs: ['Perfect 8K Video Quality', 'Smooth Video Gaming', 'Never Slows Down']
  },
  {
    slug: 'lumen-studio-laptop',
    name: 'Lumen Laptop',
    price: '$2,499',
    category: 'Entertainment & Computing',
    badge: 'ENTERTAINMENT & COMPUTING',
    tagline: 'Made for heavy schoolwork, high-end design, and fast apps.',
    desc: 'With a built-in light receiver right inside the screen lid. You get super fast, stable internet speeds without ever needing a messy internet cable.',
    icon: Laptop,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen Studio Laptop.png',
    specs: ['Built-in Light Receiver', 'Super Fast Cable-Free Speeds', 'Great for Heavy Apps']
  },
  {
    slug: 'lumen-echo-soundbar',
    name: 'Echo Soundbar',
    price: '$599',
    category: 'Entertainment & Computing',
    badge: 'ENTERTAINMENT & COMPUTING',
    tagline: 'Say goodbye to sound delays.',
    desc: 'Connected by super fast beams of light. This speaker answers your voice commands and smart home requests the very second you finish talking.',
    icon: Activity,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen Echo Soundbar.png',
    specs: ['Super Fast Light Beams', 'Instant Voice Answers', 'Perfect Sound Sync']
  },
  {
    slug: 'lumen-sentinel-video-doorbell',
    name: 'Lumen Sentinel Video Doorbell',
    price: '$249',
    category: 'Security & Perimeter',
    badge: 'DOMESTIC & PERIMETER',
    tagline: 'Front-door security that cannot be blocked.',
    desc: 'Powered by the light beam from your porch bulb. It sends clear 4K video straight to your phone. Because it uses light, thieves cannot block it with Wi-Fi signal jammers.',
    icon: Shield,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen Sentinel Video Doorbell.png',
    specs: ['Porch Light Powered', 'Clear 4K Video Stream', 'Cannot Be Blocked']
  },
  {
    slug: 'lumen-aegis-floodlight-cams',
    name: 'Lumen Aegis Floodlight Cams',
    price: '$499',
    category: 'Security & Perimeter',
    badge: 'DOMESTIC & PERIMETER',
    tagline: 'Complete safety around your house.',
    desc: 'These bright outdoor lights also work as fast internet transmitters. They safely link your outdoor cameras to your home computer without sending your private video out to the public street.',
    icon: ShieldCheck,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen Aegis Floodlight Cams.png',
    specs: ['Super Fast Video Links', 'Very Bright LED Bulbs', 'Private and Safe Feed']
  },
  {
    slug: 'lumen-glacier-fridge',
    name: 'Glacier Fridge',
    price: '$349',
    category: 'Conscious Appliances & Home Automation',
    badge: 'CONSCIOUS APPLIANCES',
    tagline: 'A smart fridge with built-in light internet.',
    desc: 'Say goodbye to loading screens on your fridge. Stream cooking videos, track your food items, and run your smart home screen without any waiting, right from the door.',
    icon: Activity,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen Glacier Smart Fridge.png',
    specs: ['No-Wait Smart Screen', 'Smart Food Trackers', 'Smooth Video Streaming']
  },
  {
    slug: 'lumen-precision-robot-vacuum',
    name: 'Precision Robot Vacuum',
    price: '$899',
    category: 'Conscious Appliances & Home Automation',
    badge: 'CONSCIOUS APPLIANCES',
    tagline: 'The smartest robot vacuum for your floors.',
    desc: 'Powered by a steady beam of light. This vacuum builds a 3D map of your room and avoids obstacles instantly, meaning it will never crash into chairs or tables.',
    icon: Zap,
    accent: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
    textAccent: 'text-cyan-400',
    imageUrl: '/images/products/Lumen Precision Robot Vacuum.png',
    specs: ['Steady Light Connection', 'Smart 3D Room Maps', 'Instant Driving Logic']
  }
];

export default function ProductsPage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;

  return (
    <div
      className="min-h-screen font-sans bg-[#080D1A] text-slate-300 antialiased relative overflow-hidden selection:bg-cyan-500 selection:text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/products/herobg.png')" }}
    >
      {/* Background Dimming Layer */}
      <div className="absolute inset-0 bg-[#080D1A]/85 pointer-events-none z-0" />

      {/* Dynamic Midtone Environmental Lighting Masks */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-radial from-[#152B52]/45 via-transparent to-transparent pointer-events-none opacity-70 blur-3xl z-10" />
      <div className="absolute top-[400px] right-10 w-[700px] h-[500px] bg-radial from-[#0A1C38]/65 via-transparent to-transparent pointer-events-none opacity-50 blur-3xl z-10" />

      {/* Decorative Network Optical Rays Pattern Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f192e_1px,transparent_1px),linear-gradient(to_bottom,#0f192e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 z-10" />

      <Head>
        <title>Lumen LiFi | Shop the Smart Home Light Network</title>
        <meta name="description" content="Welcome to the world's first home run entirely on light." />
      </Head>

      <Header />

      <main className="pt-28 pb-16 relative z-20 max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!activeProduct ? (
            <motion.div
              key="catalog-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-6 space-y-16"
            >

              {/* --- IMMERSIVE HERO CANVAS BANNER --- */}
              <div
                className="relative w-full min-h-[560px] lg:min-h-[640px] bg-cover bg-center bg-no-repeat rounded-[2rem] border border-slate-800/80 p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden shadow-2xl group"
                style={{ backgroundImage: "url('/images/products/fullbg.png')" }}
              >
                {/* Dark protection gradient filter for effortless typographic clarity */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#060B16]/80 via-[#060B16]/20 to-transparent pointer-events-none z-0" />

                {/* Cybernetic ambient glow vectors */}
                <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
                <div className="absolute -bottom-20 -left-10 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-[100px] pointer-events-none z-0" />

                {/* Primary Narrative Text Block */}
                <div className="relative z-10 max-w-xl space-y-4">
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.05]">
                    Shop the Smart Home <br />
                    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent opacity-90">
                      Light Network
                    </span>
                  </h1>

                  <p className="text-slate-200/90 text-sm sm:text-base font-normal leading-relaxed max-w-lg drop-shadow-md">
                    Welcome to the world's first home run entirely on light. Every device in our family has built-in light receivers. This gives you zero lag, completely safe security, and unlimited internet speed.
                  </p>
                </div>

                {/* Authentic Metallic Gold Centerpiece Floating Badge */}
                <div className="relative z-10 w-full flex justify-center pt-12 lg:pt-0">
                  <div className="relative max-w-xl w-full bg-gradient-to-b from-[#D4AF37]/25 via-[#AA7C11]/15 to-[#5A4106]/35 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-4 px-6 text-center shadow-2xl flex flex-col items-center justify-center gap-2 overflow-hidden group/gold">

                    {/* Dynamic metallic gleam sheen highlight */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/gold:translate-x-full transition-transform duration-1000 ease-out" />

                    {/* Industrial rivet detail pins on card bounds */}
                    <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />
                    <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />
                    <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />

                    {/* Operational heartbeat optical connection link */}
                    <div className="flex items-center justify-center">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 border border-white/20" />
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-sans font-medium text-amber-100 tracking-wide leading-relaxed">
                      Stop trying to fix a broken Wi-Fi network. <br className="hidden sm:inline" />
                      <span className="font-bold text-white">Build a smart home run on light.</span>
                    </p>
                  </div>
                </div>
              </div>


              {/* --- UNIFIED FULL-WIDTH MATRIX PRODUCT GRID --- */}
              <div className="space-y-16">

                {/* GRID SECTION 1: SYSTEM RECEPTORS / FOUNDATIONAL TRANSMITTERS */}
                <div className="space-y-6">
                  <div className="bg-cyan-950/20 border-l-2 border-cyan-400 px-4 py-2.5 rounded-r-lg max-w-xs">
                    <h2 className="text-sm font-black text-white tracking-widest uppercase font-mono flex items-center gap-2">
                      <Layers3 className="w-4 h-4 text-cyan-400" /> NETWORK FOUNDATION
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {productsData.filter(p => p.category === 'Network Foundation').map((product) => {
                      const Icon = product.icon;
                      return (
                        <div key={product.slug} className="group relative bg-[#0B1121]/95 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-xl flex flex-col justify-between">
                          <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent" />
                            <span className="absolute top-4 left-4 bg-[#050A14] border border-slate-700 text-[10px] font-mono font-bold tracking-widest text-cyan-400 px-3 py-1 rounded-sm uppercase">
                              {product.badge}
                            </span>
                          </div>

                          <div className="p-6 space-y-4 relative -mt-6 bg-[#0B1121] flex-grow flex flex-col justify-between">
                            <div className="space-y-3">
                              <div className="flex justify-between items-baseline gap-4">
                                <h3 className="text-2xl font-bold text-white tracking-tight">{product.name}</h3>
                                <span className="text-xl font-mono font-bold text-cyan-400">{product.price}</span>
                              </div>
                              <p className="text-xs font-mono text-orange-400 flex items-center gap-2">
                                <Icon className="w-4 h-4" /> {product.tagline}
                              </p>
                              <p className="text-slate-400 text-sm leading-relaxed font-light">{product.desc}</p>
                            </div>

                            <div className="space-y-4 pt-4">
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-900/60">
                                {product.specs.map((spec, i) => (
                                  <span key={i} className="text-[11px] font-mono text-slate-300 bg-[#050A14] px-2 py-1.5 rounded border border-slate-900 text-center block truncate">
                                    ▪ {spec}
                                  </span>
                                ))}
                              </div>

                              <button
                                onClick={() => setSelectedProductSlug(product.slug)}
                                className="w-full py-3 bg-gradient-to-r from-slate-900 to-slate-950 hover:from-cyan-950 hover:to-slate-900 border border-slate-800 text-xs uppercase font-mono font-bold text-slate-200 rounded-xl transition-all tracking-widest flex items-center justify-center gap-2"
                              >
                                SETUP LIGHT TRANSMITTER <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* GRID SECTION 2: DOWNSTREAM NODE ARRAYS */}
                {['Entertainment & Computing', 'Security & Perimeter', 'Conscious Appliances & Home Automation'].map((catName) => {
                  const catProducts = productsData.filter(p => p.category === catName);
                  if (catProducts.length === 0) return null;
                  return (
                    <div key={catName} className="space-y-6">
                      <div className="bg-slate-900/50 border-l-2 border-slate-700 px-4 py-2 rounded-r-lg backdrop-blur-xs max-w-md">
                        <h2 className="text-xs font-black text-slate-400 tracking-widest uppercase font-mono">
                          {catName.toUpperCase()}
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {catProducts.map((product) => (
                          <div key={product.slug} className="bg-[#0B1121]/90 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 hover:bg-[#0E162B]/90 transition-all shadow-xl group backdrop-blur-xs">
                            <div className="space-y-4">
                              <div className="rounded-lg overflow-hidden aspect-[16/10] bg-slate-950 opacity-60 group-hover:opacity-100 transition-opacity relative border border-slate-900">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                              </div>

                              <div className="space-y-1">
                                <div className="flex justify-between items-start gap-2">
                                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-1">{product.name}</h3>
                                  <span className="text-sm font-mono font-bold text-cyan-400 shrink-0">{product.price}</span>
                                </div>
                                <p className="text-[11px] text-orange-400/90 font-mono font-medium line-clamp-1">✓ {product.tagline}</p>
                              </div>

                              <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 font-light font-sans">{product.desc}</p>
                            </div>

                            <button
                              onClick={() => setSelectedProductSlug(product.slug)}
                              className="w-full py-2.5 mt-5 bg-[#050A14] border border-slate-900 text-[10px] uppercase font-mono font-bold text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-colors tracking-wider"
                            >
                              SEE FULL DETAILS
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>


              {/* --- EVALUATED PHYSICS / TECHNICAL LOGS SECTION --- */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-slate-800/80">
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white tracking-tight">Common Questions About Light Internet</h2>
                    <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">LEARN HOW OUR SMART LIGHT CHIPS WORK:</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        q: "How is this better than my standard Jio or Airtel fiber network setup?",
                        a: "Normal internet companies bring fast cables to your house, but the internet gets slow inside your rooms because standard Wi-Fi routers use crowded radio waves. Lumen LiFi takes that fast cable line and sends it directly through your clean ceiling lights, keeping your speeds super fast everywhere."
                      },
                      {
                        q: "Why is light internet great for new smart AI tools?",
                        a: "New AI tools need a steady, full-speed internet connection that never drops or pauses. Because light uses a giant, empty path that never gets crowded, it stops all micro-pauses or slowdowns, giving your smart tools instant information."
                      }
                    ].map((faq, index) => (
                      <div
                        key={index}
                        className="border border-slate-800/80 rounded-xl p-4 bg-[#060B14]/90 cursor-pointer hover:border-slate-700 transition-colors backdrop-blur-xs"
                        onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                      >
                        <div className="flex justify-between items-center gap-4">
                          <h4 className="text-xs font-bold text-white font-mono">{faq.q}</h4>
                          <HelpCircle className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-cyan-400' : ''}`} />
                        </div>
                        {activeFaq === index && (
                          <p className="text-xs text-slate-400 mt-2.5 border-t border-slate-800/60 pt-2.5 leading-relaxed font-sans">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left Side Metadata Infrastructure Documentation Links */}
                <div className="lg:col-span-4 grid grid-cols-1 gap-4 text-[11px] font-mono text-slate-400">
                  <div className="bg-[#060B14]/80 border border-slate-800/80 p-5 rounded-xl space-y-2 backdrop-blur-xs">
                    <div className="flex items-center gap-2 text-white">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <h3 className="font-bold uppercase tracking-wider text-[10px]">HELPFUL DOCUMENTS</h3>
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-70">Read our simple setup books, safety rules, and home network guides.</p>
                    <div className="space-y-1 pt-1 font-bold">
                      <span className="block text-cyan-400 hover:underline cursor-pointer">→ Privacy Policy Rules</span>
                      <span className="block text-cyan-400 hover:underline cursor-pointer">→ Terms and Conditions</span>
                    </div>
                  </div>

                  <div className="bg-[#060B14]/80 border border-slate-800/80 p-5 rounded-xl space-y-2 backdrop-blur-xs">
                    <div className="flex items-center gap-2 text-white">
                      <Mail className="w-4 h-4 text-orange-400" />
                      <h3 className="font-bold uppercase tracking-wider text-[10px]">CONTACT OUR TEAM</h3>
                    </div>
                    <div className="space-y-1 opacity-70 text-[10px]">
                      <p>Phone: +91 (Support Help Desk)</p>
                      <p>Email: engineering@lumenfi.com</p>
                      <p className="text-slate-500">Main Office Hub, India</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ) : (

            /* --- DETAILED COMPONENT DATASHEET SPEC SHEET VIEW --- */
            <motion.section
              key="detail-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto py-8"
            >
              <button
                onClick={() => setSelectedProductSlug(null)}
                className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors mb-10 group font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                BACK TO ALL PRODUCTS
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-[#0A1121]/95 border border-slate-800 p-8 rounded-3xl relative backdrop-blur-md">
                <div className="absolute inset-0 bg-radial from-cyan-500/5 via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="lg:col-span-5 relative">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
                    <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-full object-cover opacity-70" />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 font-mono text-[10px] font-bold uppercase">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" /> PRODUCT TYPE: {activeProduct.badge}
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">{activeProduct.name}</h1>
                    <span className="text-2xl font-mono font-bold text-cyan-400">{activeProduct.price}</span>
                  </div>
                  <p className="text-sm text-cyan-500 font-semibold font-mono">{activeProduct.tagline}</p>

                  <div className="p-5 bg-slate-950/80 border border-slate-900 rounded-xl text-xs text-slate-400 leading-relaxed font-light">
                    {activeProduct.desc}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">KEY FEATURES OF THIS PRODUCT:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProduct.specs.concat(['Super Safe Built-in Data Security', 'Internet Signals Stay Inside Your Walls']).map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-900 flex flex-wrap gap-4">
                    <button className="h-11 px-5 rounded-xl bg-[#050A14] border border-slate-800 hover:border-slate-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" /> Technical Guide (PDF)
                    </button>
                    <button className="h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center shadow-lg shadow-cyan-500/10">
                      Ask for a Setup Review
                    </button>
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