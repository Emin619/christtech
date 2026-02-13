// c:\Users\Emin\Desktop\christtech\industrial-firm\src\components\layout\header.tsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import Button from '../common/button';
import { siteData } from '../../data/sitedata';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Reset mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Logic: If home, transparent until scrolled. If not home, always solid dark.
  const headerStyle = isHome && !isScrolled
    ? "bg-transparent border-transparent py-6"
    : "bg-industrial-navy/95 backdrop-blur-md border-white/10 py-4 shadow-lg";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${headerStyle}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-industrial-orange rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              {siteData.company.name.charAt(0)}
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              {siteData.company.name.split(' ')[0]}<span className="text-industrial-orange">{siteData.company.name.split(' ')[1]}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-industrial-orange transition-colors ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-industrial-orange' 
                    : 'text-gray-300'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+15551234567" className="flex items-center gap-2 text-white hover:text-industrial-orange transition-colors">
              <Phone size={18} />
              <span className="font-medium">+1 (555) 123-4567</span>
            </a>
            <Link to="/contact">
              <Button variant="primary" className="bg-industrial-red border-none hover:bg-industrial-red/90">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-industrial-navy border-b border-white/10 shadow-xl"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-lg font-medium py-2 border-b border-white/5 ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-industrial-orange' 
                    : 'text-gray-300'
                }`}
              >
                {item}
              </Link>
            ))}
            <Link to="/contact" className="mt-4">
              <Button variant="primary" className="w-full justify-center bg-industrial-orange border-none">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
