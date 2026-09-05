import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/inquiryTracker';

interface FloatingActionsProps {
  lang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-slate-900/90 hover:bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-slate-700 cursor-pointer"
          title={lang === 'en' ? 'Back to top' : 'উপরে যান'}
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Direct Call */}
      <a
        href="tel:+8801712864077"
        className="w-11 h-11 bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105"
        title="Call 01712-864077"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* WhatsApp Inquiry Action Button with Notification Pulse */}
      <a
        href={getGeneralWhatsAppLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackWhatsAppClick({
            id: 'general_floating',
            nameEn: 'Floating WhatsApp Action',
            nameBn: 'ফ্লোটিং বাটন হোয়াটসঅ্যাপ',
            type: 'general',
            source: 'floating_action',
          });
        }}
        className="relative group bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-full sm:rounded-2xl p-3 sm:py-3 sm:px-4 flex items-center gap-2.5 shadow-xl hover:scale-[1.03] transition duration-300 border border-[#BAE6FD]"
        title={lang === 'en' ? 'WhatsApp Inquiry: 01712-864077' : 'হোয়াটসঅ্যাপ ইনকোয়ারি: ০১৭১২-৮৬৪০৭৭'}
        aria-label="WhatsApp Inquiry"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#0284C7] border-2 border-[#0284C7] rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#0284C7] border-2 border-[#0284C7] rounded-full"></span>
          <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
        </div>

        {/* Text visible on tablet/desktop */}
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wide leading-tight text-white">
            {lang === 'en' ? 'WhatsApp Inquiry' : 'হোয়াটসঅ্যাপ ইনকোয়ারি'}
          </span>
          <span className="text-[10px] text-emerald-100 font-mono font-medium">
            01712-864077
          </span>
        </div>

        {/* Mobile-only Hover / Tap Tooltip */}
        <span className="sm:hidden absolute right-14 bg-slate-900 text-white text-[11px] font-bold py-1.5 px-3 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
          {lang === 'en' ? 'WhatsApp: 01712-864077' : 'হোয়াটসঅ্যাপ: ০১৭১২-৮৬৪০৭৭'}
        </span>
      </a>
    </div>
  );
};
