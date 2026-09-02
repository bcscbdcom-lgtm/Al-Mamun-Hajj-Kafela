import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  X,
  MessageCircle,
  PhoneCall,
  Sparkles,
  BookOpen,
  Building2,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Language, FAQItem } from '../types';
import { faqsData } from '../data/faqs';

interface FaqSectionProps {
  lang: Language;
  onOpenPreReg?: (topic?: string) => void;
  onOpenPrintModal?: (tab?: string, faqs?: FAQItem[]) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, onOpenPreReg }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'registration' | 'packages' | 'guidelines'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(['faq-prereg']));

  // Filter tabs config
  const tabs = useMemo(
    () => [
      {
        id: 'all',
        labelBn: 'সব প্রশ্ন',
        labelEn: 'All Questions',
        icon: Sparkles
      },
      {
        id: 'registration',
        labelBn: 'প্রাক-নিবন্ধন ও বুকিং',
        labelEn: 'Pre-Registration & Booking',
        icon: BookOpen
      },
      {
        id: 'packages',
        labelBn: 'প্যাকেজ ও আবাসন',
        labelEn: 'Packages & Hotels',
        icon: Building2
      },
      {
        id: 'guidelines',
        labelBn: 'কাফেলার নীতিমালা ও প্রস্তুতি',
        labelEn: 'Guidelines & Preparation',
        icon: ShieldCheck
      }
    ],
    []
  );

  // Filter FAQs cleanly by tab and search query
  const filteredFaqs = useMemo(() => {
    return faqsData.filter((item) => {
      // Category filter
      const matchesCategory = activeTab === 'all' || item.category === activeTab;

      // Search filter
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const questionText = (lang === 'en' ? item.questionEn : item.questionBn).toLowerCase();
      const answerText = (lang === 'en' ? item.answerEn : item.answerBn).toLowerCase();

      return questionText.includes(q) || answerText.includes(q);
    });
  }, [activeTab, searchQuery, lang]);

  // Toggle single item open/close
  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0284C7]" />
            {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0369A1] tracking-tight">
            {lang === 'en'
              ? 'Frequently Asked Questions About Hajj & Umrah'
              : 'হজ্ব ও ওমরাহ সংক্রান্ত সচরাচর জিজ্ঞাসিত প্রশ্নাবলী'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Clear answers regarding our services, registration process, and essential travel guidelines.'
              : 'কাফেলার সেবা, নিবন্ধন প্রক্রিয়া ও প্রয়োজনীয় তথ্যের সঠিক উত্তর।'}
          </p>
        </div>

        {/* Clean Search Input */}
        <div className="relative max-w-xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Search questions (e.g., Office, Visa, Meals, Hotels)...'
                  : 'প্রশ্ন খুঁজুন (যেমন: অফিস, ভিসা, খাবার, প্রাক-নিবন্ধন)...'
              }
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 4 Clean Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-[#0284C7] text-white shadow-sm shadow-sky-700/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0284C7]'}`} />
                <span>{lang === 'en' ? tab.labelEn : tab.labelBn}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);
              const question = lang === 'en' ? faq.questionEn : faq.questionBn;
              const answer = lang === 'en' ? faq.answerEn : faq.answerBn;

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#0284C7] shadow-sm ring-1 ring-[#0284C7]/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center text-xs font-bold font-mono flex-shrink-0">
                        {index + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                        {question}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {faq.isPopular && (
                        <span className="hidden sm:inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          {lang === 'en' ? 'Popular' : 'জনপ্রিয়'}
                        </span>
                      )}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                          isOpen ? 'bg-[#0284C7] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                          <div>{answer}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
              <p className="text-sm font-semibold">
                {lang === 'en'
                  ? 'No matching questions found for your search.'
                  : 'আপনার কাঙ্ক্ষিত অনুসন্ধানের সাথে মিল থাকা কোনো প্রশ্ন পাওয়া যায়নি।'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
                className="mt-3 text-xs font-bold text-[#0284C7] hover:underline cursor-pointer"
              >
                {lang === 'en' ? 'Show all questions' : 'সকল প্রশ্ন দেখুন'}
              </button>
            </div>
          )}
        </div>

        {/* Elegant Footer Contact Banner */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-sky-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <MessageCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {lang === 'en'
                  ? 'Have a specific question or urgent Fiqh inquiry?'
                  : 'আপনার কোনো বিশেষ প্রশ্ন বা জরুরি মাসআলা জানার আছে?'}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {lang === 'en'
                  ? 'Speak directly with Mufti Amanullah on WhatsApp for authentic guidance.'
                  : 'মুফতী আমানুল্লাহ সাহেবের সাথে সরাসরি হোয়াটসঅ্যাপে কথা বলুন।'}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801712864077?text=আসসালামু%20আলাইকুম,%20হজ/ওমরাহ%20মাসআলা%20সংক্রান্ত%20একটি%20প্রশ্ন%20ছিল।"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition flex items-center gap-2 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>01712-864077</span>
          </a>
        </div>

      </div>
    </section>
  );
};
