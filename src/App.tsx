import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import FeaturedDestinations from './components/home/FeaturedDestinations';
import AboutSection from './components/home/AboutSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import GallerySection from './components/home/GallerySection';
import BlogSection from './components/home/BlogSection';
import ContactSection from './components/home/ContactSection';
import CallToAction from './components/home/CallToAction';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <AboutSection />
        <TestimonialsSection />
        <GallerySection />
        <CallToAction />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;