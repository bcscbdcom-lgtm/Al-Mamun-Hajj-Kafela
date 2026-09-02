import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Users, 
  Calendar,
  CheckCircle2,
  Camera,
  Image as ImageIcon
} from 'lucide-react';
import { Language } from '../types';
import { getDynamicSeasonRange, getDynamicSeasonYear } from '../utils/dateUtils';

export interface CarouselSlide {
  id: string;
  category: 'holy_site' | 'group' | 'ritual';
  titleEn: string;
  titleBn: string;
  locationEn: string;
  locationBn: string;
  seasonEn: string;
  seasonBn: string;
  descriptionEn: string;
  descriptionBn: string;
  badgeEn: string;
  badgeBn: string;
  pilgrimCount?: string;
  imageUrl: string;
  thumbnailUrl: string;
  verifiedLabelEn: string;
  verifiedLabelBn: string;
}

export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 'kaaba-tawaf',
    category: 'holy_site',
    titleEn: 'The Holy Kaaba & Masjid al-Haram',
    titleBn: 'পবিত্র মসজিদুল হারাম ও কাবা শরিফ',
    locationEn: 'Masjid al-Haram, Makkah',
    locationBn: 'মসজিদুল হারাম, মক্কা মুকাররমা',
    seasonEn: `Hajj & Umrah ${getDynamicSeasonRange('en', '-')}`,
    seasonBn: `হজ ও ওমরাহ ${getDynamicSeasonRange('bn', '-')}`,
    descriptionEn: 'Al Mamun Hajj Kafela pilgrims performing their welcome Tawaf together under the direct spiritual guidance of Mufti Amanullah.',
    descriptionBn: 'মুফতী আমানুল্লাহ সাহেবের সার্বক্ষণিক তত্ত্বাবধানে আল মামুন কাফেলার সম্মানিত হাজীদের তাওয়াফ সমাপন।',
    badgeEn: 'Makkah Al-Mukarramah',
    badgeBn: 'মক্কা আল-মুকাররমা',
    pilgrimCount: '180+ Pilgrims',
    imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1920&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=240&q=70',
    verifiedLabelEn: 'Verified Holy Landmark',
    verifiedLabelBn: 'পবিত্র হারামাইন শরীফ'
  },
  {
    id: 'madinah-nabawi',
    category: 'holy_site',
    titleEn: 'Al-Masjid an-Nabawi & Green Dome',
    titleBn: 'মসজিদে নববী ও পবিত্র রওজা শরিফ জিয়ারত',
    locationEn: 'Al-Masjid an-Nabawi, Madinah',
    locationBn: 'মসজিদে নববী, মদিনা মুনাওয়ারা',
    seasonEn: `Madinah Stay • ${getDynamicSeasonYear(0, 'en')}`,
    seasonBn: `মদিনা সফর • ${getDynamicSeasonYear(0, 'bn')}`,
    descriptionEn: 'Serene group prayers in the Prophet\'s Mosque courtyard with convenient hotel walking distance for senior pilgrims.',
    descriptionBn: 'মসজিদে নববীর শান্ত প্রাঙ্গণে জামাতে নামাজ ও প্রবীণ হাজীদের জন্য মারকাজিয়া এলাকার কাছে হোটেল সুবিধা।',
    badgeEn: 'Madinah Al-Munawwarah',
    badgeBn: 'মদিনা আল-মুনাওয়ারা',
    pilgrimCount: '40 Prayers Target',
    imageUrl: 'https://images.unsplash.com/photo-1565552684305-7e82845c0ec2?auto=format&fit=crop&w=1920&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1565552684305-7e82845c0ec2?auto=format&fit=crop&w=240&q=70',
    verifiedLabelEn: 'Direct Hotel Walkway',
    verifiedLabelBn: 'কাছের হোটেল সুবিধা'
  },
  {
    id: 'arafat-group',
    category: 'holy_site',
    titleEn: 'Mount of Mercy (Jabal al-Rahmah) & Arafat',
    titleBn: 'জাবালে রহমত ও আরাফাতের ঐতিহাসিক ময়দান',
    locationEn: 'Jabal ar-Rahmah, Arafat',
    locationBn: 'জাবালে রহমত, আরাফাত',
    seasonEn: '9th Dhul Hijjah (Wuqoof Day)',
    seasonBn: '৯ই জিলহজ্ব (ইয়াওমে আরাফাত)',
    descriptionEn: 'The highlight of Hajj: Collective gathering for Dua, Talbiyah, and heartfelt repentance on the sacred plains of Arafat.',
    descriptionBn: 'হজের শ্রেষ্ঠ দিন: আরাফাতের ঐতিহাসিক ময়দানে কাফেলার হাজীদের ঐক্যবদ্ধ তালবিয়া ও আবেগঘন সম্মিলিত মোনাজাত।',
    badgeEn: 'Wuqoof-e-Arafat',
    badgeBn: 'আরাফাতের ঐতিহাসিক দিন',
    pilgrimCount: 'All Hajis United',
    imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1920&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=240&q=70',
    verifiedLabelEn: 'Sacred Day of Hajj',
    verifiedLabelBn: 'হজের মূল দিন'
  },
  {
    id: 'mina-tents',
    category: 'holy_site',
    titleEn: 'Mina Valley Tent City & Jamarat',
    titleBn: 'মিনার তাঁবুর উপত্যকা ও সুশৃঙ্খল জামারাত',
    locationEn: 'Mina Valley, Makkah',
    locationBn: 'মিনা উপত্যকা, মক্কা',
    seasonEn: 'Days of Tashreeq (10-12 Dhul Hijjah)',
    seasonBn: 'আইয়ামে তাশরিক (১০-১২ জিলহজ্ব)',
    descriptionEn: 'Dedicated air-cooled tents in Mina with three fresh Bengali meals daily, medical staff, and scheduled Rami groups.',
    descriptionBn: 'মিনায় শীতাতপ নিয়ন্ত্রিত তাঁবু, প্রতিদিন তাজা দেশীয় খাবার, স্বাস্থ্যসেবা ও সুশৃঙ্খল জামারাত গমনাগমন।',
    badgeEn: 'Mina Camp Zone',
    badgeBn: 'মিনা জোন ক্যাম্প',
    pilgrimCount: 'Govt. Allocated Tents',
    imageUrl: 'https://images.unsplash.com/photo-1588032786477-96c21e649e39?auto=format&fit=crop&w=1920&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1588032786477-96c21e649e39?auto=format&fit=crop&w=240&q=70',
    verifiedLabelEn: 'Rawaf Mina Verified Camp',
    verifiedLabelBn: 'মন্ত্রণালয় অনুমোদিত মিনা ক্যাম্প'
  }
];

interface HeroImageCarouselProps {
  lang: Language;
  onOpenPreReg?: (pkg?: string) => void;
}

export const HeroImageCarousel: React.FC<HeroImageCarouselProps> = ({
  lang,
  onOpenPreReg
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'holy_site' | 'group' | 'ritual'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const SLIDE_DURATION = 5500; // 5.5 seconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Filtered slides
  const filteredSlides = HERO_SLIDES.filter(
    (slide) => selectedFilter === 'all' || slide.category === selectedFilter
  );

  // Ensure current index is within bounds of filtered list
  const activeIndex = currentIndex >= filteredSlides.length ? 0 : currentIndex;
  const currentSlide = filteredSlides[activeIndex] || HERO_SLIDES[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
    setProgress(0);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer for auto-sliding
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, filteredSlides.length, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredSlides.length, lightboxOpen]);

  return (
    <div className="w-full bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-[#BAE6FD] transition-all">
      
      {/* Header Bar: Title, Category Filters, and Play/Pause */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-[#0369A1] flex items-center gap-1.5">
              <span>{lang === 'en' ? 'Previous Groups & Holy Sites' : 'পূর্ববর্তী কাফেলা ও পবিত্র স্থানের ছবি'}</span>
              <span className="inline-flex items-center gap-1 bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                <Sparkles className="w-2.5 h-2.5 text-[#0284C7]" />
                {lang === 'en' ? 'Live Archive' : 'আর্কাইভ'}
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 bg-[#F0F9FF] p-1 rounded-xl border border-[#BAE6FD] text-[11px]">
          {[
            { id: 'all', labelEn: 'All', labelBn: 'সকল' },
            { id: 'holy_site', labelEn: 'Holy Sites', labelBn: 'পবিত্র স্থান' },
            { id: 'group', labelEn: 'Caravans', labelBn: 'হাজী কাফেলা' },
            { id: 'ritual', labelEn: 'Rites', labelBn: 'আমল' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedFilter(tab.id as any);
                setCurrentIndex(0);
                setProgress(0);
              }}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'en' ? tab.labelEn : tab.labelBn}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Stage Frame */}
      <div 
        className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9.5] bg-slate-950 group select-none cursor-pointer shadow-xs"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onClick={() => setLightboxOpen(true)}
      >
        {/* The Current Image */}
        <img
          key={currentSlide.id}
          src={currentSlide.imageUrl}
          alt={lang === 'en' ? currentSlide.titleEn : currentSlide.titleBn}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Scrim for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="bg-[#0284C7]/90 backdrop-blur-md text-white border border-sky-300/40 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
              <MapPin className="w-3 h-3 text-sky-200" />
              <span>{lang === 'en' ? currentSlide.badgeEn : currentSlide.badgeBn}</span>
            </span>

            <span className="bg-black/60 backdrop-blur-md text-sky-200 border border-white/20 text-[10px] font-semibold px-2 py-1 rounded-lg flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-sky-300" />
              <span>{lang === 'en' ? currentSlide.verifiedLabelEn : currentSlide.verifiedLabelBn}</span>
            </span>
          </div>

          {/* Expand / Lightbox Indicator */}
          <div className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-1.5 rounded-lg transition pointer-events-auto cursor-pointer flex items-center gap-1 text-[10px] font-semibold">
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'en' ? 'Enlarge' : 'বড় করে দেখুন'}</span>
          </div>
        </div>

        {/* Bottom Caption & Detail Information */}
        <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
          <div className="flex items-center gap-2 text-[11px] text-sky-200 font-bold mb-1">
            <Calendar className="w-3 h-3 text-sky-300" />
            <span>{lang === 'en' ? currentSlide.seasonEn : currentSlide.seasonBn}</span>
            {currentSlide.pilgrimCount && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1 text-sky-200">
                  <Users className="w-3 h-3" />
                  {currentSlide.pilgrimCount}
                </span>
              </>
            )}
          </div>

          <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-snug drop-shadow-md">
            {lang === 'en' ? currentSlide.titleEn : currentSlide.titleBn}
          </h3>

          <p className="text-[11px] sm:text-xs text-slate-200 mt-1 line-clamp-2 max-w-xl drop-shadow-sm leading-relaxed">
            {lang === 'en' ? currentSlide.descriptionEn : currentSlide.descriptionBn}
          </p>
        </div>

        {/* Left / Right Chevron Controls (Clickable) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition opacity-80 hover:opacity-100 backdrop-blur-sm cursor-pointer shadow-md"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition opacity-80 hover:opacity-100 backdrop-blur-sm cursor-pointer shadow-md"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Linear Progress Bar at bottom edge of image */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-[#0284C7] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Thumbnail Strip and Controls */}
      <div className="mt-3 flex items-center justify-between gap-2 pt-2">
        
        {/* Thumbnail Selector Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none flex-1">
          {filteredSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleSelectSlide(idx)}
              className={`relative flex-shrink-0 w-12 sm:w-14 h-8 sm:h-9 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'border-[#0284C7] ring-2 ring-[#0284C7]/30 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              title={lang === 'en' ? slide.titleEn : slide.titleBn}
            >
              <img
                src={slide.thumbnailUrl}
                alt={slide.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Controls: Play/Pause, Slide Counter, Consultation CTA */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-7 h-7 rounded-lg bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BAE6FD] text-slate-700 flex items-center justify-center transition cursor-pointer"
            title={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          <span className="text-[11px] font-mono font-bold text-slate-500 bg-[#F0F9FF] px-2 py-1 rounded-md border border-[#BAE6FD]">
            {activeIndex + 1} / {filteredSlides.length}
          </span>
        </div>
      </div>

      {/* Trust Quote / Assurance Under Carousel */}
      <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
          <span className="font-medium">
            {lang === 'en'
              ? 'Real archive photos from Al Mamun Hajj Kafela Khulna caravans.'
              : 'আল মামুন হজ্ব কাফেলা খুলনার বিগত হজ-ওমরাহ সফরের বাস্তব স্থিরচিত্র।'}
          </span>
        </div>

        {onOpenPreReg && (
          <button
            onClick={() => onOpenPreReg('Gallery Inquired Package')}
            className="text-[#0284C7] hover:underline font-bold text-[11px] flex-shrink-0 cursor-pointer hidden sm:inline"
          >
            {lang === 'en' ? 'Join Next Caravan →' : 'পরবর্তী কাফেলায় যুক্ত হন →'}
          </button>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-backdrop-fade"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 animate-modal-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar of Modal */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white bg-slate-900/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {lang === 'en' ? currentSlide.titleEn : currentSlide.titleBn}
                  </h4>
                  <div className="text-xs text-slate-400">
                    {lang === 'en' ? currentSlide.locationEn : currentSlide.locationBn} • {lang === 'en' ? currentSlide.seasonEn : currentSlide.seasonBn}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center">
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.titleEn}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next Chevrons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Description & Actions */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {lang === 'en' ? currentSlide.descriptionEn : currentSlide.descriptionBn}
                </p>
                <div className="flex items-center gap-3 text-xs text-sky-400 mt-2 font-medium">
                  <span>✦ Al Mamun Hajj Kafela, Khulna</span>
                  <span>•</span>
                  <span>Director: Mufti Amanullah</span>
                </div>
              </div>

              {onOpenPreReg && (
                <button
                  onClick={() => {
                    setLightboxOpen(false);
                    onOpenPreReg(lang === 'en' ? currentSlide.titleEn : currentSlide.titleBn);
                  }}
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition whitespace-nowrap cursor-pointer"
                >
                  {lang === 'en' ? 'Book Similar Package' : 'এই প্যাকেজে বুকিং দিন'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
