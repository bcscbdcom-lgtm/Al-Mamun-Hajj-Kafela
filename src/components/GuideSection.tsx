import React from 'react';
import { GraduationCap, Languages, Users, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { guidesData } from '../data/guides';

interface GuideSectionProps {
  lang: Language;
  onOpenPreReg: () => void;
}

export const GuideSection: React.FC<GuideSectionProps> = ({ lang, onOpenPreReg }) => {
  const leadScholar = guidesData[0];

  return (
    <section id="guides" className="py-20 bg-gradient-to-br from-sky-800 via-sky-900 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sky-200 font-bold uppercase tracking-wider text-xs bg-sky-950/60 border border-sky-400/30 px-3.5 py-1 rounded-full inline-block">
            {lang === 'en' ? 'SPIRITUAL MENTORS & GUIDES' : 'আমাদের সম্মানিত আলেম মেন্টরবৃন্দ'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {lang === 'en'
              ? 'Spiritual guidance from trusted scholars and mentors.'
              : 'বিজ্ঞ ও প্রখ্যাত আলেমদের সরাসরি তত্ত্বাবধানে পবিত্র সফর।'}
          </h2>
          <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed mt-3">
            {lang === 'en'
              ? 'Each Al Mamun Hajj Kafela group is accompanied by certified Islamic scholars with deep knowledge of Hajj rites, Arabic, and holy places. They walk every step with you — from the first Niyyah to your safe return home.'
              : 'আল মামুন হজ্ব কাফেলার প্রতিটি কাফেলা অভিজ্ঞ আলেম ও মুফতি আমানুল্লাহ সাহেবের নেতৃত্বে পরিচালিত হয়। ইহরাম বাঁধা থেকে শুরু করে প্রতিটি রোকন সহীহভাবে পালনে আপনি পাবেন সার্বক্ষণিক দিকনির্দেশনা।'}
          </p>
        </div>

        {/* Feature Grid with Selected Scholar Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Guide Image & Card */}
          <div className="lg:col-span-5">
            <div className="w-full max-w-sm lg:max-w-[380px] mx-auto flex flex-col rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-300/60 bg-white">
              <div className="relative w-full h-[480px] md:h-[490px] bg-gradient-to-b from-sky-600 via-sky-700 to-sky-800 overflow-hidden flex items-end justify-center">
                <img 
                  src="./mufti-amanullah.png" 
                  alt={lang === 'en' ? leadScholar.nameEn : 'আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ'} 
                  className="w-full h-full object-contain md:object-cover object-bottom transition-none"
                />
              </div>
              <div className="bg-white py-3.5 px-4 text-center border-t border-sky-100 shrink-0">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-1.5">
                  {lang === 'en' ? leadScholar.nameEn : 'আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ'}
                  <span className="inline-block w-4 h-4 text-amber-500">✓</span>
                </h3>
                <p className="text-xs md:text-sm text-sky-800 font-medium mt-0.5">
                  {lang === 'en' 
                    ? 'Vice Principal | Shariah Consultant & Director, Al Mamun Hajj Kafela'
                    : 'ভাইস প্রিন্সিপাল | শরীয়াহ কনসালট্যান্ট ও পরিচালক, আল মামুন হজ্ব কাফেলা'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Scholar Bio & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-sky-300 text-xs font-bold mb-2">
                <Sparkles className="w-4 h-4 text-sky-300" />
                <span>{lang === 'en' ? 'SCHOLAR SPOTLIGHT' : 'নির্বাচিত আলেম মেন্টর'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {lang === 'en' ? leadScholar.nameEn : leadScholar.nameBn}
              </h3>
              <p className="text-sky-100/90 text-sm leading-relaxed mt-3">
                {lang === 'en'
                  ? 'Vice Principal, Al Jamiatul Arabia Khadizatul Kubra Madrasah (Shahid Abul Road, Sheikhpara, Khulna) and Shariah Consultant & Director, Al Mamun Hajj Kafela. Prominent Islamic scholar with deep knowledge of Fiqh al-Hajj and authentic Sunnah pilgrimage rites.'
                  : 'ভাইস প্রিন্সিপাল, আল জামিয়াতুল আরাবিয়া খাদিজাতুল কুবরা মাদ্রাসা (শহিদ আবুল সড়ক, শেখপাড়া, খুলনা) এবং শরীয়াহ কনসালট্যান্ট ও পরিচালক, আল মামুন হজ্ব কাফেলা। পবিত্র কুরআন ও সুন্নাহর আলোকে হাজীদের সরাসরি প্রশিক্ষণ ও দিকনির্দেশনা প্রদান করেন।'}
              </p>
            </div>

            {/* Specialties Badges */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-200 mb-3">
                {lang === 'en' ? 'Core Areas of Guidance' : 'যে সকল বিষয়ে সেবা প্রদান করেন'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(lang === 'en' ? leadScholar.specialtiesEn : leadScholar.specialtiesBn).map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-sky-950/60 border border-sky-400/30 p-2.5 rounded-xl text-xs text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-6">
              <button
                onClick={onOpenPreReg}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-lg flex items-center gap-2 cursor-pointer border border-emerald-400/40"
              >
                <span>{lang === 'en' ? 'Consult with Scholar' : 'আলেমদের সাথে সরাসরি কথা বলুন'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 3 Core Strengths of Guide Team */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-sky-700/50">
          <div className="bg-sky-950/50 border border-sky-400/30 rounded-2xl p-5 backdrop-blur-sm">
            <GraduationCap className="w-6 h-6 text-sky-300 mb-3" />
            <div className="text-base font-bold text-white">
              {lang === 'en' ? 'Certified Scholars' : 'সনদপ্রাপ্ত বিজ্ঞ আলেম'}
            </div>
            <p className="text-sky-100/90 text-sm leading-relaxed mt-1">
              {lang === 'en'
                ? 'Scholars versed in Hanafi, Shafi\'i and all authentic schools of Fiqh.'
                : 'কুরআন ও সহীহ সুন্নাহর আলোকে সকল মাসআলায় সার্বক্ষণিক নির্ভরযোগ্য ফতোয়া সমাধান।'}
            </p>
          </div>

          <div className="bg-sky-950/50 border border-sky-400/30 rounded-2xl p-5 backdrop-blur-sm">
            <Languages className="w-6 h-6 text-sky-300 mb-3" />
            <div className="text-base font-bold text-white">
              {lang === 'en' ? 'Multilingual Support' : 'বহুভাষিক সাবলীল যোগাযোগ'}
            </div>
            <p className="text-sky-100/90 text-sm leading-relaxed mt-1">
              {lang === 'en'
                ? 'Fluent in Bangla, Arabic, Urdu and English for seamless on-ground communication.'
                : 'বাংলা, আরবি, উর্দু ও ইংরেজিতে সাবলীলভাবে সৌদি কর্তৃপক্ষ ও মাঠের সাথে সমন্বয়।'}
            </p>
          </div>

          <div className="bg-sky-950/50 border border-sky-400/30 rounded-2xl p-5 backdrop-blur-sm">
            <Users className="w-6 h-6 text-sky-300 mb-3" />
            <div className="text-base font-bold text-white">
              {lang === 'en' ? 'Small Group Ratio' : 'ছোট গ্রুপ ও নিবিড় যত্ন'}
            </div>
            <p className="text-sky-100/90 text-sm leading-relaxed mt-1">
              {lang === 'en'
                ? 'Max 25–30 pilgrims per dedicated mentor ensures personal care during rituals.'
                : 'প্রতি ২৫–৩০ জন হাজীর জন্য একজন নিবেদিত আলেম থাকায় তাওয়াফ ও সাঈতে কোনো বিশৃঙ্খলা হয় না।'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
