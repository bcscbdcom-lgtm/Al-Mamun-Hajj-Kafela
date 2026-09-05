import React from 'react';
import { Sparkles, GraduationCap, CheckCircle2, ChevronRight, PhoneCall, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { getScholarWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/inquiryTracker';

interface ScholarSectionProps {
  lang: Language;
  onOpenPreReg: (packageName?: string) => void;
}

export const ScholarSection: React.FC<ScholarSectionProps> = ({ lang, onOpenPreReg }) => {
  return (
    <section id="scholar-spotlight" className="py-16 bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {lang === 'en' ? 'RESIDENT SHARIAH CONSULTANT' : 'প্রধান শরিয়াহ উপদেষ্টা ও পথপ্রদর্শক'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Direct Guidance by Mufti Amanullah' : 'আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ'}
          </h2>
          <p className="text-xs sm:text-sm text-sky-200/90 mt-2 leading-relaxed">
            {lang === 'en'
              ? 'Vice Principal, Al Jamiatul Arabia Khadizatul Kubra Madrasah, and Shariah Consultant & Director, Al Mamun Hajj Kafela'
              : 'ভাইস প্রিন্সিপাল, আল জামিয়াতুল আরাবিয়া খাদিজাতুল কুবরা মাদ্রাসা, এবং শরীয়াহ কনসালট্যান্ট ও পরিচালক, আল মামুন হজ্ব কাফেলা'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-sky-950/60 border border-sky-800/50 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-2xl">
          
          {/* Photo Frame & Designation Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm lg:max-w-[380px] mx-auto flex flex-col rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-300/60 bg-white">
              <div className="relative w-full h-[480px] md:h-[490px] bg-gradient-to-b from-sky-600 via-sky-700 to-sky-800 overflow-hidden flex items-end justify-center">
                <img 
                  src="./mufti-amanullah.png" 
                  alt="আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ" 
                  className="w-full h-full object-contain md:object-cover object-bottom transition-none"
                />
              </div>
              <div className="bg-white py-3.5 px-4 text-center border-t border-sky-100 shrink-0">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center justify-center gap-1.5">
                  {lang === 'en' ? 'Al-Haj Hazrat Mawlana Mufti Amanullah' : 'আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ'}
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

          {/* Bio & Details */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? '22+ Years Sunnah Hajj Guidance' : '২২+ বছরের নির্ভরযোগ্য হজ পরিচালনা'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {lang === 'en' ? 'Authentic Sunnah Pilgrimage Guidance' : 'সহীহ সুন্নাহ মোতাবেক হজ ও ওমরাহ দিকনির্দেশনা'}
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/90 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'Vice Principal, Al Jamiatul Arabia Khadizatul Kubra Madrasah (Shahid Abul Road, Sheikhpara, Khulna) and Shariah Consultant & Director, Al Mamun Hajj Kafela. Eminent Islamic scholar providing authentic Sunnah guidelines for Tawaf, Sa\'i, Mina, Arafat, and Muzdalifah. Personally accompanies pilgrims from Khulna and provides continuous religious supervision throughout the journey.'
                  : 'ভাইস প্রিন্সিপাল, আল জামিয়াতুল আরাবিয়া খাদিজাতুল কুবরা মাদ্রাসা (শহিদ আবুল সড়ক, শেখপাড়া, খুলনা) এবং শরীয়াহ কনসালট্যান্ট ও পরিচালক, আল মামুন হজ্ব কাফেলা। কুরআন ও সহীহ সুন্নাহ মোতাবেক হজ ও ওমরাহর রোকনসমূহের নিখুঁত আমল পরিচালনায় প্রতিশ্রুতিবদ্ধ। খুলনার প্রাক-হজ নিয়মিত কর্মশালা ও মক্কা-মদিনায় সার্বক্ষণিক হাজীদের সঙ্গে থেকে তওয়াফ, সাঈ, মিনা ও আরাফাতে ব্যক্তিগত তত্ত্বাবধান করেন।'}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              {[
                lang === 'en' ? 'Practical Pre-Hajj workshops & step-by-step training sessions in Khulna' : 'খুলনায় প্রাক-হজ ব্যবহারিক কর্মশালা ও ধারাবাহিক প্রশিক্ষণ প্রদান',
                lang === 'en' ? 'Personal 24/7 on-site guidance in Makkah, Madinah, Mina & Arafat' : 'মক্কা, মদিনা, মিনা ও আরাফাতে সার্বক্ষণিক প্রত্যক্ষ তত্ত্বাবধান',
                lang === 'en' ? 'Specialist in Fiqh al-Hajj & dedicated guidance for female pilgrims' : 'হজের সহীহ ফিকাহ, মাসায়েল ও মহিলা হাজীদের বিশেষ দিকনির্দেশনা',
                lang === 'en' ? 'Instant Shariah consultation and rulings for pilgrims throughout the journey' : 'হজ বিষয়ক যে কোনো জিজ্ঞাসা ও মাসআলায় তাৎক্ষণিক শরিয়াহ সমাধান'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start gap-2 text-xs text-sky-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={() => onOpenPreReg('Scholar Consultation')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-lg flex items-center gap-2 cursor-pointer border border-emerald-400/30"
              >
                <span>{lang === 'en' ? 'Consult with Mufti Amanullah' : 'মুফতী সাহেবের নিকট ধর্মীয় প্রশ্ন পাঠান'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href={getScholarWhatsAppLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick({
                    id: 'scholar_advisory',
                    nameEn: 'Scholar Guidance & Fiqh',
                    nameBn: 'আলেমদের শরীয়াহ ও মাসআলা পরামর্শ',
                    type: 'scholar',
                    source: 'scholar_section',
                  });
                }}
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs px-4 py-3 rounded-xl transition flex items-center gap-2 border border-emerald-300/40 shadow-sm cursor-pointer"
                title={lang === 'en' ? 'Direct WhatsApp with Scholar' : 'আলেমদের সাথে সরাসরি কথা বলুন'}
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>{lang === 'en' ? 'WhatsApp Advisory' : 'আলেমদের সাথে সরাসরি কথা বলুন'}</span>
              </a>
              <a
                href="tel:+8801712864077"
                className="bg-sky-800/80 hover:bg-sky-700 text-white font-bold text-xs px-4 py-3 rounded-xl transition flex items-center gap-2 border border-sky-600/40"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-300" />
                <span>01712-864077</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
