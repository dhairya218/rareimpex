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

  },
  citrus: {
    "Valencia": {
      originCountries: ["Spain", "USA", "Brazil", "South Africa", "Morocco"],
      nutritionalInfo: "Excellent source of vitamin C, fiber, and antioxidants. High in natural sugars and folate.",
      storageInfo: "Store in refrigerator for 2-3 weeks. Keep away from ethylene-producing fruits.",
      seasonality: "Available year-round with peak season from March to September"
    },
    "Navels": {
      originCountries: ["USA", "Spain", "Morocco", "South Africa", "Australia"],
      nutritionalInfo: "Rich in vitamin C, fiber, and potassium. Contains natural sugars and antioxidants.",
      storageInfo: "Refrigerate for 2-3 weeks. Handle carefully to avoid bruising.",
      seasonality: "Peak season from November to April"
    },
    "Mandarins": {
      originCountries: ["China", "Spain", "Morocco", "Turkey", "USA"],
      nutritionalInfo: "High in vitamin C, fiber, and beta-carotene. Low in calories and natural sugars.",
      storageInfo: "Store in refrigerator for 1-2 weeks. Handle gently as they bruise easily.",
      seasonality: "Available from October to March"
    },
    "Grapefruits": {
      originCountries: ["USA", "China", "Mexico", "South Africa", "Israel"],
      nutritionalInfo: "Excellent source of vitamin C, fiber, and antioxidants. Contains natural sugars and potassium.",
      storageInfo: "Refrigerate for 2-3 weeks. Can be stored at room temperature for short periods.",
      seasonality: "Available year-round with peak season from October to May"
    },
    "Lemon": {
      originCountries: ["Spain", "Argentina", "USA", "Turkey", "Italy"],
      nutritionalInfo: "High in vitamin C, fiber, and citric acid. Contains antioxidants and natural oils.",
      storageInfo: "Store in refrigerator for 3-4 weeks. Can be stored at room temperature for 1-2 weeks.",
      seasonality: "Available year-round with peak season from October to March"
    }
  },
  kiwi: {
    "Hayward": {
      originCountries: ["New Zealand", "Italy", "Chile", "France", "USA"],
      nutritionalInfo: "Excellent source of vitamin C, fiber, and antioxidants. High in potassium and vitamin K.",
      storageInfo: "Store in refrigerator for 2-3 weeks. Can be stored at room temperature for 1-2 days to ripen.",
      seasonality: "Available year-round with peak season from May to December"
    },

  },
  grapes: {
    "Red Globe": {
      originCountries: ["Chile", "USA", "South Africa", "Italy", "Spain"],
      nutritionalInfo: "Excellent source of antioxidants, vitamin C, and fiber. High in natural sugars and potassium.",
      storageInfo: "Store in refrigerator for 1-2 weeks. Handle gently to avoid bruising.",
      seasonality: "Available year-round with peak season from May to December"
    },
    "Thompson Seedless": {
      originCountries: ["USA", "Chile", "South Africa", "Australia", "Italy"],
      nutritionalInfo: "Rich in vitamin C, fiber, and antioxidants. Contains natural sugars and essential minerals.",
      storageInfo: "Refrigerate for 1-2 weeks. Can be stored at room temperature for short periods.",
      seasonality: "Available year-round with peak season from July to December"
    },
    "Flame Seedless": {
      originCountries: ["USA", "Chile", "South Africa", "Italy", "Spain"],
      nutritionalInfo: "High in vitamin C, fiber, and antioxidants. Contains natural sugars and potassium.",
      storageInfo: "Refrigerate for 1-2 weeks. Handle carefully to maintain quality.",
      seasonality: "Available year-round with peak season from June to November"
    },
    "Black Seedless": {
      originCountries: ["USA", "Chile", "South Africa", "Italy", "Spain"],
      nutritionalInfo: "Excellent source of antioxidants, vitamin C, and fiber. Rich in natural sugars and minerals.",
      storageInfo: "Refrigerate for 1-2 weeks. Can be stored at room temperature for 1-2 days.",
      seasonality: "Available year-round with peak season from July to December"
    }
  }
};

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      setImageError(false);
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Cleanup effect to ensure scroll is restored
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    document.body.style.overflow = '';
    setTimeout(() => onClose(), 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleImageError = () => {
    setImageError(true);
    // Try next image if available
    if (currentImageIndex < imagePaths.length - 1) {
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
        setImageError(false);
      }, 100);
    }
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  if (!isVisible) return null;

  const varietyData = enhancedProductData[product.category.toLowerCase()]?.[product.variety.name] || {};
  const originCountries = varietyData.originCountries || ["Various countries"];
  const nutritionalInfo = varietyData.nutritionalInfo || "Rich in vitamins, minerals, and antioxidants.";
  const storageInfo = varietyData.storageInfo || "Store in a cool, dry place or refrigerator.";
  const seasonality = varietyData.seasonality || "Available year-round with seasonal variations.";

  // Generate all possible image paths for the product
  const generateImagePaths = () => {
    const categoryKey = product.category.toLowerCase();
    const varietyKey = product.variety.name.toLowerCase().replace(/\s+/g, '-');
    
    const paths = [
      // Direct image from product data
      product.variety.image,
      // JPG format
      `/products/${categoryKey}/varieties/${varietyKey}.jpg`,
      // PNG format
      `/products/${categoryKey}/varieties/${varietyKey}.png`,
      // WebP format
      `/products/${categoryKey}/varieties/${varietyKey}.webp`,
      // Try with different naming conventions
      `/products/${categoryKey}/varieties/${varietyKey.replace(/-/g, '')}.jpg`,
      `/products/${categoryKey}/varieties/${varietyKey.replace(/-/g, '_')}.jpg`,
      // Fallback to category image
      `/products/${categoryKey}/hero.jpg`,
      `/products/${categoryKey}/category.jpg`
    ].filter(Boolean);
    
    return paths;
  };

  const imagePaths = generateImagePaths();
  const currentImagePath = imagePaths[currentImageIndex] || imagePaths[0];

  const tryNextImage = () => {
    if (currentImageIndex < imagePaths.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setImageError(true);
    }
  };

  const getFallbackIcon = () => {
    let IconComponent = Apple; // default
    if (product.category.toLowerCase() === 'pears') {
      IconComponent = Apple; // Using Apple icon for pears as well
    } else if (product.category.toLowerCase() === 'citrus') {
      IconComponent = Citrus;
    } else if (product.category.toLowerCase() === 'grapes') {
      IconComponent = Grape;
    } else if (product.category.toLowerCase() === 'berries') {
      IconComponent = Cherry;
    }
    return IconComponent;
  };

  const FallbackIcon = getFallbackIcon();

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      
      {/* Modal */}
      <div className={`relative w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-4xl lg:max-w-5xl max-h-[98vh] sm:max-h-[95vh] lg:max-h-[85vh] overflow-hidden bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl transition-transform duration-300 flex flex-col ${
        isAnimating ? 'scale-100' : 'scale-95'
      }`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </button>

        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Left Side - Image */}
          <div className="relative w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-full flex-shrink-0 overflow-hidden">
            {currentImagePath && !imageError ? (
              <img
                src={currentImagePath}
                alt={product.variety.name}
                className="w-full h-full object-contain lg:object-cover object-center"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1,
                  zIndex: '1'
                }}
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className={`${product.accentColor} text-4xl sm:text-6xl lg:text-8xl opacity-20`}>
                  <FallbackIcon className="h-16 w-16 sm:h-20 sm:w-20 lg:h-32 lg:w-32" />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 text-center">
                  <div>Image not available</div>
                </div>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700">
              {product.category}
            </div>

            {/* Image Navigation (if multiple images available) */}
            {imagePaths.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {imagePaths.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}


          </div>

          {/* Right Side - Content */}
          <div className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto min-h-0">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.variety.name}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{product.variety.description}</p>
              </div>

              {/* Origin Countries */}
              <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6">
                <div className="flex items-center mb-2 sm:mb-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-rareimpex-red mr-2" />
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">Origin Countries</h3>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {originCountries.map((country: string, index: number) => (
                    <span
                      key={index}
                      className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700 border border-gray-200"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {/* Nutritional Info */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">Nutritional Benefits</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{nutritionalInfo}</p>
                </div>

                {/* Storage Info */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">Storage & Handling</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{storageInfo}</p>
                </div>

                {/* Seasonality */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2" />
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">Seasonality</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{seasonality}</p>
                </div>

                {/* Quality Badge */}
                <div className="bg-gradient-to-br from-rareimpex-red/10 to-rareimpex-green/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-rareimpex-red mr-2" />
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">Quality Assurance</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Premium grade fruits carefully selected and handled to maintain exceptional quality and freshness.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-rareimpex-red to-rareimpex-green rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">Interested in this Product?</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90 mb-3 sm:mb-4">Contact us for pricing, availability, and bulk orders.</p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-rareimpex-red font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 text-xs sm:text-sm md:text-base"
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
