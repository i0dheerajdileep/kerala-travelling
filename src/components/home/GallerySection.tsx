import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    id: 1,
    src: "https://www.shutterstock.com/image-photo/houseboat-sailing-alappuzha-backwaters-kerala-600nw-2488720059.jpg",
    alt: "Backwaters of Kerala"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Tea Gardens in Munnar"
  },
  {
    id: 3,
    src: "https://t3.ftcdn.net/jpg/00/59/46/64/360_F_59466409_IjrcA9OXD4qVCBSFHsm87Dxl53rUNKsV.jpg",
    alt: "Beach in Kerala"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Wayanad Wildlife"
  },
  {
    id: 5,
    src: "https://media.istockphoto.com/id/478247780/photo/kochi-chinese-fishnets-in-twilight-kerala-fort-kochin.jpg?s=612x612&w=0&k=20&c=G-ZopML7MBA5Yf1fYREeqkbWPnpiDgEG76KpEmZ65GY=",
    alt: "Fort Kochi"
  },
  {
    id: 6,
    src: "https://thumbs.dreamstime.com/b/photograph-boats-periyar-lake-periyar-national-park-located-thekkady-kerala-india-boats-periyar-lake-105361470.jpg",
    alt: "Periyar Lake in Thekkady"
  },
  {
    id: 7,
    src: "https://media.istockphoto.com/id/153547597/photo/ocean-view-in-varkala-kerala-india.jpg?s=612x612&w=0&k=20&c=IHGhGhoTjl8efE-M_vZyA5CEoXpNJrC2hohnt_N4xbs=",
    alt: "Varkala Cliffs"
  }
];


const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (currentImage === null) return;
    
    if (direction === 'next') {
      setCurrentImage((currentImage + 1) % images.length);
    } else {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Kerala's Beauty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the breathtaking landscapes and vibrant culture of God's Own Country through our curated gallery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-64"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button
            className="absolute top-6 right-6 text-white focus:outline-none"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 focus:outline-none"
            onClick={() => navigateImage('prev')}
          >
            &larr;
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 focus:outline-none"
            onClick={() => navigateImage('next')}
          >
            &rarr;
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;