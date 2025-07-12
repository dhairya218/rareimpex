'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf } from 'lucide-react';

const fruits = [
  {
    name: "Premium Apples",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: "Fuji, Gala, Red Delicious, Granny Smith",
    description: "Crisp, sweet, and fresh from premium orchards worldwide",
    color: "from-red-500 to-red-600"
  },
  {
    name: "Fresh Bananas",
    image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg",
    varieties: "Cavendish, Lady Finger, Plantain, Red",
    description: "Tropical sweetness delivered fresh from plantation to plate",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    name: "Exotic Mangoes",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
    varieties: "Alphonso, Kesar, Tommy Atkins, Haden",
    description: "The king of fruits with rich, tropical flavor and aroma",
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "Citrus Collection",
    image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg",
    varieties: "Navel Orange, Meyer Lemon, Ruby Grapefruit, Key Lime",
    description: "Vitamin-rich citrus fruits bursting with natural goodness",
    color: "from-orange-400 to-yellow-500"
  },
  {
    name: "Tropical Delights",
    image: "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg",
    varieties: "Pineapple, Papaya, Dragon Fruit, Passion Fruit",
    description: "Exotic tropical fruits bringing sunshine to your table",
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Berry Selection",
    image: "https://images.pexels.com/photos/1263068/pexels-photo-1263068.jpeg",
    varieties: "Strawberry, Blueberry, Raspberry, Blackberry",
    description: "Antioxidant-rich berries perfect for healthy living",
    color: "from-purple-500 to-pink-600"
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
            <Leaf className="h-8 w-8 text-green-600 mr-3" />
            <span className="text-green-600 font-semibold text-lg uppercase tracking-wide">
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

        {/* Fruit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fruits.map((fruit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={fruit.image}
                  alt={fruit.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${fruit.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{fruit.name}</h3>
                    <p className="text-sm font-medium opacity-90">{fruit.varieties}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{fruit.description}</p>
                
                <div className={`transform transition-all duration-300 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-green-400 rounded-2xl transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Explore All Products</span>
            <ArrowRight className="h-5 w-5 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
}