import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import DonateModal from './components/DonateModal';
import ConstitutionPage from './components/ConstitutionPage';

type View = 'home' | 'constitution';

const App: React.FC = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const navigateToConstitution = () => {
    setCurrentView('constitution');
  };

  return (
    <div className="font-sans antialiased text-slate-800">
      <Navbar 
        onDonateClick={() => setIsDonateOpen(true)} 
        onHomeClick={navigateToHome}
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero 
              onDonateClick={() => setIsDonateOpen(true)} 
              onConstitutionClick={navigateToConstitution} 
            />
            <ImpactMetrics />
            <AboutSection />
            <ProjectsSection />
            <GetInvolvedSection />
            <SuccessStoriesSection />
          </>
        ) : (
          <ConstitutionPage onBack={navigateToHome} />
        )}
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <ChatAssistant />
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </div>
  );
};

export default App;