import React, { useState } from 'react';
import { Sparkles, Dices, RotateCcw, CheckCircle, Info } from 'lucide-react';
import { CoinCanvas } from '../three/CoinCanvas';
import { LuxuryButton } from '../ui/LuxuryButton';
import { FORTUNES } from '../../data/fortunes';
import { Fortune } from '../../types';

export const CoinSection: React.FC = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [targetSide, setTargetSide] = useState<'heads' | 'tails'>('heads');
  const [currentFortune, setCurrentFortune] = useState<Fortune>(FORTUNES[0]);
  const [flipCount, setFlipCount] = useState(0);
  const [hasFlippedAtLeastOnce, setHasFlippedAtLeastOnce] = useState(false);

  const handleFlipCoin = () => {
    if (isFlipping) return;

    // Pick random outcome
    const randomSide: 'heads' | 'tails' = Math.random() > 0.5 ? 'heads' : 'tails';
    
    // Pick random fortune matching that side
    const candidateFortunes = FORTUNES.filter((f) => f.side === randomSide);
    const chosen = candidateFortunes[Math.floor(Math.random() * candidateFortunes.length)] || FORTUNES[0];

    setIsFlipping(true);
    setTargetSide(randomSide);
    setCurrentFortune(chosen);
    setFlipCount((prev) => prev + 1);
  };

  const handleFlipComplete = () => {
    setIsFlipping(false);
    setHasFlippedAtLeastOnce(true);
  };

  return (
    <section 
      id="the-coin" 
      className="relative py-28 bg-forest text-ivory border-t border-gold/20 overflow-hidden"
      aria-label="The Interactive Bhumi Coin"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-gold">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Numismatic Perfection
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-ivory">
            The Sovereign Specimen
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />

          <p className="text-base sm:text-lg font-sans text-ivory-muted/90 font-light leading-relaxed">
            Crafted with procedural relief, numismatic fluting, and 24-karat digital luster. Consult the coin for an authoritative imperial decree.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Coin Viewer */}
          <div className="lg:col-span-6 flex flex-col items-center w-full min-w-0">
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square bg-[#0E1D18]/60 border border-gold/30 rounded-none p-2 sm:p-4 flex flex-col items-center justify-center relative shadow-2xl mx-auto">
              {/* Corner tick marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-gold" />

              <CoinCanvas
                isFlipping={isFlipping}
                targetSide={targetSide}
                onFlipComplete={handleFlipComplete}
                className="w-full h-full"
              />
            </div>

            {/* Coin Flip CTA Button */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <LuxuryButton
                variant="primary"
                size="lg"
                onClick={handleFlipCoin}
                disabled={isFlipping}
                icon={isFlipping ? <RotateCcw className="w-5 h-5 animate-spin" /> : <Dices className="w-5 h-5" />}
                className="shadow-gold-glow min-w-[220px]"
              >
                {isFlipping ? "In Orbit..." : "Flip the Coin"}
              </LuxuryButton>

              <span className="text-xs font-sans text-ivory-muted/70">
                {flipCount === 0 ? "Click to toss and consult the oracle" : `Times Tossed: ${flipCount}`}
              </span>
            </div>
          </div>

          {/* Right Column: Decree / Fortune Card & Specifications */}
          <div className="lg:col-span-6 space-y-8">
            {/* The Fortune / Decree Reveal Card */}
            <div className="p-6 sm:p-8 bg-forest-light border-2 border-gold/40 shadow-luxury relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 sm:px-4 py-1 sm:py-1.5 bg-gold text-forest-deep text-[10px] sm:text-[11px] font-serif font-bold uppercase tracking-widest">
                {isFlipping ? "Consulting..." : `Result: ${targetSide.toUpperCase()}`}
              </div>

              <div className="space-y-4">
                <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-sans text-gold block">
                  {hasFlippedAtLeastOnce ? "Imperial Decree Confirmed" : "Official Numismatic Guidance"}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-ivory leading-snug">
                  "{currentFortune.headline}"
                </h3>

                <p className="text-sm sm:text-base font-sans text-ivory-muted/95 leading-relaxed italic">
                  {currentFortune.decree}
                </p>

                <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs font-serif text-gold">
                  <span>Motto: {currentFortune.latinMotto}</span>
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 ml-2" />
                </div>
              </div>
            </div>

            {/* Numismatic Specifications Matrix */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-gold">
                <Info className="w-3.5 h-3.5" />
                <span>Technical Mint Specifications</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-forest border border-gold/20">
                  <div className="text-[10px] tracking-widest uppercase font-sans text-ivory-muted">
                    Diameter
                  </div>
                  <div className="text-base sm:text-lg font-serif font-bold text-ivory mt-0.5">
                    38.5 mm (Virtual)
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-forest border border-gold/20">
                  <div className="text-[10px] tracking-widest uppercase font-sans text-ivory-muted">
                    Composition
                  </div>
                  <div className="text-base sm:text-lg font-serif font-bold text-gold mt-0.5">
                    100% Digital Gold
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-forest border border-gold/20">
                  <div className="text-[10px] tracking-widest uppercase font-sans text-ivory-muted">
                    Denomination
                  </div>
                  <div className="text-base sm:text-lg font-serif font-bold text-ivory mt-0.5">
                    1 Sovereign Bhumi
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-forest border border-gold/20">
                  <div className="text-[10px] tracking-widest uppercase font-sans text-ivory-muted">
                    Reserve Ratio
                  </div>
                  <div className="text-base sm:text-lg font-serif font-bold text-gold mt-0.5">
                    Infinite Whim
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
