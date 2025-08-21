'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, Apple, Grape, Citrus, Cherry, Sparkles } from 'lucide-react';
import ProductModal from '@/components/ProductModal';

const productData = {
  apples: {
    name: "Apples",
    icon: Apple,
    description: "Premium quality apples sourced from the finest orchards worldwide",
    image: "/products/apples/category.jpg",
    heroImage: "/products/apples/hero.jpg",
    backgroundImage: "/images/backgrounds/apple.jpg",
    bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    accentColor: "text-red-500",
    varieties: [
      { name: "Royal Gala", description: "Sweet and crisp with a beautiful red and yellow skin", image: "/products/apples/varieties/royal-gala.jpg" },
      { name: "Red Delicious", description: "Classic red apple with sweet flavor and distinctive shape", image: "/products/apples/varieties/red-delicious.jpg" },
      { name: "Pink Lady", description: "Sweet-tart flavor with beautiful pink-red coloring", image: "/products/apples/varieties/pink-lady.jpg" },
      { name: "Fuji", description: "Sweet, crisp, and juicy with excellent shelf life", image: "/products/apples/varieties/fuji.jpg" },
      { name: "Queen", description: "Premium variety with exceptional taste and texture", image: "/products/apples/varieties/queen.jpg" },
      { name: "Granny Smith", description: "Tart, crisp green apples perfect for baking", image: "/products/apples/varieties/granny-smith.jpg" }
    ]
  },
  pears: {
    name: "Pears",
    icon: Apple,
    description: "Fresh and juicy pears from premium orchards with exceptional taste",
    image: "/products/pears/category.jpg",
    heroImage: "/products/pears/hero.jpg",
    backgroundImage: "/images/backgrounds/pears.jpg",
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    accentColor: "text-green-500",
    varieties: [
      { name: "Packham", description: "Sweet and juicy with smooth texture", image: "/products/pears/varieties/packham.jpg" },
      { name: "Fonelle", description: "Delicate flavor with tender flesh", image: "/products/pears/varieties/fonelle.jpg" },
      { name: "Vermont", description: "Rich flavor with excellent storage qualities", image: "/products/pears/varieties/vermont.jpg" },
      { name: "William", description: "Classic pear variety with sweet taste", image: "/products/pears/varieties/william.jpg" },
      { name: "Red Anjou", description: "Sweet red-skinned pear with smooth texture", image: "/products/pears/varieties/red-anjou.jpg" }
    ]
  },
  citrus: {
    name: "Citrus",
    icon: Citrus,
    description: "Fresh citrus varieties packed with vitamin C and natural goodness",
    image: "/products/citrus/category.jpg",
    heroImage: "/products/citrus/hero.jpg",
    backgroundImage: "/images/backgrounds/cirtus.jpg",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentColor: "text-orange-500",
    varieties: [
      { name: "Valencia", description: "Sweet and juicy oranges perfect for juicing", image: "/products/citrus/varieties/valencia.jpg" },
      { name: "Navels", description: "Seedless oranges with easy-to-peel skin", image: "/products/citrus/varieties/navels.jpg" },
      { name: "Mandarins", description: "Small, sweet citrus fruits perfect for snacking", image: "/products/citrus/varieties/mandarins.jpg" },
      { name: "Grapefruits", description: "Large citrus fruits with tangy flavor", image: "/products/citrus/varieties/grapefruits.jpg" },
      { name: "Lemon", description: "Tangy lemons perfect for cooking and beverages", image: "/products/citrus/varieties/lemon.jpg" }
    ]
  },
  kiwi: {
    name: "Kiwi",
    icon: Cherry,
    description: "Exotic kiwi fruits with unique flavor and high nutritional value",
    image: "/products/kiwi/category.jpg",
    heroImage: "/products/kiwi/hero.jpg",
    backgroundImage: "/images/backgrounds/kiwi.jpg",
    bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accentColor: "text-emerald-500",
    varieties: [
      { name: "Hayward", description: "Classic green kiwi with tangy-sweet flavor", image: "/products/kiwi/varieties/hayward.jpg" }
    ]
  },
  grapes: {
    name: "Grapes",
    icon: Grape,
    description: "Premium grape varieties from renowned vineyards worldwide",
    image: "/products/grapes/category.jpg",
    heroImage: "/products/grapes/hero.jpg",
    backgroundImage: "/images/backgrounds/grapes.jpg",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    accentColor: "text-purple-500",
    varieties: [
      { name: "Red Globe", description: "Large red grapes with sweet flavor", image: "/products/grapes/varieties/red-globe.jpg" },
      { name: "Thompson Seedless", description: "Green seedless grapes perfect for snacking", image: "/products/grapes/varieties/thompson-seedless.jpg" },
      { name: "Flame Seedless", description: "Red seedless grapes with intense flavor", image: "/products/grapes/varieties/flame-seedless.jpg" },
      { name: "Black Seedless", description: "Dark purple seedless grapes with rich taste", image: "/products/grapes/varieties/black-seedless.jpg" }
    ]
  },
  avocado: {
    name: "Avocado",
    icon: Cherry,
    description: "Premium Hass avocados with rich, creamy texture and nutty flavor",
    image: "/products/avocado/category.jpg",
    heroImage: "/products/avocado/hero.jpg",
    backgroundImage: "/images/backgrounds/avocado.jpg",
    bgColor: "bg-gradient-to-br from-lime-500 to-lime-600",
    accentColor: "text-lime-500",
    varieties: [
      { name: "Hass", description: "Premium Hass avocados with rich, creamy texture", image: "/products/avocado/varieties/hass.jpg" }
    ]
  },
  dragonfruit: {
    name: "Dragon Fruit",
    icon: Cherry,
    description: "Exotic dragon fruits with vibrant colors and unique taste",
    image: "/products/dragon-fruit/category.jpg",
    heroImage: "/products/dragon-fruit/hero.jpg",
    backgroundImage: "/images/backgrounds/dragonfruit.jpg",
    bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    accentColor: "text-pink-500",
    varieties: [
      { name: "White Flesh", description: "Classic white-fleshed dragon fruit with mild sweetness", image: "/products/dragon-fruit/varieties/white-flesh.jpg" },
      { name: "Red Flesh", description: "Vibrant red-fleshed variety with intense color and flavor", image: "/products/dragon-fruit/varieties/red-flesh.jpg" }
    ]
  },
  stonefruit: {
    name: "Stone Fruit",
    icon: Cherry,
    description: "Fresh stone fruits with exceptional flavor and texture",
    image: "/products/stone-fruit/category.jpg",
    heroImage: "/products/stone-fruit/hero.jpg",
    backgroundImage: "/images/backgrounds/stonefruit.jpg",
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    accentColor: "text-amber-500",
    varieties: [
      { name: "Peach", description: "Sweet and juicy peaches with velvety skin", image: "/products/stone-fruit/varieties/peach.jpg" },
      { name: "Nectarine", description: "Smooth-skinned peaches with crisp texture", image: "/products/stone-fruit/varieties/nectarine.jpg" },
      { name: "Apricot", description: "Small, sweet fruits with delicate flavor", image: "/products/stone-fruit/varieties/apricot.jpg" },
      { name: "Plum", description: "Versatile stone fruits available in various colors", image: "/products/stone-fruit/varieties/plum.jpg" }
    ]
  },
  berries: {
    name: "Berries",
    icon: Cherry,
    description: "Fresh berries packed with antioxidants and natural sweetness",
    image: "/products/berries/category.jpg",
    heroImage: "/products/berries/hero.jpg",
    backgroundImage: "/images/backgrounds/berries.jpg",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    accentColor: "text-indigo-500",
    varieties: [
      { name: "Blueberry", description: "Sweet blueberries rich in antioxidants", image: "/products/berries/varieties/blueberry.jpg" },
      { name: "Cherry", description: "Sweet and tart cherries perfect for snacking", image: "/products/berries/varieties/cherry.jpg" },
      { name: "Raspberry", description: "Delicate raspberries with intense flavor", image: "/products/berries/varieties/raspberry.jpg" }
    ]
  }
};

export default function ProductCategory() {
  const params = useParams();
  const category = params.category as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Get category data based on URL parameter
  const categoryData = productData[category as keyof typeof productData];
  
  // If category doesn't exist, redirect to products page
  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-6">The requested product category could not be found.</p>
          <a 
            href="/products" 
            className="bg-rareimpex-red text-white px-6 py-3 rounded-lg hover:bg-rareimpex-red/90 transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    );
  }

  const handleProductClick = (variety: any) => {
    setSelectedProduct({
      name: categoryData.name,
      variety: variety,
      category: category,
      accentColor: categoryData.accentColor,
      bgColor: categoryData.bgColor
    });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={categoryData.backgroundImage}
            alt={categoryData.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className={`${categoryData.bgColor} p-4 rounded-full`}>
              <categoryData.icon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {categoryData.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>
        </div>
      </div>

      {/* Product Varieties */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Varieties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of {categoryData.name.toLowerCase()} varieties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.varieties.map((variety, index) => (
              <div 
                key={index}
                onClick={() => handleProductClick(variety)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={variety.image || categoryData.image}
                    alt={variety.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{variety.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{variety.description}</p>
                  <div className="flex items-center text-rareimpex-red font-medium text-sm group-hover:text-rareimpex-green transition-colors duration-300">
                    <span>Click to view details</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-rareimpex-red to-rareimpex-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Our {categoryData.name}?
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

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
