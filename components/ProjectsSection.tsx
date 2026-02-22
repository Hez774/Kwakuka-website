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
                    
                    <div className="w-full bg-gray-100 rounded-full h-4 mb-6 relative group/progress cursor-help">
                        {/* Progress Bar */}
                        <div 
                            className="bg-gradient-to-r from-primary to-amber-400 h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden" 
                            style={{ width: `${Math.min((project.raised / project.target) * 100, 100)}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse hidden group-hover/progress:block"></div>
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/progress:block z-20 w-max pointer-events-none animate-fade-in-up">
                            <div className="bg-slate-800 text-white text-xs rounded-lg py-2 px-3 shadow-xl text-center border border-slate-700">
                                <p className="font-bold text-amber-400 text-sm mb-0.5">
                                    {((project.raised / project.target) * 100).toFixed(1)}% Funded
                                </p>
                                <div className="text-slate-300 text-[10px] space-y-0.5">
                                    <p>Raised: <span className="text-white">${project.raised.toLocaleString()}</span></p>
                                    <p>Target: <span className="text-white">${project.target.toLocaleString()}</span></p>
                                    <p className="text-emerald-400 pt-1 border-t border-slate-700 mt-1">
                                        ${(project.target - project.raised).toLocaleString()} to go
                                    </p>
                                </div>
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                            </div>
                        </div>
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