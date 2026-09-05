import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/inquiryTracker';

interface MapAndCtaSectionProps {
  lang: Language;
}

export const MapAndCtaSection: React.FC<MapAndCtaSectionProps> = ({ lang }) => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Callout Box */}
        <div className="lg:col-span-6 bg-gradient-to-r from-sky-800 to-sky-950 text-white border border-sky-700/50 shadow-xl rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-sky-900/80 border border-sky-500/30 text-sky-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
              <span>{lang === 'en' ? 'Direct Senior Advisor Access' : 'সরাসরি উপদেষ্টা সেবা'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight text-white">
              {lang === 'en'
                ? 'Ready to begin your sacred journey?'
                : 'আপনার পবিত্র সফর শুরু করতে প্রস্তুত?'}
            </h2>
            <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed max-w-md">
              {lang === 'en'
                ? 'Speak with an Al Mamun Hajj Kafela advisor today for honest guidance on Hajj pre-registration and upcoming Umrah slots.'
                : 'আজই আল মামুন হজ্ব কাফেলার অভিজ্ঞ পরিচালকদের সাথে কথা বলে জেনে নিন আপনার জন্য সবচেয়ে উপযোগী হজ বা ওমরাহ প্যাকেজ।'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 relative z-10">
            <a
              href="tel:+8801712864077"
              className="bg-white hover:bg-slate-100 text-sky-900 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-md transition flex items-center gap-2 font-mono"
            >
              <Phone className="w-4 h-4 text-sky-800" />
              <span>Call 01712-864077</span>
            </a>

            <a
              href={getGeneralWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({
                  id: 'map_cta_inquiry',
                  nameEn: 'Map & Contact Banner Inquiry',
                  nameBn: 'ম্যাপ ও যোগাযোগ ব্যানার অনুসন্ধান',
                  type: 'general',
                  source: 'map_and_cta_section',
                });
              }}
              className="bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/30 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>{lang === 'en' ? 'Chat on WhatsApp' : 'হোয়াটসঅ্যাপে বার্তা দিন'}</span>
            </a>
          </div>
        </div>

        {/* Right Google Map Box */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-2xs flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
              <h3 className="text-base font-bold text-[#0369A1] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0284C7]" />
                <span>{lang === 'en' ? 'Find Us in Khulna (Power House More)' : 'মানচিত্রে আমাদের খুলনা কার্যালয়ের অবস্থান'}</span>
              </h3>
              <a
                href="https://maps.google.com/maps?q=Power+House+More,+Khulna,+Bangladesh"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#0369A1] hover:text-[#0284C7] hover:underline flex items-center gap-1"
              >
                <span>{lang === 'en' ? 'Open in Maps' : 'ম্যাপে দেখুন'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Power House More, Oikko Bhaban, KCC Market (3rd Floor, Misti Mahal), Khulna.'
                : 'পাওয়ার হাউজ মোড়, ঐক্য ভবন, কে সি সি মার্কেট, (মিষ্টি মহলের) ৩য় তলা, খুলনা।'}
            </p>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-inner relative">
            <iframe
              src="https://maps.google.com/maps?q=Power+House+More,+Khulna,+Bangladesh&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Mamun Hajj Kafela Khulna Office Location"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};
