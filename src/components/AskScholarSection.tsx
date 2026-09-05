import React from 'react';
import { BookOpen, PhoneCall, MessageCircle, Send } from 'lucide-react';
import { Language } from '../types';
import { getScholarWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/inquiryTracker';

interface AskScholarSectionProps {
  lang: Language;
  onOpenAskModal?: () => void;
  onOpenPreReg?: (packageName?: string) => void;
}

export const AskScholarSection: React.FC<AskScholarSectionProps> = ({
  lang,
  onOpenAskModal,
  onOpenPreReg
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-sm max-w-4xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Scholar Photo Frame */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-44 h-44 md:w-48 md:h-48 mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-sky-100 via-slate-100 to-slate-200 border-2 border-amber-400/40 shadow-xl flex items-end justify-center">
            <img 
              src="./mufti-amanullah.png" 
              alt="আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Info & Call to Action */}
        <div className="md:col-span-8 space-y-3 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Direct Fatwa & Guidance' : 'অনুমোদিত ফতোয়া ও শরিয়াহ সেবা'}
          </span>
          <h3 className="text-xl font-bold text-[#0369A1]">
            {lang === 'en' ? 'Ask Mufti Amanullah directly' : 'মুফতী আমানুল্লাহ সাহেবের নিকট প্রশ্ন ও ফতোয়া'}
          </h3>
          <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
            {lang === 'en'
              ? 'Get authentic Quran and Sunnah guidance for your Hajj & Umrah preparation directly from our Shariah Consultant & Director.'
              : 'হজ ও ওমরাহর যেকোনো মাসআলা, নিয়ত, ইহরাম, তাওয়াফ ও সাঈ সংক্রান্ত প্রশ্নের সহীহ সমাধান পান সরাসরি আমাদের প্রধান আলেম উপদেষ্টার কাছ থেকে।'}
          </p>

          <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
            {onOpenAskModal && (
              <button
                onClick={onOpenAskModal}
                className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Submit Question' : 'প্রশ্ন জমা দিন'}</span>
              </button>
            )}
            <a
              href={getScholarWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({
                  id: 'ask_scholar_section_inquiry',
                  nameEn: 'Scholar Advisory Card WhatsApp',
                  nameBn: 'আলেম উপদেষ্টা কার্ড হোয়াটসঅ্যাপ',
                  type: 'scholar',
                  source: 'ask_scholar_section_card',
                });
              }}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'WhatsApp Advisory' : 'হোয়াটসঅ্যাপে প্রশ্ন করুন'}</span>
            </a>
            <a
              href="tel:+8801712864077"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>01712-864077</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
