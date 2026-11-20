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

        {/* ── Full-width editorial divider band: estate image between Story and Coin ── */}
        <div
          className="relative w-full overflow-hidden"
          aria-hidden="true"
          style={{ height: 'clamp(140px, 22vw, 300px)' }}
        >
          <img
            src="/images/estate.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'sepia(20%) brightness(0.45) contrast(1.1)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, #F4EFE4 0%, transparent 20%, transparent 80%, #152B24 100%)',
            }}
          />
          {/* Centre quote overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="font-serif italic text-ivory/90 text-lg sm:text-2xl md:text-3xl text-center max-w-2xl drop-shadow-lg">
              &ldquo;A coin minted in laughter lasts an eternity.&rdquo;
            </p>
          </div>
        </div>

        <CoinSection />
        <SocietySection />
      </main>

      {/* Footer & Educational Disclaimer */}
      <Footer />
    </div>
  );
};

export default App;
