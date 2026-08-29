import React from 'react';
import { Compass, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#0369A1] pt-16 pb-12 border-t border-[#0284C7] text-xs text-sky-100/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & About & Socials */}
        <div>
          <a href="#home" className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center text-white text-sm shadow-xs border border-white/20">
              <Compass className="w-4 h-4 text-sky-200" />
            </div>
            <div className="text-lg font-black text-white tracking-tight">
              {lang === 'en' ? (
                <>AL MAMUN<span className="text-sky-200 ml-0.5">HAZZ KAFELA</span></>
              ) : (
                <>আল মামুন<span className="text-sky-200 ml-0.5">হজ্ব কাফেলা</span></>
              )}
            </div>
          </a>

          <p className="leading-relaxed mb-5 text-sky-100/80">
            {lang === 'en'
              ? 'Your trusted, ministry-verified partner for sacred Hajj and Umrah pilgrimages from Khulna to the Holy Cities of Makkah and Madinah.'
              : 'খুলনা থেকে পবিত্র মক্কা-মদিনায় আপনার বিশ্বস্ত, ধর্ম বিষয়ক মন্ত্রণালয় অনুমোদিত নির্ভরযোগ্য হজ ও ওমরাহ সহযোগী।'}
          </p>

          {/* Social Icons Strip */}
          <div className="flex items-center gap-2.5 text-white mt-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-[#0369A1] flex items-center justify-center transition duration-300 shadow-xs font-bold text-sm"
            >
              f
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              title="YouTube"
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-[#0369A1] flex items-center justify-center transition duration-300 shadow-xs font-bold text-sm"
            >
              ▶
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801712864077"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-[#0369A1] flex items-center justify-center transition duration-300 shadow-xs font-bold text-sm"
            >
              💬
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white text-sm mb-4">
            {lang === 'en' ? 'Quick Navigation' : 'প্রয়োজনীয় লিংকসমূহ'}
          </h4>
          <ul className="space-y-2.5 font-medium text-sky-100/80">
            <li>
              <a href="#about" className="hover:text-white transition">
                {lang === 'en' ? 'About Our Agency' : 'আমাদের পরিচিতি'}
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-white transition">
                {lang === 'en' ? 'Hajj Packages (2026–2027)' : 'হজ প্যাকেজসমূহ (২০২৬–২৭)'}
              </a>
            </li>
            <li>
              <a href="#umrah" className="hover:text-white transition">
                {lang === 'en' ? 'Umrah Departure Schedule' : 'ওমরাহ কাফেলার সময়সূচি'}
              </a>
            </li>
            <li>
              <a href="#guides" className="hover:text-white transition">
                {lang === 'en' ? 'Our Islamic Scholars' : 'বিজ্ঞ আলেম মেন্টরবৃন্দ'}
              </a>
            </li>
            <li>
              <a href="#tools" className="hover:text-white transition">
                {lang === 'en' ? 'Budget Calculator & Checklist' : 'খরচ হিসাব ও চেকলিস্ট'}
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white transition">
                {lang === 'en' ? 'Pilgrim Guidance Blog' : 'হজ-ওমরাহ নির্দেশিকা ব্লগ'}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h4 className="font-bold text-white text-sm mb-4">
            {lang === 'en' ? 'Khulna Main Office' : 'খুলনা প্রধান কার্যালয়'}
          </h4>
          <div className="space-y-3 text-sky-100/80">
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-sky-200 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">
                {lang === 'en'
                  ? 'Power House More, Oikko Bhaban, KCC Market (3rd Floor, Misti Mahal), Khulna.'
                  : 'পাওয়ার হাউজ মোড়, ঐক্য ভবন, কে সি সি মার্কেট, (মিষ্টি মহলের) ৩য় তলা, খুলনা।'}
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-sky-200 flex-shrink-0" />
              <span className="font-mono">01712-864077, 01676-500395</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-sky-200 flex-shrink-0" />
              <span>almamunhazzkhulna@gmail.com</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-sky-200 flex-shrink-0" />
              <span>{lang === 'en' ? 'Open: 9:00 AM – 9:00 PM (Daily)' : 'খোলা: সকাল ৯:০০ – রাত ৯:০০'}</span>
            </p>
          </div>
        </div>

        {/* Column 4: Certifications */}
        <div>
          <h4 className="font-bold text-white text-sm mb-4">
            {lang === 'en' ? 'Leadership & Accreditations' : 'পরিচালনা ও স্বীকৃতি'}
          </h4>
          <ul className="space-y-2 text-[11px] leading-relaxed text-sky-100/80 font-medium">
            <li className="flex items-start gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-200 mt-0.5 flex-shrink-0" />
              <span>
                {lang === 'en'
                  ? 'Shariah Consultant: Alhaj Hazrat Maulana Mufti Amanullah'
                  : 'শরিয়াহ কনসালটেন্ট: আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ'}
              </span>
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
              <span>{lang === 'en' ? 'Ministry of Religious Affairs, GoB' : 'ধর্ম বিষয়ক মন্ত্রণালয়, বাংলাদেশ'}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
              <span>{lang === 'en' ? 'HAAB Member' : 'হাব (HAAB) সদস্য'}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
              <span>{lang === 'en' ? 'ATAB Member' : 'আটাব (ATAB) সদস্য'}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
              <span>{lang === 'en' ? 'Ministry of Hajj & Umrah (KSA)' : 'সৌদি হজ ও ওমরাহ মন্ত্রণালয়'}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-sky-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-sky-200/80">
        <div>
          © {new Date().getFullYear()} আল মামুন হজ্ব কাফেলা (AL MAMUN HAZZ KAFELA, KHULNA). All rights reserved.
        </div>
        <div className="flex items-center gap-6 font-semibold text-sky-200">
          <a href="#about" className="hover:text-white hover:underline">
            {lang === 'en' ? 'Terms & Conditions' : 'শর্তাবলী'}
          </a>
          <a href="#about" className="hover:text-white hover:underline">
            {lang === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
          </a>
          <a href="#home" className="hover:text-white hover:underline">
            {lang === 'en' ? 'Back to Top ↑' : 'উপরে যান ↑'}
          </a>
        </div>
      </div>
    </footer>
  );
};
