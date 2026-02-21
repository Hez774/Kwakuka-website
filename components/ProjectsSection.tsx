import React from 'react';
import { Project } from '../types';
import { ArrowRight, Leaf, GraduationCap, Binoculars } from 'lucide-react';

const PROJECTS: (Project & { icon: React.ElementType, category: string })[] = [
  {
    id: '1',
    title: 'Clean Water Initiative',
    category: 'Livelihoods',
    description: 'Drilling solar-powered boreholes to provide clean water and support sustainable agriculture in Matabeleland North villages.',
    imageUrl: 'https://loremflickr.com/600/400/water,borehole,africa',
    target: 15000,
    raised: 8500,
    icon: Leaf
  },
  {
    id: '2',
    title: 'Scholarships for Students',
    category: 'Education',
    description: 'Providing tuition, uniforms, and books for talented students in vulnerable communities who would otherwise miss out on education.',
    imageUrl: 'https://loremflickr.com/600/400/african,classroom,students',
    target: 5000,
    raised: 3200,
    icon: GraduationCap
  },
  {
    id: '3',
    title: 'Wildlife Conservation',
    category: 'Research',
    description: 'Conducting wildlife monitoring and research to protect ecosystems and promote coexistence in vulnerable areas.',
    imageUrl: 'https://loremflickr.com/600/400/wildlife',
    target: 20000,
    raised: 4500,
    icon: Binoculars
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase mb-3">Our Initiatives</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Current Projects</h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Aligning with our constitution, we are actively working on the ground in Matabeleland North.
            Here is where your support goes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                 <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-secondary">
                    {project.category}
                 </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <project.icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 font-serif leading-tight">{project.title}</h4>
                </div>
                
                <p className="text-gray-600 mb-6 flex-1">{project.description}</p>
                
                <div className="mt-auto">
                    <div className="flex justify-between text-sm font-semibold mb-2">
                        <span className="text-secondary">${project.raised.toLocaleString()} Raised</span>
                        <span className="text-gray-400">Goal: ${project.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
                        <div 
                            className="bg-gradient-to-r from-primary to-amber-400 h-2.5 rounded-full" 
                            style={{ width: `${Math.min((project.raised / project.target) * 100, 100)}%` }}
                        ></div>
                    </div>
                    
                    <button className="w-full py-3 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                        Support This Project <ArrowRight size={18} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;