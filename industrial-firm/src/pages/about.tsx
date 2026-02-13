
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, ArrowRight } from 'lucide-react';
import Button from '../components/common/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="flex-grow bg-slate-50 text-industrial-navy">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-industrial-navy/5 border border-industrial-navy/10 text-industrial-red font-medium text-sm tracking-wider uppercase">
              Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-industrial-navy">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-red to-industrial-orange">Industrial Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over two decades, ChristTech has been at the forefront of heavy mechanical engineering, delivering robust solutions for the world's most demanding industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To provide superior mechanical fabrication and engineering solutions that drive efficiency and sustainability in the industrial sector." },
              { icon: Award, title: "Our Quality", text: "We adhere to strict ISO 9001 standards, ensuring every weld, assembly, and installation meets global benchmarks for safety and durability." },
              { icon: Users, title: "Our Team", text: "A dedicated workforce of certified engineers, welders, and project managers committed to executing complex projects with precision." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-industrial-red/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-industrial-navy/5 rounded-xl flex items-center justify-center mb-6 text-industrial-red">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/2"
              {...fadeInUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Factory Floor" 
                className="rounded-2xl shadow-2xl shadow-industrial-navy/10"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of <span className="text-industrial-orange">Innovation</span></h2>
              <div className="space-y-8 border-l-2 border-slate-200 pl-8 ml-4">
                {[
                  { year: "1998", title: "Foundation", text: "Established as a small fabrication workshop specializing in boiler components." },
                  { year: "2005", title: "Expansion", text: "Expanded operations to include heavy structural steel and pipeline infrastructure." },
                  { year: "2015", title: "Modernization", text: "Integrated CNC machining and automated welding systems for higher precision." },
                  { year: "2023", title: "Global Reach", text: "Partnered with international firms to deliver large-scale industrial turnkey projects." }
                ].map((milestone, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-industrial-red"></span>
                    <span className="text-industrial-red font-bold text-sm tracking-wide">{milestone.year}</span>
                    <h4 className="text-xl font-bold text-industrial-navy mt-1 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm">{milestone.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-industrial-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join hands with an industry leader committed to engineering excellence and operational safety.</p>
          <Link to="/contact">
            <Button size="lg" variant="primary" className="bg-industrial-orange hover:bg-industrial-orange/90 text-white border-none">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
