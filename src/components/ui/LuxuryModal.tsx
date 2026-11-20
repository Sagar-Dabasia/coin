import React, { useEffect } from 'react';
import { X, Award, ShieldCheck } from 'lucide-react';
import { LuxuryButton } from './LuxuryButton';

interface LuxuryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const LuxuryModal: React.FC<LuxuryModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-deep/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click handler */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-lg overflow-hidden bg-[#152B24] border-2 border-gold/40 shadow-2xl p-6 md:p-8 text-ivory z-10">
        {/* Subtle decorative gold inner border */}
        <div className="absolute inset-2 border border-gold/20 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-ivory-muted hover:text-gold hover:bg-forest-light/60 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with crest icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-forest-light mb-3 text-gold">
            <Award className="w-6 h-6" />
          </div>
          {subtitle && (
            <span className="text-[11px] tracking-[0.25em] uppercase font-sans text-gold mb-1">
              {subtitle}
            </span>
          )}
          <h3 id="modal-title" className="text-2xl md:text-3xl font-serif font-bold text-ivory">
            {title}
          </h3>
        </div>

        {/* Content body */}
        <div className="space-y-4 text-sm font-sans text-ivory-muted leading-relaxed">
          {children}
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-gold/20 flex justify-end">
          <LuxuryButton variant="primary" size="sm" onClick={onClose} icon={<ShieldCheck className="w-4 h-4" />}>
            Accept with Distinction
          </LuxuryButton>
        </div>
      </div>
    </div>
  );
};
