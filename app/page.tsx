import HeroCarousel from '@/components/HeroCarousel';
import FruitGallery from '@/components/FruitGallery';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <StatsSection />
      <FruitGallery />
    </div>
  );
}