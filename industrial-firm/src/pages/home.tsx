import React, { useState } from 'react';
import {CheckCircle2, Monitor, Factory, Waves, Construction, Pi } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import IndustrialScene from '../components/3d/IndustrialScene';
import Button from '../components/common/button';
import { siteData } from '../data/sitedata';

// --- INTERACTIVE ILLUSTRATION COMPONENT ---
const InteractiveBoiler = ({ activeId }: { activeId: string | null }) => {
  const highlight = "#ef4444"; // industrial-red
  const dimmed = "#94a3b8";    // slate-400
  const base = "#cbd5e1";      // slate-300

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <svg viewBox="0 0 800 500" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Main Boiler Unit - Assembly */}
        <motion.g animate={{ scale: activeId === 'boiler' ? 1.05 : 1, stroke: activeId === 'boiler' ? highlight : base }}>
          <rect x="150" y="200" width="220" height="180" rx="15" strokeWidth="3" />
          <path d="M 150 250 H 370 M 150 330 H 370" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="260" cy="290" r="40" strokeWidth="2" />
        </motion.g>

        {/* Chimney Production Section */}
        <motion.g animate={{ opacity: activeId === 'chimney' ? 1 : 0.7, stroke: activeId === 'chimney' ? highlight : base }}>
          <path d="M 600 380 L 630 80 L 680 80 L 710 380 Z" strokeWidth="3" />
          <path d="M 615 220 H 695 M 625 150 H 685" strokeWidth="1" />
        </motion.g>

        {/* Pipeline Fabrication (The Flow) */}
        <motion.g>
          <motion.path
            d="M 370 290 C 450 290, 450 150, 630 150"
            stroke={activeId === 'pipeline' ? highlight : dimmed}
            strokeWidth={activeId === 'pipeline' ? "6" : "3"}
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.path
            d="M 100 290 H 150"
            stroke={activeId === 'pipeline' ? highlight : dimmed}
            strokeWidth="3"
          />
        </motion.g>

        {/* Heavy Fabrication (Platform/Base) */}
        <motion.rect 
          x="80" y="380" width="650" height="20" rx="5" 
          stroke={activeId === 'heavy-fab' ? highlight : base} 
          strokeWidth="3" 
        />

        {/* CAD & Prototyping (Overlay HUD) */}
        <AnimatePresence>
          {activeId === 'cad' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <rect x="400" y="100" width="150" height="100" rx="8" className="fill-white/80 stroke-industrial-orange" strokeDasharray="5 5" />
              <path d="M 420 130 L 530 170 M 420 170 L 530 130" stroke="#f97316" strokeWidth="1" />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};

// --- MAIN HOME PAGE ---
const Home: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Animation Variants (Fixed missing names)
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const services = [
    { id: 'boiler', title: "Industrial Boiler Assembly", icon: Factory },
    { id: 'chimney', title: "Chimney Production", icon: Waves },
    { id: 'pipeline', title: "Pipeline Fabrication", icon: Pi },
    { id: 'heavy-fab', title: "Heavy Fabrication", icon: Construction },
    { id: 'cad', title: "CAD & Prototyping", icon: Monitor },
  ];

  return (
    <main className="flex-grow bg-[#fcfcfc] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-0">
        <IndustrialScene />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Branding */}
            <div className="lg:col-span-5 z-20">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-industrial-orange/10 text-industrial-orange font-bold text-xs tracking-widest uppercase border border-industrial-orange/20">
                  Engineering the Future
                </span>
                <h1 className="text-6xl md:text-7xl font-black text-industrial-navy mb-8 leading-[1.1]">
                  ChristTech <br />
                  <span className="text-industrial-red">Engineering</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                  Providing world-class precision for heavy industrial needs through advanced fabrication and assembly.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Button variant="primary" className="px-8 py-4 text-lg">View Projects</Button>
                  <Button variant="outline" className="px-8 py-4 text-lg bg-white">Contact Us</Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Illustration */}
            <div className="lg:col-span-7 relative group">
              <div className="bg-white/40 backdrop-blur-sm rounded-3xl border border-white p-4 shadow-2xl">
                <InteractiveBoiler activeId={hoveredService} />
              </div>
              
              {/* Floating Service Control Panel */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 w-72 bg-white
                      ${hoveredService === service.id 
                        ? 'border-industrial-red translate-x-[-20px] shadow-xl ring-4 ring-industrial-red/5' 
                        : 'border-slate-100 text-slate-500 shadow-sm'}`}
                  >
                    <div className={`p-2 rounded-lg ${hoveredService === service.id ? 'bg-industrial-red text-white' : 'bg-slate-50'}`}>
                      <service.icon size={22} />
                    </div>
                    <span className="font-bold text-sm text-left">{service.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 bg-white text-industrial-navy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Precision Engineering for <span className="text-industrial-red">Heavy Industry</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {siteData.company.description} At ChristTech, we combine decades of experience with technology to deliver superior industrial solutions.
              </p>
              <ul className="space-y-3">
                {['ISO 9001 Certified', '24/7 Emergency Support', 'Advanced Fabrication Technology'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-industrial-orange h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-industrial-orange/10 transform translate-x-4 translate-y-4 rounded-lg -z-10"></div>
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" alt="Plant" className="rounded-lg shadow-xl w-full object-cover h-[400px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION (Fixed with correct variants) */}
      <section className="bg-industrial-navy py-20 relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteData.company.stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-5xl font-black text-industrial-orange mb-3">{stat.value}</div>
                <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-navy mb-4">Our Core Expertise</h2>
          <div className="h-1 w-20 bg-industrial-red mx-auto rounded mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-industrial-red group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-industrial-red transition-colors">
                  <service.icon size={24} className="text-industrial-navy group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-industrial-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;