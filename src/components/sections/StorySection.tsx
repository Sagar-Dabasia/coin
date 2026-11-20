import React from 'react';
import { Feather } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section
      id="the-story"
      className="relative bg-ivory text-navy border-t border-gold/30 overflow-hidden"
      aria-label="The Origin Story of Bhumi Coin"
    >
      {/* Top rule */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* ── PART 1: EDITORIAL HEADER ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-gold">
            <div className="w-8 h-px bg-gold/60" />
            <Feather className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-[0.35em] font-sans font-semibold">
              The Archive &amp; Origin
            </span>
            <div className="w-8 h-px bg-gold/60" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-navy leading-[1.05]">
            The Chronicle of an{' '}
            <span className="italic font-normal text-oxblood">Unlikely Sovereign</span>
          </h2>

          <div className="w-16 h-px bg-gold/40 mx-auto" />

          <p className="text-base sm:text-lg font-sans text-navy/70 font-light leading-relaxed">
            The curious historical record of how an afternoon conversation over tea gave rise to the most dignified non-financial currency of the modern era.
          </p>
        </div>
      </div>

      {/* ── PART 2: FULL-WIDTH IMAGE MOMENT ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(220px, 38vw, 500px)' }}>
        <img
          src="/images/books.webp"
          alt="Antique leather and cloth-bound volumes in close-up — archival records of the Society."
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'sepia(15%) brightness(0.92) contrast(1.05)' }}
        />
        {/* Gradient fades at top and bottom into ivory */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to bottom, #F4EFE4 0%, transparent 18%, transparent 80%, #F4EFE4 100%)',
          }}
        />
        {/* Inset caption card */}
        <div className="absolute bottom-6 right-4 sm:right-8 bg-ivory/90 backdrop-blur-sm border border-navy/15 px-4 py-3 max-w-[220px] sm:max-w-xs">
          <div className="text-[10px] tracking-[0.25em] uppercase font-sans text-gold font-semibold mb-1">
            The Archive Folios
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-navy/70 leading-snug">
            Where the founding statutes were bound in calfskin and preserved for posterity.
          </p>
        </div>
      </div>

      {/* ── PART 3: EDITORIAL TWO-COLUMN LAYOUT ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Chapter I + II */}
          <div className="lg:col-span-7 space-y-16">

            {/* Chapter I */}
            <article className="space-y-5">
              <div className="flex items-center gap-4 border-b border-navy/15 pb-4">
                <span className="text-[11px] tracking-[0.3em] uppercase font-sans font-semibold text-gold">Chapter I</span>
                <div className="flex-1 h-px bg-navy/10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy leading-tight">
                The Mayfair Misunderstanding
              </h3>
              <p className="font-sans text-base sm:text-lg text-navy/75 leading-relaxed">
                <span className="float-left text-6xl font-serif font-bold text-gold mr-3 mt-1 leading-none">I</span>
                t began innocently enough during a particularly dry salon conversation in Mayfair. While others debated interest rate hikes and speculative commodities, Bhumi delivered a remark of such devastating wit that the table fell into solemn agreement: ordinary fiat money was simply too clumsy to measure true character.
              </p>
              <p className="font-sans text-base text-navy/65 leading-relaxed">
                A quiet but collective resolution passed without a vote — the kind that only emerges from rooms with good curtains and better company.
              </p>
              <div className="text-[11px] font-serif italic text-gold border-l-2 border-gold/40 pl-3">
                Recorded in the Minutes of the Privy Society, 2026.
              </div>
            </article>

            {/* Chapter II */}
            <article className="space-y-5">
              <div className="flex items-center gap-4 border-b border-navy/15 pb-4">
                <span className="text-[11px] tracking-[0.3em] uppercase font-sans font-semibold text-gold">Chapter II</span>
                <div className="flex-1 h-px bg-navy/10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy leading-tight">
                The Reserve of Pure Whim
              </h3>
              <p className="font-sans text-base sm:text-lg text-navy/75 leading-relaxed">
                <span className="float-left text-6xl font-serif font-bold text-gold mr-3 mt-1 leading-none">A</span>
                n emergency charter was immediately drafted on heavy rag paper. The foundational statutes resolved that unlike central bank reserves, Bhumi Coin would be collateralized by zero debt, zero algorithmic promises, and precisely one-hundred-percent genuine camaraderie and unshakeable poise.
              </p>
              <div className="text-[11px] font-serif italic text-gold border-l-2 border-gold/40 pl-3">
                Statute No. 4: "Humor shall remain the only legal tender."
              </div>
            </article>
          </div>

          {/* Right: Pullquote + Chapter III + Archival seal */}
          <div className="lg:col-span-5 space-y-12 lg:pt-20">

            {/* Large editorial pullquote */}
            <blockquote className="border-l-4 border-gold pl-6 space-y-3">
              <p className="text-2xl sm:text-3xl font-serif italic text-navy leading-snug">
                &ldquo;A fortune measured strictly in pounds or dollars is terribly pedestrian.&rdquo;
              </p>
              <footer className="text-[11px] tracking-[0.25em] uppercase font-sans text-gold font-semibold">
                — The Bhumi Coin Founding Manifesto
              </footer>
            </blockquote>

            {/* Thin rule */}
            <div className="w-full h-px bg-navy/10" />

            {/* Chapter III */}
            <article className="space-y-5">
              <div className="flex items-center gap-4 border-b border-navy/15 pb-4">
                <span className="text-[11px] tracking-[0.3em] uppercase font-sans font-semibold text-gold">Chapter III</span>
                <div className="flex-1 h-px bg-navy/10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy leading-tight">
                The Numismatic Standard
              </h3>
              <p className="font-sans text-base text-navy/75 leading-relaxed">
                Today, a single Bhumi Coin remains completely immune to inflation, market panic, and Wall Street theatrics. Its value is pegged solely to the laughter shared among companions who understand that the rarest luxury on earth is never for sale.
              </p>
              <div className="text-[11px] font-serif italic text-gold border-l-2 border-gold/40 pl-3">
                Certified by the Royal Fellowship of Good Taste.
              </div>
            </article>

            {/* Archive seal */}
            <div className="p-5 border border-navy/15 bg-navy/5 text-center space-y-1">
              <div className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold text-gold">
                Privy Council · Est. MMXXVI
              </div>
              <div className="font-serif text-sm italic text-navy/55">
                All chronicles herein are entirely fictional and issued in the highest spirits.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};
