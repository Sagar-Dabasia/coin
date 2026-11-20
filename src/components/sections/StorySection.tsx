import React from 'react';
import { Scroll, Bookmark, Feather, Shield } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section 
      id="the-story" 
      className="relative py-28 bg-[#10221C] text-ivory border-t border-gold/20 overflow-hidden"
      aria-label="The Origin Story of Bhumi Coin"
    >
      {/* Background watermark seal */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[350px] lg:w-[550px] h-[350px] lg:h-[550px] rounded-full border border-gold/10 items-center justify-center">
          <div className="w-[280px] lg:w-[440px] h-[280px] lg:h-[440px] rounded-full border border-dashed border-gold/10 flex items-center justify-center">
            <span className="font-serif text-[200px] lg:text-[280px] font-black text-gold/5 select-none">B</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-gold">
            <Feather className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              The Archive & Origin
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-ivory">
            The Chronicle of an <br />
            <span className="italic font-normal text-gold">Unlikely Sovereign</span>
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          
          <p className="text-base sm:text-lg font-sans text-ivory-muted/90 font-light leading-relaxed">
            The curious historical record of how an afternoon conversation over tea gave rise to the most dignified non-financial currency of the modern era.
          </p>
        </div>

        {/* Narrative Chapters in Editorial Tri-Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Chapter I */}
          <div className="relative p-6 sm:p-8 bg-forest border border-gold/25 shadow-lg flex flex-col justify-between group hover:border-gold/60 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-gold border-b border-gold/20 pb-3">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold">Chapter I</span>
                <Scroll className="w-4 h-4 text-gold/80" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ivory group-hover:text-gold transition-colors">
                The Mayfair Misunderstanding
              </h3>
              <p className="text-sm font-sans text-ivory-muted leading-relaxed">
                <span className="float-left text-4xl font-serif font-bold text-gold mr-2 leading-none">I</span>
                t began innocently enough during a particularly dry salon conversation in Mayfair. While others debated interest rate hikes and speculative commodities, Bhumi delivered a remark of such devastating wit that the table fell into solemn agreement: ordinary fiat money was simply too clumsy to measure true character.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-forest-light text-[11px] font-serif italic text-gold/80">
              Recorded in the Minutes of the Privy Society, 2026.
            </div>
          </div>

          {/* Chapter II */}
          <div className="relative p-6 sm:p-8 bg-forest border border-gold/25 shadow-lg flex flex-col justify-between group hover:border-gold/60 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-gold border-b border-gold/20 pb-3">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold">Chapter II</span>
                <Bookmark className="w-4 h-4 text-gold/80" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ivory group-hover:text-gold transition-colors">
                The Reserve of Pure Whim
              </h3>
              <p className="text-sm font-sans text-ivory-muted leading-relaxed">
                <span className="float-left text-4xl font-serif font-bold text-gold mr-2 leading-none">A</span>
                n emergency charter was immediately drafted on heavy rag paper. The foundational statutes resolved that unlike central bank reserves, Bhumi Coin would be collateralized by zero debt, zero algorithmic promises, and precisely one-hundred-percent genuine camaraderie and unshakeable poise.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-forest-light text-[11px] font-serif italic text-gold/80">
              Statute No. 4: "Humor shall remain the only legal tender."
            </div>
          </div>

          {/* Chapter III */}
          <div className="relative p-6 sm:p-8 bg-forest border border-gold/25 shadow-lg flex flex-col justify-between group hover:border-gold/60 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-gold border-b border-gold/20 pb-3">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold">Chapter III</span>
                <Shield className="w-4 h-4 text-gold/80" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ivory group-hover:text-gold transition-colors">
                The Numismatic Standard
              </h3>
              <p className="text-sm font-sans text-ivory-muted leading-relaxed">
                <span className="float-left text-4xl font-serif font-bold text-gold mr-2 leading-none">T</span>
                oday, a single Bhumi Coin remains completely immune to inflation, market panic, and Wall Street theatrics. Its value is pegged solely to the laughter shared among companions who understand that the rarest luxury on earth is never for sale.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-forest-light text-[11px] font-serif italic text-gold/80">
              Certified by the Royal Fellowship of Good Taste.
            </div>
          </div>
        </div>

        {/* Archival Quotation Plate */}
        <div className="mt-16 p-8 sm:p-12 bg-forest-light/60 border border-gold/30 rounded-none relative text-center">
          <div className="text-3xl sm:text-4xl font-serif italic text-ivory max-w-3xl mx-auto leading-relaxed">
            "A fortune measured strictly in pounds or dollars is terribly pedestrian. A coin minted in laughter lasts an eternity."
          </div>
          <div className="mt-4 text-xs uppercase tracking-[0.25em] font-sans text-gold font-semibold">
            — The Bhumi Coin Founding Manifesto
          </div>
        </div>
      </div>
    </section>
  );
};
