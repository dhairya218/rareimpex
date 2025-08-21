'use client';

import Image from 'next/image';
import { ArrowRight, Apple, Grape, Citrus, Cherry, Sparkles, Leaf, Star, Heart, Zap } from 'lucide-react';

const productCategories = [
  {
    key: "apples",
    name: "Apples",
    icon: Apple,
    description: "Premium quality apples sourced from the finest orchards worldwide",
    image: "/products/apples/category.jpg",
    backgroundImage: "/images/backgrounds/apple.jpg",
    bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    accentColor: "text-red-500",
    varieties: 7
  },
  {
    key: "pears",
    name: "Pears",
    icon: Leaf,
    description: "Fresh and juicy pears from premium orchards with exceptional taste",
    image: "/products/pears/category.jpg",
    backgroundImage: "/images/backgrounds/pears.jpg",
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    accentColor: "text-green-500",
    varieties: 5
  },
  {
    key: "citrus",
    name: "Citrus",
    icon: Citrus,
    description: "Fresh citrus varieties packed with vitamin C and natural goodness",
    image: "/products/citrus/category.jpg",
    backgroundImage: "/images/backgrounds/cirtus.jpg",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentColor: "text-orange-500",
    varieties: 5
  },
  {
    key: "kiwi",
    name: "Kiwi",
    icon: Star,
    description: "Exotic kiwi fruits with unique flavor and high nutritional value",
    image: "/products/kiwi/category.jpg",
    backgroundImage: "/images/backgrounds/kiwi.jpg",
    bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accentColor: "text-emerald-500",
    varieties: 1
  },
  {
    key: "grapes",
    name: "Grapes",
    icon: Grape,
    description: "Premium grape varieties from renowned vineyards worldwide",
    image: "/products/grapes/category.jpg",
    backgroundImage: "/images/backgrounds/grapes.jpg",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    accentColor: "text-purple-500",
    varieties: 4
  },
  {
    key: "avocado",
    name: "Avocado",
    icon: Heart,
    description: "Premium Hass avocados with rich, creamy texture and nutty flavor",
    image: "/products/avocado/category.jpg",
    backgroundImage: "/images/backgrounds/avocado.jpg",
    bgColor: "bg-gradient-to-br from-lime-500 to-lime-600",
    accentColor: "text-lime-500",
    varieties: 1
  },
  {
    key: "dragonfruit",
    name: "Dragon Fruit",
    icon: Zap,
    description: "Exotic dragon fruits with vibrant colors and unique taste",
    image: "/products/dragon-fruit/category.jpg",
    backgroundImage: "/images/backgrounds/dragonfruit.jpg",
    bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    accentColor: "text-pink-500",
    varieties: 2
  },
  {
    key: "stonefruit",
    name: "Stone Fruit",
    icon: Cherry,
    description: "Fresh stone fruits with exceptional flavor and texture",
    image: "/products/stone-fruit/category.jpg",
    backgroundImage: "/images/backgrounds/stonefruit.jpg",
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    accentColor: "text-amber-500",
    varieties: 4
  },
  {
    key: "berries",
    name: "Berries",
    icon: Cherry,
    description: "Fresh berries packed with antioxidants and natural sweetness",
    image: "/products/berries/category.jpg",
    backgroundImage: "/images/backgrounds/berries.jpg",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    accentColor: "text-indigo-500",
    varieties: 3
  }
];

export default function Products() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/slide-2-logistics.jpg"
            alt="Products Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium fruits, sourced from the finest growers 
            across 7+ countries and delivered with uncompromising quality.
          </p>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Fruit Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of premium fruits, each carefully selected for quality and taste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`${category.bgColor} rounded-3xl p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group cursor-pointer`}
                  onClick={() => window.location.href = `/products/${category.key}`}
                >
                  {/* Water Splash Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <IconComponent className="h-12 w-12 text-white/90" />
                      <div className="text-right">
                        <div className="text-sm opacity-80">Premium</div>
                        <div className="text-xs opacity-60">Quality</div>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{category.name}</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <a 
                        href={`/products/${category.key}`}
                        className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore
                      </a>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{category.varieties}</div>
                        <div className="text-xs opacity-80">Varieties</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-rareimpex-red to-rareimpex-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us for pricing, availability, and custom orders tailored to your business needs.
          </p>
          <div className="bg-white p-1 rounded-2xl inline-block">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-rareimpex-red font-bold rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              Get Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}