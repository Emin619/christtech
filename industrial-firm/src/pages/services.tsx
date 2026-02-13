
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, PenTool, Factory, ArrowRight } from 'lucide-react';
import { siteData } from '../data/sitedata';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  // Extended services list for the page
  const allServices = [
    ...siteData.services,
    {
      id: 'logistics',
      title: 'Heavy Logistics',
      description: 'Specialized transport and handling of oversized industrial machinery and structural components.',
      icon: Truck
    },
    {
      id: 'design',
      title: 'CAD & Prototyping',
      description: 'Advanced 3D modeling and rapid prototyping to visualize complex assemblies before production.',
      icon: PenTool
    },
    {
      id: 'automation',
      title: 'Plant Automation',
      description: 'Implementing smart control systems and robotics to streamline manufacturing workflows.',
      icon: Factory
    }
  ];

  return (
    <main className="flex-grow bg-slate-50 text-industrial-navy">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Comprehensive <span className="text-industrial-red">Industrial Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            From initial concept to final installation, we provide end-to-end mechanical engineering services tailored to your operational needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-industrial-navy group-hover:text-white transition-colors duration-300 text-industrial-navy">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-industrial-red transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description} We utilize state-of-the-art equipment to ensure precision and reliability in every task.
                </p>
                <ul className="space-y-2 mb-6">
                  {['High Precision', 'Cost Effective', 'Timely Delivery'].map((tag, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-industrial-orange mr-2"></div>
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-industrial-navy font-semibold hover:text-industrial-red transition-colors">
                  Request Quote <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Workflow</h2>
            <p className="text-gray-600">How we deliver excellence, step by step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements and technical constraints." },
              { step: "02", title: "Engineering", desc: "Detailed design, simulation, and material selection." },
              { step: "03", title: "Fabrication", desc: "Precision manufacturing using advanced machinery." },
              { step: "04", title: "Installation", desc: "On-site assembly, testing, and final handover." }
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="text-6xl font-black text-slate-100 absolute -top-8 left-1/2 -translate-x-1/2 -z-10 select-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 pt-4">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
