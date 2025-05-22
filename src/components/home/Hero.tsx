import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: "Experience Kerala's Magic",
    subtitle: "Explore God's Own Country with us"
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D',
    title: "Serene Backwaters",
    subtitle: "Traditional houseboat experiences"
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg',
    title: "Lush Tea Gardens",
    subtitle: "Breathtaking hillside views"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fadeUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 opacity-0 animate-fadeUp" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fadeUp" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            <a
              href="#destinations"
              className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center"
            >
              Explore Destinations
              <ChevronRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-emerald-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;