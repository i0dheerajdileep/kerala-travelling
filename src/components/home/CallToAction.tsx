import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-emerald-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for an Unforgettable Kerala Adventure?</h2>
        <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
          Let us help you create memories that will last a lifetime. Book your Kerala journey today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-emerald-700 font-medium rounded-full hover:bg-emerald-50 transition-colors duration-300"
          >
            Book Now
          </a>
          <a
            href="#destinations"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-emerald-700 transition-colors duration-300"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;