'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const fruitData = {
  apples: {
    name: "Apples",
    description: "Premium quality apples sourced from the finest orchards",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    varieties: [
      {
        name: "Fuji Apple",
        image: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg",
        description: "Sweet, crisp, and juicy with excellent shelf life. Perfect for fresh consumption."
      },
      {
        name: "Gala Apple",
        image: "https://images.pexels.com/photos/8057741/pexels-photo-8057741.jpeg",
        description: "Mild and sweet flavor with thin skin. Ideal for snacking and cooking."
      },
      {
        name: "Red Delicious",
        image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
        description: "Classic red apple with sweet flavor and distinctive shape."
      },
      {
        name: "Granny Smith",
        image: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg",
        description: "Tart, crisp green apples perfect for baking and fresh eating."
      }
    ]
  },
  bananas: {
    name: "Bananas",
    description: "Fresh tropical bananas from premium plantations",
    image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg",
    varieties: [
      {
        name: "Cavendish",
        image: "https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg",
        description: "The most popular banana variety worldwide. Sweet and creamy texture."
      },
      {
        name: "Lady Finger",
        image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg",
        description: "Smaller, sweeter bananas with delicate flavor and smooth texture."
      },
      {
        name: "Plantain",
        image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
        description: "Larger cooking bananas, perfect for frying and traditional dishes."
      },
      {
        name: "Red Banana",
        image: "https://images.pexels.com/photos/4750267/pexels-photo-4750267.jpeg",
        description: "Sweet, soft bananas with reddish-purple skin and cream flesh."
      }
    ]
  },
  mangoes: {
    name: "Mangoes",
    description: "Exotic mangoes from tropical regions with exceptional flavor",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
    varieties: [
      {
        name: "Alphonso",
        image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg",
        description: "King of mangoes with rich, creamy texture and sweet flavor."
      },
      {
        name: "Kesar",
        image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg",
        description: "Saffron-colored mango with aromatic flavor and smooth texture."
      },
      {
        name: "Tommy Atkins",
        image: "https://images.pexels.com/photos/5790766/pexels-photo-5790766.jpeg",
        description: "Large, colorful mangoes with mild, sweet flavor and firm flesh."
      },
      {
        name: "Haden",
        image: "https://images.pexels.com/photos/4750441/pexels-photo-4750441.jpeg",
        description: "Sweet and juicy with beautiful red and yellow coloring."
      }
    ]
  },
  citrus: {
    name: "Citrus Fruits",
    description: "Fresh citrus varieties packed with vitamin C and natural goodness",
    image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg",
    varieties: [
      {
        name: "Navel Orange",
        image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg",
        description: "Sweet, seedless oranges perfect for fresh juice and eating."
      },
      {
        name: "Meyer Lemon",
        image: "https://images.pexels.com/photos/1414120/pexels-photo-1414120.jpeg",
        description: "Sweet, thin-skinned lemons with floral aroma and less acidity."
      },
      {
        name: "Ruby Grapefruit",
        image: "https://images.pexels.com/photos/5945567/pexels-photo-5945567.jpeg",
        description: "Sweet-tart grapefruit with beautiful pink-red flesh."
      },
      {
        name: "Key Lime",
        image: "https://images.pexels.com/photos/1414113/pexels-photo-1414113.jpeg",
        description: "Small, aromatic limes with intense flavor, perfect for cuisine."
      }
    ]
  }
};

export default function Products() {
  const [selectedFruit, setSelectedFruit] = useState<string>('apples');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
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
            {Object.entries(fruitData).map(([key, fruit]) => (
              <button
                key={key}
                onClick={() => setSelectedFruit(key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFruit === key
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-200'
                }`}
              >
                {fruit.name}
              </button>
            ))}
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
                  {fruitData[selectedFruit as keyof typeof fruitData].name}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {fruitData[selectedFruit as keyof typeof fruitData].description}
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>Explore varieties</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={fruitData[selectedFruit as keyof typeof fruitData].image}
                  alt={fruitData[selectedFruit as keyof typeof fruitData].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Varieties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fruitData[selectedFruit as keyof typeof fruitData].varieties.map((variety, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={variety.image}
                    alt={variety.name}
                    fill
                    className="object-cover"
                  />
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
            className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            Get Quote
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}