import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, ArrowRight, CalendarDays } from 'lucide-react';
import { Language } from '../types';
import { toBengaliNumber } from '../utils/dateFormatter';
import { getDynamicSeasonYear } from '../utils/dateUtils';

interface HajjCountdownProps {
  lang: Language;
  onOpenPreReg?: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const HajjCountdown: React.FC<HajjCountdownProps> = ({ lang, onOpenPreReg }) => {
  // Target date: Expected Hajj season start (~May 16 of next year UTC)
  const nextSeasonYear = new Date().getFullYear() + 1;
  const targetDate = new Date(`${nextSeasonYear}-05-16T00:00:00Z`);

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isExpired: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number): string => {
    const padded = num < 10 ? `0${num}` : `${num}`;
    return lang === 'bn' ? toBengaliNumber(padded) : padded;
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs text-slate-800 h-full flex flex-col justify-between">
      {/* Top Header: Badge & Status */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
          <CalendarDays className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>
            {lang === 'en'
              ? `Hajj ${getDynamicSeasonYear(1, lang)} Pre-Registration`
              : `পবিত্র হজ্ব ${getDynamicSeasonYear(1, lang)} প্রি-রেজিস্ট্রেশন`}
          </span>
        </div>

        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
          {lang === 'en' ? 'Quota Active' : 'কোটা বরাদ্দ চলমান'}
        </span>
      </div>

      {/* Main Countdown Units */}
      <div className="py-2.5 flex items-center justify-between gap-2">
        <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
          {/* Days */}
          <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-2 text-center">
            <div className="text-xl sm:text-2xl font-black text-sky-900 font-mono tracking-tight leading-none">
              {formatDigit(timeLeft.days)}
            </div>
            <div className="text-[10px] text-sky-700 font-bold uppercase mt-1">
              {lang === 'en' ? 'Days' : 'দিন'}
            </div>
          </div>

          {/* Hours */}
          <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-2 text-center">
            <div className="text-xl sm:text-2xl font-black text-sky-900 font-mono tracking-tight leading-none">
              {formatDigit(timeLeft.hours)}
            </div>
            <div className="text-[10px] text-sky-700 font-bold uppercase mt-1">
              {lang === 'en' ? 'Hours' : 'ঘণ্টা'}
            </div>
          </div>

          {/* Minutes */}
          <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-2 text-center">
            <div className="text-xl sm:text-2xl font-black text-sky-900 font-mono tracking-tight leading-none">
              {formatDigit(timeLeft.minutes)}
            </div>
            <div className="text-[10px] text-sky-700 font-bold uppercase mt-1">
              {lang === 'en' ? 'Mins' : 'মিনিট'}
            </div>
          </div>

          {/* Seconds */}
          <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-2 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#0284C7] font-mono tracking-tight leading-none">
              {formatDigit(timeLeft.seconds)}
            </div>
            <div className="text-[10px] text-sky-700 font-bold uppercase mt-1">
              {lang === 'en' ? 'Secs' : 'সেকেন্ড'}
            </div>
          </div>
        </div>
      </div>

      {/* Footer / CTA Action */}
      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
        <span className="text-[11px] text-slate-500 truncate hidden sm:inline">
          {lang === 'en' ? 'Secure early flight & Moallim quota' : 'অগ্রিম ফ্লাইট ও মোয়াল্লিম কোটা নিশ্চিত করুন'}
        </span>

        {onOpenPreReg && (
          <button
            type="button"
            onClick={onOpenPreReg}
            className="w-full sm:w-auto bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-2xs cursor-pointer ml-auto"
          >
            <span>{lang === 'en' ? 'Pre-Register Now' : 'প্রাক-নিবন্ধন করুন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

