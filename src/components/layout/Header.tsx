import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className={`font-bold text-2xl ${isScrolled ? 'text-emerald-700' : 'text-white'}`}>
                Kerala Travelling
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-6 mr-6">
              <div className="flex items-center">
                <Phone size={16} className={`mr-2 ${isScrolled ? 'text-emerald-700' : 'text-white'}`} />
                <span className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>+919446200006</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className={`mr-2 ${isScrolled ? 'text-emerald-700' : 'text-white'}`} />
                <span className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Kochi, Kerala</span>
              </div>
            </div>
            <Navbar isScrolled={isScrolled} isMobile={false} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out shadow-lg ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <Navbar isScrolled={true} isMobile={true} />
          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-4">
            <div className="flex items-center">
              <Phone size={16} className="text-emerald-700 mr-2" />
              <span className="text-sm text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="text-emerald-700 mr-2" />
              <span className="text-sm text-gray-700">Kochi, Kerala</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;