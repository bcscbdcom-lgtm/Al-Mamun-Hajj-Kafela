import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Compass, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { toBengaliNumber } from '../utils/dateFormatter';

interface MakkahClockWidgetProps {
  lang: Language;
  isDark?: boolean;
}

export const MakkahClockWidget: React.FC<MakkahClockWidgetProps> = ({ lang, isDark = false }) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time in Makkah (Asia/Riyadh, UTC+3)
  const makkahTimeString = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Riyadh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Extract parts
  const [timeOnly, period] = makkahTimeString.split(' ');

  // Get current hour in Makkah for prayer estimation
  const makkahHour = parseInt(
    time.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Riyadh',
      hour: 'numeric',
      hour12: false,
    }),
    10
  );

  // Prayer approximation in Makkah
  let currentPrayerEn = 'Isha';
  let currentPrayerBn = 'এশার সময়';
  let nextPrayerEn = 'Fajr (04:55 AM)';
  let nextPrayerBn = 'ফজর (০৪:৫৫ ভোর)';

  if (makkahHour >= 5 && makkahHour < 12) {
    currentPrayerEn = 'Fajr / Ishraq';
    currentPrayerBn = 'ফজর / ইশরাক';
    nextPrayerEn = 'Dhuhr (12:28 PM)';
    nextPrayerBn = 'যোহর (১২:২৮ দুপুর)';
  } else if (makkahHour >= 12 && makkahHour < 15) {
    currentPrayerEn = 'Dhuhr';
    currentPrayerBn = 'যোহরের সময়';
    nextPrayerEn = 'Asr (03:50 PM)';
    nextPrayerBn = 'আসর (০৩:৫০ বিকেল)';
  } else if (makkahHour >= 15 && makkahHour < 18) {
    currentPrayerEn = 'Asr';
    currentPrayerBn = 'আসরের সময়';
    nextPrayerEn = 'Maghrib (06:40 PM)';
    nextPrayerBn = 'মাগরিব (০৬:৪০ সন্ধ্যা)';
  } else if (makkahHour >= 18 && makkahHour < 20) {
    currentPrayerEn = 'Maghrib';
    currentPrayerBn = 'মাগরিবের সময়';
    nextPrayerEn = 'Isha (08:10 PM)';
    nextPrayerBn = 'এশা (০৮:১০ রাত)';
  }

  const isNight = makkahHour < 6 || makkahHour >= 19;

  return (
    <div
      id="makkah-live-clock"
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl shadow-xs transition ${
        isDark
          ? 'bg-slate-950/60 hover:bg-slate-900/80 border border-white/20 text-white backdrop-blur-md'
          : 'bg-white hover:bg-[#F0F9FF] border border-[#BAE6FD] text-slate-800'
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
        </span>
        {isNight ? (
          <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-sky-300' : 'text-[#0284C7]'}`} />
        ) : (
          <Sun className={`w-3.5 h-3.5 ${isDark ? 'text-amber-300' : 'text-[#0284C7]'}`} />
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 ${
            isDark ? 'text-sky-300' : 'text-[#0369A1]'
          }`}>
            <span>🕋</span>
            {lang === 'en' ? 'Makkah Time' : 'মক্কার স্থানীয় সময়'}
          </span>
          <span className={isDark ? 'text-white/30 text-[10px]' : 'text-slate-300 text-[10px]'}>•</span>
          <span className={`text-[10px] font-semibold ${isDark ? 'text-slate-200' : 'text-[#0284C7]'}`}>
            {lang === 'en' ? `Next: ${nextPrayerEn}` : `পরবর্তী: ${nextPrayerBn}`}
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`font-mono text-sm sm:text-base font-black tracking-wider ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {lang === 'bn' ? toBengaliNumber(timeOnly) : timeOnly}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${
            isDark ? 'text-sky-300' : 'text-[#0369A1]'
          }`}>
            {period}
          </span>
          <span className={`text-[9px] ml-1 font-mono ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>(UTC+3)</span>
        </div>
      </div>
    </div>
  );
};
