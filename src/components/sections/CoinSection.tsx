import React, { useState } from 'react';
import { RotateCcw, Dices, CheckCircle } from 'lucide-react';
import { CoinCanvas } from '../three/CoinCanvas';
import { LuxuryButton } from '../ui/LuxuryButton';
import { FORTUNES } from '../../data/fortunes';
import { Fortune } from '../../types';

const SPECS: { label: string; value: string; accent?: boolean }[] = [
  { label: 'Diameter', value: '38.5 mm (Virtual)' },
  { label: 'Composition', value: '100% Digital Gold', accent: true },
  { label: 'Denomination', value: '1 Sovereign Bhumi' },
  { label: 'Reserve Collateral', value: 'Infinite Whim', accent: true },
  { label: 'Mint Authority', value: 'The Bhumi Society' },
  { label: 'Legal Tender Status', value: 'Entirely Fictional' },
];

export const CoinSection: React.FC = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [targetSide, setTargetSide] = useState<'heads' | 'tails'>('heads');
  const [currentFortune, setCurrentFortune] = useState<Fortune>(FORTUNES[0]);
  const [flipCount, setFlipCount] = useState(0);
  const [hasFlippedAtLeastOnce, setHasFlippedAtLeastOnce] = useState(false);

  const handleFlipCoin = () => {
    if (isFlipping) return;
    const randomSide: 'heads' | 'tails' = Math.random() > 0.5 ? 'heads' : 'tails';
    const candidateFortunes = FORTUNES.filter((f) => f.side === randomSide);
    const chosen =
      candidateFortunes[Math.floor(Math.random() * candidateFortunes.length)] || FORTUNES[0];
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
      className="relative bg-forest text-ivory border-t border-gold/20 overflow-hidden"
      aria-label="The Interactive Bhumi Coin"
    >
      {/* Warm depth gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(184,152,88,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 text-gold">
            <div className="w-8 h-px bg-gold/60" />
            <span className="text-[11px] uppercase tracking-[0.35em] font-sans font-semibold">
              Numismatic Perfection
            </span>
            <div className="w-8 h-px bg-gold/60" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-ivory leading-[1.05]">
            The Sovereign Specimen
          </h2>

          <div className="w-16 h-px bg-gold/40 mx-auto" />

          <p className="text-base sm:text-lg font-sans text-ivory-muted/80 font-light leading-relaxed">
            Crafted with procedural relief, numismatic fluting, and 24-karat digital lustre.
            Consult the coin for an authoritative imperial decree.
          </p>
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: 3D Coin Viewer */}
          <div className="lg:col-span-6 flex flex-col items-center w-full min-w-0">
            {/* Clean viewer — single thin border, no corner ticks */}
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square border border-gold/20 flex flex-col items-center justify-center relative mx-auto bg-forest-dark/40">
              <CoinCanvas
                isFlipping={isFlipping}
                targetSide={targetSide}
                onFlipComplete={handleFlipComplete}
                className="w-full h-full"
              />
            </div>

            {/* Flip CTA */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <LuxuryButton
                variant="primary"
                size="lg"
                onClick={handleFlipCoin}
                disabled={isFlipping}
                icon={
                  isFlipping ? (
                    <RotateCcw className="w-5 h-5 animate-spin" />
                  ) : (
                    <Dices className="w-5 h-5" />
                  )
                }
                className="shadow-gold-glow min-w-[220px]"
              >
                {isFlipping ? 'In Orbit...' : 'Flip the Coin'}
              </LuxuryButton>

              <span className="text-xs font-sans text-ivory-muted/60">
                {flipCount === 0
                  ? 'Click to toss and consult the oracle'
                  : `Times Tossed: ${flipCount}`}
              </span>
            </div>
          </div>

          {/* Right: Decree Card + Typeset Specifications */}
          <div className="lg:col-span-6 space-y-10">

            {/* Imperial Decree Card — heritage catalogue style */}
            <div
              className="relative overflow-hidden border border-gold/35 shadow-luxury"
              style={{
                background:
                  'linear-gradient(145deg, #1D3B31 0%, #152B24 50%, #1A2E25 100%)',
              }}
            >
              {/* Gold label strip */}
              <div className="bg-gold/90 px-5 py-2 flex items-center justify-between gap-3">
                <span className="text-[10px] font-serif font-bold uppercase tracking-[0.25em] text-forest-deep truncate">
                  {hasFlippedAtLeastOnce
                    ? 'Imperial Decree Confirmed'
                    : 'Official Numismatic Guidance'}
                </span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-forest-deep shrink-0">
                  {isFlipping ? 'Consulting…' : `Result: ${targetSide.toUpperCase()}`}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-gold/80 block">
                  Oracle Dispensation No.{' '}
                  {String(flipCount).padStart(4, '0')}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-ivory leading-snug">
                  &ldquo;{currentFortune.headline}&rdquo;
                </h3>

                <p className="text-sm sm:text-base font-sans text-ivory-muted/90 leading-relaxed italic">
                  {currentFortune.decree}
                </p>

                <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs font-serif text-gold">
                  <span>Motto: {currentFortune.latinMotto}</span>
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 ml-2" />
                </div>
              </div>
            </div>

            {/* Typeset Specifications — elegant ruled table */}
            <div className="space-y-3">
              <div className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold text-gold pb-3 border-b border-gold/25">
                Technical Mint Specifications
              </div>

              <div className="divide-y divide-ivory/[0.08]">
                {SPECS.map(({ label, value, accent }) => (
                  <div key={label} className="flex items-baseline justify-between py-3">
                    <span className="text-[11px] tracking-widest uppercase font-sans text-ivory-muted/60">
                      {label}
                    </span>
                    <span
                      className={`text-sm font-serif font-semibold text-right ml-4 ${
                        accent ? 'text-gold' : 'text-ivory'
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
