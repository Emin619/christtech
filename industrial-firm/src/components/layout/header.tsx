// src/components/layout/Header.tsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, Search, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/sitedata';

// Brand colors from logo:
// Primary Red:  #EF0921
// Deep Blue:    #0841F1

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => { setIsOpen(false); }, [location]);

  const transparent = isHome && !isScrolled;

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${transparent
          ? 'bg-transparent border-transparent py-5'
          : 'bg-white border-slate-100 py-3 shadow-sm'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* ── LOGO ── */}
          
          <Link to="/" className="flex items-center gap-3 group">
            {/* Icon mark — mirrors logo shape conceptually */}
            <div className="flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <img src="src/assets/Christtech_logo.svg" alt="Christtech Engineering Logo" className="w-12 h-15"/>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-lg font-black tracking-tight transition-colors ${transparent ? 'text-[#0030c2]' : 'text-[#0030c2]'}`}>
                Christtech
              </span>
              <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${transparent ? 'text-red-600' : 'text-[#EF0921]'}`}>
                Engineering
              </span>
            </div>
          </Link>
          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const active = location.pathname === href;
              return (
                <Link
                  key={item}
                  to={href}
                  className={`text-sm font-bold tracking-wide transition-colors relative group
                    ${active
                      ? 'text-[#EF0921]'
                      : transparent
                        ? 'text-white/80 hover:text-white'
                        : 'text-slate-600 hover:text-[#EF0921]'}`}
                >
                  {item}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#EF0921] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA AREA ── */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+15551234567"
              className={`flex items-center gap-2 text-sm font-bold transition-colors
                ${transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-[#0841F1]'}`}
            >
              <Phone size={16} />
              +1 (555) 123-4567
            </a>
            <Link to="/contact">
              <button className="px-5 py-2.5 bg-[#EF0921] text-white text-sm font-black rounded-lg hover:bg-[#c80018] transition-colors shadow-md shadow-[#EF0921]/20 flex items-center gap-2">
                Get Quote <ArrowRight size={14}/>
              </button>
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors
              ${transparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const active = location.pathname === href;
              return (
                <Link
                  key={item}
                  to={href}
                  className={`text-base font-bold py-3 px-4 rounded-lg transition-colors
                    ${active
                      ? 'text-[#EF0921] bg-[#EF0921]/5'
                      : 'text-slate-700 hover:text-[#EF0921] hover:bg-slate-50'}`}
                >
                  {item}
                </Link>
              );
            })}
            <Link to="/contact" className="mt-4">
              <button className="w-full py-3.5 bg-[#EF0921] text-white font-black rounded-lg hover:bg-[#c80018] transition-colors flex items-center justify-center gap-2">
                Get a Quote <ArrowRight size={16}/>
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;