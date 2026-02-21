import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onDonateClick: () => void;
  onConstitutionClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDonateClick, onConstitutionClick }) => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/sunset/1920/1080"
          alt="African sunset with silhouette trees representing hope"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Adjusted overlay to be darker/neutral to let the sunset orange shine through without muddying with green */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-amber-200 mb-6 font-medium tracking-wide animate-fade-in-up">
          EST. 2026 • ZIMBABWE
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Restoring <span className="text-primary italic">Hope</span>,<br />
          Preserving Nature
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100 font-light leading-relaxed">
          The Kwakuka Foundation for Hope is dedicated to improving livelihoods, protecting ecosystems, and facilitating education in Zimbabwe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onDonateClick}
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-amber-600 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            Make a Difference
          </button>
          <button
            onClick={onConstitutionClick}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 group"
          >
            Our Constitution <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-stone-50"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;