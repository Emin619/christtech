
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import Button from '../components/common/button';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Offshore Rig Maintenance",
      category: "Maintenance",
      location: "North Sea",
      date: "2023",
      image: "https://images.unsplash.com/photo-1565619624098-e6598710b21b?auto=format&fit=crop&q=80&w=800",
      description: "Comprehensive structural reinforcement and pipeline maintenance for a major offshore platform."
    },
    {
      id: 2,
      title: "Automated Assembly Line",
      category: "Automation",
      location: "Detroit, MI",
      date: "2022",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      description: "Design and installation of a fully robotic assembly line for automotive parts manufacturing."
    },
    {
      id: 3,
      title: "Heavy Steel Bridge",
      category: "Fabrication",
      location: "Hamburg, Germany",
      date: "2023",
      image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=800",
      description: "Fabrication of 500-ton steel girders for a municipal infrastructure project."
    },
    {
      id: 4,
      title: "Power Plant Turbine",
      category: "Energy",
      location: "Texas, USA",
      date: "2021",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
      description: "Overhaul and precision balancing of high-capacity steam turbines."
    }
  ];

  return (
    <main className="flex-grow bg-slate-50 text-industrial-navy">
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-12"
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Featured <span className="text-industrial-orange">Projects</span></h1>
              <p className="text-xl text-gray-600">
                Explore our portfolio of engineering achievements across various industrial sectors.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-white border-slate-200 text-industrial-navy hover:bg-slate-100">All</Button>
              <Button variant="secondary" className="text-gray-500 hover:text-industrial-navy">Fabrication</Button>
              <Button variant="secondary" className="text-gray-500 hover:text-industrial-navy">Maintenance</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 pt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-industrial-navy/20 group-hover:bg-industrial-navy/0 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-industrial-navy uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-industrial-red" /> {project.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-industrial-red" /> {project.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-industrial-red transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Link to="/contact" className="inline-flex items-center font-semibold text-industrial-navy hover:gap-2 transition-all">
                    View Details <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
