import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  Calendar, 
  Star, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Printer,
  Compass
} from 'lucide-react';
import { Language } from '../types';
import { MakkahClockWidget } from './MakkahClockWidget';

export interface HeroSlide {
  id: string;
  titleEn: string;
  titleBn: string;
  locationEn: string;
  locationBn: string;
  imageUrl: string;
}

export const HERO_BACKGROUND_SLIDES: HeroSlide[] = [
  {
    id: 'kaaba-mecca',
    titleEn: 'Masjid al-Haram • The Holy Kaaba Tawaf',
    titleBn: 'পবিত্র মসজিদুল হারাম • কাবা শরীফ তাওয়াফ',
    locationEn: 'Makkah Al-Mukarramah',
    locationBn: 'মক্কা আল-মুকাররমা',
    imageUrl: `${import.meta.env.BASE_URL}mecca.jpg`,
  },
  {
    id: 'madina-nabawi',
    titleEn: 'Masjid an-Nabawi Courtyard & Umbrellas • Madinah',
    titleBn: 'মসজিদে নববী প্রাঙ্গণ ও ছাতা • মদিনা মুনাওয়ারা',
    locationEn: 'Madinah Al-Munawwarah',
    locationBn: 'মদিনা আল-মুনাওয়ারা',
    imageUrl: `${import.meta.env.BASE_URL}madina.jpg`,
  },
  {
    id: 'arafat-jabal',
    titleEn: 'Mount Arafat & Jabal ar-Rahmah • Sacred Day of Hajj',
    titleBn: 'জাবালে রহমত ও আরাফাতের ময়দান • হজের মূল দিন',
    locationEn: 'Jabal ar-Rahmah, Arafat',
    locationBn: 'জাবালে রহমত, আরাফাত',
    imageUrl: `${import.meta.env.BASE_URL}arafat.avif`,
  }
];

interface HeroSectionProps {
  lang: Language;
  onOpenPreReg: (packageName?: string) => void;
  onOpenWalkthrough?: () => void;
  onOpenPrintModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenPreReg,
  onOpenWalkthrough,
  onOpenPrintModal,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 5000; // 5 seconds per slide

  // Automatic slideshow interval
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_BACKGROUND_SLIDES.length);
    }, SLIDE_DURATION);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, []);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_BACKGROUND_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_BACKGROUND_SLIDES.length) % HERO_BACKGROUND_SLIDES.length);
  };

  const activeSlide = HERO_BACKGROUND_SLIDES[currentSlideIndex];

  return (
    <header 
      id="home" 
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center text-white py-14 sm:py-20 lg:py-24 overflow-hidden bg-slate-950 border-b border-slate-900 select-none transition-colors"
    >
      {/* 1. FULL-SCREEN BACKGROUND IMAGE SLIDESHOW */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none">
        {HERO_BACKGROUND_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={lang === 'en' ? slide.titleEn : slide.titleBn}
                referrerPolicy="no-referrer"
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* 2. ASYMMETRIC GRADIENT OVERLAY: Soft left-to-right gradient overlay for high text readability on the left while landmarks on the center and right show through clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent"></div>
        {/* Top and bottom subtle contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/35"></div>
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:28px_28px]"></div>
      </div>

      {/* 3. HERO CONTENT CONTAINER (Balanced & Uncluttered Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE (Clean vertical flow ~ 50% width) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            
            {/* Top Badges: Pre-Registration Alert + Makkah Live Time */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Sleek Minimalist Pre-Registration Pill Badge */}
              <button
                type="button"
                onClick={() => onOpenPreReg('Hajj 2027 Pre-Registration')}
                className="inline-flex items-center gap-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 hover:text-white border border-sky-400/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold transition shadow-md cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-400 group-hover:rotate-12 transition-transform" />
                <span>
                  {lang === 'en'
                    ? '✨ Hajj 2027 Pre-Registration Active'
                    : '✨ পবিত্র হজ্ব ২০২৭ প্রি-রেজিস্ট্রেশন চলছে'}
                </span>
                <ArrowRight className="w-3 h-3 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Makkah Live Time Widget */}
              <MakkahClockWidget lang={lang} isDark={true} />
            </div>

            {/* Powerful Main Headline (Pure White with Subtle Drop Shadow & Sky Blue Keyword Highlight) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white drop-shadow-md">
              {lang === 'en' ? (
                <>
                  <span className="text-white font-bold block">On the Sacred Path to Baitullah,</span>
                  <span className="text-sky-400 font-extrabold block mt-1 drop-shadow-sm">Your Trusted Caravan.</span>
                </>
              ) : (
                <>
                  <span className="text-white font-bold block">বাইতুল্লাহর পবিত্র পথে,</span>
                  <span className="text-sky-400 font-extrabold block mt-1 drop-shadow-sm">আপনার বিশ্বস্ত কাফেলা।</span>
                </>
              )}
            </h1>

            {/* Short Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base max-w-xl leading-relaxed drop-shadow-xs font-normal">
              {lang === 'en'
                ? 'Licensed Hajj & Umrah management from Bangladesh to the Holy Cities — direct flights, curated hotels, visa processing, and dedicated scholar guidance from Khulna.'
                : 'পবিত্র কুরআন ও সুন্নাহর আলোকে বাংলাদেশ থেকে মক্কা-মদিনায় নির্ভরযোগ্য হজ ও ওমরাহ সেবা — ভিসা, বিমান টিকিট, আবাসন ও আলেমদের সার্বক্ষণিক তত্ত্বাবধান।'}
            </p>

            {/* 2 Primary Buttons & Secondary Print/Guide Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#hajj-packages"
                className="bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.99] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-900/50 hover:shadow-sky-500/30 transition flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <span>{lang === 'en' ? 'View Hajj Packages' : 'হজ প্যাকেজসমূহ দেখুন'}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <button
                type="button"
                onClick={() => onOpenPreReg()}
                className="bg-white/15 hover:bg-white/25 active:scale-[0.99] text-white border border-white/30 backdrop-blur-md font-bold px-6 py-3.5 rounded-xl transition text-xs sm:text-sm shadow-md cursor-pointer"
              >
                <span>{lang === 'en' ? 'Book Consultation' : 'পরামর্শের আবেদন'}</span>
              </button>

              {onOpenWalkthrough && (
                <button
                  type="button"
                  onClick={onOpenWalkthrough}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-slate-200 hover:text-white font-semibold px-3.5 py-3.5 rounded-xl transition text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer backdrop-blur-md shadow-sm"
                  title={lang === 'en' ? 'Step-by-step Hajj Walkthrough' : 'হজ গাইড'}
                >
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span className="hidden sm:inline">{lang === 'en' ? 'Hajj Guide' : 'হজ গাইড'}</span>
                </button>
              )}

              {onOpenPrintModal && (
                <button
                  type="button"
                  onClick={onOpenPrintModal}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-slate-200 hover:text-white font-semibold px-3.5 py-3.5 rounded-xl transition text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer backdrop-blur-md shadow-sm"
                  title={lang === 'en' ? 'Printable Summary View' : 'প্রিন্ট সামারি'}
                >
                  <Printer className="w-4 h-4 text-sky-400" />
                  <span className="hidden sm:inline">{lang === 'en' ? 'Print' : 'প্রিন্ট'}</span>
                </button>
              )}
            </div>

            {/* Minimalist Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-5 border-t border-white/15 max-w-lg">
              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-white font-mono drop-shadow-sm">
                  <Users className="w-5 h-5 text-sky-400 hidden sm:inline" />
                  1200+
                </div>
                <div className="text-xs text-slate-300 mt-0.5 font-medium">
                  {lang === 'en' ? 'Happy Pilgrims' : 'সন্তুষ্ট হাজীবৃন্দ'}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-white font-mono drop-shadow-sm">
                  <Calendar className="w-5 h-5 text-sky-400 hidden sm:inline" />
                  11+
                </div>
                <div className="text-xs text-slate-300 mt-0.5 font-medium">
                  {lang === 'en' ? 'Years of Trust' : 'বছরের নির্ভরযোগ্যতা'}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-amber-300 font-mono drop-shadow-sm">
                  <Star className="w-5 h-5 fill-amber-300 text-amber-300 hidden sm:inline" />
                  4.9★
                </div>
                <div className="text-xs text-slate-300 mt-0.5 font-medium">
                  {lang === 'en' ? 'Avg. Rating' : 'গড় রেটিং'}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (Completely open and transparent — lets background imagery shine!) */}
          <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex flex-col justify-end items-end h-full min-h-[380px] pointer-events-none">
            
            {/* Subtle Minimalist Slide Location Caption & Navigation at Bottom-Right */}
            <div className="pointer-events-auto bg-slate-950/60 hover:bg-slate-950/80 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl flex flex-col gap-2.5 text-white transition-all shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] text-sky-300 uppercase tracking-wider font-bold">
                      {lang === 'en' ? activeSlide.locationEn : activeSlide.locationBn}
                    </p>
                    <p className="text-xs font-bold text-white">
                      {lang === 'en' ? activeSlide.titleEn : activeSlide.titleBn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 pl-2 border-l border-white/20">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="p-1 rounded-lg hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
                    title="Previous photo"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono font-bold text-sky-300 px-1">
                    {currentSlideIndex + 1}/{HERO_BACKGROUND_SLIDES.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="p-1 rounded-lg hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
                    title="Next photo"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Slide Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-1 border-t border-white/10">
                {HERO_BACKGROUND_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlideIndex 
                        ? 'w-6 bg-sky-400 shadow-xs shadow-sky-400' 
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Mobile Slide Indicator Dots */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-8">
          {HERO_BACKGROUND_SLIDES.map((slide, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex 
                  ? 'w-6 bg-sky-400' 
                  : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* 4. FAR LEFT & RIGHT SLIDESHOW NAVIGATION CHEVRONS */}
      <button
        type="button"
        onClick={handlePrevSlide}
        aria-label="Previous background slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-slate-950/40 hover:bg-slate-950/80 border border-white/10 text-white/70 hover:text-white backdrop-blur-xs transition-all opacity-60 hover:opacity-100 cursor-pointer shadow-lg group focus:outline-hidden"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        type="button"
        onClick={handleNextSlide}
        aria-label="Next background slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-slate-950/40 hover:bg-slate-950/80 border border-white/10 text-white/70 hover:text-white backdrop-blur-xs transition-all opacity-60 hover:opacity-100 cursor-pointer shadow-lg group focus:outline-hidden"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* 5. IMAGE COURTESY WATERMARK */}
      <div className="absolute bottom-2.5 right-4 sm:right-6 lg:right-8 z-20 pointer-events-none">
        <span className="text-[10px] sm:text-xs text-white/60 bg-slate-950/50 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10 font-medium tracking-wide shadow-xs">
          {lang === 'en' ? 'Image Courtesy: Al Mamun Archives' : 'Image Courtesy: Al Mamun Archives'}
        </span>
      </div>
    </header>
  );
};
