import React, { useState } from 'react';
import {
  Calendar,
  Luggage,
  BookOpen,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Compass,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { DayByDayPlanner } from './DayByDayPlanner';
import { SmartPackingList } from './SmartPackingList';

interface PilgrimToolsProps {
  lang: Language;
  onOpenPreReg: (customDetails?: string) => void;
  onOpenPrintModal?: (data?: any) => void;
  onOpenWalkthrough?: () => void;
}

interface StepOverview {
  numBn: string;
  numEn: string;
  dateBn?: string;
  dateEn?: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
}

export const PilgrimTools: React.FC<PilgrimToolsProps> = ({
  lang,
  onOpenPreReg,
  onOpenPrintModal,
  onOpenWalkthrough,
}) => {
  // Accordion state: null means all collapsed by default
  const [expandedItem, setExpandedItem] = useState<'itinerary' | 'checklist' | 'guide' | null>(null);
  
  // Quick Visual Guide tab state for item 3
  const [guideType, setGuideType] = useState<'hajj' | 'umrah'>('hajj');

  const toggleAccordion = (item: 'itinerary' | 'checklist' | 'guide') => {
    setExpandedItem((prev) => (prev === item ? null : item));
  };

  const hajjOverviewSteps: StepOverview[] = [
    {
      numBn: '১',
      numEn: '1',
      dateBn: '৮ই জিলহজ্ব',
      dateEn: '8th Dhul Hijjah',
      titleBn: 'মিনায় যাত্রা ও অবস্থান',
      titleEn: 'Departure to Mina (Yawm at-Tarwiyah)',
      descBn: 'ইহরাম পরিধান করে মিনায় গমন এবং পাঁচ ওয়াক্ত নামাজ আদায়।',
      descEn: 'Enter Ihram, journey to Mina tent city and pray 5 daily prayers.',
    },
    {
      numBn: '২',
      numEn: '2',
      dateBn: '৯ই জিলহজ্ব (দিন)',
      dateEn: '9th Dhul Hijjah (Day)',
      titleBn: 'আরাফাতের ময়দানে অবস্থান',
      titleEn: 'Day of Arafat (Wuquf)',
      descBn: 'হজের প্রধান ফরজ আমল — যোহর-আসর একত্র আদায় ও দোয়া।',
      descEn: 'The core pillar of Hajj — stand at Mount Arafat in heartfelt supplication.',
    },
    {
      numBn: '৩',
      numEn: '3',
      dateBn: '৯ই জিলহজ্ব (রাত)',
      dateEn: '9th Dhul Hijjah (Night)',
      titleBn: 'মুযদালিফায় রাতযাপন',
      titleEn: 'Night at Muzdalifah',
      descBn: 'মাগরিব ও এশা একত্র আদায় এবং পাথর সংগ্রহ।',
      descEn: 'Combine Maghrib & Isha, rest under the open sky and collect pebbles.',
    },
    {
      numBn: '৪',
      numEn: '4',
      dateBn: '১০ই জিলহজ্ব (ঈদের দিন)',
      dateEn: '10th Dhul Hijjah (Eid Day)',
      titleBn: 'বড় জামারায় কঙ্কর, কুরবানী ও হলক',
      titleEn: 'Ramy, Qurbani & Halq',
      descBn: 'বড় জামারায় ৭টি পাথর নিক্ষেপ, পশু কুরবানী ও মাথা মুণ্ডন।',
      descEn: 'Stone Jamarat al-Aqaba, perform sacrifice and shave head (Tahal-lul).',
    },
    {
      numBn: '৫',
      numEn: '5',
      dateBn: '১০-১২ই জিলহজ্ব',
      dateEn: '10th–12th Dhul Hijjah',
      titleBn: 'তাওয়াফে জিয়ারত ও বিদায়ী তাওয়াফ',
      titleEn: 'Tawaf al-Ifadah & Farewell',
      descBn: 'ফরজ তাওয়াফে জিয়ারত, সাঈ এবং আইয়ামে তাশরিকের কঙ্কর নিক্ষেপ।',
      descEn: 'Obligatory Tawaf al-Ifadah, Sa’i and stoning all 3 Jamarat pillars.',
    },
  ];

  const umrahOverviewSteps: StepOverview[] = [
    {
      numBn: '১',
      numEn: '1',
      titleBn: 'মিকাতে ইহরাম ও নিয়ত',
      titleEn: 'Ihram & Sacred Intention',
      descBn: 'মিকাত সীমানার পূর্বে গোসল, সাদা পোশাক ও তালবিয়া পাঠ।',
      descEn: 'Purification bath, wearing 2 white sheets, and making Niyyah at Meeqat.',
    },
    {
      numBn: '২',
      numEn: '2',
      titleBn: 'কাবা শরীফ তাওয়াফ',
      titleEn: 'Tawaf Around the Ka’bah',
      descBn: 'হাজরে আসওয়াদ থেকে শুরু করে ঘড়ির উল্টো দিকে ৭ চক্কর।',
      descEn: '7 anti-clockwise circuits around the Holy Ka’bah starting at Black Stone.',
    },
    {
      numBn: '৩',
      numEn: '3',
      titleBn: 'সাফা ও মারওয়ায় সাঈ',
      titleEn: 'Sa’i Between Safa & Marwah',
      descBn: 'সাফা থেকে শুরু করে মারওয়া পর্যন্ত ৭ বার অতিক্রম।',
      descEn: 'Walk briskly between the hills of Safa and Marwah 7 times with Dua.',
    },
    {
      numBn: '৪',
      numEn: '4',
      titleBn: 'হলক বা কসর (চুল কাটা)',
      titleEn: 'Halq or Taqsir',
      descBn: 'পুরুষদের মাথা মুণ্ডন বা চুল ছাঁটা; নারীদের আঙুলের এক কর পরিমাণ কাটা।',
      descEn: 'Shaving the head or trimming hair to exit the sacred state of Ihram.',
    },
  ];

  return (
    <section id="tools" className="py-14 sm:py-18 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>{lang === 'en' ? 'Smart Pilgrim Utilities' : 'হাজীদের জন্য স্মার্ট সুবিধা'}</span>
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
          {lang === 'en'
            ? 'Essential Guides & Smart Tools for Pilgrims'
            : 'হাজীদের সুবিধার্থে প্রয়োজনীয় গাইড ও টুলস'}
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
          {lang === 'en'
            ? 'Access your day-by-day itinerary, interactive packing checklist, and visual step-by-step rituals in a clean collapsible view.'
            : 'আপনার পবিত্র সফরের প্রস্তুতিকে সহজ ও সুশৃঙ্খল করতে দিনভিত্তিক সফরসূচি, স্মার্ট প্যাকিং তালিকা এবং ভিজ্যুয়াল প্রশিক্ষণ গাইড।'}
        </p>
      </div>

      {/* Sleek Collapsible Accordion Cards */}
      <div className="space-y-3.5">
        {/* 1. Daily Itinerary & Day-by-day Plan */}
        <div className="bg-white rounded-2xl border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-2xs overflow-hidden">
          <button
            type="button"
            onClick={() => toggleAccordion('itinerary')}
            className="w-full px-5 py-4 sm:py-4.5 flex items-center justify-between text-left transition-colors hover:bg-sky-50/40 cursor-pointer focus:outline-hidden"
            aria-expanded={expandedItem === 'itinerary'}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center shrink-0 border border-sky-200/80">
                <Calendar className="w-5 h-5 text-[#0284C7]" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {lang === 'en' ? '🗓️ Daily Itinerary & Day-by-Day Plan' : '🗓️ দৈনিক সফরসূচি ও দিনভিত্তিক পরিকল্পনা'}
                  </h3>
                  <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 bg-sky-50 text-[#0284C7] rounded-full border border-sky-200">
                    {lang === 'en' ? 'Day-by-Day Timeline' : 'দিনভিত্তিক টাইমলাইন'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {lang === 'en'
                    ? 'Complete day-by-day ritual timeline from Dhaka to Makkah, Madinah & Core Hajj days.'
                    : 'ঢাকা থেকে মক্কা-মদিনা ও হজের ৫ দিনের দিনভিত্তিক কার্যক্রম ও দিকনির্দেশনা।'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-3">
              <span className="text-xs font-semibold text-slate-400 hidden md:inline">
                {expandedItem === 'itinerary'
                  ? lang === 'en' ? 'Collapse' : 'সংক্ষেপ করুন'
                  : lang === 'en' ? 'Expand' : 'বিস্তারিত দেখুন'}
              </span>
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 text-slate-600 transition-transform duration-300 ${
                  expandedItem === 'itinerary' ? 'rotate-180 bg-sky-100 text-[#0284C7]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expanded Content */}
          {expandedItem === 'itinerary' && (
            <div className="border-t border-slate-100 p-4 sm:p-6 bg-slate-50/40 animate-in slide-in-from-top-2 duration-200">
              <DayByDayPlanner
                lang={lang}
                onOpenPrintModal={(plannerData) => {
                  if (onOpenPrintModal) onOpenPrintModal(plannerData);
                }}
                onOpenPreReg={onOpenPreReg}
              />
            </div>
          )}
        </div>

        {/* 2. Interactive Packing Checklist */}
        <div className="bg-white rounded-2xl border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-2xs overflow-hidden">
          <button
            type="button"
            onClick={() => toggleAccordion('checklist')}
            className="w-full px-5 py-4 sm:py-4.5 flex items-center justify-between text-left transition-colors hover:bg-sky-50/40 cursor-pointer focus:outline-hidden"
            aria-expanded={expandedItem === 'checklist'}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center shrink-0 border border-sky-200/80">
                <Luggage className="w-5 h-5 text-[#0284C7]" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {lang === 'en' ? '🧳 Smart Packing Checklist' : '🧳 স্মার্ট প্যাকিং তালিকা ও প্রস্তুতি চেকলিস্ট'}
                  </h3>
                  <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                    {lang === 'en' ? 'Interactive Checklist' : 'ইন্টারঅ্যাক্টিভ চেকলিস্ট'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {lang === 'en'
                    ? 'Interactive checklist for Ihram, essential attire, medical kit, electronics & documents.'
                    : 'ইহরাম, প্রয়োজনীয় পোশাক, ঔষধপত্র ও দরকারি কাগজপত্রের ইন্টারঅ্যাক্টিভ চেকলিস্ট।'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-3">
              <span className="text-xs font-semibold text-slate-400 hidden md:inline">
                {expandedItem === 'checklist'
                  ? lang === 'en' ? 'Collapse' : 'সংক্ষেপ করুন'
                  : lang === 'en' ? 'Expand' : 'বিস্তারিত দেখুন'}
              </span>
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 text-slate-600 transition-transform duration-300 ${
                  expandedItem === 'checklist' ? 'rotate-180 bg-sky-100 text-[#0284C7]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expanded Content */}
          {expandedItem === 'checklist' && (
            <div className="border-t border-slate-100 p-4 sm:p-6 bg-slate-50/40 animate-in slide-in-from-top-2 duration-200">
              <SmartPackingList lang={lang} onOpenPreReg={onOpenPreReg} />
            </div>
          )}
        </div>

        {/* 3. Visual Step-by-Step Guide */}
        <div className="bg-white rounded-2xl border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-2xs overflow-hidden">
          <button
            type="button"
            onClick={() => toggleAccordion('guide')}
            className="w-full px-5 py-4 sm:py-4.5 flex items-center justify-between text-left transition-colors hover:bg-sky-50/40 cursor-pointer focus:outline-hidden"
            aria-expanded={expandedItem === 'guide'}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center shrink-0 border border-sky-200/80">
                <BookOpen className="w-5 h-5 text-[#0284C7]" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {lang === 'en' ? '🕋 Hajj & Umrah Visual Step-by-Step Guide' : '🕋 হজ ও ওমরাহ ভিজ্যুয়াল গাইড'}
                  </h3>
                  <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200">
                    {lang === 'en' ? 'Visual Walkthrough' : 'সচিত্র দিকনির্দেশনা'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {lang === 'en'
                    ? 'Step-by-step illustrated walkthrough of Ihram, Tawaf, Sa’i, Mina, Arafat & sacred Duas.'
                    : 'হজ ও ওমরাহর প্রতিটি রুকন, তাওয়াফ, সাঈ ও দোয়ার সহজ সচিত্র দিকনির্দেশনা।'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-3">
              <span className="text-xs font-semibold text-slate-400 hidden md:inline">
                {expandedItem === 'guide'
                  ? lang === 'en' ? 'Collapse' : 'সংক্ষেপ করুন'
                  : lang === 'en' ? 'Expand' : 'বিস্তারিত দেখুন'}
              </span>
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 text-slate-600 transition-transform duration-300 ${
                  expandedItem === 'guide' ? 'rotate-180 bg-sky-100 text-[#0284C7]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expanded Content */}
          {expandedItem === 'guide' && (
            <div className="border-t border-slate-100 p-4 sm:p-6 bg-slate-50/40 animate-in slide-in-from-top-2 duration-200 space-y-5">
              {/* Top Controls: Hajj vs Umrah Switcher & Full Guide Launcher */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="inline-flex bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setGuideType('hajj')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      guideType === 'hajj'
                        ? 'bg-[#0284C7] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'en' ? 'Hajj 5 Days (8–12 Dhul Hijjah)' : 'হজের ৫ দিন (৮–১২ই জিলহজ্ব)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setGuideType('umrah')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      guideType === 'umrah'
                        ? 'bg-[#0284C7] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'en' ? 'Umrah 4 Core Pillars' : 'ওমরাহর ৪টি মূল আমল'}
                  </button>
                </div>

                {onOpenWalkthrough && (
                  <button
                    type="button"
                    onClick={onOpenWalkthrough}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#0284C7] bg-sky-50 hover:bg-sky-100 rounded-xl border border-sky-200 transition shadow-2xs cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Launch Full Interactive Walkthrough & Audio Duas' : 'সম্পূর্ণ অডিও ও ভিজ্যুয়াল গাইড ওপেন করুন'}</span>
                  </button>
                )}
              </div>

              {/* Step Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {(guideType === 'hajj' ? hajjOverviewSteps : umrahOverviewSteps).map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-sky-300 transition"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-black flex items-center justify-center border border-sky-200">
                          {lang === 'en' ? step.numEn : step.numBn}
                        </span>
                        {'dateBn' in step && (
                          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            {lang === 'en' ? step.dateEn : step.dateBn}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">
                        {lang === 'en' ? step.titleEn : step.titleBn}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {lang === 'en' ? step.descEn : step.descBn}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#0284C7] font-semibold">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        {lang === 'en' ? 'Sunnah & Rulings' : 'সুন্নত ও বিধান'}
                      </span>
                      {onOpenWalkthrough && (
                        <button
                          type="button"
                          onClick={onOpenWalkthrough}
                          className="hover:underline cursor-pointer flex items-center gap-0.5 text-slate-500 hover:text-[#0284C7]"
                        >
                          <span>{lang === 'en' ? 'View Dua' : 'দোয়া দেখুন'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Compass className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>
                    {lang === 'en'
                      ? 'Need personalized guidance from experienced scholars during the journey?'
                      : 'সফরের প্রতিটি আমল ও মাসআলায় অভিজ্ঞ আলেমদের সার্বক্ষণিক দিকনির্দেশনা পেতে যোগাযোগ করুন।'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenPreReg('Scholar Guidance')}
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 rounded-lg font-bold shadow-2xs transition cursor-pointer shrink-0"
                >
                  {lang === 'en' ? 'Inquire with Scholar' : 'আলেম গাইডের পরামর্শ নিন'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

