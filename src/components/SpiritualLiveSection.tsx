import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { HolyCitiesWeatherWidget } from './HolyCitiesWeatherWidget';
import { HajjCountdown } from './HajjCountdown';

interface SpiritualLiveSectionProps {
  lang: Language;
  onOpenPreReg: (packageName?: string) => void;
}

export const SpiritualLiveSection: React.FC<SpiritualLiveSectionProps> = ({
  lang,
  onOpenPreReg,
}) => {
  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] via-[#F0F9FF] to-white py-10 border-b border-[#BAE6FD]/60 relative overflow-hidden">
      {/* Subtle background motif */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* 1. PEACEFUL QURAN VERSE DIVIDER */}
        <div className="text-center max-w-3xl mx-auto py-3">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] border border-[#BAE6FD] px-3.5 py-1 rounded-full text-xs font-bold text-[#0369A1] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{lang === 'en' ? 'Divine Guidance • Surah Al-Baqarah: 196' : 'পবিত্র কুরআন • সূরা আল-বাক্বারা: ১৯৬'}</span>
          </div>

          <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-[#0369A1] font-normal leading-loose tracking-wide mb-2">
            "وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ"
          </p>

          <p className="text-sm sm:text-base text-slate-700 italic max-w-2xl mx-auto font-serif">
            {lang === 'en'
              ? '"And complete the Hajj and Umrah for the sake of Allah."'
              : '"এবং আল্লাহর সন্তুষ্টির উদ্দেশ্যে হজ ও ওমরাহ পূর্ণ করো।"'}
          </p>
        </div>

        {/* 2. DEDICATED LIVE SANCTUARY BAR (Live Weather + Official Countdown) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Makkah & Madinah Live Weather */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <HolyCitiesWeatherWidget lang={lang} />
          </div>

          {/* Hajj Countdown & Quick Registration Banner */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#BAE6FD] shadow-xs flex flex-col justify-between h-full">
              <HajjCountdown
                lang={lang}
                onOpenPreReg={() => onOpenPreReg('Hajj 2027 Pre-Registration')}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
