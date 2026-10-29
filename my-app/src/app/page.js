import Header from './components/Header';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] relative">
      <Header />
      <HeroSection />
    </main>
  );
}