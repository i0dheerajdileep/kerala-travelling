import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const services = [
    "Personalized tour packages",
    "Expert local guides",
    "Authentic cultural experiences",
    "Luxury and budget accommodations",
    "24/7 customer support",
    "Eco-friendly travel options"
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Kerala Travelling</h2>
            <p className="text-gray-600 mb-6">
              Kerala Travelling is your premier guide to experiencing the beauty and cultural richness of God's Own Country. 
              With over 10 years of expertise, we specialize in creating authentic, immersive experiences that showcase Kerala's 
              breathtaking landscapes, vibrant culture, and warm hospitality.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of passionate local experts is committed to providing exceptional service and unforgettable journeys 
              tailored to your preferences. Whether you're seeking adventure, relaxation, cultural immersion, or a blend of 
              all three, we craft personalized itineraries that capture the true essence of Kerala.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 size={18} className="text-emerald-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact"
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-40 md:h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Kerala Backwaters" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-56 md:h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Kerala Culture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="h-56 md:h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Kerala Landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-40 md:h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Kerala Wildlife" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;