import React, { useState } from 'react';
import { Crown, ChevronRight } from 'lucide-react';
import { SOCIETY_PRINCIPLES } from '../../data/societyPrinciples';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryModal } from '../ui/LuxuryModal';

export const SocietySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="the-society"
      className="relative bg-[#1A0D0F] text-ivory border-t border-gold/20 overflow-hidden"
      aria-label="The Bhumi Society and Country Club"
    >
      {/* ── CINEMATIC HEADER: image with deep dark overlay ── */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 'clamp(280px, 45vw, 560px)' }}>
        <img
          src="/images/society-lounge.webp"
          alt="The Society library and lounge — a rich interior of books and heritage furniture."
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center absolute inset-0"
          style={{
            filter: 'sepia(30%) brightness(0.55) contrast(1.1) saturate(0.7)',
            minHeight: 'clamp(280px, 45vw, 560px)',
          }}
        />

        {/* Oxblood-tinted overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(170deg, rgba(26,13,15,0.65) 0%, rgba(100,46,51,0.25) 50%, rgba(26,13,15,0.9) 100%)',
          }}
        />

        {/* Gradient fade to section bg at bottom */}
        <div
          className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, transparent, #1A0D0F)' }}
        />

        {/* Headline over image */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-20 sm:py-28" style={{ minHeight: 'clamp(280px, 45vw, 560px)' }}>
          <div className="inline-flex items-center gap-2 text-gold mb-5">
            <div className="w-8 h-px bg-gold/60" />
            <Crown className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-[0.35em] font-sans font-semibold">
              The Inner Sanctuary
            </span>
            <div className="w-8 h-px bg-gold/60" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-ivory leading-[1.05] mb-5">
            The Bhumi Society
          </h2>

          <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />

          <p className="text-base sm:text-lg font-sans text-ivory-muted/80 font-light leading-relaxed max-w-xl">
            An exclusive, fictional country club and philosophical order dedicated to the pursuit of leisure, impeccable attire, and conversation that refuses to be boring.
          </p>
        </div>
      </div>

      {/* ── PRINCIPLES + FELLOWSHIP ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">

        {/* Warm vignette ambient */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(100,46,51,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Large watermark numeral */}
        <div
          className="absolute right-0 bottom-0 select-none pointer-events-none translate-x-1/4 translate-y-1/4 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-serif text-[18rem] lg:text-[24rem] font-black text-oxblood/8 leading-none block">
            B
          </span>
        </div>

        {/* ── FOUNDING PRINCIPLES: Ruled list layout ── */}
        <div className="space-y-0 mb-20 max-w-3xl mx-auto border-t border-ivory/10 relative z-10 pt-4">
          {SOCIETY_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="group grid grid-cols-12 gap-4 sm:gap-8 py-10 border-b border-ivory/10 items-start transition-colors duration-300 hover:border-gold/30"
            >
              {/* Large display numeral */}
              <div className="col-span-2 sm:col-span-1 flex items-start justify-start pt-1">
                <span className="font-serif text-4xl sm:text-5xl font-black text-gold/25 group-hover:text-gold/50 transition-colors duration-300 leading-none">
                  {principle.number}
                </span>
              </div>

              {/* Content */}
              <div className="col-span-10 sm:col-span-11 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory group-hover:text-gold transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-ivory-muted/40 hidden sm:block">
                    {principle.byline}
                  </span>
                </div>
                <p className="font-sans text-base text-ivory-muted/70 leading-relaxed max-w-xl">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── HONORARY FELLOWSHIP INVITE ── */}
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="border border-gold/30 p-8 sm:p-12 text-center space-y-6 relative">
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/50" aria-hidden="true" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/50" aria-hidden="true" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/50" aria-hidden="true" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/50" aria-hidden="true" />

            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/40 text-[10px] uppercase tracking-[0.3em] text-gold font-sans">
              Honorary Fellowship
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ivory">
              Membership by Acclamation Only
            </h3>

            <p className="text-sm sm:text-base font-sans text-ivory-muted/70 leading-relaxed">
              No dues are collected, no crypto wallets are connected, and no applications are processed through algorithms. One simply recognizes the spirit of Bhumi, and is welcomed into the fold.
            </p>

            <div className="pt-2 flex justify-center">
              <LuxuryButton
                variant="primary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                icon={<ChevronRight className="w-4 h-4 shrink-0" />}
                className="w-full sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Inquire for Honorary Fellowship
              </LuxuryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Honorary Fellowship Confirmation Modal */}
      <LuxuryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Fellowship Conferred"
        subtitle="The High Chancellor's Office"
      >
        <p className="text-ivory font-serif text-lg italic">
          "By order of the Sovereign Council of Bhumi Coin, your candidacy has been considered, applauded, and granted without further cross-examination."
        </p>

        <p className="text-xs text-ivory-muted leading-relaxed">
          You are now an Honorary Lifetime Fellow of The Bhumi Society. Privileges include: immediate entitlement to have strong opinions on afternoon tea, total exemption from dull discussions, and an unshakeable sense of style.
        </p>

        <div className="p-3 bg-forest-light border border-gold/30 text-center text-xs text-gold font-serif">
          ★ Member No. 00042 • Fictional Reserve Registry ★
        </div>
      </LuxuryModal>
    </section>
  );
};
