import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://picsum.photos/seed/vicfalls/800/500" 
                  alt="Majestic Victoria Falls landscape in Zimbabwe" 
                  referrerPolicy="no-referrer"
                  className="relative rounded-xl shadow-lg w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
                    <p className="text-secondary font-serif italic text-lg">"Promoting conservation and improving quality of life."</p>
                </div>
             </div>
          </div>
          
          <div className="md:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Our Constitution</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Empowering <span className="text-secondary underline decoration-primary decoration-4 underline-offset-4">Zimbabwe</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Headquartered in Victoria Falls, the Kwakuka Foundation for Hope is dedicated to promoting best conservation practices, sustainable use of natural resources, and improving the quality of life within vulnerable communities.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our objectives are clear: to protect and preserve ecosystems, conduct wildlife monitoring and research, promote sustainable livelihoods, and facilitate educational support for those who need it most.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                 <div className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></div>
                 <p className="font-medium text-gray-800">Ecosystem Preservation</p>
              </div>
              <div className="flex items-start">
                 <div className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></div>
                 <p className="font-medium text-gray-800">Wildlife Monitoring</p>
              </div>
              <div className="flex items-start">
                 <div className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></div>
                 <p className="font-medium text-gray-800">Sustainable Livelihoods</p>
              </div>
              <div className="flex items-start">
                 <div className="h-2 w-2 mt-2 rounded-full bg-primary mr-3"></div>
                 <p className="font-medium text-gray-800">Educational Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;