// c:\Users\Emin\Desktop\christtech\src\components\layout\Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import christtechLogo from '../../assets/Christtech_logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-industrial-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-bold font-mono mb-6">

              Christtech <span className="text-industrial-red">Engineering</span>
            </h3>
            <img src={christtechLogo} alt="Christtech Engineering Logo" className="w-10 h-15"/>
            <p className="text-gray-400 mb-6">
              Precision engineering solutions for the heavy industry sector. Building the future of infrastructure.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-gray-400 hover:text-industrial-red transition-colors" aria-label="Facebook"><FiFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-industrial-red transition-colors" aria-label="Twitter"><FiTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-industrial-red transition-colors" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-industrial-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-industrial-red transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-industrial-red transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-industrial-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Heavy Fabrication</li>
              <li className="text-gray-400">Boiler Assembly</li>
              <li className="text-gray-400">Pipeline Systems</li>
              <li className="text-gray-400">Chimney Production</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-industrial-red mt-1" size={20} />
                <span>123 Industrial Zone,<br />Engineering District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-industrial-red" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-industrial-red" size={20} />
                <span>info@christtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Christtech Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
