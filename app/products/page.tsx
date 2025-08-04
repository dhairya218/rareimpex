'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Apple, Grape, Citrus, Cherry } from 'lucide-react';

const productData = {
  apples: {
    name: "Apples",
    icon: Apple,
    description: "Premium quality apples sourced from the finest orchards worldwide",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "Royal Gala", description: "Sweet and crisp with a beautiful red and yellow skin" },
      { name: "Red Delicious", description: "Classic red apple with sweet flavor and distinctive shape" },
      { name: "Pink Lady", description: "Sweet-tart flavor with beautiful pink-red coloring" },
      { name: "Fuji", description: "Sweet, crisp, and juicy with excellent shelf life" },
      { name: "Queen", description: "Premium variety with exceptional taste and texture" },
      { name: "Granny Smith", description: "Tart, crisp green apples perfect for baking" },
      { name: "Cripps Pink", description: "Sweet and aromatic with pink-red skin" }
    ]
  },
  pears: {
    name: "Pears",
    icon: Apple, // Using Apple icon as placeholder since Pear doesn't exist
    description: "Fresh and juicy pears from premium orchards",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "Packham", description: "Sweet and juicy with smooth texture" },
      { name: "Fonelle", description: "Delicate flavor with tender flesh" },
      { name: "Vermont", description: "Rich flavor with excellent storage qualities" },
      { name: "William", description: "Classic pear variety with sweet taste" },
      { name: "Red Anjou", description: "Sweet red-skinned pear with smooth texture" },
      { name: "Green Anjou", description: "Versatile pear perfect for fresh eating and cooking" }
    ]
  },
  citrus: {
    name: "Citrus",
    icon: Citrus,
    description: "Fresh citrus varieties packed with vitamin C and natural goodness",
    image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg",
    varieties: [
      { name: "Valencia", description: "Sweet oranges perfect for juicing and fresh eating" },
      { name: "Navels", description: "Seedless oranges with easy-to-peel skin" },
      { name: "Mandarins", description: "Small, sweet citrus fruits with loose skin" },
      { name: "Grapefruits", description: "Tangy and refreshing with beautiful pink flesh" },
      { name: "Lemon", description: "Versatile citrus perfect for cooking and beverages" }
    ]
  },
  kiwi: {
    name: "Kiwi",
    icon: Apple, // Using Apple icon as placeholder since Kiwi doesn't exist
    description: "Exotic kiwi fruits with unique flavor and high nutritional value",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "Hayward", description: "Classic green kiwi with tangy-sweet flavor" },
      { name: "Golden", description: "Smooth-skinned golden kiwi with tropical sweetness" }
    ]
  },
  grapes: {
    name: "Grapes",
    icon: Grape,
    description: "Premium grape varieties from renowned vineyards",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "Red Globe", description: "Large, sweet red grapes with crisp texture" },
      { name: "Shine Muscat", description: "Premium Japanese variety with exceptional sweetness" },
      { name: "Crimson", description: "Seedless red grapes with intense flavor" },
      { name: "Sapphire Long", description: "Elongated blue grapes with unique appearance" }
    ]
  },
  avocado: {
    name: "Avocado",
    icon: Apple, // Using Apple icon as placeholder since Avocado doesn't exist
    description: "Premium Hass avocados with rich, creamy texture",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "Hass", description: "Premium variety with rich, creamy texture and nutty flavor" }
    ]
  },
  dragonFruit: {
    name: "Dragon Fruit",
    icon: Cherry, // Using Cherry icon as placeholder since Dragon doesn't exist
    description: "Exotic dragon fruits with vibrant colors and unique taste",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "White Flesh", description: "Classic white-fleshed dragon fruit with mild sweetness" },
      { name: "Red Flesh", description: "Vibrant red-fleshed variety with intense color and flavor" }
    ]
  },
  stoneFruit: {
    name: "Stone Fruit",
    icon: Cherry,
    description: "Fresh stone fruits with exceptional flavor and texture",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "Peach", description: "Sweet and juicy peaches with velvety skin" },
      { name: "Nectarine", description: "Smooth-skinned peaches with crisp texture" },
      { name: "Apricot", description: "Small, sweet fruits with delicate flavor" },
      { name: "Plum", description: "Versatile stone fruits available in various colors" }
    ]
  },
  berries: {
    name: "Berries",
    icon: Cherry,
    description: "Fresh berries packed with antioxidants and natural sweetness",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      { name: "Blueberry", description: "Sweet blueberries rich in antioxidants" },
      { name: "Cherry", description: "Sweet and tart cherries perfect for snacking" },
      { name: "Raspberry", description: "Delicate raspberries with intense flavor" }
    ]
  }
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('apples');
  const [activeSection, setActiveSection] = useState<string>('apples');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && productData[hash as keyof typeof productData]) {
        setSelectedCategory(hash);
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rareimpex-red to-rareimpex-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Product Categories</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover our premium selection of fresh fruits from around the world
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-gray-50 py-8 sticky top-0 z-10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(productData).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    setActiveSection(key);
                    window.location.hash = key;
                  }}
                  className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-rareimpex-red text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-rareimpex-red hover:text-white border border-gray-200'
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Category Display */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {productData[selectedCategory as keyof typeof productData].name}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {productData[selectedCategory as keyof typeof productData].description}
                </p>
                <div className="flex items-center text-rareimpex-red font-medium">
                  <span>Explore varieties</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={productData[selectedCategory as keyof typeof productData].image}
                  alt={productData[selectedCategory as keyof typeof productData].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Varieties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productData[selectedCategory as keyof typeof productData].varieties.map((variety, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative h-48 bg-gradient-to-br from-rareimpex-red/10 to-rareimpex-green/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-rareimpex-red text-6xl opacity-20">
                      {productData[selectedCategory as keyof typeof productData].icon({ className: "h-16 w-16" })}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{variety.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{variety.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for pricing, availability, and custom orders tailored to your business needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-rareimpex-red text-white font-medium rounded-lg hover:bg-rareimpex-red/90 transition-colors duration-300"
          >
            Get Quote
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}