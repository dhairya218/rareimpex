'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf, Apple, Pear, Citrus, Kiwi, Grape, Avocado, Dragon, Cherry } from 'lucide-react';

const productCategories = [
  {
    name: "Apples",
    icon: Apple,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Royal Gala, Red Delicious, Pink Lady, Fuji, Queen, Granny Smith, Cripps Pink",
    description: "Premium quality apples sourced from the finest orchards worldwide",
    color: "from-rareimpex-red/20 to-rareimpex-red/10"
  },
  {
    name: "Pears",
    icon: Pear,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Packham, Fonelle, Vermont, William, Red Anjou, Green Anjou",
    description: "Fresh and juicy pears from premium orchards with exceptional taste",
    color: "from-rareimpex-green/20 to-rareimpex-green/10"
  },
  {
    name: "Citrus",
    icon: Citrus,
    image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg",
    varieties: "Valencia, Navels, Mandarins, Grapefruits, Lemon",
    description: "Fresh citrus varieties packed with vitamin C and natural goodness",
    color: "from-rareimpex-red/20 to-rareimpex-green/10"
  },
  {
    name: "Kiwi",
    icon: Kiwi,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Hayward, Golden",
    description: "Exotic kiwi fruits with unique flavor and high nutritional value",
    color: "from-rareimpex-green/20 to-rareimpex-green/10"
  },
  {
    name: "Grapes",
    icon: Grape,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Red Globe, Shine Muscat, Crimson, Sapphire Long",
    description: "Premium grape varieties from renowned vineyards worldwide",
    color: "from-rareimpex-red/20 to-rareimpex-red/10"
  },
  {
    name: "Avocado",
    icon: Avocado,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Hass",
    description: "Premium Hass avocados with rich, creamy texture and nutty flavor",
    color: "from-rareimpex-green/20 to-rareimpex-green/10"
  },
  {
    name: "Dragon Fruit",
    icon: Dragon,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "White Flesh, Red Flesh",
    description: "Exotic dragon fruits with vibrant colors and unique taste",
    color: "from-rareimpex-red/20 to-rareimpex-red/10"
  },
  {
    name: "Stone Fruit",
    icon: Cherry,
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Peach, Nectarine, Apricot, Plum",
    description: "Fresh stone fruits with exceptional flavor and texture",
    color: "from-rareimpex-green/20 to-rareimpex-green/10"
  },
  {
    name: "Berries",
    icon: Cherry,
    image: "https://images.pexels.com/photos/1263068/pexels-photo-1263068.jpeg",
    varieties: "Blueberry, Cherry, Raspberry",
    description: "Fresh berries packed with antioxidants and natural sweetness",
    color: "from-rareimpex-red/20 to-rareimpex-red/10"
  }
];

export default function FruitGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-rareimpex-green mr-3" />
            <span className="text-rareimpex-green font-semibold text-lg uppercase tracking-wide">
              Our Premium Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fresh Fruits from Around the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium fruits, sourced from the finest growers 
            across 7+ countries and delivered with uncompromising quality.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="h-6 w-6 text-rareimpex-red" />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm font-medium opacity-90">{category.varieties}</p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  
                  <div className={`transform transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}>
                    <button className="inline-flex items-center text-rareimpex-red font-semibold hover:text-rareimpex-red/80 transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-rareimpex-red rounded-2xl transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-rareimpex-red text-white font-semibold rounded-xl hover:bg-rareimpex-red/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Explore All Products</span>
            <ArrowRight className="h-5 w-5 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
}