import React, { useState } from 'react';
import { Crown, Sparkles, Check, ChevronRight } from 'lucide-react';
import { SOCIETY_PRINCIPLES } from '../../data/societyPrinciples';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryModal } from '../ui/LuxuryModal';

export const SocietySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      id="the-society" 
      className="relative py-28 bg-[#0D1B16] text-ivory border-t border-gold/20 overflow-hidden"
      aria-label="The Bhumi Society and Country Club"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-gold">
            <Crown className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              The Inner Sanctuary
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-ivory">
            The Bhumi Society
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />

          <p className="text-base sm:text-lg font-sans text-ivory-muted/90 font-light leading-relaxed">
            An exclusive, fictional country club and philosophical order dedicated to the pursuit of leisure, impeccable attire, and conversation that refuses to be boring.
          </p>
        </div>

        {/* Founding Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SOCIETY_PRINCIPLES.map((principle) => (
            <div 
              key={principle.number}
              className="p-6 sm:p-8 bg-forest border border-gold/25 relative flex flex-col justify-between hover:border-gold/60 transition-all hover:-translate-y-1 duration-300 shadow-md group"
            >
              {/* Subtle top corner numeral */}
              <div className="flex items-center justify-between border-b border-gold/20 pb-4 mb-4">
                <span className="font-serif text-3xl font-black text-gold">
                  {principle.number}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-ivory-muted/70">
                  {principle.byline}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory group-hover:text-gold transition-colors">
                  {principle.title}
                </h3>
                <p className="text-sm font-sans text-ivory-muted/90 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-light flex items-center gap-2 text-xs font-serif text-gold/80">
                <Check className="w-3.5 h-3.5 text-gold" />
                <span>Ratified by Unanimous Acclamation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Club Privileges & Fellowship Invite Banner */}
        <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-r from-navy via-forest to-oxblood/80 border-2 border-gold/40 text-center relative shadow-luxury">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-forest/80 text-[11px] uppercase tracking-widest text-gold font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Honorary Fellowship</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ivory">
              Membership by Acclamation Only
            </h3>

            <p className="text-sm sm:text-base font-sans text-ivory-muted leading-relaxed">
              No dues are collected, no crypto wallets are connected, and no applications are processed through algorithms. One simply recognizes the spirit of Bhumi, and is welcomed into the fold.
            </p>

            <div className="pt-2 flex justify-center">
              <LuxuryButton
                variant="primary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                icon={<ChevronRight className="w-4 h-4 shrink-0" />}
                className="w-full sm:w-auto shadow-gold-glow sm:px-8 sm:py-4 sm:text-base"
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
