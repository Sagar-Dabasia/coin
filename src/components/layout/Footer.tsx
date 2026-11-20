import React from 'react';
import { ShieldAlert, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="disclaimer" className="relative bg-forest-dark border-t border-gold/25 pt-16 pb-12 text-ivory-muted">
      {/* Subtle fine top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-forest-light/60">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center bg-forest text-gold">
                <span className="font-serif font-black text-xl">B</span>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold tracking-widest text-ivory">
                  BHUMI COIN
                </h4>
                <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-gold">
                  Numismatic Tribute & Sovereign Whim
                </p>
              </div>
            </div>
            <p className="text-sm font-sans text-ivory-muted/80 max-w-sm leading-relaxed">
              Minted in honour of Bhumi. An aristocratic homage celebrating wit, impeccable company, and the art of unyielding distinction.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-serif text-base font-semibold tracking-wider text-gold uppercase">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs uppercase tracking-widest font-sans">
              <li>
                <a href="#the-story" className="hover:text-gold transition-colors">
                  The Origin Story
                </a>
              </li>
              <li>
                <a href="#the-coin" className="hover:text-gold transition-colors">
                  The Interactive Coin
                </a>
              </li>
              <li>
                <a href="#the-society" className="hover:text-gold transition-colors">
                  The Bhumi Society
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-gold transition-colors">
                  Educational Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Project Notice */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-gold">
              <ShieldAlert className="w-4 h-4" />
              <h5 className="font-serif text-base font-semibold tracking-wider uppercase">
                Solemn Declaration
              </h5>
            </div>
            <div className="p-4 bg-forest/80 border border-gold/20 text-xs leading-relaxed space-y-2">
              <p className="text-ivory font-medium">
                Bhumi Coin is a fictional educational project with no monetary value.
              </p>
              <p className="text-ivory-muted text-[11px]">
                It is not an initial coin offering (ICO), financial instrument, tokenized asset, or registered security. Created strictly for amusement and frontend craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-muted/60 font-sans gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold/70" />
            <span>&copy; MMXXVI Bhumi Coin Private Trust. All sovereign whims reserved.</span>
          </div>
          <div className="text-[11px] tracking-wider uppercase text-gold/75">
            Crafted with Pure Distinction
          </div>
        </div>
      </div>
    </footer>
  );
};
