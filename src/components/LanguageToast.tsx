import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToast: React.FC = () => {
  const { lang, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const hasSeenToast = localStorage.getItem('almamun_lang_toast_seen');
      if (!hasSeenToast) {
        // Show subtle toast 1.5s after initial page render for first-time visitors
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access error fallback
    }
  }, []);

  const handleSelectLanguage = (selectedLang: 'bn' | 'en') => {
    setLanguage(selectedLang);
    try {
      localStorage.setItem('almamun_lang_toast_seen', 'true');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem('almamun_lang_toast_seen', 'true');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-20 left-4 sm:left-6 z-50 max-w-xs sm:max-w-sm w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md border border-sky-100 shadow-2xl shadow-sky-900/15 rounded-2xl p-4 text-slate-800"
          role="dialog"
          aria-label="Language Preference"
        >
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  ভাষা পছন্দ করুন / Language
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  কোন ভাষায় দেখতে চান? / Choose your preferred language.
                </p>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition cursor-pointer shrink-0"
              title="Dismiss"
              aria-label="Dismiss language preference"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <button
              onClick={() => handleSelectLanguage('bn')}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                lang === 'bn'
                  ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-sky-50 border-slate-200 hover:border-sky-200'
              }`}
            >
              {lang === 'bn' && <Check className="w-3.5 h-3.5 text-white" />}
              <span>বাংলা (Bengali)</span>
            </button>

            <button
              onClick={() => handleSelectLanguage('en')}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                lang === 'en'
                  ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-sky-50 border-slate-200 hover:border-sky-200'
              }`}
            >
              {lang === 'en' && <Check className="w-3.5 h-3.5 text-white" />}
              <span>English</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
