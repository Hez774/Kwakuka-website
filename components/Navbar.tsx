import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onDonateClick: () => void;
  onHomeClick: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Our Mission', href: '#mission' },
  { label: 'Projects', href: '#projects' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Contact', href: '#footer' },
];

const Navbar: React.FC<NavbarProps> = ({ onDonateClick, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // If it's the home link or a hash link, we generally want to go to the home view first
    if (href === '#' || href.startsWith('#')) {
        // If it's just # (Home), prevent default to stop jump, call onHomeClick
        if (href === '#') {
            e.preventDefault();
            onHomeClick();
        } else {
            // For other sections, we let the browser handle the hash if we are already on home.
            // If we are on the Constitution page, onHomeClick() in App will swap the view.
            // However, simply swapping views won't automatically scroll to the hash unless we handle it.
            // For simplicity, we will just go to Home view. 
            // The user will land at the top of home.
            onHomeClick();
            // We allow the default anchor behavior to proceed which might try to find the ID.
            // But since React renders synchronously, the ID might not be there yet. 
            // This is a trade-off for simplicity without a full router.
        }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={onHomeClick}
          >
            <div className="bg-primary p-2 rounded-full">
               <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <span className={`text-xl md:text-2xl font-serif font-bold ${scrolled ? 'text-secondary' : 'text-white drop-shadow-md'}`}>
              Kwakuka Foundation for Hope
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`font-medium hover:text-primary transition-colors ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'}`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onDonateClick}
              className="bg-primary hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Donate Now <Heart size={18} className="fill-current" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-gray-700 font-medium hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onDonateClick();
                setIsOpen(false);
              }}
              className="bg-primary text-white py-3 rounded-lg font-bold w-full"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;