import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Building2, 
  ArrowRight, 
  Quote,
  ShieldCheck,
  MessageSquareQuote
} from 'lucide-react';
import { Language } from '../types';

interface ReviewItem {
  id: string;
  name: string;
  locationBn: string;
  locationEn: string;
  badgeBn: string;
  badgeEn: string;
  rating: number;
  phoneMasked: string;
  quoteBn: string;
  quoteEn: string;
  serviceFocusBn: string;
  serviceFocusEn: string;
}

const writtenReviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'আল-হাজ্ব মো: রফিকুল ইসলাম',
    locationBn: 'সোনাডাঙ্গা, খুলনা',
    locationEn: 'Sonadanga, Khulna',
    badgeBn: 'হজ্ব ২০২৪',
    badgeEn: 'Hajj 2024',
    rating: 5,
    phoneMasked: '01712-***077',
    quoteBn: 'মক্কা ও মদিনায় হোটেলের অবস্থান ছিল খুবই কাছে, বয়োজ্যেষ্ঠদের জন্য আসা-যাওয়া সহজ ছিল। প্রতিদিনের সুস্বাদু দেশীয় খাবার এবং সার্বক্ষণিক আলেমদের আন্তরিক দিকনির্দেশনায় হজ সফরটি পরম প্রশান্তিময় হয়েছে।',
    quoteEn: 'Hotels in Makkah and Madinah were very close to Haram, making movement easy for seniors. Daily delicious Bengali meals and constant guidance from scholars made our Hajj truly serene.',
    serviceFocusBn: 'কাছের হোটেল ও আলেম গাইডেন্স',
    serviceFocusEn: 'Close Hotels & Scholar Guidance',
  },
  {
    id: 'rev-2',
    name: 'ইঞ্জি: অনন্ত আলম',
    locationBn: 'খালিশপুর, খুলনা',
    locationEn: 'Khalishpur, Khulna',
    badgeBn: 'উমরাহ ২০২৫',
    badgeEn: 'Umrah 2025',
    rating: 5,
    phoneMasked: '01914-***321',
    quoteBn: 'বৃদ্ধ বাবা-মাকে নিয়ে ওমরাহ পালন করেছিলাম। কাফেলার পক্ষ থেকে আন্তরিক হুইলচেয়ার সহায়তা এবং তাওয়াফ-সাঈতে সার্বক্ষণিক মুফতী সাহেবের উপস্থিতি আমাদের পরিবারকে অত্যন্ত নিশ্চিন্ত রেখেছিল।',
    quoteEn: 'Performed Umrah with my elderly parents. Dedicated wheelchair assistance and continuous scholar guidance during Tawaf and Sa’i gave our family complete peace of mind.',
    serviceFocusBn: 'প্রবীণদের সেবা ও হুইলচেয়ার সাপোর্ট',
    serviceFocusEn: 'Elderly Care & Wheelchair Support',
  },
  {
    id: 'rev-3',
    name: 'ডা: ফারহানা ইয়াসমিন',
    locationBn: 'বয়রা, খুলনা',
    locationEn: 'Boyra, Khulna',
    badgeBn: 'হজ্ব ২০২৪',
    badgeEn: 'Hajj 2024',
    rating: 5,
    phoneMasked: '01819-***854',
    quoteBn: 'মিনা ও আরাফাতে তাঁবু ব্যবস্থাপনা এবং স্বাস্থ্যসম্মত খাবার পরিবেশন সত্যিই প্রশংসনীয় ছিল। প্রাক-নিবন্ধন থেকে শুরু করে শেষ পর্যন্ত যা প্রতিশ্রুতি দেওয়া হয়েছিল, তার শতভাগ পেয়েছি।',
    quoteEn: 'Tent management in Mina & Arafat along with hygienic food was commendable. Every commitment made during pre-registration was fulfilled 100% with total transparency.',
    serviceFocusBn: 'মিনা তাঁবু ও পরিচ্ছন্ন খাবার',
    serviceFocusEn: 'Mina Tents & Hygienic Food',
  },
  {
    id: 'rev-4',
    name: 'আল-হাজ্ব শামসুদ্দীন আহমেদ',
    locationBn: 'দৌলতপুর, খুলনা',
    locationEn: 'Daulatpur, Khulna',
    badgeBn: 'হজ্ব ২০২৩',
    badgeEn: 'Hajj 2023',
    rating: 5,
    phoneMasked: '01711-***642',
    quoteBn: 'কোনো লুকানো খরচ বা বিভ্রান্তি ছিল না। কাফেলার মোয়াল্লিম ও টিম লিডাররা সার্বক্ষণিক সাথে ছিলেন। হঠাৎ শারীরিক অসুস্থতার সময়ও তারা অত্যন্ত দ্রুত চিকিৎসকের ব্যবস্থা করেছিলেন।',
    quoteEn: 'Zero hidden charges or confusion. Caravan moallims and coordinators stayed with us 24/7. They arranged prompt medical attention when I had a sudden illness.',
    serviceFocusBn: '২৪/৭ কাফেলা মোয়াল্লিম সেবা',
    serviceFocusEn: '24/7 Caravan Moallim Support',
  },
  {
    id: 'rev-5',
    name: 'মাওলানা হাবিবুর রহমান',
    locationBn: 'যশোর সদর',
    locationEn: 'Jashore Sadar',
    badgeBn: 'উমরাহ ২০২৫',
    badgeEn: 'Umrah 2025',
    rating: 5,
    phoneMasked: '01925-***190',
    quoteBn: 'ঐতিহাসিক স্থানসমূহ জিয়ারতের সময় প্রতিটি ঘটনার বিস্তারিত ব্যাখ্যা এবং প্রতিটি আমলের সহীহ মাসআলা সরাসরি অভিজ্ঞ আলেমদের কাছ থেকে জানার সুযোগ পেয়েছি। পরিবার নিয়ে যাওয়ার শ্রেষ্ঠ কাফেলা।',
    quoteEn: 'Learned authentic rituals and in-depth historical context directly from veteran Islamic scholars during Ziyarah tours. The best caravan for family pilgrimage.',
    serviceFocusBn: 'সহীহ মাসআলা ও ঐতিহাসিক জিয়ারত',
    serviceFocusEn: 'Authentic Mas’ala & Guided Ziyarah',
  },
  {
    id: 'rev-6',
    name: 'মো: আখতারুজ্জামান',
    locationBn: 'রূপসা, খুলনা',
    locationEn: 'Rupsha, Khulna',
    badgeBn: 'হজ্ব ২০২৪',
    badgeEn: 'Hajj 2024',
    rating: 5,
    phoneMasked: '01730-***518',
    quoteBn: 'চুক্তিনামা অনুযায়ী হারাম শরীফের সন্নিকটে আরামদায়ক রুম পেয়েছি। খুলনার স্থানীয় হাজীদের নিয়ে অত্যন্ত সুশৃঙ্খল ও আন্তরিক পরিবেশ ছিল, যা প্রতিটি মুহূর্তে সাহস জুগিয়েছে।',
    quoteEn: 'Received comfortable rooms near Haram strictly as agreed. A well-disciplined, warm caravan atmosphere with fellow Khulna pilgrims made every step comforting.',
    serviceFocusBn: 'হারামের সন্নিকটে আবাসন',
    serviceFocusEn: 'Close Haram Accommodation',
  }
];

interface PilgrimTestimonialsProps {
  lang: Language;
  onOpenPreReg?: (packageName?: string) => void;
}

export const PilgrimVideoTestimonialSection: React.FC<PilgrimTestimonialsProps> = ({
  lang,
  onOpenPreReg,
}) => {
  return (
    <section id="gallery" className="py-12 sm:py-16 bg-slate-50/60 border-t border-b border-slate-200 relative overflow-hidden">
      <span id="testimonials" className="absolute -top-24 left-0 pointer-events-none opacity-0" aria-hidden="true" />
      <span id="video-testimonials" className="absolute -top-24 left-0 pointer-events-none opacity-0" aria-hidden="true" />

      {/* Subtle background motif */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200/80 px-3.5 py-1 rounded-full text-xs font-bold text-sky-800 shadow-2xs mb-2.5">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>
              {lang === 'en'
                ? 'Words of Trust & Genuine Satisfaction'
                : 'আস্থা ও সন্তুষ্টির বাস্তব কথা'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5">
            {lang === 'en'
              ? 'Real Experiences & Feedback from Respected Pilgrims'
              : 'সম্মানিত হাজীদের বাস্তব অভিজ্ঞতা ও অভিমত'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            {lang === 'en'
              ? 'Reflections from respected pilgrims from Khulna and surrounding areas who completed their holy journey with our caravan.'
              : 'খুলনা ও আশেপাশের বিভিন্ন এলাকা থেকে আমাদের কাফেলার সাথে পবিত্র সফর সম্পন্নকারী সম্মানিত হাজীদের অনুভূতি।'}
          </p>
        </div>

        {/* 2. MODERN 3-COLUMN COMPACT REVIEW CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {writtenReviewsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Card Header: 5 Stars + Year Badge */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="bg-sky-50 text-[#0284C7] text-xs font-bold px-2.5 py-0.5 rounded-full border border-sky-100">
                    {lang === 'en' ? item.badgeEn : item.badgeBn}
                  </span>
                </div>

                {/* Card Body: Realistic 2-3 line quote */}
                <div className="relative mb-4">
                  <Quote className="w-5 h-5 text-sky-200 mb-1.5 inline-block" />
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic">
                    "{lang === 'en' ? item.quoteEn : item.quoteBn}"
                  </p>
                </div>
              </div>

              {/* Card Footer: Pilgrim Details */}
              <div className="pt-3.5 border-t border-slate-100 flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{lang === 'en' ? item.locationEn : item.locationBn}</span>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-slate-400 text-[10px]">
                    <Phone className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                    <span>{item.phoneMasked}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. LOCAL VERIFICATION CTA BANNER AT BOTTOM */}
        <div className="mt-8 sm:mt-10 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5 sm:mt-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                {lang === 'en'
                  ? 'Want to speak directly with past pilgrims from your area?'
                  : 'আপনার এলাকার সাবেক হাজীদের সাথে সরাসরি কথা বলতে চান?'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                {lang === 'en'
                  ? 'Visit our Khulna Power House More office to verify direct references from past caravan leaders and local pilgrims.'
                  : 'আমাদের খুলনা পাওয়ার হাউজ মোড় অফিসে এসে সাবেক কাফেলা লিডার ও হাজীদের সরাসরি রেফারেন্স যাচাই করুন।'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
            <a
              href="tel:+8801711826077"
              className="w-full sm:w-auto bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-2xs transition flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Direct Reference Inquiry' : 'সরাসরি রেফারেন্স যাচাই'}</span>
            </a>

            {onOpenPreReg && (
              <button
                type="button"
                onClick={() => onOpenPreReg('Local Reference Consultation')}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-3.5 py-2.5 rounded-xl transition flex items-center justify-center gap-1 cursor-pointer text-center"
              >
                <span>{lang === 'en' ? 'Office Consultation' : 'অফিস পরামর্শ'}</span>
                <ArrowRight className="w-3 h-3 text-slate-500" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export const PilgrimTestimonialSection = PilgrimVideoTestimonialSection;
