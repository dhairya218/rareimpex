'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Premium Fruit Harvesting",
    subtitle: "From Farm to Table Excellence",
    description: "Witness our careful harvesting process that ensures every fruit meets our premium quality standards.",
    videoThumbnail: "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg",
    cta: "Watch Our Process"
  },
  {
    id: 2,
    title: "Global Packaging Operations",
    subtitle: "State-of-the-Art Facilities",
    description: "Our advanced packaging facilities maintain freshness while preparing fruits for worldwide distribution.",
    videoThumbnail: "https://images.pexels.com/photos/1267308/pexels-photo-1267308.jpeg",
    cta: "See Our Facilities"
  },
  {
    id: 3,
    title: "Orchard Partnerships",
    subtitle: "Working with the Best Growers",
    description: "Partnering with premium orchards worldwide to source the finest quality fruits for our global customers.",
    videoThumbnail: "https://images.pexels.com/photos/1458686/pexels-photo-1458686.jpeg",
    cta: "Meet Our Partners"
  },
  {
    id: 4,
    title: "Quality Assurance",
    subtitle: "Every Fruit Inspected",
    description: "Our rigorous quality control ensures that only the best fruits make it to your table.",
    videoThumbnail: "https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg",
    cta: "Learn About Quality"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.videoThumbnail})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg md:text-xl font-medium text-green-400 mb-4 uppercase tracking-wide">
                {slide.subtitle}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 text-lg">
                <Play className="h-5 w-5 mr-3" />
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-green-400 scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}