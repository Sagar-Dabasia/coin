import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StorySection } from './components/sections/StorySection';
import { CoinSection } from './components/sections/CoinSection';
import { SocietySection } from './components/sections/SocietySection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-forest text-ivory flex flex-col selection:bg-gold selection:text-forest">
      {/* Navigation Top Bar */}
      <Navbar />

      {/* Main Editorial Content */}
      <main className="flex-1">
        <Hero />
        <StorySection />
        <CoinSection />
        <SocietySection />
      </main>

      {/* Footer & Educational Disclaimer */}
      <Footer />
    </div>
  );
};

export default App;
