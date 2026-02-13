import React from 'react';
import { ArrowRight, CheckCircle2, Settings, Zap, Wrench, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import IndustrialScene from '../components/3d/IndustrialScene';
import Button from '../components/common/button';
import { siteData } from '../data/sitedata';

const BlueprintAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full max-w-lg mx-auto aspect-square hidden lg:block"
    >
      {/* Abstract Tech Circle Backgrounds */}
      <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-12 rounded-full border border-white/5 border-dotted animate-[spin_40s_linear_infinite_reverse]" />
      
      {/* Central Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Large Background Gear */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Settings size={300} strokeWidth={0.5} className="text-industrial-orange/10" />
          </motion.div>
          
          {/* Orbiting Elements */}
          <motion.div 
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-industrial-navy/80 p-3 rounded-xl border border-industrial-red/30 shadow-lg shadow-industrial-red/10 backdrop-blur-sm">
                <Zap size={24} className="text-industrial-red" />
             </div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-industrial-navy/80 p-3 rounded-xl border border-industrial-blue/30 shadow-lg shadow-industrial-blue/10 backdrop-blur-sm">
                <Wrench size={24} className="text-industrial-blue" />
             </div>
             <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 bg-industrial-navy/80 p-3 rounded-xl border border-industrial-orange/30 shadow-lg shadow-industrial-orange/10 backdrop-blur-sm">
                <Activity size={24} className="text-industrial-orange" />
             </div>
          </motion.div>

          {/* Center Status */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-industrial-navy/90 backdrop-blur-md p-8 rounded-full border border-white/10 text-center shadow-2xl">
             <div className="text-3xl font-bold text-white">100%</div>
             <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Efficiency</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      badge: "Engineering the Future",
      title: (
        <>
          {siteData.company.name.split(' ')[0]}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-industrial-orange">
            {siteData.company.name.split(' ')[1]}
          </span>
        </>
      ),
      text: siteData.company.tagline
    },
    {
      badge: "Global Standards",
      title: "World-Class Quality",
      text: "ISO 9001 Certified Excellence in Heavy Industrial Fabrication"
    },
    {
      badge: "Innovation Led",
      title: "Advanced Technology",
      text: "Integrating Robotics and Automation for Superior Precision"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <IndustrialScene />        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl"
                >
                  <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-industrial-orange font-medium text-sm tracking-wider uppercase">
                    {slides[currentSlide].badge}
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {slides[currentSlide].text}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/projects">
                  <Button size="lg" variant="primary" className="shadow-lg shadow-industrial-red/20">
                    View Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Animation */}
            <div className="flex justify-center lg:justify-end">
              <BlueprintAnimation />
            </div>
          </div>
        </div>
      </section>
      
      {/* About / Description Section */}
      <section className="py-20 bg-white text-industrial-navy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Precision Engineering for <span className="text-industrial-red">Heavy Industry</span></h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {siteData.company.description} At ChristTech, we combine decades of experience with cutting-edge technology to deliver superior industrial solutions. From massive boiler assemblies to intricate pipeline networks, our commitment to quality and safety is unwavering.
              </p>
              <ul className="space-y-3">
                {['ISO 9001 Certified', '24/7 Emergency Support', 'Advanced Fabrication Technology'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-industrial-orange h-5 w-5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-industrial-orange/10 transform translate-x-4 translate-y-4 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Engineering" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-industrial-navy py-16 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {siteData.company.stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-industrial-orange mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-industrial-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-navy mb-4">Our Core Expertise</h2>
            <div className="h-1 w-20 bg-industrial-red mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-industrial-red group"
              >
                <div className="w-12 h-12 bg-industrial-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-industrial-red group-hover:text-white transition-colors">
                  <service.icon size={24} className="text-industrial-navy group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-industrial-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to="/services" className="text-industrial-red font-medium text-sm flex items-center group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;