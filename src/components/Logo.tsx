import React from 'react';
import numeraLogoMark from '../assets/images/numera_logo_mark_1789455185634.jpg';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
  onlyEmblem?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md',
  theme = 'light',
  onlyEmblem = false,
}) => {
  const iconSize =
    size === 'sm'
      ? 'w-9 h-9'
      : size === 'lg'
      ? 'w-16 h-16'
      : size === 'xl'
      ? 'w-24 h-24'
      : 'w-12 h-12';

  const titleSize =
    size === 'sm'
      ? 'text-lg'
      : size === 'lg'
      ? 'text-2xl sm:text-3xl'
      : size === 'xl'
      ? 'text-3xl sm:text-4xl'
      : 'text-xl';

  const taglineSize =
    size === 'sm' ? 'text-[10px]' : size === 'lg' || size === 'xl' ? 'text-xs' : 'text-[11px]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official 3D Numera.AI Logo Emblem */}
      <div
        className={`relative ${iconSize} flex-shrink-0 rounded-xl overflow-hidden shadow-lg border ${
          theme === 'dark'
            ? 'border-amber-400/50 bg-[#081528] shadow-amber-500/10'
            : 'border-amber-500/40 bg-slate-900 shadow-slate-300'
        } p-0.5 flex items-center justify-center group`}
      >
        <img
          src={numeraLogoMark}
          alt="Numera.AI Labs Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Brand Text Lockup */}
      {!onlyEmblem && (
        <div className="flex flex-col">
          <div className={`font-bold tracking-tight leading-none ${titleSize} flex items-center`}>
            <span className={theme === 'dark' ? 'text-white' : 'text-[#881337]'}>NUMERA</span>
            <span className="text-[#d97706] font-extrabold">.</span>
            <span className={theme === 'dark' ? 'text-amber-400' : 'text-[#991b1b]'}>AI</span>
            <span
              className={`ml-1.5 font-semibold ${
                theme === 'dark' ? 'text-slate-200' : 'text-[#0f2744]'
              }`}
            >
              LABS
            </span>
          </div>
          {showTagline && (
            <span
              className={`font-medium tracking-wide mt-1 italic ${taglineSize} ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Unlocking Insights... Unleashing Potential.
            </span>
          )}
        </div>
      )}
    </div>
  );
};


