import React from 'react';
import { Award, CheckCircle2, Plane, Compass, Building, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface TrustBadgesProps {
  lang: Language;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ lang }) => {
  const badges = [
    {
      icon: Award,
      textEn: 'HAAB Member',
      textBn: 'হাব (HAAB) সদস্য',
    },
    {
      icon: CheckCircle2,
      textEn: 'Ministry of Religious Affairs (GoB)',
      textBn: 'ধর্ম বিষয়ক মন্ত্রণালয় অনুমোদিত',
    },
    {
      icon: Plane,
      textEn: 'ATAB Member',
      textBn: 'আটাব (ATAB) সদস্য',
    },
    {
      icon: ShieldCheck,
      textEn: 'Rawaf Mina Approved',
      textBn: 'রাওয়াফ মিনা অনুমোদিত',
    },
    {
      icon: Building,
      textEn: 'Ministry of Hajj & Umrah (KSA)',
      textBn: 'সৌদি হজ ও ওমরাহ মন্ত্রণালয়',
    },
    {
      icon: Compass,
      textEn: 'Al Bait Guests (ضيوف البيت)',
      textBn: 'আল বাইত গেস্টস পার্টনার',
    },
  ];

  return (
    <section className="py-7 border-b border-[#BAE6FD]/60 bg-white shadow-2xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-[11px] font-bold tracking-widest text-[#0369A1] uppercase block mb-4">
          {lang === 'en' ? 'TRUSTED & CERTIFIED BY AUTHORITIES' : 'অনুমোদিত ও স্বীকৃত পার্টনারসমূহ'}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[#334155] text-xs font-semibold">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-[#F0F9FF] border border-[#BAE6FD] px-3.5 py-1.5 rounded-full hover:bg-[#E0F2FE] hover:border-[#0284C7] transition-colors shadow-2xs text-[#334155]"
              >
                <Icon className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                <span>{lang === 'en' ? b.textEn : b.textBn}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
