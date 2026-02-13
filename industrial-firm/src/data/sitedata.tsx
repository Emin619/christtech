import { Factory, Wrench, Flame, Pipette } from 'lucide-react';

export const siteData = {
  company: {
    name: "ChristTech Engineering",
    tagline: "Precision Engineering for Heavy Industry",
    description: "Leading the way in industrial fabrication, boiler assembly, and mechanical infrastructure.",
    stats: [
      { label: "Years Experience", value: "25+" },
      { label: "Projects Completed", value: "500+" },
      { label: "Expert Engineers", value: "50+" },
      { label: "Safety Awards", value: "15" }
    ]
  },
  services: [
    {
      id: "fabrication",
      title: "Heavy Fabrication",
      description: "Custom structural steel and heavy metal fabrication for industrial applications.",
      icon: Factory,
      features: ["Structural Steel", "Pressure Vessels", "Storage Tanks"]
    },
    {
      id: "boiler",
      title: "Boiler Assembly",
      description: "End-to-end industrial boiler installation, maintenance, and certification.",
      icon: Flame,
      features: ["Installation", "Maintenance", "Efficiency Tuning"]
    },
    {
      id: "pipeline",
      title: "Pipeline Systems",
      description: "High-pressure pipeline fabrication and welding for oil, gas, and chemical sectors.",
      icon: Pipette,
      features: ["Process Piping", "Welding", "Testing"]
    },
    {
      id: "chimney",
      title: "Chimney Production",
      description: "Design, manufacturing, and erection of industrial chimneys and stacks.",
      icon: Wrench,
      features: ["Design", "Fabrication", "Erection"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Thermal Power Plant Expansion",
      category: "Boiler Assembly",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
      description: "Complete boiler system installation for a 500MW power plant."
    },
    {
      id: 2,
      title: "Refinery Pipeline Network",
      category: "Pipeline",
      image: "https://images.unsplash.com/photo-1535581652167-3d6b98c36cd0?auto=format&fit=crop&q=80&w=1000",
      description: "50km high-pressure pipeline network for a new refinery unit."
    },
    {
      id: 3,
      title: "Steel Mill Infrastructure",
      category: "Fabrication",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
      description: "Structural steel fabrication for heavy machinery foundations."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "John Smith",
      role: "Plant Manager, PowerCorp",
      content: "ChristTech delivered our boiler project ahead of schedule with zero safety incidents."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Director, PetroChem Ltd",
      content: "Their precision in pipeline fabrication is unmatched in the industry."
    }
  ]
};
