import React, { useState } from 'react';
import { CheckCircle2, Monitor, Factory, Waves, Construction, ArrowRight, MapPin, Wrench, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteData } from '../data/sitedata';

// ─── BRAND COLORS (from logo SVG) ─────────────────────────────────────
// Primary Red:  #EF0921   Deep Blue: #0841F1   Orange: #ea580c
// ──────────────────────────────────────────────────────────────────────

// ─── SERVICE / LABEL DEFINITIONS ──────────────────────────────────────
const LABELS = [
  {
    id: 'boiler',
    name: 'Boiler & Pipe Assembly',
    description: 'Complete industrial boiler main casing fabrication, heat exchanger tube bank installation, and high-pressure piping systems built to ISO 9001 standards.',
    icon: Factory,
  },
  {
    id: 'metal',
    name: 'Metal Fabrication',
    description: 'Precision heavy structural steel fabrication including furnace boxes, combustion chambers, stack transition connections and support steelwork.',
    icon: Wrench,
  },
  {
    id: 'chimney',
    name: 'Chimney Erection',
    description: 'Specialized fabrication and on-site erection of flue gas chimney stacks up to 150m, using crawler cranes with full scaffolding and rigging systems.',
    icon: Zap,
  },
  {
    id: 'logistics',
    name: 'Heavy Logistics',
    description: 'End-to-end heavy transport, crawler track mobilisation, and precision lifting of oversized industrial components and structural assemblies across India.',
    icon: Construction,
  },
  {
    id: 'cad',
    name: 'CAD & Prototyping',
    description: 'Advanced 3D CAD modelling, structural simulation, and rapid prototyping to validate complex assemblies and engineering specifications before production.',
    icon: Monitor,
  },
];

// ─── INDUSTRIAL PLANT IMAGE with CSS overlay highlighting ─────────────
// The PNG is split conceptually into left half (boiler/metal) and right
// half (chimney/logistics). We use semi-transparent colour overlays with
// mix-blend-mode to dim the inactive side, and show callout labels via
// an absolutely-positioned SVG overlay on top of the image.
const IndustrialPlantPNG = ({ activeId }: { activeId: string | null }) => {
  const ORANGE = '#ea580c';

  // Decide opacity of each half based on active tab
  const leftDim  = activeId && activeId !== 'boiler' && activeId !== 'metal'    && activeId !== 'cad';
  const rightDim = activeId && activeId !== 'chimney' && activeId !== 'logistics';

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* ── THE PNG IMAGE ── */}
      <img
        src="src/assets/industrial_plant.png"
        alt="Industrial boiler plant and chimney erection technical drawing"
        className="w-full h-full object-contain relative z-10"
        style={{
          filter: !activeId ? 'none' : undefined,
          transition: 'filter 0.3s ease',
        }}
      />

      {/* ── LEFT HALF OVERLAY (dims boiler side when not relevant) ── */}
      <div
        className="absolute top-0 left-0 bottom-0 pointer-events-none z-20"
        style={{
          width: '52%',
          background: leftDim ? 'rgba(248,250,252,0.72)' : 'transparent',
          transition: 'background 0.35s ease',
        }}
      />

      {/* ── RIGHT HALF OVERLAY (dims chimney side when not relevant) ── */}
      <div
        className="absolute top-0 right-0 bottom-0 pointer-events-none z-20"
        style={{
          width: '48%',
          background: rightDim ? 'rgba(248,250,252,0.72)' : 'transparent',
          transition: 'background 0.35s ease',
        }}
      />

      {/* ── CALLOUT LABEL SVG — sits on top of image, same coordinate space ── */}
      <svg
        viewBox="0 0 1200 700"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full z-30 pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        <AnimatePresence>

          {/* BOILER labels */}
          {activeId === 'boiler' && (
            <motion.g key="labels-boiler" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <line x1="120" y1="155" x2="62" y2="78" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="5"   y="48"  width="118" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="64" y="62"  textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">BOILER</text>
              <text x="64" y="76"  textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">MAIN CASING</text>

              <line x1="250" y1="280" x2="215" y2="78" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="135" y="48" width="148" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="209" y="62"  textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">HEAT EXCHANGER</text>
              <text x="209" y="76"  textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">TUBE BANKS</text>

              <line x1="62"  y1="400" x2="28"  y2="628" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="5"   y="630" width="120" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="65"  y="644" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">PROCESS PIPING</text>
              <text x="65"  y="658" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">INPUT</text>

              <line x1="240" y1="495" x2="195" y2="630" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="130" y="632" width="130" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="195" y="646" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">BOILER SUPPORT</text>
              <text x="195" y="660" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">STEELWORK</text>
            </motion.g>
          )}

          {/* METAL FABRICATION labels */}
          {activeId === 'metal' && (
            <motion.g key="labels-metal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <line x1="250" y1="200" x2="340" y2="48" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="285" y="26"  width="165" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="367" y="40"  textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">FURNACE BOX &amp;</text>
              <text x="367" y="54"  textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">COMBUSTION CHAMBER</text>

              <line x1="490" y1="400" x2="520" y2="48" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="452" y="26"  width="158" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="531" y="40"  textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">STACK TRANSITION</text>
              <text x="531" y="54"  textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">CONNECTION</text>
            </motion.g>
          )}

          {/* CHIMNEY labels */}
          {activeId === 'chimney' && (
            <motion.g key="labels-chimney" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <line x1="862" y1="100" x2="970" y2="48" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="878" y="26"  width="150" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="953" y="40"  textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">MAIN CHIMNEY</text>
              <text x="953" y="54"  textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">STACK</text>

              <line x1="840" y1="490" x2="1005" y2="392" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="958" y="372" width="155" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="1035" y="386" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">CHIMNEY</text>
              <text x="1035" y="400" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">FOUNDATION BASE</text>

              <line x1="870" y1="620" x2="1005" y2="444" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="958" y="422" width="145" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="1030" y="436" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">SERVICE PIPING</text>
              <text x="1030" y="450" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">OUTPUT</text>
            </motion.g>
          )}

          {/* LOGISTICS / CRANES labels */}
          {activeId === 'logistics' && (
            <motion.g key="labels-logistics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <line x1="820" y1="200" x2="1005" y2="96" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="968" y="76"  width="190" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="1063" y="90"  textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">CONSTRUCTION</text>
              <text x="1063" y="104" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">SCAFFOLDING &amp; RIGGING</text>

              <line x1="665" y1="465" x2="1005" y2="138" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="968" y="118" width="185" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="1060" y="132" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">CONSTRUCTION</text>
              <text x="1060" y="146" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">CRAWLER CRANE</text>

              <line x1="740" y1="340" x2="1005" y2="178" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="968" y="160" width="120" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="1028" y="174" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">LATTICE BOOM</text>
              <text x="1028" y="188" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace"> </text>

              <line x1="630" y1="425" x2="1005" y2="222" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="968" y="204" width="155" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="1045" y="218" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">CRANE</text>
              <text x="1045" y="232" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace">COUNTERWEIGHTS</text>

              <line x1="670" y1="490" x2="1005" y2="264" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="968" y="248" width="128" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke={ORANGE} strokeWidth="1.2"/>
              <text x="1032" y="262" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="monospace">CRAWLER TRACKS</text>
              <text x="1032" y="276" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace"> </text>
            </motion.g>
          )}

          {/* CAD labels */}
          {activeId === 'cad' && (
            <motion.g key="labels-cad" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <line x1="200" y1="165" x2="140" y2="48" stroke="#0841F1" strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="55"  y="28"  width="175" height="34" rx="3" fill="rgba(255,255,255,0.96)" stroke="#0841F1" strokeWidth="1.2"/>
              <text x="142" y="42"  textAnchor="middle" fill="#0841F1" fontSize="10" fontWeight="bold" fontFamily="monospace">3D CAD MODEL</text>
              <text x="142" y="56"  textAnchor="middle" fill="#0841F1" fontSize="10" fontFamily="monospace">REFERENCE DRAWING</text>
            </motion.g>
          )}

        </AnimatePresence>
      </svg>
    </div>
  );
};

// ─── INDIA MAP SVG (exact from user-provided SVG) ─────────────────────
const IndiaMapSVG = ({ activeId }: { activeId: string | null }) => (
  <div className="relative w-full h-full flex items-center justify-center">

      {/* ── THE PNG IMAGE ── */}
      <img
        src="src/assets/indian_map.png"
        alt="Industrial boiler plant and chimney erection technical drawing"
        className="w-full h-full object-contain relative z-10"
        style={{
          filter: !activeId ? 'none' : undefined,
          transition: 'filter 0.3s ease',
        }}
      />

  </div>
);

// ─── SERVICE ICON TAB (right column) ─────────────────────────────────
interface ServiceTabProps {
  label: string;
  topLine: string;
  bottomLine: string;
  Icon: React.ElementType;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}
const ServiceTab: React.FC<ServiceTabProps> = ({ topLine, bottomLine, Icon, active, onEnter, onLeave }) => (
  <button
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    className={`relative flex flex-col items-center justify-center gap-1.5 w-[90px] py-4 px-2 border-2 rounded-xl transition-all duration-200 cursor-pointer group
      ${active
        ? 'border-[#ea580c] bg-[#ea580c] text-white shadow-lg shadow-[#ea580c]/30 scale-105'
        : 'border-slate-200 bg-white text-slate-400 hover:border-[#ea580c]/50 hover:text-[#ea580c]'}`}
  >
    <div className={`p-2 rounded-lg mb-0.5 ${active ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-[#ea580c]/5'}`}>
      <Icon size={22} strokeWidth={1.5} className={active ? 'text-white' : 'text-slate-500 group-hover:text-[#ea580c]'}/>
    </div>
    <span className={`text-[9px] font-black text-center uppercase tracking-wider leading-tight ${active ? 'text-white' : 'text-slate-500 group-hover:text-[#ea580c]'}`}>
      {topLine}
    </span>
    {bottomLine && (
      <span className={`text-[9px] font-black text-center uppercase tracking-wider leading-tight ${active ? 'text-white' : 'text-slate-500 group-hover:text-[#ea580c]'}`}>
        {bottomLine}
      </span>
    )}
  </button>
);

// ─── MAIN HOME PAGE ───────────────────────────────────────────────────
const Home: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeLabel = LABELS.find(l => l.id === activeId);

  const tabs = [
    { id: 'boiler',    topLine: 'BOILER &',    bottomLine: 'PIPE ASSEMBLY', Icon: Factory },
    { id: 'metal',     topLine: 'METAL',        bottomLine: 'FABRICATION',   Icon: Wrench },
    { id: 'chimney',   topLine: 'CHIMNEY',      bottomLine: 'ERECTION',      Icon: Zap },
    { id: 'logistics', topLine: 'HEAVY',        bottomLine: 'LOGISTICS',     Icon: Construction },
    { id: 'cad',       topLine: 'CAD &',        bottomLine: 'PROTOTYPING',   Icon: Monitor },
  ];

  return (
    <main className="flex-grow bg-white overflow-x-hidden">

      {/* ════════════════════════════════════════════════════════════
          HERO SECTION — EXACT SPLIT-PANEL FROM REFERENCE
          ════════════════════════════════════════════════════════ */}
      <section
        className="flex flex-col w-full"
        style={{ minHeight: '100vh', paddingTop: 72 }}
      >
        {/* ── MAIN ROW ── */}
        <div className="flex flex-1 w-full overflow-hidden">

          {/* LEFT: Industrial plant illustration — capped at 40% */}
          <div
            className="relative flex items-stretch bg-[#f8f9fb] border-r border-slate-200 overflow-hidden"
            style={{ width: '40%', flexShrink: 0 }}
          >
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <IndustrialPlantPNG activeId={activeId} />
            </div>
          </div>

          {/* CENTRE: Text block — fills remaining space */}
          <div
            className="flex flex-col justify-center bg-white px-12 py-10 border-r border-slate-100"
            style={{ flex: '1 1 0', minWidth: 0 }}
          >
            <AnimatePresence mode="wait">
              {activeLabel ? (
                <motion.div
                  key={activeLabel.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col max-w-lg"
                >
                  {/* Active label pill */}
                  <div className="inline-flex items-center gap-2 mb-5 self-start">
                    <span className="w-2 h-2 rounded-full bg-[#ea580c] flex-shrink-0"/>
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#ea580c]">{activeLabel.name}</span>
                  </div>
                  <h2
                    className="font-black leading-tight text-[#0841F1] mb-5"
                    style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)', fontFamily: "'Georgia', serif" }}
                  >
                    {activeLabel.name.toUpperCase()}
                  </h2>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {activeLabel.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col max-w-lg"
                >
                  <h1
                    className="font-black leading-tight mb-5"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontFamily: "'Georgia', serif" }}
                  >
                    <span className="text-[#0841F1]">YOUR ASSEMBLY &amp; ERECTION PARTNER: </span>
                    <span className="text-[#ea580c]">BEYOND THE BOILER.</span>
                  </h1>
                  <p className="text-slate-500 text-base leading-relaxed mb-8">
                    Focused Precision for Industrial Infrastructure Across India.
                  </p>
                  {/* On-site highlight box */}
                  <div className="bg-slate-50 border-l-4 border-[#ea580c] rounded-r-lg px-5 py-4 mb-8">
                    <h3 className="font-black text-xs tracking-widest uppercase text-slate-700 mb-1.5">
                      On-Site Erection &amp; Custom Stacks
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      Specialized fabrication of flue gas chimneys up to 150m, plus seamless on-site component assembly.
                    </p>
                  </div>
                  <Link to="/projects">
                    <button className="self-start inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1e293b] text-[#1e293b] text-sm font-bold tracking-wide hover:bg-[#1e293b] hover:text-white transition-all duration-200">
                      VIEW PROJECT MAP <MapPin size={14}/>
                    </button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Service icon tabs — fixed width column */}
          <div
            className="flex flex-col items-center justify-center gap-3 px-3 py-8 bg-white border-l border-slate-100"
            style={{ width: 112, flexShrink: 0 }}
          >
            {tabs.map((t) => (
              <ServiceTab
                key={t.id}
                label={t.id}
                topLine={t.topLine}
                bottomLine={t.bottomLine}
                Icon={t.Icon}
                active={activeId === t.id}
                onEnter={() => setActiveId(t.id)}
                onLeave={() => setActiveId(null)}
              />
            ))}

            {/* Enquire vertical pill */}
            <Link to="/contact" className="mt-3">
              <div
                className="bg-[#1e293b] text-white text-[9px] font-black tracking-[0.18em] uppercase px-2.5 py-4 rounded-lg cursor-pointer hover:bg-[#0841F1] transition-colors flex items-center gap-1"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                Enquire &nbsp;›
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LOWER PANEL — "Focused Precision" card + India Map
          ════════════════════════════════════════════════════════ */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 border-t-2 border-slate-100" style={{ minHeight: 340 }}>

        {/* Left card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center px-12 py-14 bg-white border-r border-slate-100"
        >
          <h2
            className="font-black leading-tight mb-5"
            style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)', fontFamily: "'Georgia', serif" }}
          >
            Focused Precision<br />
            <span className="text-[#ea580c]">Across India</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
            Specialized fabrication of flue gas chimneys up to 150m, plus seamless on-site component assembly for industrial boilers and pressure vessels.
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {['ISO 9001 Certified Operations', '24/7 Emergency Support', 'Advanced CNC Fabrication'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="flex-shrink-0 text-[#ea580c]"/>
                <span className="text-slate-600 font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/contact">
            <button className="self-start inline-flex items-center gap-2 px-8 py-3.5 bg-[#1e293b] text-white font-bold text-sm tracking-wide hover:bg-[#0841F1] transition-colors">
              Request a Quote <ArrowRight size={15}/>
            </button>
          </Link>
        </motion.div>

        {/* Right: India map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative bg-[#0f172a] flex flex-col items-center justify-center p-8 overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(234,88,12,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10 w-full max-w-[260px]" style={{ height: 280 }}>
            <IndiaMapSVG activeId={activeId} />
          </div>
          <div className="relative z-10 mt-4 text-center">
            <p className="text-sm font-black text-white tracking-widest uppercase">
              Active Workstations in{' '}
              <span className="text-[#f97316]">10+ Cities</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">Pan-India project delivery capability</p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATS BAR
          ════════════════════════════════════════════════════════ */}
      <section className="bg-[#0841F1] py-14">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(siteData?.company?.stats ?? [
              { value: '25+',  label: 'Years Experience' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '50+',  label: 'Expert Engineers' },
              { value: '10+',  label: 'Cities Served' },
            ]).map((stat: { value: string; label: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SERVICES GRID
          ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#EF0921] mb-2">What We Do</p>
              <h2 className="text-3xl font-black text-[#0841F1]">Core Expertise</h2>
            </div>
            <Link to="/services" className="text-sm font-bold text-[#0841F1] flex items-center gap-2 hover:text-[#EF0921] transition-colors">
              All Services <ArrowRight size={16}/>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LABELS.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white p-7 rounded-xl border border-slate-100 hover:border-[#EF0921]/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#EF0921] transition-colors border border-slate-100 group-hover:border-[#EF0921]">
                  <service.icon size={22} className="text-slate-600 group-hover:text-white transition-colors"/>
                </div>
                <h3 className="text-base font-black text-[#0841F1] mb-2 group-hover:text-[#EF0921] transition-colors">{service.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;