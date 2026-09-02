import React from 'react';
import { 
  CheckCircle2, 
  HeartHandshake, 
  Shield,
  PhoneCall
} from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
  onOpenPreReg: (packageName?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenPreReg }) => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Decorative & Info Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#E5E7EB] relative z-10">
            <div className="bg-[#0284C7] text-white rounded-2xl p-8 sm:p-10 text-center shadow-inner">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 border border-[#BAE6FD] rounded-2xl shadow-sm flex items-center justify-center text-[#0284C7] text-3xl">
                <HeartHandshake className="w-9 h-9 text-[#0284C7]" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {lang === 'en' ? 'AL MAMUN HAJJ KAFELA' : 'আল মামুন হজ্ব কাফেলা'}
              </h4>
              <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'Dedicated to your spiritual peace, safety, and comfortable holy journey in Khulna.'
                  : 'পবিত্র মক্কা ও মদিনায় হাজীদের আত্মিক প্রশান্তি ও নির্ভরযোগ্য সুন্নাহভিত্তিক সেবায় নিবেদিত।'}
              </p>
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-center gap-6 text-left">
                <div>
                  <div className="text-lg font-extrabold text-[#0284C7] font-mono">খুলনা</div>
                  <div className="text-[10px] text-emerald-100">
                    {lang === 'en' ? 'Power House More' : 'পাওয়ার হাউজ মোড়'}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div>
                  <div className="text-lg font-extrabold text-[#0284C7] font-mono">100%</div>
                  <div className="text-[10px] text-emerald-100">
                    {lang === 'en' ? 'Sunnah Guided' : 'সুন্নাহ সম্মত'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-white rounded-2xl p-4 shadow-md border border-[#E5E7EB] flex items-center gap-3 z-20">
            <div className="w-11 h-11 rounded-xl bg-[#0284C7] text-[#0284C7] font-extrabold text-lg flex items-center justify-center shadow-sm font-mono">
              11+
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#0369A1]">
                {lang === 'en' ? 'Years of Excellence' : 'বছরের নির্ভরযোগ্য সেবা'}
              </div>
              <div className="text-[10px] text-slate-500">
                {lang === 'en' ? 'Khulna, Bangladesh' : 'পাওয়ার হাউজ মোড়, খুলনা'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Descriptive Content */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-[#0284C7]" />
            {lang === 'en' ? 'About Al Mamun Hajj Kafela' : 'আল মামুন হজ্ব কাফেলা পরিচিতি'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0369A1] tracking-tight leading-tight mb-6">
            {lang === 'en'
              ? 'Guiding thousands of families to the Two Holy Mosques with honour and care.'
              : 'পবিত্র দুই মসজিদে হাজীদের বিশ্বস্ত, সুন্নাহসম্মত ও নির্ভরযোগ্য পথপ্রদর্শক।'}
          </h2>
          <p className="text-[#334155] leading-relaxed text-sm mb-8">
            {lang === 'en'
              ? 'From the first consultation in our Khulna office to your safe return home, we provide transparent and compassionate support for every single step of your Hajj or Umrah journey. Under the continuous guidance of Shariah Consultant Mufti Amanullah, we ensure full Sunnah compliance, comfortable accommodations, and personalized care.'
              : 'খুলনার পাওয়ার হাউজ মোড় অফিসে প্রথম পরামর্শ সভা ও নিবন্ধন থেকে শুরু করে পবিত্র সফর সম্পন্ন করে দেশে নিরাপদে ফেরা পর্যন্ত প্রতিটি ধাপে আমরা নিশ্চিত করি নির্ভরযোগ্য সেবা। শরিয়াহ কনসালটেন্ট আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ সাহেবের সরাসরি তত্ত্বাবধানে সহীহ তরিকায় হজ ও ওমরাহ পালনে আমরা বদ্ধপরিকর।'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-semibold text-[#334155] mb-8">
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? 'Ministry Verified Visa & Direct Flights' : 'মন্ত্রণালয় অনুমোদিত ভিসা ও সরাসরি বিমান টিকিট'}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? 'Premium Close-to-Haram Hotels' : 'হারামের কাছে উন্নতমানের হোটেল আবাসন'}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? 'In-depth Pre-departure Training' : 'হজপূর্ব বিশেষ প্রশিক্ষণ কর্মশালা ও সহীহ বই'}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? '24/7 Dedicated Mu\'allim & Doctor Team' : 'সার্বক্ষণিক অভিজ্ঞ মুয়াল্লিম ও চিকিৎসা সহায়তা'}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenPreReg('General Inquiry')}
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-sm transition cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-sky-200" />
              <span>{lang === 'en' ? 'Speak with our Advisor' : 'আমাদের উপদেষ্টার সাথে কথা বলুন'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
