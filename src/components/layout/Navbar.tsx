import React, { useState, useEffect } from 'react';
import { Menu, X, Coins } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'The Story', href: '#the-story' },
    { label: 'The Coin', href: '#the-coin' },
    { label: 'The Society', href: '#the-society' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest/95 backdrop-blur-md border-b border-gold/25 py-3 shadow-lg'
          : 'bg-gradient-to-b from-forest/90 to-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark / Emblem */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-1 focus:ring-gold py-1 shrink-0"
          aria-label="Bhumi Coin Home"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gold/60 flex items-center justify-center bg-forest-light/60 text-gold group-hover:border-gold transition-colors shadow-sm shrink-0">
            <span className="font-serif font-black text-base sm:text-lg text-gold">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-xl font-bold tracking-widest text-ivory group-hover:text-gold transition-colors whitespace-nowrap">
              BHUMI COIN
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-sans text-gold/80 -mt-0.5 sm:-mt-1">
              EST. MMXXVI
            </span>
          </div>
        </a>

        {/* Desktop Navigation (Visible on lg >= 1024px) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-sans text-ivory-muted hover:text-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-1 focus:ring-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#the-coin"
            className="inline-flex items-center gap-2 px-3.5 py-2 border border-gold/50 text-gold hover:bg-gold/10 transition-colors text-xs uppercase tracking-widest font-serif font-semibold focus:outline-none focus:ring-1 focus:ring-gold"
          >
            <Coins className="w-3.5 h-3.5" />
            <span>Inspect Mint</span>
          </a>
        </nav>

        {/* Mobile & Tablet Toggle (Visible below 1024px) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ivory hover:text-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors shrink-0"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-dark border-b border-gold/30 px-6 py-6 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-sans text-ivory hover:text-gold py-2 border-b border-forest-light/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#the-coin"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 border border-gold text-gold font-serif text-sm uppercase tracking-widest bg-gold/10"
            >
              Inspect 3D Mint
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
