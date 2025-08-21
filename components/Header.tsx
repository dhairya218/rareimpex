'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Apples', href: '/products/apples' },
        { name: 'Pears', href: '/products/pears' },
        { name: 'Citrus', href: '/products/citrus' },
        { name: 'Kiwi', href: '/products/kiwi' },
        { name: 'Grapes', href: '/products/grapes' },
        { name: 'Avocado', href: '/products/avocado' },
        { name: 'Dragon Fruit', href: '/products/dragonfruit' },
        { name: 'Stone Fruit', href: '/products/stonefruit' },
        { name: 'Berries', href: '/products/berries' },
      ]
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Rareimpex Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-rareimpex-red">𝗥𝗔Я𝗘𝗶𝗺𝗽𝗲𝘅</span>
              <p className="text-sm text-gray-600 -mt-1">Premium Fruits Worldwide</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button
                      onClick={() => setIsProductsOpen((prev) => !prev)}
                      className={`flex items-center text-lg font-medium transition-colors duration-300 relative ${
                        isActive(item.href)
                          ? 'text-rareimpex-red'
                          : 'text-gray-700 hover:text-rareimpex-red'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                      {isActive(item.href) && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rareimpex-red rounded-full"></span>
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-rareimpex-red hover:text-white transition-colors duration-200"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-lg font-medium transition-colors duration-300 relative ${
                      isActive(item.href)
                        ? 'text-rareimpex-red'
                        : 'text-gray-700 hover:text-rareimpex-red'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rareimpex-red rounded-full"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rareimpex-red hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                          isActive(item.href)
                            ? 'text-rareimpex-red bg-red-50'
                            : 'text-gray-700 hover:text-rareimpex-red hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </button>
                      {isProductsOpen && (
                        <div className="pl-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-rareimpex-red hover:bg-gray-50 rounded-md"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                        isActive(item.href)
                          ? 'text-rareimpex-red bg-red-50'
                          : 'text-gray-700 hover:text-rareimpex-red hover:bg-gray-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}