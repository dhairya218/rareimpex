import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Rareimpex Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-rareimpex-red">𝗥𝗔Я𝗘𝗶𝗺𝗽𝗲𝘅</span>
                <p className="text-sm text-gray-400 -mt-1">Premium Fruits Worldwide</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading fruit import-export company operating across 7+ countries, 
              delivering premium quality fruits from farm to table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rareimpex-red transition-colors duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-rareimpex-red transition-colors duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-rareimpex-red transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-rareimpex-red transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-rareimpex-red transition-colors duration-300">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-rareimpex-red transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">Apples</span>
              </li>
              <li>
                <span className="text-gray-400">Pears</span>
              </li>
              <li>
                <span className="text-gray-400">Citrus</span>
              </li>
              <li>
                <span className="text-gray-400">Kiwi</span>
              </li>
              <li>
                <span className="text-gray-400">Grapes</span>
              </li>
              <li>
                <span className="text-gray-400">Avocado</span>
              </li>
              <li>
                <span className="text-gray-400">Dragon Fruit</span>
              </li>
              <li>
                <span className="text-gray-400">Stone Fruit</span>
              </li>
              <li>
                <span className="text-gray-400">Berries</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-rareimpex-green mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Bandra Kurla Complex<br />
                  Mumbai, Maharashtra
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-rareimpex-green mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 22 6789 1234</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-rareimpex-green mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-rareimpex-green mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@rareimpex.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Rareimpex Import Export Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-rareimpex-red text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rareimpex-red text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}