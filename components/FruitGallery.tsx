'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Apple, Citrus, Grape, Cherry, Sparkles, Leaf, Zap, Heart, Star } from 'lucide-react';

const productCategories = [
  {
    name: "Apples",
    icon: Apple,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Royal Gala, Red Delicious, Pink Lady, Fuji, Queen, Granny Smith, Cripps Pink",
    description: "Premium quality apples sourced from the finest orchards worldwide",
    color: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    accentColor: "text-red-500"
  },
          {
          name: "Pears",
          icon: Leaf,
          image: "/products/pears/category.jpg",
          varieties: "Packham, Fonelle, Vermont, William, Red Anjou, Green Anjou",
          description: "Fresh and juicy pears from premium orchards with exceptional taste",
          color: "from-green-500 to-green-600",
          bgColor: "bg-gradient-to-br from-green-500 to-green-600",
          accentColor: "text-green-500"
        },
  {
    name: "Citrus",
    icon: Citrus,
    image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg",
    varieties: "Valencia, Navels, Mandarins, Grapefruits, Lemon",
    description: "Fresh citrus varieties packed with vitamin C and natural goodness",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentColor: "text-orange-500"
  },
  {
    name: "Kiwi",
    icon: Star,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Hayward, Golden",
    description: "Exotic kiwi fruits with unique flavor and high nutritional value",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accentColor: "text-emerald-500"
  },
  {
    name: "Grapes",
    icon: Grape,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Red Globe, Shine Muscat, Crimson, Sapphire Long",
    description: "Premium grape varieties from renowned vineyards worldwide",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    accentColor: "text-purple-500"
  },
  {
    name: "Avocado",
    icon: Heart,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Hass",
    description: "Premium Hass avocados with rich, creamy texture and nutty flavor",
    color: "from-lime-500 to-lime-600",
    bgColor: "bg-gradient-to-br from-lime-500 to-lime-600",
    accentColor: "text-lime-500"
  },
  {
    name: "Dragon Fruit",
    icon: Zap,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "White Flesh, Red Flesh",
    description: "Exotic dragon fruits with vibrant colors and unique taste",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    accentColor: "text-pink-500"
  },
  {
    name: "Stone Fruit",
    icon: Cherry,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Peach, Nectarine, Apricot, Plum",
    description: "Fresh stone fruits with exceptional flavor and texture",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    accentColor: "text-amber-500"
  },
  {
    name: "Berries",
    icon: Cherry,
    image: "https://images.pexels.com/photos/1263068/pexels-photo-1263068.jpeg",
    varieties: "Blueberry, Cherry, Raspberry",
    description: "Fresh berries packed with antioxidants and natural sweetness",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    accentColor: "text-indigo-500"
  }
];

export default function FruitGallery() {

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Water Splash Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-rareimpex-red mr-3 animate-pulse" />
            <span className="text-rareimpex-red font-semibold text-lg uppercase tracking-wide">
              Premium Collection
            </span>
            <Sparkles className="h-8 w-8 text-rareimpex-red ml-3 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-rareimpex-red to-rareimpex-green bg-clip-text text-transparent">
            Fresh Fruits from Around the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium fruits, sourced from the finest growers 
            across 7+ countries and delivered with uncompromising quality.
          </p>
        </div>

        {/* Hero Category Showcase */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`${category.bgColor} rounded-3xl p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group`}
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
                      <a href={`/products/${category.name.toLowerCase().replace(/\s+/g, '')}`} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300">
                        Explore
                      </a>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{category.varieties.split(',').length}</div>
                        <div className="text-xs opacity-80">Varieties</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rareimpex-red to-rareimpex-green p-1 rounded-2xl inline-block">
          <a
            href="/products"
              className="inline-flex items-center px-12 py-4 bg-white text-rareimpex-red font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
              <span className="text-lg">Explore All Products</span>
              <ArrowRight className="h-6 w-6 ml-3" />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}