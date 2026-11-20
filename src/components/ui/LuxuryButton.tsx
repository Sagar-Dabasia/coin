import React from 'react';

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-serif uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-forest disabled:opacity-50 disabled:cursor-not-allowed select-none max-w-full text-center";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold tracking-wider gap-1.5",
    md: "px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider gap-2",
    lg: "px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-base font-bold tracking-wider sm:tracking-widest gap-2 sm:gap-2.5",
  }[size];

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#D4AF37] via-[#B89858] to-[#96783B] text-forest-deep shadow-md hover:shadow-gold-glow hover:brightness-105 active:scale-[0.98] border border-[#F2DE9F]/40",
    secondary: "bg-forest-light text-ivory border border-gold/40 hover:bg-forest-light/80 hover:border-gold hover:text-white shadow-sm active:scale-[0.98]",
    outline: "bg-transparent text-gold border border-gold/60 hover:bg-gold/10 hover:border-gold active:scale-[0.98]",
    ghost: "bg-transparent text-ivory-muted hover:text-gold hover:bg-forest-light/40",
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {/* Decorative corner hairline accents for primary button */}
      {variant === 'primary' && (
        <>
          <span className="absolute top-0.5 left-0.5 w-1 h-1 border-t border-l border-forest-deep/60" />
          <span className="absolute top-0.5 right-0.5 w-1 h-1 border-t border-r border-forest-deep/60" />
          <span className="absolute bottom-0.5 left-0.5 w-1 h-1 border-b border-l border-forest-deep/60" />
          <span className="absolute bottom-0.5 right-0.5 w-1 h-1 border-b border-r border-forest-deep/60" />
        </>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
