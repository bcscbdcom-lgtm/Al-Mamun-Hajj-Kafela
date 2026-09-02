import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "h-10 w-auto", isLight = false }) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="./logo.png"
        alt="আল মামুন হজ্ব কাফেলা"
        className={`${className} object-contain transition-transform duration-300 hover:scale-105`}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      aria-label="Al Mamun Hajj Kafela Logo"
    >
      <defs>
        <linearGradient id="brandGoldCrescent" x1="10" y1="10" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="kiswahGold" x1="40" y1="45" x2="70" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="flightSwoosh" x1="10" y1="80" x2="110" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="45%" stopColor="#E11D48" />
          <stop offset="75%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <path
        d="M 48 10 C 26 14 14 32 16 54 C 18 70 30 84 48 88 C 32 83 24 70 23 54 C 22 36 32 20 48 10 Z"
        fill="url(#brandGoldCrescent)"
      />
      <path
        d="M 10 76 C 35 92 72 78 108 22 C 100 30 72 74 38 79 C 24 81 16 79 10 76 Z"
        fill="url(#flightSwoosh)"
        opacity="0.9"
      />
      <polygon points="55,36 70,42 55,48 40,42" fill="#334155" />
      <polygon points="40,42 55,48 55,76 40,70" fill="#1E293B" />
      <polygon points="55,48 70,42 70,70 55,76" fill="#0F172A" />
      <polygon points="40,48 55,54 55,58 40,52" fill="url(#kiswahGold)" />
      <polygon points="55,54 70,48 70,52 55,58" fill="url(#kiswahGold)" />
      <g transform="translate(92, 12) rotate(-32)">
        <path
          d="M 22 6 C 20 4 14 6 8 10 L 1 8 L 0 10 L 5 13 L 2 20 L 0 20 L 0 22 L 5 22 L 10 16 L 16 13 C 21 11 23 8 22 6 Z"
          fill={isLight ? "#FFFFFF" : "#0F172A"}
        />
      </g>
    </svg>
  );
};

