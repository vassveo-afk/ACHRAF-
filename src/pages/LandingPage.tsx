import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import Benefits from '../components/Benefits';
import Packages from '../components/Packages';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import OrderForm from '../components/OrderForm';

export default function LandingPage({ onSuccess }: { onSuccess: (data: any) => void }) {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Comparison />
      <Benefits />
      <Packages />
      <Gallery />
      <Reviews />
      <FAQ />
      <OrderForm onSuccess={onSuccess} />
    </div>
  );
}
