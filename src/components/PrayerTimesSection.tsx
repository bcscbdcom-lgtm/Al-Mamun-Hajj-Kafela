import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar, Compass, Volume2, RefreshCw, Sun, Moon, Sunrise, Sunset, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { toBengaliNumber } from '../utils/dateFormatter';

interface PrayerTimesSectionProps {
  lang: Language;
}

interface TimingData {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
}

interface CityPrayerInfo {
  cityEn: string;
  cityBn: string;
  countryEn: string;
  countryBn: string;
  timings: TimingData;
  gregorianDate: string;
  hijriDateEn: string;
  hijriDateBn: string;
  timezone: string;
}

// Fallback prayer timings (Dhaka & Makkah)
const FALLBACK_DHAKA: CityPrayerInfo = {
  cityEn: 'Dhaka',
  cityBn: 'ঢাকা',
  countryEn: 'Bangladesh',
  countryBn: 'বাংলাদেশ',
  timings: {
    Fajr: '04:32',
    Sunrise: '05:48',
    Dhuhr: '12:04',
    Asr: '15:28',
    Maghrib: '18:18',
    Isha: '19:32',
    Imsak: '04:22',
    Midnight: '23:58',
  },
  gregorianDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
  hijriDateEn: '1448 AH',
  hijriDateBn: '১৪৪৮ হিজরী',
  timezone: 'Asia/Dhaka',
};

const FALLBACK_MAKKAH: CityPrayerInfo = {
  cityEn: 'Makkah',
  cityBn: 'মক্কা আল-মুকাররমা',
  countryEn: 'Saudi Arabia',
  countryBn: 'সৌদি আরব',
  timings: {
    Fajr: '04:52',
    Sunrise: '06:08',
    Dhuhr: '12:22',
    Asr: '15:46',
    Maghrib: '18:35',
    Isha: '20:05',
    Imsak: '04:42',
    Midnight: '00:15',
  },
  gregorianDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
  hijriDateEn: '1448 AH',
  hijriDateBn: '১৪৪৮ হিজরী',
  timezone: 'Asia/Riyadh',
};

export const PrayerTimesSection: React.FC<PrayerTimesSectionProps> = ({ lang }) => {
  const [activeCity, setActiveCity] = useState<'dhaka' | 'makkah'>('dhaka');
  const [dhakaData, setDhakaData] = useState<CityPrayerInfo>(FALLBACK_DHAKA);
  const [makkahData, setMakkahData] = useState<CityPrayerInfo>(FALLBACK_MAKKAH);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchPrayerTimes = async () => {
    setLoading(true);
    try {
      // Fetch Dhaka Timings
      const dhakaRes = await fetch(
        'https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=1'
      );
      if (dhakaRes.ok) {
        const json = await dhakaRes.json();
        if (json.data && json.data.timings) {
          const t = json.data.timings;
          const h = json.data.date.hijri;
          const g = json.data.date.gregorian;
          setDhakaData({
            cityEn: 'Dhaka',
            cityBn: 'ঢাকা',
            countryEn: 'Bangladesh',
            countryBn: 'বাংলাদেশ',
            timings: {
              Fajr: t.Fajr?.slice(0, 5) || FALLBACK_DHAKA.timings.Fajr,
              Sunrise: t.Sunrise?.slice(0, 5) || FALLBACK_DHAKA.timings.Sunrise,
              Dhuhr: t.Dhuhr?.slice(0, 5) || FALLBACK_DHAKA.timings.Dhuhr,
              Asr: t.Asr?.slice(0, 5) || FALLBACK_DHAKA.timings.Asr,
              Maghrib: t.Maghrib?.slice(0, 5) || FALLBACK_DHAKA.timings.Maghrib,
              Isha: t.Isha?.slice(0, 5) || FALLBACK_DHAKA.timings.Isha,
              Imsak: t.Imsak?.slice(0, 5) || FALLBACK_DHAKA.timings.Imsak,
              Midnight: t.Midnight?.slice(0, 5) || FALLBACK_DHAKA.timings.Midnight,
            },
            gregorianDate: `${g.day} ${g.month.en} ${g.year}`,
            hijriDateEn: `${h.day} ${h.month.en} ${h.year} AH`,
            hijriDateBn: `${toBengaliNumber(h.day)} ${h.month.ar || h.month.en} ${toBengaliNumber(h.year)} হিজরী`,
            timezone: 'Asia/Dhaka',
          });
        }
      }

      // Fetch Makkah Timings
      const makkahRes = await fetch(
        'https://api.aladhan.com/v1/timingsByCity?city=Makkah&country=Saudi%20Arabia&method=4'
      );
      if (makkahRes.ok) {
        const json = await makkahRes.json();
        if (json.data && json.data.timings) {
          const t = json.data.timings;
          const h = json.data.date.hijri;
          const g = json.data.date.gregorian;
          setMakkahData({
            cityEn: 'Makkah Al-Mukarramah',
            cityBn: 'মক্কা আল-মুকাররমা',
            countryEn: 'Saudi Arabia',
            countryBn: 'সৌদি আরব',
            timings: {
              Fajr: t.Fajr?.slice(0, 5) || FALLBACK_MAKKAH.timings.Fajr,
              Sunrise: t.Sunrise?.slice(0, 5) || FALLBACK_MAKKAH.timings.Sunrise,
              Dhuhr: t.Dhuhr?.slice(0, 5) || FALLBACK_MAKKAH.timings.Dhuhr,
              Asr: t.Asr?.slice(0, 5) || FALLBACK_MAKKAH.timings.Asr,
              Maghrib: t.Maghrib?.slice(0, 5) || FALLBACK_MAKKAH.timings.Maghrib,
              Isha: t.Isha?.slice(0, 5) || FALLBACK_MAKKAH.timings.Isha,
              Imsak: t.Imsak?.slice(0, 5) || FALLBACK_MAKKAH.timings.Imsak,
              Midnight: t.Midnight?.slice(0, 5) || FALLBACK_MAKKAH.timings.Midnight,
            },
            gregorianDate: `${g.day} ${g.month.en} ${g.year}`,
            hijriDateEn: `${h.day} ${h.month.en} ${h.year} AH`,
            hijriDateBn: `${toBengaliNumber(h.day)} ${h.month.ar || h.month.en} ${toBengaliNumber(h.year)} হিজরী`,
            timezone: 'Asia/Riyadh',
          });
        }
      }
      setLastUpdated(new Date());
    } catch {
      // Keep fallbacks on network error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  const currentInfo = activeCity === 'dhaka' ? dhakaData : makkahData;

  // Format 24h string to 12h AM/PM
  const format12h = (time24: string) => {
    if (!time24) return '';
    const [hStr, mStr] = time24.split(':');
    let h = parseInt(hStr, 10);
    const m = mStr || '00';
    const ampmEn = h >= 12 ? 'PM' : 'AM';
    const ampmBn = h >= 12 ? 'অপরাহ্ন' : 'পূর্বাহ্ন';
    h = h % 12 || 12;
    const formattedNum = lang === 'en' ? `${h}:${m} ${ampmEn}` : `${toBengaliNumber(`${h}:${m}`)} ${ampmBn}`;
    return formattedNum;
  };

  // Determine Next Prayer
  const getNextPrayer = (timings: TimingData) => {
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();

    const prayers = [
      { key: 'Fajr', nameEn: 'Fajr', nameBn: 'ফজর', time: timings.Fajr },
      { key: 'Sunrise', nameEn: 'Sunrise', nameBn: 'সূর্যোদয়', time: timings.Sunrise },
      { key: 'Dhuhr', nameEn: 'Dhuhr', nameBn: 'জোহর', time: timings.Dhuhr },
      { key: 'Asr', nameEn: 'Asr', nameBn: 'আসর', time: timings.Asr },
      { key: 'Maghrib', nameEn: 'Maghrib', nameBn: 'মাগরিব', time: timings.Maghrib },
      { key: 'Isha', nameEn: 'Isha', nameBn: 'ইশা', time: timings.Isha },
    ];

    for (const p of prayers) {
      const [h, m] = p.time.split(':').map(Number);
      const pMins = h * 60 + m;
      if (pMins > currentMins) {
        const diffMins = pMins - currentMins;
        const hours = Math.floor(diffMins / 60);
        const mins = diffMins % 60;
        let diffStr = '';
        if (hours > 0) {
          diffStr += lang === 'en' ? `${hours}h ` : `${toBengaliNumber(hours)}ঘণ্টা `;
        }
        diffStr += lang === 'en' ? `${mins}m` : `${toBengaliNumber(mins)}মিনিট`;
        return { prayer: p, countdown: diffStr };
      }
    }
    // If past Isha, next is tomorrow's Fajr
    return {
      prayer: prayers[0],
      countdown: lang === 'en' ? 'Tomorrow Fajr' : 'আগামীকালের ফজর',
    };
  };

  const nextPrayerInfo = getNextPrayer(currentInfo.timings);

  const prayerItems = [
    { key: 'Fajr', nameEn: 'Fajr', nameBn: 'ফজর', icon: Sunrise, time: currentInfo.timings.Fajr, isMain: true },
    { key: 'Sunrise', nameEn: 'Sunrise', nameBn: 'সূর্যোদয়', icon: Sun, time: currentInfo.timings.Sunrise, isMain: false },
    { key: 'Dhuhr', nameEn: 'Dhuhr', nameBn: 'জোহর', icon: Sun, time: currentInfo.timings.Dhuhr, isMain: true },
    { key: 'Asr', nameEn: 'Asr', nameBn: 'আসর', icon: Sun, time: currentInfo.timings.Asr, isMain: true },
    { key: 'Maghrib', nameEn: 'Maghrib (Iftar)', nameBn: 'মাগরিব (ইফতার)', icon: Sunset, time: currentInfo.timings.Maghrib, isMain: true },
    { key: 'Isha', nameEn: 'Isha', nameBn: 'ইশা', icon: Moon, time: currentInfo.timings.Isha, isMain: true },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-y border-sky-100 text-[#334155] relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0369A1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-extrabold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Daily Salah Schedule' : 'দৈনন্দিন নামাজের সময়সূচি'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0369A1] tracking-tight">
              {lang === 'en' ? 'Prayer Times (Dhaka & Makkah)' : 'নামাজের সঠিক সময়সূচি (ঢাকা ও মক্কা)'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-medium">
              {lang === 'en'
                ? 'Accurate daily Islamic prayer schedules for Dhaka and Makkah Al-Mukarramah to guide pilgrims and daily worship.'
                : 'হজ ও ওমরাহ যাত্রী এবং সাধারণ মুসল্লিদের জন্য ঢাকা ও পবিত্র মক্কা নগরীর দৈনন্দিন সালাতের সঠিক সময়সূচি।'}
            </p>
          </div>

          {/* City Toggle Buttons & Refresh */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center">
              <button
                onClick={() => setActiveCity('dhaka')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCity === 'dhaka'
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0369A1]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Dhaka' : 'ঢাকা'}</span>
              </button>
              <button
                onClick={() => setActiveCity('makkah')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCity === 'makkah'
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0369A1]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Makkah' : 'মক্কা'}</span>
              </button>
            </div>

            <button
              onClick={fetchPrayerTimes}
              disabled={loading}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#0369A1] hover:border-[#BAE6FD] transition cursor-pointer shadow-2xs"
              title={lang === 'en' ? 'Refresh Prayer Times' : 'সময়সূচি রিফ্রেশ করুন'}
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#0284C7]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Info Banner: Current Hijri / Gregorian Date & Next Prayer */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] shadow-xs mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-11 h-11 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0369A1] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {lang === 'en' ? currentInfo.cityEn : currentInfo.cityBn} ({lang === 'en' ? currentInfo.countryEn : currentInfo.countryBn})
              </div>
              <div className="text-sm font-extrabold text-[#0369A1]">
                {lang === 'en' ? currentInfo.hijriDateEn : currentInfo.hijriDateBn}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                📅 {currentInfo.gregorianDate}
              </div>
            </div>
          </div>

          {/* Next Prayer Highlight Card */}
          <div className="bg-gradient-to-r from-[#0369A1] to-[#0284C7] text-white p-3.5 px-5 rounded-2xl shadow-xs w-full md:w-auto flex items-center justify-between md:justify-end gap-4 border border-sky-400/30">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-200 animate-pulse" />
              <div>
                <span className="text-[11px] font-medium text-sky-100 uppercase tracking-wider block">
                  {lang === 'en' ? 'Next Prayer' : 'পরবর্তী ওয়াক্ত'}
                </span>
                <span className="text-sm font-extrabold">
                  {lang === 'en' ? nextPrayerInfo.prayer.nameEn : nextPrayerInfo.prayer.nameBn} ({format12h(nextPrayerInfo.prayer.time)})
                </span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold border border-white/30 text-white shrink-0">
              {nextPrayerInfo.countdown}
            </div>
          </div>
        </div>

        {/* 6 Core Prayer Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {prayerItems.map((item) => {
            const isNext = nextPrayerInfo.prayer.key === item.key;
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className={`rounded-2xl p-4 border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isNext
                    ? 'bg-gradient-to-b from-[#F0F9FF] to-white border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-md scale-[1.02]'
                    : 'bg-white border-[#E5E7EB] hover:border-[#BAE6FD] hover:shadow-2xs'
                }`}
              >
                {isNext && (
                  <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7]"></span>
                  </span>
                )}

                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isNext ? 'bg-[#0284C7] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    {item.key}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {lang === 'en' ? item.nameEn : item.nameBn}
                  </h4>
                  <div className="text-base sm:text-lg font-black text-[#0369A1] font-mono mt-1">
                    {format12h(item.time)}
                  </div>
                </div>

                {isNext && (
                  <div className="mt-2 text-[10px] font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-full text-center border border-[#BAE6FD]">
                    {lang === 'en' ? 'Upcoming' : 'পরবর্তী'}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sahri & Iftar Extras Banner */}
        <div className="mt-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-3 px-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#0369A1]">
              <Moon className="w-3.5 h-3.5 text-indigo-600" />
              <span>
                {lang === 'en' ? 'Suhoor (Imsak) End:' : 'সাহরীর শেষ সময়:'}{' '}
                <strong className="font-mono text-slate-800">{format12h(currentInfo.timings.Imsak)}</strong>
              </span>
            </span>

            <span className="inline-flex items-center gap-1.5 font-semibold text-[#0369A1]">
              <Sunset className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {lang === 'en' ? 'Iftar Time:' : 'ইফতারের সময়:'}{' '}
                <strong className="font-mono text-slate-800">{format12h(currentInfo.timings.Maghrib)}</strong>
              </span>
            </span>
          </div>

          <div className="text-[11px] text-slate-400 italic">
            {lang === 'en'
              ? '*Timings automatically retrieved via Aladhan Islamic API'
              : '*সময়সূচি আল-আযান ইসলামিক এপিআই থেকে সংগৃহীত'}
          </div>
        </div>
      </div>
    </section>
  );
};
