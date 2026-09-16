import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = false,
  dark = false,
  className = '',
  badge,
}) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          dark ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20' : 'bg-amber-50 text-amber-800 border border-amber-200'
        }`}>
          {badge}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider uppercase ${
          dark ? 'text-white' : 'text-[#881337]'
        }`}
      >
        {title}
      </h2>
      {/* Signature Golden Bar from Slide Deck */}
      <div
        className={`h-1.5 w-16 bg-gradient-to-r from-[#eab308] to-[#f59e0b] rounded-full mt-2.5 mb-3 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-slate-300' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
