import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { getDynamicSeasonRange } from '../utils/dateUtils';

interface PreRegModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialPackage?: string;
}

export const PreRegModal: React.FC<PreRegModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialPackage,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pkg, setPkg] = useState(`Hajj ${getDynamicSeasonRange(false)} (Pre-Register)`);
  const [pilgrims, setPilgrims] = useState('1');
  const [forwardWhatsApp, setForwardWhatsApp] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setPkg(initialPackage);
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (forwardWhatsApp) {
      const msg = `*Pre-registration / Consultation Request*\n*Name:* ${name}\n*Phone:* ${phone}\n*Package:* ${pkg}\n*Pilgrims:* ${pilgrims}\n*Date:* ${new Date().toLocaleDateString()}`;
      const url = `https://wa.me/8801712864077?text=${encodeURIComponent(msg)}`;
      setTimeout(() => {
        window.open(url, '_blank');
      }, 500);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-backdrop-fade">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#E5E7EB] animate-modal-slide-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-[#0369A1] border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-[#0369A1]" />
            </div>
            <h3 className="text-xl font-bold text-[#0369A1]">
              {lang === 'en' ? 'Pre-Registration Submitted!' : 'প্রাক-নিবন্ধন সফল হয়েছে!'}
            </h3>
            <p className="text-xs text-[#334155] leading-relaxed">
              {lang === 'en'
                ? `Alhamdulillah! We have logged your request for "${pkg}". Our senior Hajj coordinator will contact you at ${phone}.`
                : `আলহামদুলিল্লাহ! "${pkg}" এর জন্য আপনার আবেদন সংরক্ষিত হয়েছে। আমাদের সিনিয়র কর্মকর্তা দ্রুত আপনার সাথে যোগাযোগ করবেন।`}
            </p>
            <button
              onClick={handleReset}
              className="mt-4 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
            >
              {lang === 'en' ? 'Done' : 'সম্পন্ন'}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                {lang === 'en' ? 'Ministry Verified Process' : 'সরকারি নিয়ম মেনে প্রাক-নিবন্ধন'}
              </span>
              <h3 className="text-xl font-extrabold text-[#0369A1] mt-2">
                {lang === 'en' ? 'Pre-Register for Hajj & Umrah' : 'হজ ও ওমরাহ প্রাক-নিবন্ধন'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'en'
                  ? 'Limited caravan slots. Get priority package allocation and a free 1-on-1 advisor consultation.'
                  : 'সীমিত আসন সংখ্যা। এখনই তথ্য জমা দিয়ে অগ্রাধিকার ও ফ্রি পরামর্শ গ্রহণ করুন।'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'en' ? 'Full Name *' : 'আপনার পুরো নাম *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Al-Haj Abdullah Rahman' : 'আপনার নাম লিখুন'}
                  className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] outline-none bg-[#F8FAFC]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'en' ? 'Mobile / WhatsApp Number *' : 'মোবাইল / হোয়াটসঅ্যাপ নম্বর *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="017XX-XXXXXX"
                  className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] outline-none bg-[#F8FAFC]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Package Interested' : 'পছন্দের প্যাকেজ'}
                  </label>
                  <select
                    value={pkg}
                    onChange={(e) => setPkg(e.target.value)}
                    className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] outline-none bg-[#F8FAFC] font-medium cursor-pointer"
                  >
                    <option value={`Hajj ${getDynamicSeasonRange(false)} (Pre-Register)`}>
                      Hajj {getDynamicSeasonRange(false)} (Pre-Register)
                    </option>
                    <option value="ইকোনমি সাশ্রয়ী প্যাকেজ (৳ ৫,৫০,০০০)">ইকোনমি সাশ্রয়ী প্যাকেজ (৳ ৫,৫০,০০০)</option>
                    <option value="স্ট্যান্ডার্ড সাশ্রয়ী প্যাকেজ (৳ ৫,৮০,০০০)">স্ট্যান্ডার্ড সাশ্রয়ী প্যাকেজ (৳ ৫,৮০,০০০)</option>
                    <option value="নন শিফটিং স্থায়ী প্যাকেজ (৳ ৬,৯৫,০০০)">নন শিফটিং স্থায়ী প্যাকেজ (৳ ৬,৯৫,০০০)</option>
                    <option value="ফাইভ স্টার ভিআইপি প্যাকেজ (৳ ১৫,০০,০০০)">ফাইভ স্টার ভিআইপি প্যাকেজ (৳ ১৫,০০,০০০)</option>
                    <option value="August/September Umrah (৳ ১৬০,০০০)">August/September Umrah (৳ ১৬০,০০০)</option>
                    <option value="Umrah Express (৳ ১৬৫,০০০)">Umrah Express (৳ ১৬৫,০০০)</option>
                    <option value="Umrah Comfort Family (৳ ২১৫,০০০)">Umrah Comfort Family (৳ ২১৫,০০০)</option>
                    <option value="Umrah Royal 5★ (৳ ৩২৫,০০০)">Umrah Royal 5★ (৳ ৩২৫,০০০)</option>
                    <option value="Custom Family Package">Custom Family Package</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'No. of Persons' : 'যাত্রীর সংখ্যা'}
                  </label>
                  <select
                    value={pilgrims}
                    onChange={(e) => setPilgrims(e.target.value)}
                    className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] outline-none bg-[#F8FAFC] font-medium cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons (Couple/Partners)</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons (Family)</option>
                    <option value="5+">5+ Persons (Group)</option>
                  </select>
                </div>
              </div>

              {/* WhatsApp Toggle */}
              <label className="flex items-center gap-2 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={forwardWhatsApp}
                  onChange={(e) => setForwardWhatsApp(e.target.checked)}
                  className="w-4 h-4 text-[#0369A1] rounded cursor-pointer"
                />
                <span className="text-[11px] text-[#334155] flex items-center gap-1">
                  <MessageCircle className="w-3 h-3 text-[#0369A1]" />
                  {lang === 'en'
                    ? 'Also send copy directly to Al Mamun Hajj Kafela WhatsApp'
                    : 'একই সাথে আমাদের অফিশিয়াল হোয়াটসঅ্যাপে মেসেজ পাঠান'}
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold py-3.5 rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Submit Pre-Registration' : 'প্রাক-নিবন্ধন জমা দিন'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full text-xs text-slate-400 hover:text-slate-600 font-semibold text-center cursor-pointer"
              >
                {lang === 'en' ? 'Cancel / Maybe Later' : 'বাতিল / পরে করব'}
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
