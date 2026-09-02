import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { getDynamicSeasonRange } from '../utils/dateUtils';

interface ConsultationSectionProps {
  lang: Language;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ lang }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(`Hajj ${getDynamicSeasonRange(false)} (Pre-Register)`);
  const [message, setMessage] = useState('');
  const [isHighlighting, setIsHighlighting] = useState(false);

  const triggerFieldHighlight = () => {
    setIsHighlighting(true);
    setTimeout(() => {
      setIsHighlighting(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerFieldHighlight();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFullName('');
    setPhone('');
    setMessage('');
    setIsHighlighting(false);
  };

  const fieldAnimClass = isHighlighting
    ? 'field-highlight-pulse border-[#0284C7] ring-2 ring-[#0284C7]/50'
    : 'border-[#E5E7EB]';

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-2xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Info Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-sky-900 via-sky-950 to-slate-900 p-8 sm:p-10 text-white flex flex-col justify-between border-r border-sky-800/40">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-200 uppercase tracking-wider bg-sky-900/80 px-3 py-1 rounded-full mb-4 border border-sky-500/30">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              {lang === 'en' ? 'Direct Office Consultation' : 'সরাসরি অফিস পরামর্শ'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight text-white">
              {lang === 'en'
                ? 'Book a Free Consultation with an Advisor'
                : 'পরামর্শ বুক করুন অথবা অফিসে সরাসরি আসুন'}
            </h3>
            <p className="text-sky-100/90 text-xs sm:text-sm leading-relaxed mb-8">
              {lang === 'en'
                ? 'Speak directly with our senior mentors and package consultants. No commitment — just sincere clarity.'
                : 'কোনো বাধ্যবাধকতা ছাড়া সরাসরি আমাদের সিনিয়র উপদেষ্টাদের সাথে কথা বলুন এবং নির্ভুল পরিকল্পনা সাজান।'}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-sky-100/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-300 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  {lang === 'en'
                    ? 'Power House More, Oikko Bhaban, KCC Market (3rd Floor, Misti Mahal), Khulna.'
                    : 'পাওয়ার হাউজ মোড়, ঐক্য ভবন, কে সি সি মার্কেট, (মিষ্টি মহলের) ৩য় তলা, খুলনা।'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-300 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  <a href="tel:+8801712864077" className="hover:text-white transition font-mono font-bold">
                    01712-864077
                  </a>
                  <span>•</span>
                  <a href="tel:+8801676500395" className="hover:text-white transition font-mono font-bold">
                    01676-500395
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-300 flex-shrink-0" />
                <a href="mailto:almamunhajjkhulna@gmail.com" className="hover:text-white transition font-medium">
                  almamunhajjkhulna@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-300 flex-shrink-0" />
                <span className="font-medium">
                  {lang === 'en' ? '9:00 AM – 9:00 PM (Daily)' : 'সকাল ৯:০০টা – রাত ৯:০০টা (প্রতিদিন খোলা)'}
                </span>
              </div>

              {/* Social Media Links */}
              <div className="pt-3 flex items-center gap-3">
                <span className="text-xs font-semibold text-sky-200">
                  {lang === 'en' ? 'Socials:' : 'সোশ্যাল মিডিয়া:'}
                </span>
                <a
                  href="https://www.facebook.com/share/1KGTjWnqHP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
                  title={lang === 'en' ? 'Our Facebook Page' : 'আমাদের ফেসবুক পেজ'}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/shorts/UZ8r8rda3bI?feature=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  title={lang === 'en' ? 'Our YouTube Channel' : 'আমাদের ইউটিউব চ্যানেল'}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/8801712864077?text=আসসালামু%20আলাইকুম,%20আল%20মামুন%20হজ্ব%20কাফেলা%20সম্পর্কে%20জানতে%20চাই"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title={lang === 'en' ? 'WhatsApp Inquiry' : 'আমাদের হোয়াটসঅ্যাপে মেসেজ দিন'}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.201-1.101c.001.001 0 0 0 0zm11.238-6.096c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Counter Strip */}
          <div className="grid grid-cols-3 gap-3 pt-8 border-t border-sky-800/60 mt-8 text-center">
            <div>
              <div className="font-extrabold text-lg text-white font-mono">1200+</div>
              <div className="text-[10px] sm:text-xs text-sky-200">
                {lang === 'en' ? 'Pilgrims' : 'হাজী'}
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg text-white font-mono">11+</div>
              <div className="text-[10px] sm:text-xs text-sky-200">
                {lang === 'en' ? 'Years' : 'বছর'}
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg text-amber-300 font-mono">4.9★</div>
              <div className="text-[10px] sm:text-xs text-sky-200">
                {lang === 'en' ? 'Rating' : 'রেটিং'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:col-span-7 p-8 sm:p-10">
          {formSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#F0F9FF] text-[#0369A1] rounded-2xl border border-[#BAE6FD] flex items-center justify-center text-3xl shadow-xs">
                <CheckCircle2 className="w-10 h-10 text-[#0369A1]" />
              </div>
              <h4 className="text-xl font-bold text-[#0369A1]">
                {lang === 'en' ? 'Jazakallahu Khairan! Request Received' : 'জাযাকাল্লাহু খাইরান! আপনার অনুরোধ পেয়েছি'}
              </h4>
              <p className="text-xs text-[#334155] max-w-md leading-relaxed">
                {lang === 'en'
                  ? `Thank you, ${fullName || 'Brother/Sister'}. Our dedicated Hajj advisor will call you at ${phone} shortly to assist with your journey details.`
                  : `ধন্যবাদ, ${fullName || 'সম্মানিত ভাই/বোন'}। আমাদের সিনিয়র হজ পরামর্শক খুব দ্রুত আপনার ${phone} নম্বরে কল করে বিস্তারিত জানাবেন।`}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition cursor-pointer"
              >
                {lang === 'en' ? 'Submit Another Request' : 'নতুন অনুরোধ পাঠান'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  {lang === 'en' ? 'Full Name *' : 'আপনার পুরো নাম *'}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={lang === 'en' ? 'Al-Haj Abdullah Rahman' : 'আপনার নাম লিখুন'}
                  className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7] outline-none transition-all duration-300 ${fieldAnimClass}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  {lang === 'en' ? 'Phone Number (Bangladesh) *' : 'মোবাইল নম্বর (বাংলাদেশ) *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="017XX-XXXXXX"
                  className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7] outline-none transition-all duration-300 ${fieldAnimClass}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  {lang === 'en' ? 'I am interested in' : 'যে বিষয়ে আপনি আগ্রহী'}
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7] outline-none transition-all duration-300 font-medium cursor-pointer ${fieldAnimClass}`}
                >
                  <option value={`Hajj ${getDynamicSeasonRange(false)} (Pre-Register)`}>
                    {lang === 'en' ? `Hajj ${getDynamicSeasonRange(false)} (Pre-Register)` : `হজ ${getDynamicSeasonRange(true)} (প্রাক-নিবন্ধন)`}
                  </option>
                  <option value="Weekly Umrah Group Package">
                    {lang === 'en' ? 'Weekly Umrah Group Package' : 'সাপ্তাহিক ওমরাহ প্যাকেজ'}
                  </option>
                  <option value="VIP / Family Custom Package">
                    {lang === 'en' ? 'VIP / Family Custom Package' : 'ভিআইপি / ফ্যামিলি কাস্টম প্যাকেজ'}
                  </option>
                  <option value="Pre-Departure Hajj Training Workshop">
                    {lang === 'en' ? 'Pre-Departure Hajj Training Workshop' : 'হজ প্রশিক্ষণ কর্মশালা'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  {lang === 'en' ? 'Your Message / Specific Requirements' : 'মন্তব্য বা বিশেষ জিজ্ঞাসা'}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'e.g. 2 persons for standard package, wheelchair support needed...'
                      : 'যেমন: ২ জনের জন্য স্ট্যান্ডার্ড প্যাকেজ, বয়স্কদের হুইলচেয়ার সাপোর্ট ইত্যাদি...'
                  }
                  className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7] outline-none transition-all duration-300 ${fieldAnimClass}`}
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={triggerFieldHighlight}
                id="sendMessageBtn"
                className="w-full bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.99] text-white text-xs font-bold py-3.5 rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Send Message & Callback Request' : 'বার্তা পাঠান ও কলব্যাক অনুরোধ করুন'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0369A1]" />
                <span>
                  {lang === 'en'
                    ? 'We respect your privacy. No spam — just a helpful, courteous call.'
                    : 'আপনার তথ্যের সর্বোচ্চ গোপনীয়তা রক্ষা করা হবে।'}
                </span>
              </div>
            </form>
          )}
        </div>

      </div>

    </section>
  );
};
