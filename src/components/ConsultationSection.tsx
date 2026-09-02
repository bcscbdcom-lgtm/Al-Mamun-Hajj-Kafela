import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ConsultationSectionProps {
  lang: Language;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ lang }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Hajj 2026–2027 (Pre-Register)');
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
        <div className="lg:col-span-5 bg-[#0284C7] p-8 sm:p-10 text-white flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Direct Office Consultation' : 'সরাসরি অফিস পরামর্শ'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight text-white">
              {lang === 'en'
                ? 'Book a Free Consultation with an Advisor'
                : 'পরামর্শ বুক করুন অথবা অফিসে সরাসরি আসুন'}
            </h3>
            <p className="text-emerald-100 text-xs leading-relaxed mb-8">
              {lang === 'en'
                ? 'Speak directly with our senior mentors and package consultants. No commitment — just sincere clarity.'
                : 'কোনো বাধ্যবাধকতা ছাড়া সরাসরি আমাদের সিনিয়র উপদেষ্টাদের সাথে কথা বলুন এবং নির্ভুল পরিকল্পনা সাজান।'}
            </p>

            <div className="space-y-4 text-xs text-emerald-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0284C7] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  {lang === 'en'
                    ? 'Power House More, Oikko Bhaban, KCC Market (3rd Floor, Misti Mahal), Khulna.'
                    : 'পাওয়ার হাউজ মোড়, ঐক্য ভবন, কে সি সি মার্কেট, (মিষ্টি মহলের) ৩য় তলা, খুলনা।'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  <a href="tel:+8801712864077" className="hover:text-white transition font-mono">
                    01712-864077
                  </a>
                  <span>•</span>
                  <a href="tel:+8801676500395" className="hover:text-white transition font-mono">
                    01676-500395
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <a href="mailto:almamunhajjkhulna@gmail.com" className="hover:text-white transition">
                  almamunhajjkhulna@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <span>
                  {lang === 'en' ? '9:00 AM – 9:00 PM (Daily)' : 'সকাল ৯:০০টা – রাত ৯:০০টা (প্রতিদিন খোলা)'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Counter Strip */}
          <div className="grid grid-cols-3 gap-3 pt-8 border-t border-white/20 mt-8 text-center">
            <div>
              <div className="font-extrabold text-lg text-white font-mono">1200+</div>
              <div className="text-[10px] text-emerald-100">
                {lang === 'en' ? 'Pilgrims' : 'হাজী'}
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg text-white font-mono">11+</div>
              <div className="text-[10px] text-emerald-100">
                {lang === 'en' ? 'Years' : 'বছর'}
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg text-[#0284C7] font-mono">4.9★</div>
              <div className="text-[10px] text-emerald-100">
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
                  <option value="Hajj 2026–2027 (Pre-Register)">
                    {lang === 'en' ? 'Hajj 2026–2027 (Pre-Register)' : 'হজ ২০২৬–২০২৭ (প্রাক-নিবন্ধন)'}
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
