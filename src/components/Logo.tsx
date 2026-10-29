import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
}) => {
  const iconSizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl md:text-3xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon: Modern Monitor + Galaxy Orbit */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizeClasses}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(37,99,235,0.45)]"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="galaxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Galaxy Orbit Ring (Tilted Oval) */}
          <ellipse
            cx="24"
            cy="24"
            rx="20"
            ry="7.5"
            transform="rotate(-26 24 24)"
            stroke="url(#galaxyGrad)"
            strokeWidth="2.2"
            strokeDasharray="40 6 8 6"
            className="opacity-90"
          />

          {/* Orbit Star Node 1 */}
          <circle cx="9" cy="18" r="2" fill="#38bdf8" />
          {/* Orbit Star Node 2 */}
          <circle cx="39" cy="30" r="1.5" fill="#a855f7" />

          {/* Computer Monitor Bezel */}
          <rect
            x="11"
            y="12"
            width="26"
            height="18"
            rx="3"
            fill="url(#screenGrad)"
            stroke="url(#galaxyGrad)"
            strokeWidth="2"
          />

          {/* Inner Screen Area */}
          <rect
            x="13.5"
            y="14.5"
            width="21"
            height="13"
            rx="1.5"
            fill="#090d16"
          />

          {/* Screen Tech Graphic / Cosmic Waveform */}
          <path
            d="M 16 21 L 19 21 L 21 17 L 24 25 L 27 19 L 29 21 L 32 21"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stand Stem */}
          <path
            d="M 22 30 L 22 35"
            stroke="url(#galaxyGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Stand Base */}
          <path
            d="M 17 35 L 31 35"
            stroke="url(#galaxyGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <div className={`font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 ${textClasses}`}>
          <span>COMPUTER</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-purple-400">
            GALAXY
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium mt-1">
            Hardware & PC Studio · Sirohi
          </span>
        )}
      </div>
    </div>
  );
};
