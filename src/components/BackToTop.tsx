import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface BackToTopProps {
  lang: Language;
}

export const BackToTop: React.FC<BackToTopProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px (past hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-5 sm:bottom-24 sm:right-6 z-40 p-3 rounded-full bg-[#0369A1] hover:bg-[#0284C7] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 border border-sky-400/30 group flex items-center justify-center cursor-pointer"
      aria-label={lang === 'en' ? 'Back to top' : 'উপরে যান'}
      title={lang === 'en' ? 'Back to Top' : 'উপরে যান'}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="sr-only">{lang === 'en' ? 'Back to Top' : 'উপরে যান'}</span>
    </button>
  );
};
