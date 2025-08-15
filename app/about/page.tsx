import Image from 'next/image';
import { Users, Globe, Award, Truck, Target, Eye, MapPin, Phone, Mail, Clock, CheckCircle, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Reach",
      description: "Operating across 7+ countries with established networks in Asia, Europe, and the Americas."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Premium Quality",
      description: "Stringent quality control processes ensuring only the finest fruits reach our customers."
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Reliable Logistics",
      description: "Advanced cold chain management and efficient logistics for fresh fruit delivery worldwide."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Expert Team",
      description: "Dedicated professionals with decades of experience in fruit trading and agriculture."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Rareimpex</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Leading the global fruit trade with excellence, integrity, and innovation for over two decades.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 2001, Rareimpex began as a small family business with a vision to bring the world's finest fruits to global markets. Starting from our headquarters in Mumbai, we've grown into one of the leading fruit import-export companies in Asia.
            </p>
            <p className="text-lg text-gray-700">
              Today, we operate across 7 countries, working directly with farmers and distributors to ensure a seamless supply chain. With state-of-the-art storage facilities and advanced logistics networks, we maintain the highest standards of quality from farm to table.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving the future of global fruit trade with purpose and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                To bridge the gap between premium fruit producers and global markets, ensuring the highest quality standards while promoting sustainable agricultural practices and fair trade principles.
              </p>
              <p className="text-gray-600">
                We strive to be the most trusted partner in the international fruit trade, delivering exceptional value to our customers, suppliers, and stakeholders.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                To become the global leader in premium fruit distribution, setting industry standards for quality, sustainability, and innovation in agricultural trade.
              </p>
              <p className="text-gray-600">
                We envision a world where the finest fruits from every corner of the globe are accessible to consumers worldwide, while supporting local farming communities and environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and drive our commitment to excellence in every transaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is backed by international certifications and industry standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">ISO 22000:2018</h3>
              <p className="text-gray-600 text-center mb-4">
                Food Safety Management System certification ensuring the highest standards of food safety across our operations.
              </p>
              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Certified
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">HACCP Certified</h3>
              <p className="text-gray-600 text-center mb-4">
                Hazard Analysis and Critical Control Points certification for comprehensive food safety management.
              </p>
              <div className="text-center">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Certified
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-16 w-16 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Global G.A.P.</h3>
              <p className="text-gray-600 text-center mb-4">
                Good Agricultural Practice certification ensuring sustainable and responsible farming practices.
              </p>
              <div className="text-center">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Certified
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Organic Certification (USDA, EU)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Fair Trade Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Kosher Certification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Halal Certification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Operations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Operations</h2>
            <p className="text-lg text-gray-600">Serving markets across continents with our extensive network</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-green-600 mb-2">7+</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Countries</h4>
              <p className="text-gray-600">Active operations across Asia, Europe, and the Americas</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">15+</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Fruit Varieties</h4>
              <p className="text-gray-600">Specializing in premium apples, mangoes, bananas, and citrus</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Happy Clients</h4>
              <p className="text-gray-600">Trusted partners in retail, wholesale, and distribution</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600">Backed by decades of experience in international fruit trading</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1458686/pexels-photo-1458686.jpeg"
                  alt="Farm operations"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Farm Partnerships</h3>
              <p className="text-gray-600">Direct relationships with premium fruit growers worldwide</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1267308/pexels-photo-1267308.jpeg"
                  alt="Quality control"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control at every stage</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg"
                  alt="Logistics operations"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Logistics</h3>
              <p className="text-gray-600">Advanced cold chain and distribution networks</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}