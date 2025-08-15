import HeroCarousel from '@/components/HeroCarousel';
import FruitGallery from '@/components/FruitGallery';

export default function Home() {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-30"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroCarousel />
        <FruitGallery />
      </div>
    </div>
  );
}