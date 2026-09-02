import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { getDynamicSeasonRange, getDynamicShortSeasonRange } from '../utils/dateUtils';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#0369A1] pt-16 pb-12 border-t border-[#0284C7] text-xs text-sky-100/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & About & Socials */}
        <div>
          <a href="#home" className="flex items-center gap-4 mb-4 group">
            <div className="bg-white p-2 rounded-xl shadow-sm inline-flex items-center justify-center shrink-0">
              <BrandLogo className="h-12 w-auto object-contain block" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">
                {lang === 'en' ? 'AL MAMUN HAJJ KAFELA' : 'আল মামুন হজ্ব কাফেলা'}
              </h3>
              <p className="text-xs text-sky-200 mt-0.5">
                {lang === 'en' ? 'Power House More, Khulna' : 'পাওয়ার হাউজ মোড়, খুলনা'}
              </p>
            </div>
          </a>

          <p className="leading-relaxed mb-5 text-sky-100/80">
            {lang === 'en'
              ? 'Your trusted, ministry-verified partner for sacred Hajj and Umrah pilgrimages from Khulna to the Holy Cities of Makkah and Madinah.'
              : 'খুলনা থেকে পবিত্র মক্কা-মদিনায় আপনার বিশ্বস্ত, ধর্ম বিষয়ক মন্ত্রণালয় অনুমোদিত নির্ভরযোগ্য হজ ও ওমরাহ সহযোগী।'}
          </p>

          {/* Social Icons Strip */}
          <div className="flex items-center gap-3 text-white mt-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1KGTjWnqHP/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              title={lang === 'en' ? 'Our Facebook Page' : 'আমাদের ফেসবুক পেজ'}
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xs font-bold text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/shorts/UZ8r8rda3bI?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              title={lang === 'en' ? 'Our YouTube Channel' : 'আমাদের ইউটিউব চ্যানেল'}
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xs font-bold text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801712864077?text=আসসালামু%20আলাইকুম,%20আল%20মামুন%20হজ্ব%20কাফেলা%20সম্পর্কে%20জানতে%20চাই"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title={lang === 'en' ? 'WhatsApp Inquiry' : 'আমাদের হোয়াটসঅ্যাপে মেসেজ দিন'}
              className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xs font-bold text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.201-1.101c.001.001 0 0 0 0zm11.238-6.096c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              </svg>
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
              <a href="#hajj-packages" className="hover:text-white transition">
                {lang === 'en'
                  ? `Hajj Packages (${getDynamicSeasonRange('en')})`
                  : `হজ প্যাকেজসমূহ (${getDynamicShortSeasonRange('bn')})`}
              </a>
            </li>
            <li>
              <a href="#umrah-packages" className="hover:text-white transition">
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
              <span>almamunhajjkhulna@gmail.com</span>
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
          © {new Date().getFullYear()} আল মামুন হজ্ব কাফেলা (AL MAMUN HAJJ KAFELA, KHULNA). All rights reserved.
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
