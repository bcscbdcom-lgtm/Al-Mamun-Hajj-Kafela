import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { WHATSAPP_TOAST_EVENT, WhatsAppToastPayload } from '../utils/whatsapp';

interface ToastState {
  isOpen: boolean;
  packageNameEn?: string;
  packageNameBn?: string;
  customMessageEn?: string;
  customMessageBn?: string;
}

export const WhatsAppToast: React.FC = () => {
  const { lang } = useLanguage();
  const [toast, setToast] = useState<ToastState>({ isOpen: false });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (payload?: WhatsAppToastPayload) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setToast({
      isOpen: true,
      packageNameEn: payload?.packageNameEn,
      packageNameBn: payload?.packageNameBn,
      customMessageEn: payload?.customMessageEn,
      customMessageBn: payload?.customMessageBn,
    });

    // Auto dismiss after 3.8 seconds
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, isOpen: false }));
    }, 3800);
  };

  const handleDismiss = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setToast((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    // 1. Listen for custom toast dispatch events
    const handleCustomEvent = (e: Event) => {
      const customEvt = e as CustomEvent<WhatsAppToastPayload>;
      showToast(customEvt.detail);
    };

    window.addEventListener(WHATSAPP_TOAST_EVENT, handleCustomEvent);

    // 2. Global capture-phase click listener for ANY WhatsApp link on the entire site
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || (target as HTMLAnchorElement).href || '';
      if (
        href.includes('wa.me') ||
        href.includes('api.whatsapp.com') ||
        href.includes('web.whatsapp.com')
      ) {
        // Extract label/title if available for enhanced context
        const title = target.getAttribute('title') || target.getAttribute('aria-label') || '';
        showToast({
          customMessageEn: title && !title.includes('WhatsApp') ? title : undefined,
        });
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });

    return () => {
      window.removeEventListener(WHATSAPP_TOAST_EVENT, handleCustomEvent);
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const hasSpecificPackage = Boolean(
    lang === 'en' ? toast.packageNameEn : toast.packageNameBn
  );
  const pkgName = lang === 'en' ? toast.packageNameEn : toast.packageNameBn;

  return (
    <AnimatePresence>
      {toast.isOpen && (
        <motion.div
          key="whatsapp-toast"
          initial={{ opacity: 0, y: -24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          className="fixed top-5 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto z-[100] max-w-md w-auto"
          role="status"
          aria-live="polite"
        >
          <div className="relative overflow-hidden bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl shadow-emerald-950/15 rounded-2xl p-3.5 sm:px-4 sm:py-3 text-slate-800 flex items-center gap-3">
            
            {/* WhatsApp Icon with active ripple indicator */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs ring-4 ring-emerald-50">
                <MessageCircle className="w-5 h-5 fill-white/20" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600 border-2 border-white"></span>
              </span>
            </div>

            {/* Message Body */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight leading-tight">
                  {lang === 'en'
                    ? 'Opening WhatsApp for your inquiry...'
                    : 'আপনার অনুসন্ধানের জন্য হোয়াটসঅ্যাপ খোলা হচ্ছে...'}
                </h4>
                <ExternalLink className="w-3 h-3 text-emerald-600 hidden sm:inline-block shrink-0 opacity-70" />
              </div>

              <p className="text-[11px] text-slate-500 mt-0.5 truncate leading-normal">
                {hasSpecificPackage
                  ? lang === 'en'
                    ? `Connecting for ${pkgName}`
                    : `${pkgName} এর তথ্যসহ সংযোগ করা হচ্ছে`
                  : lang === 'en'
                  ? 'Connecting to Al Mamun Hajj Kafela (+880 1712-864077)'
                  : 'আল মামুন হজ কাফেলা প্রতিনিধির সাথে সংযুক্ত হচ্ছে (+৮৮০ ১৭১২-৮৬৪০৭৭)'}
              </p>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer shrink-0"
              aria-label={lang === 'en' ? 'Dismiss' : 'বন্ধ করুন'}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Subtle Progress Bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3.8, ease: 'linear' }}
              style={{ originX: 0 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500/80"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
