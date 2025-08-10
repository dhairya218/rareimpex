'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MapPin, Star, Leaf, Zap, Heart, Apple, Grape, Citrus, Cherry } from 'lucide-react';

interface ProductVariety {
  name: string;
  description: string;
  image?: string;
  originCountries?: string[];
  nutritionalInfo?: string;
  storageInfo?: string;
  seasonality?: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    variety: ProductVariety;
    category: string;
    accentColor: string;
    bgColor: string;
  };
}

// Enhanced product data with more details
const enhancedProductData: { [key: string]: { [key: string]: any } } = {
  apples: {
    "Royal Gala": {
      originCountries: ["New Zealand", "USA", "Italy", "Brazil", "Chile", "South Africa", "Poland", "France", "Turkey"],
      nutritionalInfo: "Rich in fiber, vitamin C, and antioxidants. Low in calories and fat.",
      storageInfo: "Store in refrigerator for up to 2-3 weeks. Keep away from ethylene-producing fruits.",
      seasonality: "Available year-round with peak season from September to April"
    },
    "Red Delicious": {
      originCountries: ["USA", "Canada", "Chile", "New Zealand", "South Africa"],
      nutritionalInfo: "Good source of fiber and vitamin C. Contains natural sugars and antioxidants.",
      storageInfo: "Refrigerate for 3-4 weeks. Handle carefully to avoid bruising.",
      seasonality: "Peak season from September to March"
    },
    "Pink Lady": {
      originCountries: ["Australia", "USA", "Chile", "South Africa", "New Zealand"],
      nutritionalInfo: "High in fiber, vitamin C, and potassium. Low glycemic index fruit.",
      storageInfo: "Store in cool, dry place or refrigerator for 2-3 weeks.",
      seasonality: "Available from April to December"
    },
    "Fuji": {
      originCountries: ["Japan", "USA", "Chile", "New Zealand", "China"],
      nutritionalInfo: "Excellent source of fiber and vitamin C. High in natural sugars.",
      storageInfo: "Can be stored for 4-6 months in controlled atmosphere storage.",
      seasonality: "Peak season from October to February"
    },
    "Queen": {
      originCountries: ["South Africa", "Chile", "New Zealand", "Australia"],
      nutritionalInfo: "Rich in antioxidants, fiber, and vitamin C. Low calorie content.",
      storageInfo: "Refrigerate for 2-3 weeks. Handle with care.",
      seasonality: "Available from March to August"
    },
    "Granny Smith": {
      originCountries: ["Australia", "USA", "Chile", "New Zealand", "South Africa"],
      nutritionalInfo: "High in fiber and vitamin C. Low in sugar, perfect for diabetics.",
      storageInfo: "Store in refrigerator for 3-4 weeks. Excellent keeping quality.",
      seasonality: "Peak season from March to November"
    },
    "Cripps Pink": {
      originCountries: ["Australia", "USA", "Chile", "New Zealand", "South Africa"],
      nutritionalInfo: "Good source of fiber, vitamin C, and antioxidants. Moderate sugar content.",
      storageInfo: "Refrigerate for 2-3 weeks. Avoid storing with other fruits.",
      seasonality: "Available from April to December"
    }
  },
  pears: {
    "Packham": {
      originCountries: ["Australia", "Chile", "South Africa", "New Zealand", "USA"],
      nutritionalInfo: "High in fiber, vitamin C, and potassium. Low in calories.",
      storageInfo: "Store in refrigerator for 2-3 weeks. Ripen at room temperature.",
      seasonality: "Peak season from March to August"
    },
    "Fonelle": {
      originCountries: ["New Zealand", "Chile", "South Africa", "Australia"],
      nutritionalInfo: "Rich in fiber and vitamin C. Contains natural sugars and antioxidants.",
      storageInfo: "Refrigerate when ripe for 1-2 weeks. Handle gently.",
      seasonality: "Available from February to July"
    },
    "Vermont": {
      originCountries: ["USA", "Chile", "New Zealand", "South Africa"],
      nutritionalInfo: "Good source of fiber, vitamin C, and potassium. Low glycemic index.",
      storageInfo: "Store in refrigerator for 2-3 weeks. Ripen at room temperature.",
      seasonality: "Peak season from September to March"
    },
    "William": {
      originCountries: ["UK", "France", "Italy", "Chile", "South Africa"],
      nutritionalInfo: "High in fiber and vitamin C. Contains natural sugars and antioxidants.",
      storageInfo: "Refrigerate when ripe for 1-2 weeks. Excellent for canning.",
      seasonality: "Available from August to December"
    },
    "Red Anjou": {
      originCountries: ["USA", "Chile", "New Zealand", "South Africa"],
      nutritionalInfo: "Rich in fiber, vitamin C, and antioxidants. Low in calories.",
      storageInfo: "Store in refrigerator for 3-4 weeks. Excellent keeping quality.",
      seasonality: "Peak season from October to April"
    },
    "Green Anjou": {
      originCountries: ["USA", "Chile", "New Zealand", "South Africa", "Italy"],
      nutritionalInfo: "High in fiber and vitamin C. Contains natural sugars and potassium.",
      storageInfo: "Refrigerate for 3-4 weeks. Can be stored for extended periods.",
      seasonality: "Available year-round with peak from October to April"
    }
  }
};

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  const varietyData = enhancedProductData[product.category.toLowerCase()]?.[product.variety.name] || {};
  const originCountries = varietyData.originCountries || ["Various countries"];
  const nutritionalInfo = varietyData.nutritionalInfo || "Rich in vitamins, minerals, and antioxidants.";
  const storageInfo = varietyData.storageInfo || "Store in a cool, dry place or refrigerator.";
  const seasonality = varietyData.seasonality || "Available year-round with seasonal variations.";

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl transition-transform duration-300 ${
        isAnimating ? 'scale-100' : 'scale-95'
      }`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side - Image */}
          <div className="relative w-full lg:w-1/2 h-80 lg:h-full">
            {product.variety.image ? (
              <Image
                src={product.variety.image}
                alt={product.variety.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className={`${product.accentColor} text-8xl opacity-20`}>
                  {(() => {
                    const IconComponent = Apple;
                    return <IconComponent className="h-32 w-32" />;
                  })()}
                </div>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {product.category}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.variety.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{product.variety.description}</p>
              </div>

              {/* Origin Countries */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-rareimpex-red mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Origin Countries</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {originCountries.map((country: string, index: number) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nutritional Info */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Leaf className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Nutritional Benefits</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{nutritionalInfo}</p>
                </div>

                {/* Storage Info */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Zap className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Storage & Handling</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{storageInfo}</p>
                </div>

                {/* Seasonality */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Seasonality</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{seasonality}</p>
                </div>

                {/* Quality Badge */}
                <div className="bg-gradient-to-br from-rareimpex-red/10 to-rareimpex-green/10 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="h-5 w-5 text-rareimpex-red mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Quality Assurance</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Premium grade fruits carefully selected and handled to maintain exceptional quality and freshness.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-rareimpex-red to-rareimpex-green rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Interested in this Product?</h3>
                <p className="text-white/90 mb-4">Contact us for pricing, availability, and bulk orders.</p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-rareimpex-red font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
