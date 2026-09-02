import React from 'react';
import { Language } from '../types';
import { HolyCitiesWeatherWidget } from './HolyCitiesWeatherWidget';
import { HajjCountdown } from './HajjCountdown';
import { getDynamicSeasonYear } from '../utils/dateUtils';

interface SpiritualLiveSectionProps {
  lang: Language;
  onOpenPreReg: (packageName?: string) => void;
}

export const SpiritualLiveSection: React.FC<SpiritualLiveSectionProps> = ({
  lang,
  onOpenPreReg,
}) => {
  return (
    <section className="bg-slate-50/70 py-4 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-3.5">
        {/* 1. COMPACT SPIRITUAL VERSE DIVIDER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-arabic text-lg sm:text-xl md:text-2xl text-sky-800 font-medium leading-normal tracking-wide">
            "وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ"
          </p>
          <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">
            {lang === 'en'
              ? '“And complete the Hajj and Umrah for the sake of Allah.” — Surah Al-Baqarah: 196'
              : '“এবং আল্লাহর সন্তুষ্টির উদ্দেশ্যে হজ ও ওমরাহ পূর্ণ করো।” — সূরা আল-বাক্বারা: ১৯৬'}
          </p>
        </div>

        {/* 2. BALANCED 2-COLUMN EQUAL-HEIGHT WIDGET BAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {/* Left Card: Live Weather */}
          <div className="h-full">
            <HolyCitiesWeatherWidget lang={lang} />
          </div>

          {/* Right Card: Hajj 2027 Countdown */}
          <div className="h-full">
            <HajjCountdown
              lang={lang}
              onOpenPreReg={() => onOpenPreReg(`Hajj ${getDynamicSeasonYear(1, 'en')} Pre-Registration`)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

