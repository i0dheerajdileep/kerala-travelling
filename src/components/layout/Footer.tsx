import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kerala Travelling</h3>
            <p className="text-emerald-100 mb-4">
              Your gateway to God's Own Country. We provide unforgettable experiences in Kerala with personalized tours and exceptional service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-emerald-100 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#gallery" className="text-emerald-100 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-emerald-100 hover:text-white transition-colors">About Us</a></li>
              {/* <li><a href="#blog" className="text-emerald-100 hover:text-white transition-colors">Blog</a></li> */}
              <li><a href="#contact" className="text-emerald-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Alleppey Backwaters</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Munnar Hills</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Kovalam Beach</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Wayanad Wildlife</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Fort Kochi</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-emerald-100">Courtyard Marriott, VIP Road, Kochi, 683572, India</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <p className="text-emerald-100">+919446200006</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <p className="text-emerald-100">mail@ksa.co.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
          <p>&copy; {new Date().getFullYear()} Kerala Travelling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;