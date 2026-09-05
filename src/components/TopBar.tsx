import React from 'react';
import { Award, Phone, Clock, Lock, Globe } from 'lucide-react';
import { Language } from '../types';

interface TopBarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenPortal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  lang,
  onToggleLang,
  onOpenPortal,
}) => {
  return (
    <div className="bg-[#0369A1] text-white text-xs py-2 px-3 sm:px-6 border-b border-[#0284C7] transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-sky-100 text-[11px] sm:text-xs">
            <Award className="w-3.5 h-3.5 text-sky-200" />
            {lang === 'en'
              ? 'Govt. Approved Hajj & Umrah Agency • Power House More, Khulna'
              : 'ধর্ম বিষয়ক মন্ত্রণালয় অনুমোদিত • পাওয়ার হাউজ মোড়, খুলনা'}
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 text-sky-100 text-[11px] sm:text-xs flex-wrap justify-center">
          <a
            href="tel:+8801712864077"
            className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
          >
            <Phone className="w-3 h-3 text-sky-200" />
            01712-864077
          </a>
          <span className="text-sky-300/60 hidden sm:inline">•</span>
          <a
            href="tel:+8801676500395"
            className="hover:text-white transition-colors flex items-center gap-1.5 font-medium hidden md:flex"
          >
            <Phone className="w-3 h-3 text-sky-200" />
            01676-500395
          </a>
          <span className="text-sky-300/60 hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 text-sky-100">
            <Clock className="w-3 h-3 text-sky-200" />
            {lang === 'en' ? 'Open 9 AM – 9 PM' : 'খোলা: সকাল ৯টা – রাত ৯টা'}
          </span>
          <span className="text-sky-300/60 hidden sm:inline">•</span>
          <button
            onClick={onOpenPortal}
            className="text-sky-200 hover:text-white hover:underline flex items-center gap-1 font-semibold transition cursor-pointer"
          >
            <Lock className="w-3 h-3" />
            {lang === 'en' ? 'Staff Portal' : 'অফিস ড্যাশবোর্ড'}
          </button>

          <span className="text-sky-300/60 hidden sm:inline">•</span>

          {/* TopBar Language Toggle Button */}
          <button
            onClick={onToggleLang}
            id="topBarLangToggleBtn"
            aria-label={lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-white hover:text-white bg-[#0284C7] hover:bg-[#075985] border border-sky-400/40 text-[11px] font-bold transition cursor-pointer shadow-xs group"
            title={lang === 'en' ? 'Switch language to বাংলা' : 'Switch language to English'}
          >
            <Globe className="w-3.5 h-3.5 text-sky-200 group-hover:rotate-45 transition-transform" />
            <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};



