import React from 'react';
import { ArrowDownRight, Compass, Sparkles } from 'lucide-react';
import { LuxuryButton } from '../ui/LuxuryButton';
import { CoinCanvas } from '../three/CoinCanvas';
import { useState } from 'react';

export const Hero: React.FC = () => {
  const [heroFlipping, setHeroFlipping] = useState(false);
  const [heroSide, setHeroSide] = useState<'heads' | 'tails'>('heads');

  const triggerHeroToss = () => {
    if (heroFlipping) return;
    setHeroFlipping(true);
    setHeroSide((prev) => (prev === 'heads' ? 'tails' : 'heads'));
  };

  return (
    <section
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* ── Cinematic background image layer ── */}
      <div
        className="absolute inset-0 z-0 hero-bg-image"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/manor.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark forest-green overlay — preserves legibility and palette */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(160deg, rgba(14,29,24,0.92) 0%, rgba(21,43,36,0.88) 40%, rgba(21,43,36,0.82) 70%, rgba(14,29,24,0.94) 100%)',
        }}
      />

      {/* Subtle dot pattern over image */}
      <div
        className="absolute inset-0 z-[2] bg-linen-pattern opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Editorial Hairline Border Frame */}
      <div
        className="absolute inset-5 sm:inset-8 md:inset-10 border border-gold/15 pointer-events-none z-10 hidden sm:block"
        aria-hidden="true"
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 border border-gold/60 bg-forest-dark" />
        <div className="absolute -top-1 -right-1 w-2 h-2 border border-gold/60 bg-forest-dark" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-gold/60 bg-forest-dark" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-gold/60 bg-forest-dark" />
      </div>

      {/* Top rule */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full min-w-0">

          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left w-full min-w-0">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-gold/40 bg-forest-dark/70 backdrop-blur-sm shadow-sm max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="text-[9px] sm:text-xs font-sans tracking-[0.15em] sm:tracking-[0.25em] uppercase text-gold font-semibold truncate sm:whitespace-normal">
                THE SOVEREIGN TRIBUTE • MMXXVI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-ivory tracking-tight leading-[1.08] break-words">
              Some legends <br />
              <span className="italic font-normal text-ivory-dark">are born.</span> <br />
              Others are <span className="gold-gradient-text">minted.</span>
            </h1>

            {/* Editorial Lead Copy */}
            <p className="text-sm sm:text-base md:text-lg xl:text-xl font-sans text-ivory-muted/90 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              Bhumi Coin is not an asset of financial speculation, but a sovereign currency of exceptional company, sharp wit, and unyielding distinction. Minted purely in honour of Bhumi.
            </p>

            {/* Archival Callout Strip */}
            <div className="py-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-[11px] sm:text-xs font-serif italic text-gold/80 border-y border-gold/20 w-full max-w-lg">
              <span>★ 100% Reserve of Good Humour</span>
              <span className="hidden sm:inline">•</span>
              <span>Zero Artificial Speculation</span>
              <span className="hidden sm:inline">•</span>
              <span>Mayfair Standard ★</span>
            </div>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
              <a href="#the-coin" className="w-full sm:w-auto">
                <LuxuryButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-luxury"
                  icon={<ArrowDownRight className="w-4 h-4 shrink-0" />}
                >
                  Discover the Coin
                </LuxuryButton>
              </a>

              <a href="#the-story" className="w-full sm:w-auto">
                <LuxuryButton
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<Compass className="w-4 h-4 text-gold shrink-0" />}
                >
                  Our Story
                </LuxuryButton>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Gold Bhumi Coin */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full min-w-0">
            <div className="relative w-full max-w-[270px] sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center mx-auto">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-gold/20 animate-[spin_60s_linear_infinite] pointer-events-none" />
              <CoinCanvas
                isFlipping={heroFlipping}
                targetSide={heroSide}
                onFlipComplete={() => setHeroFlipping(false)}
                className="w-full h-full"
              />
            </div>

            <button
              onClick={triggerHeroToss}
              disabled={heroFlipping}
              className="mt-4 px-4 py-1.5 rounded-full bg-forest-dark/80 backdrop-blur-sm border border-gold/30 text-xs font-serif tracking-widest uppercase text-gold hover:border-gold hover:bg-forest-dark transition-all focus:outline-none focus:ring-1 focus:ring-gold"
            >
              {heroFlipping ? 'In Flight...' : 'Tap to Toss Coin'}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-ivory-muted/60 hover:text-gold transition-colors z-20">
        <a href="#the-story" className="flex flex-col items-center gap-1.5 text-[10px] tracking-[0.3em] uppercase font-sans">
          <span>Scroll to Chronicle</span>
          <div className="w-4 h-7 rounded-full border border-gold/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
