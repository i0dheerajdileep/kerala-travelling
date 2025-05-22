import React from 'react';
import { destinations } from '../../data/destinations';
import { MapPin, Clock, Tag } from 'lucide-react';

const FeaturedDestinations: React.FC = () => {
  const featuredDestinations = destinations
  
  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover Kerala's most breathtaking locations and immersive experiences tailored for unforgettable journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                
                

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.activities.slice(0, 3).map((activity, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-full"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`#destination-${destination.id}`}
                  className="inline-block w-full text-center py-2 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-700 transition-colors duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedDestinations;