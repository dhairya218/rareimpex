'use client';

import { useState, useEffect } from 'react';
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
    bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    accentColor: "text-red-500",
    varieties: [
      { name: "Royal Gala", description: "Sweet and crisp with a beautiful red and yellow skin", image: "/products/apples/varieties/royal-gala.jpg" },
      { name: "Red Delicious", description: "Classic red apple with sweet flavor and distinctive shape", image: "/products/apples/varieties/red-delicious.jpg" },
      { name: "Pink Lady", description: "Sweet-tart flavor with beautiful pink-red coloring", image: "/products/apples/varieties/pink-lady.jpg" },
      { name: "Fuji", description: "Sweet, crisp, and juicy with excellent shelf life", image: "/products/apples/varieties/fuji.jpg" },
      { name: "Queen", description: "Premium variety with exceptional taste and texture", image: "/products/apples/varieties/queen.jpg" },
      { name: "Granny Smith", description: "Tart, crisp green apples perfect for baking", image: "/products/apples/varieties/granny-smith.jpg" },
      { name: "Cripps Pink", description: "Sweet and aromatic with pink-red skin", image: "/products/apples/varieties/cripps-pink.jpg" }
    ]
  },
  pears: {
    name: "Pears",
    icon: Apple,
    description: "Fresh and juicy pears from premium orchards with exceptional taste",
    image: "/products/pears/category.jpg",
    heroImage: "/products/pears/hero.jpg",
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    accentColor: "text-green-500",
    varieties: [
      { name: "Packham", description: "Sweet and juicy with smooth texture", image: "/products/pears/varieties/packham.jpg" },
      { name: "Fonelle", description: "Delicate flavor with tender flesh", image: "/products/pears/varieties/fonelle.jpg" },
      { name: "Vermont", description: "Rich flavor with excellent storage qualities", image: "/products/pears/varieties/vermont.jpg" },
      { name: "William", description: "Classic pear variety with sweet taste", image: "/products/pears/varieties/william.jpg" },
      { name: "Red Anjou", description: "Sweet red-skinned pear with smooth texture", image: "/products/pears/varieties/red-anjou.jpg" },
      { name: "Green Anjou", description: "Versatile pear perfect for fresh eating and cooking", image: "/products/pears/varieties/green-anjou.jpg" }
    ]
  },
  citrus: {
    name: "Citrus",
    icon: Citrus,
    description: "Fresh citrus varieties packed with vitamin C and natural goodness",
    image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg",
    heroImage: "https://images.pexels.com/photos/1414120/pexels-photo-1414120.jpeg",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentColor: "text-orange-500",
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
    icon: Apple,
    description: "Exotic kiwi fruits with unique flavor and high nutritional value",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    heroImage: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg",
    bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accentColor: "text-emerald-500",
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
    heroImage: "https://images.pexels.com/photos/5945567/pexels-photo-5945567.jpeg",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    accentColor: "text-purple-500",
    varieties: [
      { name: "Red Globe", description: "Large, sweet red grapes with crisp texture" },
      { name: "Shine Muscat", description: "Premium Japanese variety with exceptional sweetness" },
      { name: "Crimson", description: "Seedless red grapes with intense flavor" },
      { name: "Sapphire Long", description: "Elongated blue grapes with unique appearance" }
    ]
  },
  avocado: {
    name: "Avocado",
    icon: Apple,
    description: "Premium Hass avocados with rich, creamy texture",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    heroImage: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
    bgColor: "bg-gradient-to-br from-lime-500 to-lime-600",
    accentColor: "text-lime-500",
    varieties: [
      { name: "Hass", description: "Premium variety with rich, creamy texture and nutty flavor" }
    ]
  },
  dragonFruit: {
    name: "Dragon Fruit",
    icon: Cherry,
    description: "Exotic dragon fruits with vibrant colors and unique taste",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    heroImage: "https://images.pexels.com/photos/4750267/pexels-photo-4750267.jpeg",
    bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    accentColor: "text-pink-500",
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
    heroImage: "https://images.pexels.com/photos/4750441/pexels-photo-4750441.jpeg",
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    accentColor: "text-amber-500",
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
    heroImage: "https://images.pexels.com/photos/1263068/pexels-photo-1263068.jpeg",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    accentColor: "text-indigo-500",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Function to map category names to productData keys
  const getCategoryKey = (categoryName: string) => {
    const categoryMap: { [key: string]: string } = {
      'apples': 'apples',
      'pears': 'pears',
      'citrus': 'citrus',
      'kiwi': 'kiwi',
      'grapes': 'grapes',
      'avocado': 'avocado',
      'dragonfruit': 'dragonFruit',
      'stonefruit': 'stoneFruit',
      'berries': 'berries'
    };
    return categoryMap[categoryName.toLowerCase()] || 'apples';
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const categoryKey = getCategoryKey(hash);
        if (productData[categoryKey as keyof typeof productData]) {
          setSelectedCategory(categoryKey);
          setActiveSection(categoryKey);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleProductClick = (variety: any) => {
    setSelectedProduct({
      name: productData[selectedCategory as keyof typeof productData].name,
      variety: variety,
      category: productData[selectedCategory as keyof typeof productData].name,
      accentColor: productData[selectedCategory as keyof typeof productData].accentColor,
      bgColor: productData[selectedCategory as keyof typeof productData].bgColor
    });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section with Water Effects */}
      <div className="relative bg-gradient-to-r from-rareimpex-red to-rareimpex-green text-white py-20 overflow-hidden">
        {/* Water Splash Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-white/25 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-white mr-3 animate-pulse" />
              <span className="text-white font-semibold text-lg uppercase tracking-wide">
                Premium Collection
              </span>
              <Sparkles className="h-8 w-8 text-white ml-3 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Product Categories</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover our premium selection of fresh fruits from around the world
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white/80 backdrop-blur-sm py-8 sticky top-0 z-10 border-b border-gray-200">
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
                    // Create a URL-friendly hash for navigation
                    const categoryHash = category.name.toLowerCase().replace(/\s+/g, '');
                    window.location.hash = categoryHash;
                  }}
                  className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? `${category.bgColor} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
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

      {/* Hero Image Showcase */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={productData[selectedCategory as keyof typeof productData].heroImage}
                  alt={productData[selectedCategory as keyof typeof productData].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Water Splash Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {(() => {
                    const IconComponent = productData[selectedCategory as keyof typeof productData].icon;
                    return <IconComponent className="h-10 w-10 text-white" />;
                  })()}
                </div>
                {/* Category Badge */}
                <div className={`absolute bottom-6 left-6 ${productData[selectedCategory as keyof typeof productData].bgColor} px-6 py-3 rounded-full text-white text-lg font-bold`}>
                  {productData[selectedCategory as keyof typeof productData].name}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  {productData[selectedCategory as keyof typeof productData].name}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {productData[selectedCategory as keyof typeof productData].description}
                </p>
                <div className="flex items-center text-rareimpex-red font-medium text-lg">
                  <span>Explore {productData[selectedCategory as keyof typeof productData].varieties.length} varieties</span>
                  <ArrowRight className="h-6 w-6 ml-2" />
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-gray-900">{productData[selectedCategory as keyof typeof productData].varieties.length}</div>
                  <div className="text-sm text-gray-600">Varieties</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-gray-900">Premium</div>
                  <div className="text-sm text-gray-600">Quality</div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>

          {/* Varieties Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Available Varieties</h3>
            <p className="text-lg text-gray-600">Discover our premium selection of {productData[selectedCategory as keyof typeof productData].name}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productData[selectedCategory as keyof typeof productData].varieties.map((variety, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                onClick={() => handleProductClick(variety)}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Display variety image if available, otherwise show icon */}
                  {(variety as any).image ? (
                    <Image
                      src={(variety as any).image}
                      alt={variety.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`${productData[selectedCategory as keyof typeof productData].accentColor} text-6xl opacity-20`}>
                          {(() => {
                            const IconComponent = productData[selectedCategory as keyof typeof productData].icon;
                            return <IconComponent className="h-16 w-16" />;
                          })()}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Water Splash Effect */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = productData[selectedCategory as keyof typeof productData].icon;
                      return <IconComponent className="h-6 w-6 text-gray-600" />;
                    })()}
                  </div>
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