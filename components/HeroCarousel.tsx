'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Globe, Truck, Award, Users } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Premium Fruit Import Export",
    subtitle: "Global Excellence in Fruit Trading",
    description: "Leading the world in premium fruit import-export with over 20 years of excellence and trust.",
    icon: Globe,
    videoThumbnail: "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg",
    cta: "Explore Our Products"
  },
  {
    id: 2,
    title: "Worldwide Distribution Network",
    subtitle: "Reaching 7+ Countries",
    description: "Our extensive network ensures fresh, premium fruits reach customers across the globe with unmatched quality.",
    icon: Truck,
    videoThumbnail: "https://images.pexels.com/photos/1267308/pexels-photo-1267308.jpeg",
    cta: "Our Global Reach"
  },
  {
    id: 3,
    title: "Quality Assured Products",
    subtitle: "Every Fruit Inspected",
    description: "Rigorous quality control ensures only the finest fruits make it to your table, maintaining our premium standards.",
    icon: Award,
    videoThumbnail: "https://images.pexels.com/photos/1458686/pexels-photo-1458686.jpeg",
    cta: "Quality Standards"
  },
  {
    id: 4,
    title: "Trusted by Global Partners",
    subtitle: "Building Lasting Relationships",
    description: "Partnering with premium orchards and trusted suppliers worldwide to deliver exceptional fruits.",
    icon: Users,
    videoThumbnail: "https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg",
    cta: "Our Partners"
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
      {heroSlides.map((slide, index) => {
        const IconComponent = slide.icon;
        return (
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
              <div className="absolute inset-0 bg-gradient-to-r from-rareimpex-black/80 via-rareimpex-black/60 to-rareimpex-red/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="bg-rareimpex-red/20 backdrop-blur-sm p-4 rounded-full">
                    <IconComponent className="h-12 w-12 text-rareimpex-red" />
                  </div>
                </div>
                <h2 className="text-lg md:text-xl font-medium text-rareimpex-green mb-4 uppercase tracking-wide">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-rareimpex-red hover:bg-rareimpex-red/90 text-white font-semibold rounded-lg transition-colors duration-300 text-lg shadow-lg">
                  <Play className="h-5 w-5 mr-3" />
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        );
      })}

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
                ? 'bg-rareimpex-red scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}