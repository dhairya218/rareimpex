'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Globe, Truck, Award, Users, Volume2, VolumeX } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Premium Fruit Import Export",
    subtitle: "Global Excellence in Fruit Trading",
    description: "Leading the world in premium fruit import-export with over 20 years of excellence and trust.",
    icon: Globe,
    videoThumbnail: "/images/backgrounds/slide-1-logistics.jpg",
    videoSrc: "/videos/slide-1-logistics.mp4",
    hasVideo: true,
    cta: "Explore Our Products"
  },
  {
    id: 2,
    title: "Worldwide Distribution Network",
    subtitle: "Reaching 7+ Countries",
    description: "Our extensive network ensures fresh, premium fruits reach customers across the globe with unmatched quality.",
    icon: Truck,
    videoThumbnail: "/images/backgrounds/slide-2-logistics.jpg",
    videoSrc: "/videos/slide-2-logistics.mp4",
    hasVideo: true,
    cta: "Our Global Reach"
  },
  {
    id: 3,
    title: "Quality Assured Products",
    subtitle: "Every Fruit Inspected",
    description: "Rigorous quality control ensures only the finest fruits make it to your table, maintaining our premium standards.",
    icon: Award,
    videoThumbnail: "/images/backgrounds/slide-3-logistics.jpg",
    videoSrc: "/videos/slide-3-logistics.mp4",
    hasVideo: true,
    cta: "Quality Standards"
    },
  {
    id: 4,
    title: "Trusted by Global Partners",
    subtitle: "Building Lasting Relationships",
    description: "Partnering with premium orchards and trusted suppliers worldwide to deliver exceptional fruits.",
    icon: Users,
    videoThumbnail: "/images/backgrounds/slide-4-logistics.jpg",
    videoSrc: "/videos/slide-4-logistics.mp4",
    hasVideo: true,
    cta: "Our Partners"
  }
];

// Main background image for the hero section
const mainBackgroundImage = "/images/backgrounds/slide-2-logistics.jpg";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle video play/pause when slide changes
  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      const currentSlideData = heroSlides[currentSlide];
      if (currentSlideData.hasVideo && !videoError) {
        // Add a small delay to ensure video is ready
        setTimeout(() => {
          if (videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsVideoPlaying(true);
                })
                .catch((error) => {
                  console.error('Video play failed:', error);
                  setVideoError(true);
                  setIsVideoPlaying(false);
                });
            }
          }
        }, 100);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  }, [currentSlide, videoError, videoLoaded]);

  // Reset video error when changing slides
  useEffect(() => {
    setVideoError(false);
    setVideoLoaded(false);
    // Reset video element if it exists
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [currentSlide]);

  // Handle video events
  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setVideoError(false);
    // Ensure video is ready to play
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoError = (e: any) => {
    console.error('Video error:', e);
    setVideoError(true);
    setVideoLoaded(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Main Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-pulse-slow"
        style={{
          backgroundImage: `url(${mainBackgroundImage})`,
          backgroundColor: '#1f2937', // Fallback color
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-rareimpex-red/30"></div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Subtle animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

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
            {/* Video Background for slides with video */}
            {slide.hasVideo && index === currentSlide && !videoError && (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-10"
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                onLoadedData={handleVideoLoaded}
                onEnded={handleVideoEnded}
                onError={handleVideoError}
                style={{ zIndex: 10 }}
              >
                <source src={slide.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Fallback Image Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{
                backgroundImage: `url(${slide.videoThumbnail})`,
                zIndex: videoLoaded && slide.hasVideo && currentSlide === index ? 5 : 10,
              }}
              onError={(e) => {
                // Fallback to main background if slide image fails
                const target = e.target as HTMLDivElement;
                target.style.backgroundImage = `url(${mainBackgroundImage})`;
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-rareimpex-red/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center text-white px-4 z-20">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 shadow-2xl">
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h2 className="text-lg md:text-xl font-medium text-rareimpex-green mb-4 uppercase tracking-wide drop-shadow-lg">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                  {slide.description}
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-rareimpex-red hover:bg-rareimpex-red/90 text-white font-semibold rounded-xl transition-all duration-300 text-lg shadow-2xl hover:shadow-rareimpex-red/25 hover:scale-105">
                  <Play className="h-5 w-5 mr-3" />
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Video Controls - Show for any slide with video */}
      {currentSlideData.hasVideo && !videoError && videoLoaded && (
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={toggleMute}
            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white/30 ${
              index === currentSlide
                ? 'bg-rareimpex-red scale-125 border-rareimpex-red shadow-lg shadow-rareimpex-red/50'
                : 'bg-white/20 hover:bg-white/40 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  );
}