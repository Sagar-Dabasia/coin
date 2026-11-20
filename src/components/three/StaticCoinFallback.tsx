import React from 'react';

interface StaticCoinFallbackProps {
  isFlipping?: boolean;
  flippedSide?: 'heads' | 'tails';
  className?: string;
  size?: number;
}

export const StaticCoinFallback: React.FC<StaticCoinFallbackProps> = ({
  isFlipping = false,
  flippedSide = 'heads',
  className = '',
  size = 320
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center select-none max-w-full max-h-full aspect-square ${className}`}
      style={{ width: size, height: size, maxWidth: '100%', maxHeight: '100%' }}
      aria-label="Bhumi Coin 2D Numismatic Representation"
    >
      {/* Outer ambient glow */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl opacity-40 bg-gold pointer-events-none"
        style={{ transform: 'scale(0.85)' }}
      />

      {/* Coin Disc with CSS 3D flip animation */}
      <div
        className={`relative w-full h-full rounded-full transition-transform duration-700 ease-out shadow-2xl ${
          isFlipping ? 'animate-[spin_1.5s_cubic-bezier(0.4,0,0.2,1)_infinite]' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: !isFlipping && flippedSide === 'tails' ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Face (Heads / Obverse) */}
        <div 
          className="absolute inset-0 rounded-full border-4 border-[#8C6D37] flex flex-col items-center justify-between p-6 bg-gradient-to-br from-[#F5DFA2] via-[#B89858] to-[#6A5021] text-forest shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-4px_12px_rgba(0,0,0,0.6)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Beaded Numismatic Rim */}
          <div className="absolute inset-2 rounded-full border border-dashed border-[#553E17]/60 pointer-events-none" />
          
          {/* Inscription Arc */}
          <div className="text-[10px] tracking-[0.25em] uppercase font-serif font-bold text-[#3B290C] mt-2">
            ★ BHUMI COIN • MMXXVI ★
          </div>

          {/* Center Monogram Crest */}
          <div className="flex flex-col items-center my-auto">
            <div className="w-16 h-16 rounded-full border border-[#553E17]/40 flex items-center justify-center bg-gradient-to-t from-[#B89858]/30 to-transparent">
              <span className="font-serif text-5xl font-black text-[#2A1D06] tracking-tight drop-shadow-sm">
                B
              </span>
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase font-sans font-semibold text-[#3B290C] mt-2">
              SOVEREIGN RESERVE
            </div>
          </div>

          {/* Bottom Motto */}
          <div className="text-[9px] tracking-[0.2em] font-serif italic text-[#3B290C] mb-2">
            In Genio et Constantia
          </div>
        </div>

        {/* Back Face (Tails / Reverse) */}
        <div 
          className="absolute inset-0 rounded-full border-4 border-[#8C6D37] flex flex-col items-center justify-between p-6 bg-gradient-to-br from-[#E7C67D] via-[#A88849] to-[#5C4318] text-forest shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),inset_0_-4px_12px_rgba(0,0,0,0.6)]"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="absolute inset-2 rounded-full border border-dashed border-[#553E17]/60 pointer-events-none" />
          
          <div className="text-[10px] tracking-[0.2em] uppercase font-serif font-bold text-[#3B290C] mt-2">
            • NON PECUNIA SED MEMORIA •
          </div>

          <div className="flex flex-col items-center my-auto">
            <div className="text-3xl font-serif font-bold text-[#2A1D06]">
              I BHUMI
            </div>
            <div className="w-12 h-0.5 bg-[#4A3410]/50 my-1" />
            <div className="text-[8px] tracking-[0.3em] uppercase font-sans font-medium text-[#3B290C]">
              HONORARY TENDER
            </div>
          </div>

          <div className="text-[9px] tracking-[0.15em] font-serif italic text-[#3B290C] mb-2">
            Veritas • Amicitia • Splendor
          </div>
        </div>
      </div>
    </div>
  );
};
